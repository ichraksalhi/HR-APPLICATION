const router = require('express').Router();
let reclamation = require('../../models/reclamation');
const User = require('../../models/User');
const auth = require('../../middleware/auth');
const secret="mysecrettoken";
const {check, validationResult}= require('express-validator');





router.route('/').get((req, res) => {
    reclamation.find()
    .then(reclamation => res.json(reclamation))
    .catch(err => res.status(400).json('Error: ' + err));
});

//add reclamation  b tken w auth 
router.post(
  '/addd',
  [
      auth,  [
        
        check('object', 'Location  JOB is required').not().isEmpty(),
        check('description', 'Description  JOB is required').not().isEmpty(),
        check('comment', 'Text is  JOB required').not().isEmpty(),
        check('type', 'Study Level  is required').not().isEmpty(),
        check('etat', 'JOB Experience  is required').not().isEmpty(),
       
        //check('requirements', 'requirements is required').not().isEmpty(),

    ]

  ],
async(req,res)=>{
  const errors= validationResult(req);
  if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()});
  }
  try{
  //récupérer le user connecté à partir un token
  const user = await User.findById(req.user.id).select('-password');
  //test if user is HR
  if (user.role != 1){
      return res.status(401).json({msg: 'User not autorized'});
  }
  //créer un nouveau job
  const newReclamation= new reclamation({
    lastname: req.body.lastname,
    object: req.body.object,
      description: req.body.description,
      comment: req.body.comment,
      type: req.body.type,
      etat: req.body.etat,
      archived: req.body.archived,
     
  }); 
  //save
  reclamation= await newReclamation.save();
  res.send(reclamation);

}
  catch(err){
      console.error(err.message);
      res.status(500).send('Server Error');
  }    
});



router.route('/add').post((req, res) => {
  const lastname = req.body.lastname;
  const object = req.body.object;
  const description = req.body.description;
  const comment = req.body.comment;
  const type = req.body.type;
  const etat = req.body.etat; 
  const archived = req.body.archived; 
 

  const newReclamation = new reclamation({
    lastname, 
    object,
    description,
    comment,
    type,
    etat,
    archived: false
  });

  newReclamation.save()
  .then(() => res.json('Reclamation added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    reclamation.findById(req.params.id)
      .then(reclamation => res.json(reclamation))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {                                                       
    reclamation.findByIdAndDelete(req.params.id)
      .then(() => res.json('reclmation deleted.'))  
      .catch(err => res.status(400).json('Error: ' + err));    
  });
 
  router.route('/update/:id').post((req, res) => {
    reclamation.findById(req.params.id)
      .then(reclamation => {
        reclamation.user = req.body.user;
        reclamation.object = req.body.object;
        reclamation.description = req.body.description;
        reclamation.comment = req.body.comment;
        reclamation.type = req.body.type;
        reclamation.etat = req.body.etat;
        reclamation.save()
          .then(() => res.json('reclamation updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.put('/archive/:id', (req, res) => {
    let query = {
      _id: req.params.id
    };
    reclamation.findOneAndUpdate(
      query,
      {
        $set: { archived: true }
      },
      { new: true }
    ).then(reclamation => res.json(reclamation))
    .catch(err => res.status(400).json(err));
  });

 /* router.put('/unarchive/:id', (req, res) => {
    let query = {
      _id: req.params.id
    };
    reclamation.findOneAndUpdate(
      query,
      {
        $set: { archived: false }
      },
      { new: true }
    )      .then(reclamation => res.json(reclamation))
    .catch(err => res.status(400).json(err));
  }); */
  
  router.route('/unarchive/:id').put((req, res) => {  
    let query = {
      _id: req.params.id
    };                                                      
    reclamation.findOneAndUpdate( query,
      {
        $set: { archived: false }
      },
      { new: true })
      .then(() => res.json('reclmation una.'))  
      .catch(err => res.status(400).json('Error: ' + err));    
  });
 
    
  router.route('/archive/:id').put((req, res) => {  
    let query = {
      _id: req.params.id
    };                                                      
    reclamation.findOneAndUpdate( query,
      {
        $set: { archived: true }
      },
      { new: true })
      .then(() => res.json('reclmation arrr.'))  
      .catch(err => res.status(400).json('Error: ' + err));    
  });
 
  
  

 






 


module.exports = router;
