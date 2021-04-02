const mongoose= require('mongoose');
const { isStringTextContainingNode } = require('typescript');
const CvSchema = new mongoose.Schema({
    firstName:{
        type:String,
        trim: true
    },  
    lastName:{
        type:String,
        trim: true
    }, 
    email: {
        type:String, 
        required: true,
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    location:{
        type:String,
        trim: true,
    },
    numTel:{
        type:Number,
        minlength:8
        },
    education:[
        {   
           schoolUniversity: {
                type: String,
                trim: true
            },
            year:{
                type: Date
            },
        }
    ],
    educationalExperience:[
        {
            title: {
                type: String,
                trim: true
            },
            year:{
                type: Date
            },
            description:{
                type: String,
                trim: true
            }

        }
    ],
    technicalExperience:[
        {
            title: {
                type: String,
                trim: true
            },
            year:{
                type: Date
            },
            description:{
                type: String,
                trim: true
            },
            location:{
                type: String,
                trim: true
            }

        }
    ],
    langage:[
        {
            name: {
                type: String
            },
            level:{
                type: String
            }
        }
    ]

    });
module.exports = Cv = mongoose.model('cv', CvSchema);
