import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true, // Ensures email addresses are unique
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  name: String,
  bussinessName: {
    type: String,
    required: true
  },
  shopNumber: Number,
  category: String
});

export default mongoose.model('User', userSchema);