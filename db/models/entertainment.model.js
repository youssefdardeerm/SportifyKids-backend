import mongoose from 'mongoose';
const videoSchema = new mongoose.Schema({
   
    url: { type: String, required: true }, // Cloudinary URL
    uploadDate: { type: Date, default: Date.now },
  });
  
  export const Entertainmentmodel = mongoose.model('Entertainment', videoSchema);