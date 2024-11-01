import express from 'express';
import { addChallenge, addVideo, getChallenges, getVideos } from './challengeday.controller.js';
const router = express.Router();

// مسار إضافة تحدي جديد
router.post('/challenges', addChallenge);

// مسار جلب التحديات مع التصفح
router.get('/challenges', getChallenges);

// مسار إضافة فيديو فقط
router.post('/videos', addVideo);

// مسار جلب الفيديوهات مع التصفح
router.get('/videos', getVideos);

export default router;