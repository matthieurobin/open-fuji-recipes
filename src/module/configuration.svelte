<script>
  import { _, locale }         from 'svelte-i18n';
  import Panel                 from '../components/panel.svelte';
  import { get }               from 'svelte/store';
  import { store, getLocales } from '../stores/storeConfig.js';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let config  = get(store);
  let locales = getLocales();

  /**
   * Handler for blur event
   * Update local in config store and for i18n library
   * @param {Object} event event
   */
  function updateLocale (event) {
    let newLocale = event.target.value;
    store.update(config => {
      config.locale = newLocale;

      return config;
    });
    locale.set(newLocale);
  }

  function onClose () {
    dispatch('close');
  }
</script>

<Panel on:close>
  <svelte:fragment slot="title">
    { $_('Configuration') }
  </svelte:fragment>

  <div class="mt-2">
    <label class="font-semibold" for="select-locale">{ $_('Lang') }</label>
    <select
      class="mt-2 block w-full pl-3 pr-10 py-2 bg-white border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600"
      bind:value={ config.locale }
      on:blur={ updateLocale }
      id="select-locale"
    >
      {#each locales as locale}
        <option value={ locale.id }>
          { locale.label }
        </option>
      {/each}
    </select>
  </div>

  <svelte:fragment slot="footer">
    <span
      class="bg-blue-500 hover:bg-blue-600 text-white shadow-sm rounded px-2 py-2 sm:cursor-pointer"
      on:click={ onClose }
    >
      { $_('button.save') }
    </span>
  </svelte:fragment>
</Panel>
