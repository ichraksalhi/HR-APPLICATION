const express = require("express");
const router = express.Router();
const Test = require("../../models/skillsmodel/test");
const auth = require('../../middleware/auth');
/*const verifyToken = require("../middleware/AuthCheck");*/

var app=express()

app.use(express.json());


const test = require("../../controllers/test");

//create test
router.post("/create",auth, /*verifyToken*/test.createTest);

router.post("/", auth,/*verifyToken*/ test.allTest);

//afficher all tests
router.route('/getAlltests',auth).get((req, res) => {
    Test.find()
        .then(test => res.json(test))
        .catch(err => console.log(err));
});

/// archivé put attribut archived=true
router.route('/archive/:id').put((req, res) => {  
  let query = {
    _id: req.params.id
  };                                                      
  Test.findOneAndUpdate( query,
    {
      $set: { archived: true }
    },
    { new: true })
    .then(() => res.json('test archived.'))  
    .catch(err => res.status(400).json('Error: ' + err));    
});



//put aattribut archive=false
router.route('/unarchive/:id').put((req, res) => {  
  let query = {
    _id: req.params.id
  };                                                      
  Test.findOneAndUpdate( query,
    {
      $set: { archived: false }
    },
    { new: true })
    .then(() => res.json('test unarchived.'))  
    .catch(err => res.status(400).json('Error: ' + err));    
});


//afficher list archiver 
router.get('/archive',
async(req,res)=> {
    try{
        const test= await Test.find();
        return res.json(test.filter(Test=>Test.archived == true));
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);
//afficher list non archiver
router.get('/nonarchive',
async(req,res)=> {
    try{
        const test= await Test.find();
        return res.json(test.filter(Test=>Test.archived == false));
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);
// router.route('/unarchive/:id').put((req, res) => {  
//     let query = {
//       _id: req.params.id
//     };                                                      
//    Test.findOneAndUpdate( query,
//       {
//         $set: { archived: false }
//       },
//       { new: true })
//       .then(() => res.json('Test una.'))  
//       .catch(err => res.status(400).json('Error: ' + err));    
//   });





  router.delete('/:id',/* passport.authenticate('jwt-admin', { session: false }),*/ (req, res) => {
    Test.findByIdAndDelete({ _id: req.params.id })
        .then(() => res.json({ message: 'Successfully removed question' }))
        .catch(err => console.log(err));
});


module.exports = router;
