import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({

  url: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(v);
      },
      message: props => `${props.value} is not a valid URL!`
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Videocomdymodel = mongoose.model('Video', videoSchema);

export default Videocomdymodel;
