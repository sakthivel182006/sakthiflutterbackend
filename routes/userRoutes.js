import express from 'express';
import { createUser, loginUser,getUsers } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);   // login route
router.get('/', getUsers);
export default router;
