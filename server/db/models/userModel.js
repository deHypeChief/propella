// models/user.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  // Add more fields as needed
});

// Export the model
export default mongoose.model('User', userSchema);