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
      required: false,
    },
    host: {
      type: String,
      required: false,
      ref: 'User',
    },
    meetDayTime: {
      type: Date,
    },
    meetingTime: {
      type: String,
      required: false,
    },
    meetingRoom: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    isReady: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Meeting = mongoose.model('Meeting', meetingSchema);

export default Meeting;
