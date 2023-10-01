// routes/user.js
import express from 'express';

const router = express.Router();

import { createUser, getCategory, signUser } from '../controllers/userController.js';

router.post('/create', createUser);
router.get('/categories', getCategory)
router.post('/login', signUser)


export default router;