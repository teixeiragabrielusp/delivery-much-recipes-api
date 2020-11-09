import recipesService from '../services/recipesService.js';
import giphyService from '../services/giphyService.js';

const recipesController = async (req, res) => {
  
  if (!req.query.i) 
    throw new Error (EErrors.InvalidParams);

  const query = req.query.i;
  const queryArr = query.split(',').sort();

  if(queryArr.length > 3)
    throw new Error (EErrors.InvalidParams + ' - you must insert 3 or less ingredients!');

  const responseData = {
    keywords: [...queryArr],
    recipes: []
  }

  try {
    const recipes = await recipesService(query);

    const recipesResponse = recipes.data.results.map(recipe => {
      const { title, ingredients, href } = recipe;

      return {
        title,
        ingredients,
        link: href
      }
    });

    const recipeGiphyResponse = recipesResponse.map(async recipe => {
      const { title, ingredients, link } = recipe;

      try {
        const giphys = await giphyService(title);
        const gif = giphys.data.data[0].images.downsized_large.url;

        responseData.recipes.push({
          title,
          ingredients,
          link,
          gif
        });
      }

      catch (err) {
        return res.status(400).send({
          code: err.response.status,
          message: err.message
        });
      }
    });

    Promise.all(recipeGiphyResponse).then(() => {
      res.send(responseData);
    });
  } 
  catch (err) {
    return res.status(400).send({
      code: err.response.status,
      message: err.message
    });
  }
}

export default recipesController;