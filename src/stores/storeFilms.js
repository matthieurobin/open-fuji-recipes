import films from './data/film-simulations.js';
export const store = films.map(film => {
  return { value : film, label : film };
});
