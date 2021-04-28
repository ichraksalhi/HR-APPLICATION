const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const ResultSchema = new Schema({
userId: {
     type: Schema.Types.ObjectId,
     ref: 'users',
      },
testId: {
    type: Schema.Types.ObjectId,
  },

  email: {
    type: String,
    required: true,
  },

  numberOfQuestions: {
    type: Number,
    required: true,
  },
  marks: {
    type: Number,
    default: 0,
  },
});

// Model
const Result = mongoose.model("Result", ResultSchema);

module.exports = Result;
