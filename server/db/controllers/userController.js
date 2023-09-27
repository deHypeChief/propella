// controllers/userController.js
import User from '../models/userModel.js'; // Import your user model

// Controller function for creating a user
const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    // Create a new user using the User model
    const user = new User({ username, email });
    await user.save(); // Save the user to the database
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Export the controller function
export { createUser };