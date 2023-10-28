// routes/user.js
import express from 'express';

const router = express.Router();

import { createUser, getCategory, signUser, users } from '../controllers/userController.js';

router.post('/create', createUser);
router.get('/categories', getCategory)
router.post('/login', signUser)
router.get('/', users)


export default router;