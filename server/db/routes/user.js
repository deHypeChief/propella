// routes/user.js
import express from 'express';

const router = express.Router();

// Import the user controller
import { createUser } from '../controllers/userController.js';

// Define a route for creating a user
router.post('/create', createUser);

// Define other routes as needed (e.g., read, update, delete)

export default router;