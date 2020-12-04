import mongoose from 'mongoose';

const meetingSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    visitor: {
      type: String,
      required: true,
    },
    host: {
      type: String,
      required: true,
      ref: 'User',
    },
    meetDayTime: {
      type: Date,
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
