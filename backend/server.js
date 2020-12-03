const express = require('express');
const dotenv = require('dotenv');
const meetings = require('./data/meetings');

dotenv.config();

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

app.listen(5000, console.log('Server running on port 5000'));
