const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const DemoQuizSchema = new Schema({
  
    type: {
        type: String,
        required: true
    },
    
    question: {
        type: String,
        required: true
    },
    
    optionA: {
        type: String,
        required: true
    },

    optionB: {
        type: String,
        required: true
    },

    optionC: {
        type: String,
        required: true
    },

    optionD: {
        type: String,
        required: true
    },

    answer: {
        type: String,
        required: true
    },

})


module.exports = mongoose.model('demoquiz', DemoQuizSchema);
