import express from 'express';

const router = express.Router();

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

router.use('/', function (request, response) {
  response.send('Healthy');
});

export default router;
