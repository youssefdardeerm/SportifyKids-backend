import Quizmodel from "../../../db/models/quize.model.js";


export const createContestant = async (req, res) => {
  const { name, age, correctAnswers, incorrectAnswers } = req.body;

  // حساب الدرجة النهائية
  const finalScore = (correctAnswers / 30) * 30; // الدرجة من 30

  const newContestant = new Quizmodel({
    name,
    age,
    correctAnswers,
    incorrectAnswers,
    finalScore,
  });

  try {
    const savedContestant = await newContestant.save();
    res.status(201).json(savedContestant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getContestants = async (req, res) => {
  try {
    const contestants = await Quizmodel.find();
    res.status(200).json(contestants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
