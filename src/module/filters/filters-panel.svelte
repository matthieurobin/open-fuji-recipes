<script>
  import Panel        from '../../components/panel.svelte';
  import FilterValues from './_filters-values.svelte';

  import { _ }     from 'svelte-i18n';

  import { store }                 from '../../stores/storeFilters.js';
  import { store as storeSensors } from '../../stores/storeSensors.js';
  import { store as storeFilms }   from '../../stores/storeFilms.js';
  import { get }                   from 'svelte/store';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let filterStarValues = [
    { value : null, label : $_('filter.all')  },
    { value : true, label : $_('filter.star') }
  ];
  let sensors = [
    { value : null, label : $_('filter.all'), cameras : [] },
    ...storeSensors
  ];
  let films = [
    { value : null, label : $_('filter.all') },
    ...storeFilms
  ];

  let storeValue = get(store);
  let model = {
    isOnlyStars : storeValue.isOnlyStars || null,
    sensor      : storeValue.sensor      || null,
    film        : storeValue.film        || null
  };

  /**
   * Handler for click on close button
   */
  function onClose () {
    dispatch('close');
  }

  /**
   * Handler for click on save button
   */
   function onSave () {
    store.update(config => {
      return Object.assign(config, model);
    });
    onClose();
  }
</script>

<Panel on:close>
  <svelte:fragment slot="title">
    { $_('Filters') }
  </svelte:fragment>

  <FilterValues
    bind:value={ model.isOnlyStars }
    bind:filterValues={ filterStarValues }
  >
    <svelte:fragment slot="header">
      { $_('Recipes') }
    </svelte:fragment>
  </FilterValues>

  <FilterValues
    bind:value={ model.sensor }
    bind:filterValues={ sensors }
    direction="flex-col"
  >
    <svelte:fragment slot="header">
      { $_('filter.sensor') }
    </svelte:fragment>

    <svelte:fragment slot="item" let:filterValue={ filterValue }>
      { filterValue.label } <br><span class="text-sm">{ filterValue.cameras.join(', ') }</span>
    </svelte:fragment>
  </FilterValues>

  <FilterValues
    bind:value={ model.film }
    bind:filterValues={ films }
  >
    <svelte:fragment slot="header">
      { $_('filter.simulation') }
    </svelte:fragment>
  </FilterValues>

  <svelte:fragment slot="footer">
    <span
      class="bg-gray-100 hover:bg-gray-200 shadow-sm rounded px-2 py-2 sm:cursor-pointer mr-2 dark:text-black"
      on:click={ onClose }
    >
      { $_('button.close') }
    </span>
    <span
      class="bg-blue-500 hover:bg-blue-600 text-white shadow-sm rounded px-2 py-2 sm:cursor-pointer"
      on:click={ onSave }
    >
      { $_('button.save') }
    </span>
  </svelte:fragment>
</Panel>
