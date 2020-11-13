import axios from 'axios';
import { EErrors } from '../constants/errors.js';
import dotenv from 'dotenv';
// Loading all envs from .env into node's process.env
dotenv.config();

const recipesUrl = process.env.URLRECIPE;

const recipesService = async (query) => {
  try {
    const recipesResponse = await axios.get(`${recipesUrl}?i=${query}`);

    return recipesResponse;
  } catch (err) {
    throw new Error(EErrors.BadRequest + ' - ' + err.message);
  }
};

export default recipesService;
