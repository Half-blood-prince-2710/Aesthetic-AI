import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './db/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:8TSKdAt0mvBz@ep-little-snow-a5ufqxiq.us-east-2.aws.neon.tech/aesthetic%20ai?sslmode=require',
  },
});
