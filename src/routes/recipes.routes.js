import express from 'express';
import recipesController from '../controllers/recipesController';

const app = express();
const recipesRouter = express.Router();

app.use(express.json());

recipesRouter.get('/', async (req, res, next) => {
  try {
    recipesController(req, res);

  } catch (err) {
    if(err instanceof Error) return next(err);

    return next (
      new Error('Unexpected error while fetching data from API!')
    );
  }
})

export default recipesRouter;