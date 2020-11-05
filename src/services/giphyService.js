import axios from 'axios';
import { EErrors } from '../constants/errors.js';

const giphyUrl = process.env.URL_GYPHY;
const giphyToken = process.env.TOKEN_GYPHY;

export const giphyService = async (title) => {
  const giphyResponse = await axios.get(`${giphyUrl}?api_key=${giphyToken}&q=${title}&limit=1`);

  //add others possible specific errors - check responses
  if(recipesResponse.status !== 200) 
    throw new Error (EErrors.BadRequest);
  
  return giphyResponse;
}