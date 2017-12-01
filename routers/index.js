import healthRouter from './health';
import restRouter from './rest';

const setupRouter = (app) => {
  app.use('/health', healthRouter);
  app.use('/rest', restRouter);
};

export default setupRouter;
