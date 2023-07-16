import express from 'express';
import { signup } from '../controllers/auth.controller';

const router = express.Router();

router.post('/signup', signup);

// Implement login, refresh token, and delete user routes here

export default router;
