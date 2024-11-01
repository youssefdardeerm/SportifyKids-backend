import { Entertainmentmodel } from "../../../db/models/entertainment.model.js";


// دالة رفع الفيديو
export const uploadVideo = async (req, res) => {
  try {
    const url = req.body.url;
    // حفظ الرابط في قاعدة البيانات
    const newVideo = new Entertainmentmodel({ url });
    await newVideo.save();

    res.status(200).json({ message: 'video uploaded successful', newVideo });
  } catch (error) {
    console.error('Error uploading video:', error);
    res.status(500).json({ message: 'error when upload video' });
  }
};


// Controller to retrieve videos with pagination
export const getVideos = async (req, res) => {
    const page = parseInt(req.query.page) || 1; // الصفحة الحالية
    const limit = 8; // عدد الفيديوهات لكل صفحة
    const skip = (page - 1) * limit; // حساب الفيديوهات التي يجب تجاوزها
  
    try {
      const videos = await Entertainmentmodel.find().skip(skip).limit(limit); // استرجاع الفيديوهات الحالية
      const totalVideos = await Entertainmentmodel.countDocuments(); // إجمالي عدد الفيديوهات
      const totalPages = Math.ceil(totalVideos / limit); // حساب عدد الصفحات الكلية
  
      // إضافة حقول لتوضيح حالة الصفحات الأخرى
      const hasNextPage = page < totalPages;
      const hasPrevPage = page > 1;
  
      res.status(200).json({
        videos,
        totalPages,
        currentPage: page,
        hasNextPage,
        hasPrevPage,
      });
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving videos', error });
    }
  };
  