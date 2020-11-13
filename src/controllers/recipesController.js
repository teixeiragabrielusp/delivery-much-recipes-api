import { recipesService, giphyService } from '../services/index.js';
import { titleFixer, ingredientsOrganizer, sortRecipes } from '../helpers/index.js';
import { EErrors } from '../constants/errors.js';

const recipesController = async (req, res) => {
  try {
    if (!req.query.i) 
      throw new Error (EErrors.InvalidParams);

    const query = req.query.i;
    const queryArr = query.split(',').sort();

    if(queryArr.length > 3)
      throw new Error (EErrors.InvalidParams + ' - you must insert 3 or less ingredients!');

    let responseData = {
      keywords: [...queryArr],
      recipes: []
    }

    const recipes = await recipesService(query);

    if(recipes.data.results.length === 0)
      throw new Error (EErrors.BadResponse + ' - no recipes founded!');

    const recipesResponse = recipes.data.results.map(recipe => {
      const { title, ingredients, href } = recipe;

      const fixedTitle = titleFixer(title);
      const ingredientsArr = ingredientsOrganizer(ingredients);

      return {
        title: fixedTitle,
        ingredients: ingredientsArr,
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

    Promise.all(recipeGiphyResponse)
    .then(() => {
      responseData.recipes = sortRecipes(responseData.recipes);
      res.send(responseData)
    }).catch((err) => {
      return err;
    });;
  } 
  catch (err) {
    return res.status(400).send({
      code: err.response ? err.response.status : 400,
      message: err.message ? err.message : EErrors.UnknownError
    });
  }
}

export default recipesController;