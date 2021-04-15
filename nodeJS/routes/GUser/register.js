const express = require('express');
const router = express.Router();
const {check, validationResult} = require ('express-validator');
const secret="mysecrettoken";
const jwt = require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const gravatar=require('gravatar');
const auth = require('../../middleware/auth');
const User = require('../../models/User')

//@route GET api/users
//@desc Register user candidate
//@access Public
router.post('/', [
    check ('firstname','First Name is required').not().isEmpty(),
    check ('lastname','Last Name is required').not().isEmpty(),
    check ('email','Please enter a valid Email').isEmail(),
    check ('password','Please enter a password with 6 or morer caracters').isLength({min:6})
],
async(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    //récupérer
    const {firstname,lastname,email,password} = req.body;
    try{

    // See if user exists
        let user= await User.findOne({email});
        if(user){
            return res.status(400).json({errors: [{msg: 'User already exists'}]});
        }

    //Get users gravatar
    const avatar= gravatar.url(email,{
        s: '200',
        r: 'pg',
        d: 'mm'
    });
    const company = "xxx";
    const role = 0;
    user = new User({firstname,lastname,email,avatar,password,company,role});
    
    //encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password,salt);

    //save user
    await user.save();
    
    //return jsonwebtoken
    const playload= {
        user: {
            id: user.id
        }
    }
    jwt.sign(
        playload, 
        secret,
        { expiresIn: 360000},
        (err, token)=> {
            if (err) throw err;
            res.json({token});
        });
    
    //res.send('User registed');

    }catch(err){
        console.log(err.message);
        res.status(500).send('Server error!');
    }

    //console.log(req.body);
});
module.exports = router;
