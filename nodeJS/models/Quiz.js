const mongoose= require('mongoose');
const QuizSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    TestType:{
        type:String,
        required:true,
        trim: true,
    },
    
    score:{
        type:Number,
        required:true,
        trim: true,     
    }, 
    
    questions: [
        { 
            question: {        
                type: String,
                required: true
            }, 
            answers:[
                {
                answer: {
                    type: Number,
                    required: true
                },
                isCorrect: {
                    type: Boolean,
                    default: true
                },
    }],
    }],

    duration :{
        hours : {
          type : Number,
          default: 0
        },
  
        minutes : {
          type : Number,
          default: 0
        },
  
        seconds : {
          type : Number,
          default: 0
        }
  
      }
});
module.exports = Quiz= mongoose.model('Quiz', QuizSchema);
