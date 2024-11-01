import {Challenge, VideoChallengeday} from "../../../db/models/challengeday.model.js";
// إضافة تحدي جديد
export const addChallenge = async (req, res) => {
    try {
        const { firstRunner, secondRunner } = req.body;
        const challenge = new Challenge({ firstRunner, secondRunner });
        await challenge.save();
        res.status(201).json({ message: 'Challenge created successfully', challenge });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create challenge' });
    }
};

export const getChallenges = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 4;
    try {
        const totalChallenges = await Challenge.countDocuments();
        const challenges = await Challenge.find()
            .skip((page - 1) * limit)
            .limit(limit);
        
        const totalPages = Math.ceil(totalChallenges / limit);
        
        res.json({ challenges, currentPage: page, totalPages });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch challenges' });
    }
};

// إضافة فيديو جديد فقط
export const addVideo = async (req, res) => {
    try {
        const { url } = req.body;
        const challenge = new VideoChallengeday({ url });
        await challenge.save();
        res.status(201).json({ message: 'Video added successfully', challenge });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add video' });
    }
};

export const getVideos = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 3;
    try {
        const totalVideos = await VideoChallengeday.countDocuments();
        const videos = await VideoChallengeday.find({}, { url: 1 })
            .skip((page - 1) * limit)
            .limit(limit);
        
        const totalPages = Math.ceil(totalVideos / limit);
        
        res.json({ videos, currentPage: page, totalPages });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch videos' });
    }
};