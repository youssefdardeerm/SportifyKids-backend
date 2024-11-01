import express from 'express';
import { getVideos, uploadVideo } from './Entertainment.controller.js';

const router = express.Router();


// Route to upload video (only .mp4)


router.post('/', uploadVideo);



router.get('/', getVideos);

export default router;
