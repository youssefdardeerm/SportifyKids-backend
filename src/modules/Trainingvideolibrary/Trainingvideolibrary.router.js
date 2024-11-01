import express from 'express';
import { uploadVideo, getVideos } from './Trainingvideolibrary.controller.js';

const router = express.Router();


// Route to upload video (only .mp4)
router.post('/uploadvideos', uploadVideo);



router.get('/getvideos', getVideos);

export default router;
