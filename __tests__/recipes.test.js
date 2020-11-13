import express from 'express';
import request from 'supertest';
import recipesRouter from '../src/routes/recipes.routes.js';

const app = express();
app.use('/recipes', recipesRouter);

describe('Recipe API', () => {

  it('Should return recipes', async () => {
    const response = await request(app).get('/recipes/?i=chicken,tomatoes');

    expect(response.status).toBe(200);
    expect(response.body.recipes).not.toBeNull();
  });

  it('Should return an error with no query param provided', async () => {
    const response = await request(app).get('/recipes/?i=');

    expect(response.body.code).toBe(400);
    expect(response.body.message).toBe('INVALID_PARAMS');
  });

  it('Should return an error when it did not find any recipes', async () => {
    const response = await request(app).get('/recipes/?i=norecipe');

    expect(response.body.code).toBe(400);
    expect(response.body.message).toBe('BAD_RESPONSE - no recipes founded!');
  });

  it('Should return an error with more than 3 ingredients provided as query param', async () => {

    const response = await request(app).get('/recipes?i=onion,tomato,cheese,avocado');

    expect(response.body.code).toBe(400);
    expect(response.body.message).toBe('INVALID_PARAMS - you must insert 3 or less ingredients!');
  });
});

describe('Response structure', () => {

  it('Should return body with recipes and keywords properties', async () => {
    const response = await request(app).get('/recipes/?i=chicken,tomatoes');

    expect(response.body).toHaveProperty('recipes');
    expect(response.body.recipes).toBeInstanceOf(Array);
    expect(response.body).toHaveProperty('keywords');
    expect(response.body.keywords).toBeInstanceOf(Array);
  });

  it('Should return recipes with title, ingredients, link and gif properties', async () => {
    const response = await request(app).get('/recipes/?i=chicken,tomatoes');

    expect(response.body.recipes[0]).toHaveProperty('title');
    expect(response.body.recipes[0]).toHaveProperty('ingredients');
    expect(response.body.recipes[0]).toHaveProperty('link');
    expect(response.body.recipes[0]).toHaveProperty('gif');
  });

  it('Keywords property should be alphabetically sorted', async () => {
    const response = await request(app).get('/recipes/?i=tomatoes,chicken');

    expect(response.body.keywords[0]).toBe('chicken');
  });

  it('Ingredients at recipes property should be array', async () => {
    const response = await request(app).get('/recipes/?i=tomatoes,chicken');

    expect(response.body.recipes[0].ingredients).toBeInstanceOf(Array);
  });
});