const express = require('express');
const router = express.Router();
const {check, validationResult}= require('express-validator');
const secret="mysecrettoken";
const auth = require('../../middleware/auth');
const Job = require('../../models/Job');
const User = require('../../models/User');
//const bcrypt=require('bcryptjs');


//@route Post api/Job
//@desc Create job
//@access Private
router.post(
    '/',
    [
        auth,
        [
            check('title', 'Title  JOB  is required').not().isEmpty(),
            check('location', 'Location  JOB is required').not().isEmpty(),
            check('description', 'Description  JOB is required').not().isEmpty(),
            check('salary', 'Text is  JOB required').not().isEmpty(),
            check('studyLevel', 'Study Level  is required').not().isEmpty(),
            check('experience', 'JOB Experience  is required').not().isEmpty(),
            check('contractType', 'contractType is required').not().isEmpty(),
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
    const newJob= new Job({
        title: req.body.title,
        location: req.body.location,
        description: req.body.description,
        salary: req.body.salary,
        studyLevel: req.body.studyLevel,
        experience: req.body.experience,
        contractType: req.body.contractType,
        company: user.company,
        user: req.user.id
    }); 
    //save
    job= await newJob.save();
    res.send(job);

}
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }    
});
//@route Get api/Job
//@desc GET ALL jobs approved candidate
//@access Private
router.get('/',
async(req,res)=> {
    try{
        //récupérer le user connecté à partir un token
       // const user = await User.findById(req.user.id).select('-password');
        //test if user is candidate
       /* if (user.role != 2){
            return res.status(401).json({msg: 'User not autorized'});
        }*/
        const listJobs= await Job.find().sort({date: -1});
        return res.json(listJobs.filter(job=>job.approved === 1));
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);

//@route Get api/Job/id
//@desc GET deatails job candidate
//@access Private
router.get('/:id',
async(req,res)=> {
    try{
        const job= await Job.findById(req.params.id);
        //check if the job exist
        if(!job){
           return res.status(404).json({msg: 'Job not found'});
        } 
        return res.json(job);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);
//@route Get api/Job/HR
//@desc GET ALL jobs approved and created by HR
//@access Private
router.get('/HR', auth,
async(req,res)=> {
    try{
        //récupérer le user connecté à partir un token
        const user = await User.findById(req.user.id).select('-password');
        //test if user is HR
        if (user.role != 1){
            return res.status(401).json({msg: 'User not autorized'});
        }
        const listJobs= await Job.find().sort({date: -1});
        //list Job Approved
        const listJobsApp = listJobs.filter(job=>job.approved === 1);
        //test if user created this Job
        const listJobsHR =  listJobsApp.filter(job => job.user.toString() === req.user.id)
        return res.json(listJobsHR);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);
//@route Post api/job/comment/id
//@desc Create comment to job
//@access Private
router.post(
    '/comment/:id',
    [
        auth,
        [
            check('text', 'Comment is required').not().isEmpty()
        ]
    ],
async(req,res)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    try{
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }    
});
//@route Post api/posts/like/:id
//@desc like post
//@access Private
router.put('/like/:id',auth,
async(req,res)=>{
    try{
        
    }
    catch(err){
        console.error(err.message);
        if(err.kind === 'ObjectId'){ //it's not a valid objectId
            return res.status(404).json({msg: 'Job not found'});
         }
        res.status(500).send('Server Error');   
    }
});
module.exports = router;
