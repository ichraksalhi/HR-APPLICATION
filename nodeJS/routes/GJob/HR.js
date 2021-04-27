const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');

//const cron = require('node-cron');
//const crontab = require('node-crontab');

//@route Get api/Job/HR
//@desc GET ALL jobs approved and created by HR
//@access Private
router.get('/', auth,
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
//@route Get api/Job/ActivatedJob
//@desc GET Activated jobs approved and created by HR
//@access Private
router.get('/ActivatedJob', auth,
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
        //list Job activated
        const JobsAc = listJobsApp.filter(job=>job.activate === 1);
        //test if user created this Job
        const listJobsAc = JobsAc.filter(job => job.user.toString() === req.user.id)
        return res.json(listJobsAc);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);
//@route Get api/JobHR/DeActivateJob
//@desc GET Activated jobs approved and created by HR
//@access Private
router.get('/DeActivateJob', auth,
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
        //list Job activated
        const JobsdeAc = listJobsApp.filter(job=>job.activate === 0);
        //test if user created this Job
        const listJobsdeAc = JobsdeAc.filter(job => job.user.toString() === req.user.id)
        return res.json(listJobsdeAc);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);
//@route Put api/Job/disactivate/:id
//@desc disactivate job
//@access Private
router.put('/deactivate/:id',auth,
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

//@route Delete api/Job/:id
//@desc delete job
//@access Private
router.delete('/:id',auth,
async(req,res)=>{
    try{
        const job= await Job.findById(req.params.id);
        //check if the job exist
        if(!job){
           return res.status(404).json({msg: 'Job not found'});
        }     
        //check if the job is created by the connected user
        if(job.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'User not autorized'});
        }
        await job.deleteOne();
    res.status(200).send('Deleted successfully');   

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
