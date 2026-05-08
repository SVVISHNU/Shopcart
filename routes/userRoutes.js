import express from 'express';
import { registerUser, loginUser, adminLogin, getProfile, updateProfile } from '../controllers/userController.js';
import authUser from '../middleware/auth.js';

const UserRouter = express.Router();

UserRouter.post('/login', loginUser);
UserRouter.post('/register', registerUser);
UserRouter.post('/admin', adminLogin);
UserRouter.post('/get-profile', authUser, getProfile);
UserRouter.post('/update-profile', authUser, updateProfile);

export default UserRouter;