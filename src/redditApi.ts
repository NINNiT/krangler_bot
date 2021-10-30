import dotenv from 'dotenv';
dotenv.config();
import Snoowrap from 'snoowrap';

const creds = {
  userAgent: 'nodejs:krangler_bot:v1 (/u/masterninni)',
  clientId: process.env.BOT_CLIENT_ID,
  clientSecret: process.env.BOT_CLIENT_SECRET,
  username: process.env.BOT_USERNAME,
  password: process.env.BOT_PASSWORD,
};

const client = new Snoowrap(creds);

export default client;
