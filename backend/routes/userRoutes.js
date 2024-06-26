import express from 'express';
import { authUser } from '../controllers/userController.js';
const router = express.Router();

router.post('/auth', authUser)

export default router; 

// so what is going on here 
// listening on port in server.js, then this router handles request. when requrest, call function for user post from userController. public access since anyone canc reate a user