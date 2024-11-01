import Videocomdymodel from "../../../db/models/SportsComdy.model.js";

// Function to add a new video
export const addVideo = async (req, res) => {
  try {
    const { url } = req.body;
    const newVideo = new Videocomdymodel({  url });
    await newVideo.save();
    res.status(201).json({ message: 'Video added successfully', video: newVideo });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Function to get all videos with pagination
export const getVideos = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 9; // 9 videos per page
    const skip = (page - 1) * limit;

    const videos = await Videocomdymodel.find().skip(skip).limit(limit);
    const totalVideos = await Videocomdymodel.countDocuments();

    res.json({
      videos,
      currentPage: page,
      totalPages: Math.ceil(totalVideos / limit),
      totalVideos
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
