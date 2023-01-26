import http from 'node:http';
import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';

import config from './config/index.js';
import { boot } from './app.js';

async function start() {
  const app = await boot();

  const key = fs.readFileSync(`${path.resolve()}/server.key`);
  const cert = fs.readFileSync(`${path.resolve()}/server.crt`);
  const options = { key, cert };

  const httpServer = http.createServer(app);
  const httpsServer = https.createServer(options, app);

  await new Promise((resolve: any) => {
    httpServer.listen({ host: config.host, port: config.httpPort }, resolve);
    httpsServer.listen({ host: config.host, port: config.httpsPort }, resolve);
  });

  console.log(`🚀 Server ready at http://${config.host}:${config.httpPort}`);
  console.log(`🚀 Server ready at https://${config.host}:${config.httpsPort}`);
}

start();
