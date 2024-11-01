import mongoose from "mongoose";
const runnerSchema = new mongoose.Schema({
    name: { type: String},
    age: { type: Number},
    steps: { type: Number},
    time: { type: String}
});

const challengeSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    firstRunner: { type: runnerSchema},
    secondRunner: { type: runnerSchema},
    url: { type: String}
});
const challengevideoSchema = new mongoose.Schema({
    url: { type: String},
    uploadDate: { type: Date, default: Date.now }
});

export const Challenge = mongoose.model('Challenge', challengeSchema);
export const VideoChallengeday = mongoose.model('VideoChallengeday', challengeSchema);
