import { getLocaleFromNavigator } from 'svelte-i18n';
import { writable } from 'svelte/store';
import constants    from '../helpers/constants.js';
import { get, set } from '../helpers/localStorage.js';
import locales      from '../locales/_locales.js';

let storeConfig = writable(
  get(constants.LOCAL_STORAGE_CONFIG) || {
    locale : getLocaleFromNavigator() || 'en'
  }
);

storeConfig.subscribe(config => {
  set(constants.LOCAL_STORAGE_CONFIG, config);
});

export const store = storeConfig;

/**
 * Get locales
 * @returns {Array} [{ id : 'locale', label : 'localeLabel' }]
 */
export function getLocales ()  {
  let _locales = [];

  for (let locale in locales) {
    _locales.push({
      id    : locale,
      label : locales[locale].localeLabel
    });
  }

  return _locales;
}
