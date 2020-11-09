import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import recipesRouter from './routes/recipes.routes.js';

// Loading all envs from .env into node's process.env
dotenv.config();

const app = express();

app.use(cors());
app.use('/recipes', recipesRouter);

app.listen (process.env.PORT, () => {
  console.log(`Server is up and running on port ${process.env.PORT}` )
});
