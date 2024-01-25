import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  description: String,
  obj: Object
  },{
  timestamps: true,
})
module.exports = mongoose.model('log', sessionSchema);
