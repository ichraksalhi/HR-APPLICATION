const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonalityTestSchema = new Schema({

    question: {
        type: String,
        value: Number,
        required: true
    },

    optionA: [
        {
            text : { type: String, required: true },
            value: { type: String, required: true }
        }
    ],
    optionB: [
        {
            text : { type: String, required: true },
            value: { type: String, required: true }
        }
    ],
    optionC: [
        {
            text : { type: String, required: true },
            value: { type: String, required: true }
        }
    ],
    optionD: [
        {
            text : { type: String, required: true },
            value: { type: String, required: true }
        }
    ],
    dateCreated: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Personalitytest', PersonalityTestSchema);