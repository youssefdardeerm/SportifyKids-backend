// routes/videoRoutes.js
import express from 'express';
import { getVideosPhysicalactivity, uploadVideoPhysicalactivity } from './Physicalactivityforchildren.controller.js';

const router = express.Router();

// Route to upload video (only .mp4)
router.post('/uploadvideos', uploadVideoPhysicalactivity);

// Route to get videos with pagination
router.get('/getvideos', getVideosPhysicalactivity);

export default router;
