import mongoose from 'mongoose';
const HealthSchema = new mongoose.Schema({
   
    url: { type: String, required: true }, // Cloudinary URL
    uploadDate: { type: Date, default: Date.now },
  });
  
  export const HealthFoodmodel = mongoose.model('Healthfood', HealthSchema);