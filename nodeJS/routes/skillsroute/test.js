const express = require("express");
const router = express.Router();
const Test = require("../../models/skillsmodel/test");
const auth = require('../../middleware/auth');
/*const verifyToken = require("../middleware/AuthCheck");*/

var app=express()

app.use(express.json());


const test = require("../../controllers/test");

router.post("/create",auth, /*verifyToken*/test.createTest);

router.post("/", auth,/*verifyToken*/ test.allTest);

router.route('/getAlltests',auth).get((req, res) => {
    Test.find()
        .then(test => res.json(test))
        .catch(err => console.log(err));
});

router.route('/archive/:id').put((req, res) => {                                                     
    Test.findOneAndUpdate( { _id: req.params.id },
      {$set: { archived: true }},
      { new: true })
      .then(() => res.json({message :'Test arrr.'}))  
      .catch(err => res.status(400).json('Error: ' + err));    
  });


router.route('/unarchive/:id').put((req, res) => {  
    let query = {
      _id: req.params.id
    };                                                      
   Test.findOneAndUpdate( query,
      {
        $set: { archived: false }
      },
      { new: true })
      .then(() => res.json('Test una.'))  
      .catch(err => res.status(400).json('Error: ' + err));    
  });
  router.delete('/:id',/* passport.authenticate('jwt-admin', { session: false }),*/ (req, res) => {
    Test.findByIdAndDelete({ _id: req.params.id })
        .then(() => res.json({ message: 'Successfully removed question' }))
        .catch(err => console.log(err));
});


module.exports = router;
