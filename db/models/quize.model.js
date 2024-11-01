// models/Contestant.js
import mongoose from 'mongoose';

const ContestantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  correctAnswers: {
    type: Number,
    default: 0,
  },
  incorrectAnswers: {
    type: Number,
    default: 0,
  },
  finalScore: {
    type: Number,
    default: 0,
  },
});

const Quizmodel = mongoose.model('Quiz', ContestantSchema);
export default Quizmodel;
