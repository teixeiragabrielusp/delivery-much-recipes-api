import axios from 'axios';
import { EErrors } from '../constants/errors.js';
import dotenv from 'dotenv';
// Loading all envs from .env into node's process.env
dotenv.config();

const giphyUrl = process.env.URLGYPHY;
const giphyToken = process.env.TOKENGYPHY;

const giphyService = async (title) => {
  try {
    const giphyResponse = await axios.get(
      `${giphyUrl}?api_key=${giphyToken}&q=${title}&limit=1`
    );

    return giphyResponse;
  } catch (err) {
    throw new Error(EErrors.BadRequest + ' - ' + err.message);
  }
};

export default giphyService;
