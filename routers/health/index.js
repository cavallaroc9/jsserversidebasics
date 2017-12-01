import express from 'express';

// Setting up the express Router
const router = express.Router();

// Show how a status check can be returned
router.use('/report', function (request, response) {
  response.json({
    timestamp: Date.now(),
    results: [
      {
        testName: 'Server started',
        status: 'OK',
        message: 'Successfully started server (health route)'
      }
    ],
    status: 'OK'
  });
});

// Setup basic catch-all route
router.use('/', function (request, response) {
  response.send('Healthy');
});

export default router;
