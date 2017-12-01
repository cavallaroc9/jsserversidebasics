import healthRouter from './health';
import restRouter from './rest';
import middlewareRouter, { requestTimeMiddleware } from './middleware';

const setupRouter = (app) => {
  app.use(requestTimeMiddleware);
  app.use(['/health', '/health-check'], healthRouter);
  app.use('/rest', restRouter);
  app.use('/middleware', middlewareRouter);
};

export default setupRouter;
