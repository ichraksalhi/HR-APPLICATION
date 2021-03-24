const mongoose= require('mongoose');
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim: true,
        minlength:3
    },
    
    firstname:{
        type:String,
        required:true,
        trim: true,
       
    },
    lastname:{
        type:String,
        required:true,
        trim: true,
    },
    email:{
        type:String,
        required:true
    },
    
    password:{
            type:String,
            required:true,
            unique:true
        },
    role:{
            type: Number,
            required: true
    },
    company:{
        type:String,
        required:true
        },
    position: {
        type:String,
        required: true
    }

    });
module.exports = User = mongoose.model('user', UserSchema);
