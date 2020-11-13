const ingredientsOrganizer = (ingredients) => {
  return ingredients.split(',')
        .map(ingredient => ingredient.trim())
        .sort()
}

export default ingredientsOrganizer;