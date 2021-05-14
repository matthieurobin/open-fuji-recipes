import { writable } from 'svelte/store';
import { get }      from 'svelte/store';
import recipes      from './data/recipes.js';

import { store as storeFilters } from './storeFilters.js';
import { store as storeStars   } from './storeStars.js';

recipes.forEach(recipe => {
  recipe.hasStar = false;
});

/**
 * Get all recipes
 * @param {Object} queryFilter
 * @returns
 */
function getAll (queryFilter) {
  let filteredData = [];

  for (let i = 0; i < recipes.length; i++) {
    let recipe = recipes[i];

    if (queryFilter.search) {
      if (!recipe.name.toLowerCase().includes(queryFilter.search.toLowerCase())) {
        continue;
      }
    }

    if (queryFilter.sensor && recipe.sensor > queryFilter.sensor) {
      continue;
    }

    if (queryFilter.type && recipe.type !== queryFilter.type) {
      continue;
    }

    if (queryFilter.film && recipe.film !== queryFilter.film) {
      continue;
    }

    get(storeStars).forEach(starKey => {
      if (recipe.id === starKey) {
        recipe.hasStar = true;
      }
    });

    if (queryFilter.isOnlyStars && recipe.hasStar !== true) {
      continue;
    }

    filteredData.push(recipe);
  };

  return filteredData;
}


let storeRecipes = writable(getAll(get(storeFilters)));

storeFilters.subscribe(filters => {
  storeRecipes.set(getAll(filters));
});

storeStars.subscribe(stars => {
  recipes.forEach(recipe => {
    recipe.hasStar = stars.indexOf(recipe.id) > -1;
  });

  storeRecipes.set(getAll(get(storeFilters)));
});

export const store = storeRecipes;
