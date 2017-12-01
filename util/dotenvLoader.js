import dotenv from 'dotenv';

// Do not try to load .env in production
const silent = process.env.NODE_ENV === 'production';

dotenv.config({ silent });
