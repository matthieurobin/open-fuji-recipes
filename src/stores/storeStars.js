import { writable } from 'svelte/store';
import constants    from '../helpers/constants.js';
import { get, set } from '../helpers/localStorage.js';

const stars = get(constants.LOCAL_STORAGE_STARS) || [];

const storeStars = writable(stars);

storeStars.subscribe(stars => {
  set(constants.LOCAL_STORAGE_STARS, stars);
});

export const store = storeStars;

export function addStar (recipeId) {
  storeStars.update(stars => {
    stars.push(recipeId);
    return stars;
  });
}

export function removeStar (recipeId) {
  storeStars.update(stars => {
    let index = stars.indexOf(recipeId);

    if (index === -1) {
      return;
    }

    stars.splice(index, 1);
    return stars;
  });
}
