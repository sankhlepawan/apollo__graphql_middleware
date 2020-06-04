import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 4000,
  encryptionKey : process.env.ENCRYPTION_KEY,
  serverApiUrl: process.env.ENV === 'dev' ? process.env.DEV_SERVER_API_URL : process.env.PROD_SERVER_API_URL,
  cacheOptions: { cacheOptions: { ttl: -1 }},
  env: process.env.ENV
};