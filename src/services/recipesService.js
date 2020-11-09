import axios from 'axios';
import { EErrors } from '../constants/errors.js'
import dotenv from 'dotenv';
// Loading all envs from .env into node's process.env
dotenv.config();

const recipesUrl = process.env.URLRECIPE;

const recipesService = async (query) => {
  const recipesResponse = await axios.get(`${recipesUrl}?i=${query}`);

  //add others possible specific errors - check responses
  if(recipesResponse.status !== 200) 
    throw new Error (EErrors.BadRequest);

  return recipesResponse;
}

export default recipesService;