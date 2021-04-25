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
            check('requirements', 'requirements is required').not().isEmpty(),
            check('skills', 'skills is required').not().isEmpty(),

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
        user: req.user.id,
        skills: req.body.skills,
        requirements: req.body.requirements,
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
//@desc GET details job
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
/*router.get('/HR', auth,
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
);*/
//@route Get api/Job/nonApp
//@desc GET ALL jobs non approved (admin)
//@access Private
router.get('/nonApp',
async(req,res)=> {
    try{
        //récupérer le user connecté à partir un token
        //const user = await User.findById(req.user.id).select('-password');
        //test if user is admin
       /* if (user.role != 0){
            return res.status(401).json({msg: 'User not autorized'});
        }*/
        const listJobs= await Job.find().sort({date: -1});
        //list Job Non Approved
        const listJobsNonApp = listJobs.filter(job=>job.approved === 0);
        return res.json(listJobsNonApp);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);

//@route Put api/Job/approved/:id
//@desc approved by admin
//@access Private
/*router.put('/approved/:id',auth,
async(req,res)=>{
    try{
        //récupérer le user connecté à partir un token
        const user = await User.findById(req.user.id).select('-password');
        //test if user is admin
        if (user.role != 0){
            return res.status(401).json({msg: 'User not autorized'});
        }
        const jobDisapp= await Job.findById(req.params.id);
         jobDisapp.approved = 1;
         await jobDisapp.save();
         return res.status(200).json({msg: 'Job approved !!'});
    }
    catch(err){
        console.error(err.message);
        if(err.kind === 'ObjectId'){ //it's not a valid objectId
            return res.status(404).json({msg: 'Job not found'});
         }
        res.status(500).send('Server Error');   
    }
});*/

//@route Put api/Job/disactivate/:id
//@desc disactivate job
//@access Private
router.put('/disactivate/:id',auth,
async(req,res)=>{
    try{
        const jobDisac= await Job.findById(req.params.id);

        //récupérer le user connecté à partir un token
        const user = await User.findById(req.user.id).select('-password');
        //check if the job is created by the connected user and he is HR
        if((jobDisac.user.toString() !== req.user.id) && (user.role != 1)){
            return res.status(401).json({msg: 'User not autorized'});
        }
        jobDisac.activate = 0;
         await jobDisac.save();
         return res.status(200).json({msg: 'Job disactivated !!'});
    }
    catch(err){
        console.error(err.message);
        if(err.kind === 'ObjectId'){ //it's not a valid objectId
            return res.status(404).json({msg: 'Job not found'});
         }
        res.status(500).send('Server Error');   
    }
});

//@route Put api/Job/activate/:id
//@desc activate job
//@access Private
router.put('/activate/:id',auth,
async(req,res)=>{
    try{
        const jobAc= await Job.findById(req.params.id);

        //récupérer le user connecté à partir un token
        const user = await User.findById(req.user.id).select('-password');
        //check if the job is created by the connected user and he is HR
        if((jobAc.user.toString() !== req.user.id) && (user.role != 1)){
            return res.status(401).json({msg: 'User not autorized'});
        }
        jobAc.activate = 1;
         await jobAc.save();
         return res.status(200).json({msg: 'Job Activated !!'});
    }
    catch(err){
        console.error(err.message);
        if(err.kind === 'ObjectId'){ //it's not a valid objectId
            return res.status(404).json({msg: 'Job not found'});
         }
        res.status(500).send('Server Error');   
    }
});

//@route Get api/Job/ActivatedJob
//@desc GET Activated jobs approved and created by HR
//@access Private
/*router.get('/ActivatedJob', auth,
async(req,res)=> {
    try{
        //récupérer le user connecté à partir un token
        const user = await User.findById(req.user.id).select('-password');
        //test if user is HR
        if (user.role != 1){
            return res.status(401).json({msg: 'User not autorized'});
        }
        const listJobs= await Job.find().sort({date: -1});
        //list Job activated
        const JobsAc = listJobs.filter(job=>job.activate === 1);
        //test if user created this Job
        const listJobsAc = JobsAc.filter(job => job.user.toString() === req.user.id)
        return res.json(listJobsAc);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);*/
//@route Get api/Job/DeActivateJob
//@desc GET Activated jobs approved and created by HR
//@access Private
/*router.get('/DeActivateJob', auth,
async(req,res)=> {
    try{
        //récupérer le user connecté à partir un token
        const user = await User.findById(req.user.id).select('-password');
        //test if user is HR
        if (user.role != 1){
            return res.status(401).json({msg: 'User not autorized'});
        }
        const listJobs= await Job.find().sort({date: -1});
        //list Job activated
        const JobsdeAc = listJobs.filter(job=>job.activate === 0);
        //test if user created this Job
        const listJobsdeAc = JobsdeAc.filter(job => job.user.toString() === req.user.id)
        return res.json(listJobsdeAc);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);*/
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
    //récupérer le user connecté à partir un token
    const user = await User.findById(req.user.id).select('-password');
    const job = await Job.findById(req.params.id);
    res.send(user);
    //créer un nouveau comment
    const newComment= {
        text: req.body.text,
        firstname: user.firstname,
        lastname: user.lastname,        
        email: user.email,
        avatar: user.avatar,
        user: req.user.id
    };
    job.comments.unshift(newComment);
    //save
    await job.save();
    res.json(job.comments);
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
        const job= await Job.findById(req.params.id);
        //check if the job has already been liked by the connected user
        if(job.likes.filter(like=>like.user.toString()=== req.user.id).length > 0){
            return res.status(400).json({msg: 'Job already liked'});
        }
         job.likes.unshift({
             user: req.user.id
            });
         await job.save();
         return res.status(400).json({msg: 'Job liked'});

    }
    catch(err){
        console.error(err.message);
        if(err.kind === 'ObjectId'){ //it's not a valid objectId
            return res.status(404).json({msg: 'Job not found'});
         }
        res.status(500).send('Server Error');   
    }
});

//@route Post api/Job/unlike/:id
//@desc unlike job
//@access Private
router.put('/unlike/:id',auth,
async(req,res)=>{
    try{
        const job= await Job.findById(req.params.id);
        //check if the job has already been liked by the connected user
        if(job.likes.filter(like=>like.user.toString()=== req.user.id).length === 0){
            job.likes.unshift({
                user: req.user.id
               });
            await job.save();
            return res.status(400).json({msg: 'Job liked'});
        }else{
            //Get remove index
            const removeIndex = job.likes.map(like=> like.user.toString()).indexOf(req.user.id);
            job.likes.splice(removeIndex,1);
            await job.save();
            return res.status(400).json({msg: 'Job like removed'});
            }
        
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
