import mongoose from 'mongoose';

const meetingSchema = mongoose.Schema(
  {
    // might need an array here to handle visitor and host, reference lesson 19 at minute 10 for this
    visitor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    host: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    meetDayTime: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Meeting = mongoose.model('Meeting', meetingSchema);

export default Meeting;
