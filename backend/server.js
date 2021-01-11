/****************************************************************
 * File name: seeder.js
 * **************************************************************
 * File purpose:
 * This file is responsible for establishing a connection to
 * serve data to the client. Variables are stored as environement
 * variables and loaded via dotenv.
 ***************************************************************/

import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import colors from 'colors';
import meetingRoutes from './routes/meetingRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

connectDB();

// standard expressjs connection
const app = express();

// allows us to accept json data in the body
app.use(express.json());

// routes
app.use('/api/meetings', meetingRoutes);
app.use('/api/users', userRoutes);

const __dirname = path.resolve();

// when in production, set frontend/build to a static folder
// any route that isn't our api, point to index.html thats in the static folder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

// error middleware - error displayed for invalid url
app.use(notFound);

// error middleware - if status code is 200, make it a 500 and
// respond with stack trace if not in production
app.use(errorHandler);

// connect to stored port in env file, or 5000 if that doesnt work
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
