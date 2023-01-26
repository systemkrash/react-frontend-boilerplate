import express, { Express } from 'express';
import cors from 'cors';

import { root } from './root.js';

async function expressLoader({ app }: { app: Express }) {
  app.set('trust proxy', true);

  app.use(cors());
  app.use(express.static(`${root}/dist/client`));
  console.log({ root });
}

export default expressLoader;
