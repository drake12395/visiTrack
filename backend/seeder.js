/****************************************************************
 * File name: seeder.js
 * **************************************************************
 * File purpose:
 * This file is responsible for populating or removing all data
 * from the database during development mode. This file does not
 * interact with production mode. The two functions allow for
 * a quick "reset" during testing instead of manually deleting
 * and adding users. These features are called by their
 * respective command in the global package.json file under
 * "scripts".
 ***************************************************************/

// used to populate and dump data from db in dev mode
import dotenv from 'dotenv';
import users from './data/users.js';
import meetings from './data/meetings.js';
import User from './models/userModel.js';
import Meeting from './models/meetingModel.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Meeting.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const hostUser = createdUsers[0]._id;

    const sampleMeetings = meetings.map((meeting) => {
      return { ...meeting, user: hostUser };
    });

    await Meeting.insertMany(sampleMeetings);

    console.log('Data imported!!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Meeting.deleteMany();
    await User.deleteMany();

    console.log('Data destroyed!!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
