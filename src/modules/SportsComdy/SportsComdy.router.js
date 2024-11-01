import express from 'express';
import { addVideo, getVideos } from './SportsComdy.controller.js';

const router = express.Router();

// Route to add a video
router.post('/videos', addVideo);

// Route to get all videos with pagination
router.get('/videos', getVideos);

export default router;
