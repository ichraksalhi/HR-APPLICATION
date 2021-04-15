const mongoose= require('mongoose');
const PostJobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim: true,
    },
    location:{
        type:String,
        required:true,
        trim: true,
    },
    description:{
        type:String,
        required:true,
        trim: true,
    },
    salary: {
        type:Number,
        required: true,
    },
    studyLevel:{
        type:String,
        required: true,
        trim: true,
    },
    experience:{
        type:String,
        required: true,
        trim: true,
    },
    contractType:{
        type: String,
        required: true,
        trim: true,
    },
    nbrApplied:{
        type: Number,
        default: 0
    },
    likes: [
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            }   
        }
    ],
    requirements: [
        {
            text: {
                type: String,
                trim: true
            }     
        }
    ],
    skills: [
        {
            title: {
                type: String,
                trim: true
            }     
        }
    ],
    comments: [
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            },
            text: {
                type: String,
                required: true
            },
            name: {
                type: String
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    createdAt:{
        type : Date,
        default : Date.now
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    company:{
        type: String
    },
    approved:{
        type: Number,
        default: 0,
    },
    activate:{
        type: Number,
        default: 1,
    }
    });

module.exports = Job = mongoose.model('Job', PostJobSchema);