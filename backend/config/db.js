/****************************************************************
 * File name: DBTest
 * **************************************************************
 * File purpose:
 * This file is responsible for connecting the application to
 * the mongoDB database.  Mongoose is used to allow for straight-
 * forward modeling of the data.  A mongoose connection is
 * created by way of using a URI provided by mongoDB. Options
 * are passed as a second arguement. Console logging is in place
 * to help during development.
 * Errors are caught and return the message thrown by the error.
 *
 ***************************************************************/
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
