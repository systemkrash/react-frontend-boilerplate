import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import { ssr } from 'vite-plugin-ssr/plugin';

import { baseServer, baseAssets } from './webserver/base';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'www.divinety.local',
    port: 443,
    https: {
      key: fs.readFileSync(`${path.resolve()}/server.key`),
      cert: fs.readFileSync(`${path.resolve()}/server.crt`),
    },
  },
  plugins: [
    eslint(),
    react(),
    process.env.NODE_ENV === 'production'
      ? ssr({ baseAssets, baseServer })
      : ssr(),
  ],
});
