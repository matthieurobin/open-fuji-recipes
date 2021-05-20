<script>
  import { _ }        from 'svelte-i18n';
  import { store }    from '../../stores/storeFilters';
  import { createEventDispatcher } from 'svelte';
  import { get }                   from 'svelte/store';
  const dispatch = createEventDispatcher();

  let inputValue = get(store).search;

  function clearInput () {
    inputValue = '';

    onSearch();
  }

  /**
   * Search recipes
   *  - Handler for event input
   *  - Handler for clear
   */
  function onSearch () {
    store.update(filters => {
      filters.search = inputValue;
      return filters;
    });
  }

  /**
   * Handler for click on gear
   */
  function openConfiguration () {
    dispatch('open-configuration');
  }

  /**
   * Handle for click on filter
   */
  function openFiltersPanel () {
    dispatch('open-filters');
  }
</script>

<header class="px-4 pt-4 pb-2 relative">
  <div class="flex flex-row items-center">
    <div class="flex-1 relative rounded-md shadow-sm">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span class="text-gray-500 text-md">
          <i class="icon-search"></i>
        </span>
      </div>

      <input
        type="text"
        class="dark:bg-gray-700 dark:text-white outline-none border focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 pr-12 border-gray-300 dark:border-gray-800 rounded-md p-1.5"
        placeholder={ $_('filter.search') }
        bind:value={ inputValue }
        on:input={ onSearch }
      />

      {#if inputValue}
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center sm:cursor-pointer text-xl" on:click={ clearInput } >
          <i class="icon-cancel"></i>
        </div>
      {/if}
    </div>

    <div
      class="sm:cursor-pointer relative inline-block dark:text-white ml-2"
      on:click={ openFiltersPanel }
    >
      <i class="icon-filter"></i>
      { $_('Filter') }
    </div>

    <div
      class="ml-2 p-1.5 sm:cursor-pointer relative inline-block dark:text-white text-xl"
      on:click={ openConfiguration }
    >
      <i class="icon-cog"></i>
    </div>
  </div>

  <div class="px-1 pt-1 flex flex-row items-baseline">
    <div class="flex-1 text-sm dark:text-white">
      <span class="font-semibold"><slot /></span><span class="text-lg">🤘</span>
    </div>
  </div>
</header>
