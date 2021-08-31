const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const TestSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  numberOfQuestions: {
    type: Number,
    required: true,
  },
  validity: {
    type: Date,
    required: true,
  },
  pin: {
    type: Number,
    required: true,
    default: 575757,
  },
  archived: { 
    type: Boolean,
    default: false, 
    //required: false  
  }
});

// Model
const Test = mongoose.model("Test", TestSchema);

module.exports = Test;
