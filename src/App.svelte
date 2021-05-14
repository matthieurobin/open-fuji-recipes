<script>
  import { _ }         from 'svelte-i18n';
  import Footer        from './module/footer.svelte';
  import Recipes       from './module/recipes/recipes.svelte';
  import Configuration from './module/configuration.svelte';
  import FiltersHeader from './module/filters/filters-header.svelte';
  import FiltersPanel  from './module/filters/filters-panel.svelte';

  import { store }     from './stores/storeRecipes.js';

  let recipes = [];

  store.subscribe(values => {
    recipes = values;
  });

  let isConfigurationOpen = false;
  let isFiltersPanelOpen  = false;

  function toggleConfigurationPanel () {
    isConfigurationOpen = !isConfigurationOpen;
  }

  function toggleFiltersPanel () {
    isFiltersPanelOpen = !isFiltersPanelOpen;
  }
</script>

<FiltersHeader
  on:open-configuration={ toggleConfigurationPanel }
  on:open-filters={ toggleFiltersPanel }
>
  { recipes.length } { $_( recipes.length ? 'recipeN' : 'recipe1') }
</FiltersHeader>

<Recipes on:open-configuration={ toggleConfigurationPanel }/>
<Footer />

{#if isFiltersPanelOpen}
  <FiltersPanel on:close={ toggleFiltersPanel } />
{/if}
{#if isConfigurationOpen }
  <Configuration on:close={ toggleConfigurationPanel } />
{/if}
