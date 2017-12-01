import express from 'express';

// Create a middleware to add the requestTime to each request
export const requestTimeMiddleware = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};

// Setting up the express Router
const router = express.Router();

// Setup basic catch-all route
router.use('/', function (req, res) {
  res.send(`Request Time is provided by the middleware, and it is : ${req.requestTime}`);
});

export default router;