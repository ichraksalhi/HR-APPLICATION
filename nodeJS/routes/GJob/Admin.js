const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
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
router.put('/approved/:id',auth,
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
});
module.exports = router;
