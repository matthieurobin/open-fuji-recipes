import constants    from '../helpers/constants.js';
import { get, set } from '../helpers/localStorage.js';
import { writable } from 'svelte/store';

const storeFilters = writable(get(constants.LOCAL_STORAGE_QUERY) || {
  search      : '',
  isOnlyStars : false,
  sensor      : 0,
  film        : null
});

storeFilters.subscribe(filters => {
  set(constants.LOCAL_STORAGE_QUERY, filters);
});

export const store = storeFilters;
