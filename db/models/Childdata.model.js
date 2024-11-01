import mongoose from 'mongoose';

const childSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  trainingDuration: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
  },
  status: { type: String, default: '' }, // الحالة
});

childSchema.virtual('computedStatus').get(function() {
  const totalMinutes = this.trainingDuration.hours * 60 + this.trainingDuration.minutes + this.trainingDuration.seconds / 60;

  if (totalMinutes < 5) return 'good';
  else if (totalMinutes === 5) return 'excellent';
  return 'Skilled Trainee';
});

const Child = mongoose.model('Child', childSchema);
export default Child;
