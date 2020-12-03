import express from 'express';
import dotenv from 'dotenv';
import meetings from './data/meetings.js';
import connectDB from './config/db.js';
import colors from 'colors';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running....');
});

// request all meetings to be sent to port 5000
app.get('/api/meetings', (req, res) => {
  res.json(meetings);
});
// request meeting by id to be sent to port 5000
// check each id in meetings object and find the one that matches the one in the browser
app.get('/api/meetings/:id', (req, res) => {
  const meeting = meetings.find((m) => m._id === req.params.id);
  res.json(meeting);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
