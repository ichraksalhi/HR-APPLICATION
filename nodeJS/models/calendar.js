const mongoose = require('mongoose');
var calendarSchema = mongoose.Schema(
  {
    fileOne: {
      type: String,
      required: false
    },
    fileTwo: {
      type: String,
      required: false
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
  },
  {
    timestamps: true
  }
);
var calendar = mongoose.model('calendar', calendarSchema);
module.exports = calendar;
