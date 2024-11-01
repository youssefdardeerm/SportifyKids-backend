// routes/contestantRoutes.js
import express from 'express';
import { createContestant, getContestants } from './quiz.controller.js';

const router = express.Router();

// إنشاء متسابق جديد
router.post('/', createContestant);

// الحصول على جميع المتسابقين
router.get('/', getContestants);

export default router;
