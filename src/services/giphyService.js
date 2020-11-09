import axios from 'axios';
import { EErrors } from '../constants/errors.js';
import dotenv from 'dotenv';
// Loading all envs from .env into node's process.env
dotenv.config();

const giphyUrl = process.env.URLGYPHY;
const giphyToken = process.env.TOKENGYPHY;

const giphyService = async (title) => {
  const giphyResponse = await axios.get(`${giphyUrl}?api_key=${giphyToken}&q=${title}&limit=1`);

  //add others possible specific errors - check responses
  if(giphyResponse.status !== 200) 
    throw new Error (EErrors.BadRequest);
  
  return giphyResponse;
}

export default giphyService;