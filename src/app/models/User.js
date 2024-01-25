import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    id: String,
    access: Number,
    active: { type: Boolean, default: true },
    fullName: String,
    email: String,
    auth: {
      password: { type: String, default: '' },
      hashReset: { type: String, default: '' }, //Caso fosse solicitado alteração de senha
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('user', userSchema);
