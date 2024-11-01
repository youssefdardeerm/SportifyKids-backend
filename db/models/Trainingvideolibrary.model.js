import mongoose from 'mongoose';
const videoSchema = new mongoose.Schema({
   
    url: { type: String, required: true }, // Cloudinary URL
    uploadDate: { type: Date, default: Date.now },
  });
  
  export const TrainingVideoLibrarymodel = mongoose.model('Trainingvideolibrary', videoSchema);