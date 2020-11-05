import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Loading all envs from .env into node's process.env
dotenv.config();

const app = express();

app.use(cors());

app.listen (process.env.PORT, () => {
  console.log(`Server is up and running on port ${process.env.PORT}` )
});
