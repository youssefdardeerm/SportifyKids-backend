// routes/videoRoutes.js
import express from 'express';
import { getVideoshealthfood, uploadVideohealthfood } from './Healthfood.controller.js';

const router = express.Router();

// Route to upload video (only .mp4)
router.post('/uploadvideoshealthfood', uploadVideohealthfood);

// Route to get videos with pagination
router.get('/getvideos', getVideoshealthfood);

export default router;
