import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import colors from 'colors';
import meetingRoutes from './routes/meetingRoutes.js';

dotenv.config();

connectDB();

const app = express();
//routes
app.get('/', (req, res) => {
  res.send('API is running....');
});

app.use('/api/meetings', meetingRoutes);

// error middleware - error displayed for invalid url
app.use(notFound);

//error middleware - if status code is 200, make it a 500 and respond with stack trace if not in production
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
