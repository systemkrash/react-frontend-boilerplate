import express from 'express';

import loaders from './loaders/index.js';

async function boot() {
  const app = express();

  await loaders.init({ expressApp: app });

  /**
   * Load Health Check endpoints
   */
  app.get('/status', (_req, res) => {
    res.status(200).end();
  });
  app.head('/status', (_req, res) => {
    res.status(200).end();
  });

  return app;
}

export { boot };
