import { Express } from 'express';

import expressLoader from './express.js';

async function init({ expressApp }: { expressApp: Express }) {
  const express = await expressLoader({ app: expressApp });

  return {
    app: express,
  };
}

export default { init };
