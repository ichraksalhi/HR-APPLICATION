const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reclamationSchema = new Schema({
  

  archived: { type: Boolean,  required: false  },
  lastname: { type: String, required: false }, 
  object: { type: String, required: true },
  description: { type: String, required: true },
  comment: { type: String, required: true },
  type: { type: String, required: true , enum: ['probleme', 'suggestion','autres'] },
  etat: { type: String, required: true , enum: ['treated', 'pending']} , },
  
);

const reclamation = mongoose.model('reclamation', reclamationSchema);

module.exports = reclamation;