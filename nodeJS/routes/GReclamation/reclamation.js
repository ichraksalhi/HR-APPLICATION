const router = require('express').Router();
let reclamation = require('../../models/reclamation');
const User = require('../../models/User');
const auth = require('../../middleware/auth');
const secret="mysecrettoken";
const {check, validationResult}= require('express-validator');

//ici 

//
const { sendSMS, sendSMSUsingCopilot, sendGroupSMS,sendwhats,call } = require('../GReclamation/twilio')



//sms 
var accountSid = 'ACf9f1d802daf05290766269a8c0a2d41f'; // Your Account SID from www.twilio.com/console
var authToken = '5e8da9b0e4d732641395930277376e4f';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
const { data } = require('jquery');

const generateRandomCode = (() => {
  const USABLE_CHARACTERS = "abcdefghijklmnopqrstuvwxyz0123456789".split("");

  return length => {
    return new Array(length).fill(null).map(() => {
      return USABLE_CHARACTERS[Math.floor(Math.random() * USABLE_CHARACTERS.length)];
    }).join("");
  }
})();  

// endi ici









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
       //check('archived', 'JOB Experience  is required').not().isEmpty(),
       
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
  //créer un nouveau rec
  const newReclamation= new reclamation({
    lastname: req.body.lastname,
    object: req.body.object,
      description: req.body.description,
      comment: req.body.comment,
      type: req.body.type,
     etat: req.body.etat,
    archived: false,
     
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


router.route('/',auth).get((req, res) => {
  reclamation.find()
  .then(reclamation => res.json(reclamation))
  .catch(err => res.status(400).json('Error: ' + err));

});

//affichage avec filtre 

router.get('/nontreated',
async(req,res)=> {
    try{
        const reclamations= await reclamation.find();
        return res.json(reclamations.filter(reclamation=>reclamation.etat === 'pending'));
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);

router.get('/treated',
async(req,res)=> {
    try{
        const reclamations= await reclamation.find();
        return res.json(reclamations.filter(reclamation=>reclamation.etat === 'treated'));
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);

//list archiver 
router.get('/archive',
async(req,res)=> {
    try{
        const reclamations= await reclamation.find();
        return res.json(reclamations.filter(reclamation=>reclamation.archived == true));
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);

//list non archiver
router.get('/nonarchive',
async(req,res)=> {
    try{
        const reclamations= await reclamation.find();
        return res.json(reclamations.filter(reclamation=>reclamation.archived == false));
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);

/*

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
});  */

//details 
router.route('/:id').get((req, res) => {
    reclamation.findById(req.params.id)
      .then(reclamation => res.json(reclamation))
      .catch(err => res.status(400).json('Error: ' + err));
  });

/*
router.get('/:id', (req, res) => {
  const query = {
    _id: req.params.id
  };

  reclamation
    .findOne(query)
    .populate('user')
    .then(data => {
      res.json(data);
    })
    .catch(err => res.send(err));
});
*/

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
 
  
  

 
//ici

router.post('/sms', (req, res) => {
    const attributes = req.body
  
    sendSMS(attributes.recipient, attributes.message)
      .then(data => {
        res.status(201).json({ data })
      })
      .catch(error => {
        res.status(400).json({ error })
      })
  })

//ici

  router.post('/sendGroupSMS', (req, res) => {
    const attributes = req.body
  
    sendGroupSMS(attributes.recipients, attributes.message)
      .then(data => {
        res.status(201).json({ data })
      })
      .catch(error => {
        res.status(400).json({ error })
      })
  })


//ici
  router.post('/receiveSMS', (req, res) => {
    const attributes = req.body
    console.log(attributes)
  //  res.send(`<Response><Message>${attributes}</Message></Response>`)
    res.status(201).json({ attributes })
  })
  
//ici

  // POST - Send a SMS message using Copilot Messaging Service
router.post('/smsCopilot', (req, res) => {
    const attributes = req.body
  
    sendSMSUsingCopilot(attributes.recipient, attributes.message)
      .then(data => {
        res.status(201).json({ data })
      })
      .catch(error => {
        res.status(400).json({ error })
      })
  })



/*
  //tajareb 


  const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

  app.post('/njareb', (req, res) => {
    const twiml = new MessagingResponse();
  
    if (req.body.Body == 'hello') {
      twiml.message('Hi!');
    } else if (req.body.Body == 'bye') {
      twiml.message('Goodbye');
    } else {
      twiml.message(
        'No Body param match, Twilio sends this in the request to your server.'
      );
    }
  
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  });
  
  http.createServer(app).listen(1337, () => {
    console.log('Express server listening on port 1337');
  });   */





  //whats // ici

  router.post('/whats', (req, res) => {
    const attributes = req.body
  
    sendwhats(attributes.recipient, attributes.message)
      .then(data => {
        res.status(201).json({ data })
      })
      .catch(error => {
        res.status(400).json({ error })
      })
  })

  /*   //call //ici

  router.post('/call', (req, res) => {
    const attributes = req.body
  
    call(attributes.recipient, attributes.message)
      
    
     
  })*/



//aceeep

router.route('/accepter/:id').put((req, res) => {  
  let query = {
    _id: req.params.id
  };                                                      
  reclamation.findOneAndUpdate( query,
    {
      $set: { etat: "treated" }
    },
    { new: true })
    .then(() => res.json('reclmation treated.'))  
    .catch(err => res.status(400).json('Error: ' + err));    
});

//refuser

router.route('/refuser/:id').put((req, res) => {  
  let query = {
    _id: req.params.id
  };                                                      
  reclamation.findOneAndUpdate( query,
    {
      $set: { etat: "pending" }
    },
    { new: true })
    .then(() => res.json('reclmation refuser.'))  
    .catch(err => res.status(400).json('Error: ' + err));    
});



module.exports = router;
