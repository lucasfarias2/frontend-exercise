import express from 'express';
import items from '../assets/items.json';
import deviceMiddleware from './server/middlewares/device';
import rendererMiddleware from './server/middlewares/renderer';
import appController from './server/controllers/app';

const server = express();
const port = process.env.port || 8080;

server.use(deviceMiddleware);
server.use(rendererMiddleware);

server.use('/static', express.static('./static'));

server.use('/api/items', (_req: IRequest, res: IResponse) => {
  res.json(items);
});

server.use('/', appController.fetch, appController.render);

server.listen(port, () => {
  // tslint:disable-next-line: no-console
  console.log(`Server running on port ${port}`);
});
