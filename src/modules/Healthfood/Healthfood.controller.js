

import { HealthFoodmodel } from "../../../db/models/HealthyFood.model.js";





// Controller to upload video
export const uploadVideohealthfood = async (req, res) => {
  try {
    const url = req.body.url;
    const healthfood = new HealthFoodmodel({
      url,
    });
   
    const savedhealthfood = await healthfood.save();

    res.status(201).json({ message: 'healthfood video uploaded and saved', video: savedhealthfood });
  } catch (error) {
    res.status(500).json({ message: 'healthfood video upload failed', error: error.message });
  }
};



// Controller to retrieve videos with pagination
export const getVideoshealthfood = async (req, res) => {
    const page = parseInt(req.query.page) || 1; // الصفحة الحالية
    const limit = 4; // عدد الفيديوهات لكل صفحة
    const skip = (page - 1) * limit; // حساب الفيديوهات التي يجب تجاوزها
  
    try {
      const videos = await HealthFoodmodel.find().skip(skip).limit(limit); // استرجاع الفيديوهات الحالية
      const totalVideos = await HealthFoodmodel.countDocuments(); // إجمالي عدد الفيديوهات
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
  