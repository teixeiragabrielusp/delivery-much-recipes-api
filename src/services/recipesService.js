import axios from 'axios';
import { EErrors } from '../constants/errors.js'

const recipesUrl = process.env.URL_RECIPE;

const recipesService = async (query) => {
  const recipesResponse = await axios.get(`${recipesUrl}${query}`);

  //add others possible specific errors - check responses
  if(recipesResponse.status !== 200) 
    throw new Error (EErrors.BadRequest);

  return recipesResponse;
}

export default recipesService;