import { Express } from 'express';
import cors from 'cors';

async function expressLoader({ app }: { app: Express }) {
  app.set('trust proxy', true);

  app.use(cors());
}

export default expressLoader;
