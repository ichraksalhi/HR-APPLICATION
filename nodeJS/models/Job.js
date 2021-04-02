const mongoose= require('mongoose');
const PostJobSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title:{
        type:String,
        required:true,
        unique:true,
        trim: true,
    },
    
    companyName:{
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
    availablePositionNumber: {
        type:Number,
        required: true,

        
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
    type:{
        type: String,
        required: true,
        trim: true,
    },
    languages: [
        {
            name:{
                type: String,
                required: true,
            }     
        }
    ],
    likes: [
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            },
            number: {
                type: Number,
                default: 0,
            }     
        }
    ],
    createdAt:{
        type : Date,
        default : Date.now
    }
    });
module.exports = PostJob = mongoose.model('PostJob', PostJobSchema);