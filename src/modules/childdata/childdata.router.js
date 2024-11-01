// routes/childRoutes.js
import express from 'express';
import { createChild, getChildren } from './childdata.controller.js';

const router = express.Router();

// مسار لإنشاء طفل جديد
router.post('/addchildren', createChild);

// مسار للحصول على بيانات الأطفال مع التقسيم
router.get('/getchildrens', getChildren);

export default router;
