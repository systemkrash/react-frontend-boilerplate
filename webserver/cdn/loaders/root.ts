import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-when-using-the-experimental-modules-flag/50052194#50052194
// eslint-disable-next-line @typescript-eslint/naming-convention
const __dirname = dirname(fileURLToPath(import.meta.url));
export const root = `${__dirname}/../../..`;
