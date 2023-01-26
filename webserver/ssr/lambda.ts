import serverlessExpress from '@vendia/serverless-express';

import { boot } from './app.js';

let serverlessExpressInstance: any;

async function start(event: any, context: any) {
  const app = await boot();

  serverlessExpressInstance = serverlessExpress({ app });

  return serverlessExpressInstance(event, context);
}

export function handler(event: any, context: any) {
  if (serverlessExpressInstance)
    return serverlessExpressInstance(event, context);

  return start(event, context);
}
