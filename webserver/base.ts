import 'dotenv/config';

export const baseServer = process.env.VITE_BASE_SERVER || '/';
export const baseAssets =
  (process.env.VITE_BASE_ASSETS
    ? `https://${process.env.VITE_BASE_ASSETS}`
    : undefined) || 'https://cdn.divinety.local';
