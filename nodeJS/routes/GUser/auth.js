const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User')
const {check, validationResult} = require ('express-validator/check');
const secret="mysecrettoken";
const jwt = require('jsonwebtoken');
const bcrypt=require('bcryptjs');

//@route GET api/auth
//@desc Tout route
//@access Public
//rend detail user connecté
async function find(req,res){
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
router.get('/',auth,find);

//@route GET api/auth
//@desc Authenticate User & get user
//@access Public
router.post('/', [
    check ('email','Please include a valid Email').isEmail(),
    check ('password','Password is required').exists()
],

async(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {email,password} = req.body;
    try{

    // See if user exists by Email or by password
        let user= await User.findOne({email});
        const isMatch= await bcrypt.compare(password,user.password);
        if(!user || !isMatch){
            return res.status(400).json({errors: [{msg: 'Invalid Credentials'}]});
        } 
  
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
    
    }catch(err){
        console.log(err.message);
        res.status(500).send('Server error!');
    }
});
module.exports = router;