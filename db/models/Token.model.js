// models/Token.model.js
import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema({
    token: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    isUsed: { type: Boolean, default: false } // لتحديد إذا تم استخدام التوكن
  });
  
export const Tokenmodel = mongoose.model('Token', tokenSchema);
