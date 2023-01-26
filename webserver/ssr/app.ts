import express, { Router } from 'express';
import { renderPage } from 'vite-plugin-ssr';

import config from './config/index.js';
import loaders from './loaders/index.js';

async function boot() {
  const app = express();

  await loaders.init({ expressApp: app });

  const route = Router();

  app.use(config.rootRoute, route);

  /**
   * Load Health Check endpoints
   */
  route.get('/status', (_req, res) => {
    res.status(200).end();
  });
  route.head('/status', (_req, res) => {
    res.status(200).end();
  });

  route.get('*', async (req, res, next) => {
    const pageContextInit = {
      urlOriginal: req.originalUrl,
    };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;

    if (!httpResponse) {
      return next();
    }

    const { body, statusCode, contentType } = httpResponse;
    res.status(statusCode).type(contentType).send(body);
  });

  return app;
}

export { boot };
