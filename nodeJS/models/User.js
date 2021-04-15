const mongoose= require('mongoose');
const UserSchema = new mongoose.Schema({
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
    avatar : {
        type : String
    },
    password:{
            type:String,
            required:true,
            unique:true
        },
    role:{
            type: Number
    },
    company:{
        type:String
        },
    position: {
        type:String
    }

    });
module.exports = User = mongoose.model('user', UserSchema);
