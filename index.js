import './util/httpParserOverride';
import './util/dotenvLoader';
import express from 'express';
import routers from './routers';

// LM & helpful dependencies (OPTIONAL)
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';

/** Setup Express and configure it with optional helpers **/
const app = express();

// Handle Liberty Proxy
app.set('trust proxy', 1);
// Populate the req.cookies param, sorting cookies by key / value pairs.
app.use(cookieParser());
// Handle CORS requests
app.use(cors({ origin: '*' }));
// Set various HTTP headers
app.use(helmet());

/** Setup the express routes **/
routers(app);

/** Setup port and host **/
const port = process.env.PORT || 3000;
const host = process.env.APP_HOST || '0.0.0.0';

/** Topmost Route **/
app.get('/', (req, res) => {
  res.json({
    timestamp: Date.now(),
    results: [
      {
        testName: 'Server started (topmost level)',
        status: 'OK',
        message: 'Successfully started server (base route)'
      }
    ],
    status: 'OK'
  });
});

const server = app.listen(port, host, () => {
  /* eslint-disable no-console */
  console.log(`Server running at ${host}:${port}`);
  /* eslint-enable no-console */
});


/** Handle shutting down the server **/
const gracefulShutdown = (fn) => {
  server.close();
  fn();
};

process.once('SIGUSR2', function () {
  gracefulShutdown(function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});
