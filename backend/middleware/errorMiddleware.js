/****************************************************************
 * File name: errorMiddleware.js
 * **************************************************************
 * File purpose:
 * This file contains two custom error handlers.
 ***************************************************************/

// error middleware - error displayed for invalid url
const notFound = (req, res, next) => {
  const error = new Error(`Not Found -- ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// custom error handling for production mode
//error middleware - if status code is 200, make it a 500 and respond with stack trace if not in production
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
