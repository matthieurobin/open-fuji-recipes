import { addMessages, init } from 'svelte-i18n';
import locales               from './locales/_locales.js';
import { get }               from 'svelte/store';
import { store }             from './stores/storeConfig.js';

import './index.css';
import App from './App.svelte';

// Init i18n
for (let key in locales) {
  addMessages(key, locales[key]);
}
init({
  fallbackLocale : 'en',
  initialLocale  : get(store).locale
});

const app = new App({
  target: document.getElementById('app')
});

export default app;
