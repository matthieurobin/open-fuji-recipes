<script>
  import { _ }          from 'svelte-i18n';
  import { store }      from '../../stores/storeRecipes.js';
  import RecipeListItem from './recipes-list-item.svelte';
  import RecipeView     from './recipe.svelte';
  import VirtualList    from '@sveltejs/svelte-virtual-list';

  let recipes        = [];
  let selectedRecipe = null;

  store.subscribe(values => {
    recipes = values;
  });

  /**
   * Hanlder for click event from RecipeListItemisFiltersOpen
   */
  function onSelectRecipe ({ detail }) {
    selectedRecipe = detail;
  }

  /**
   * Handler for close event from RecipeView
   */
  function onClosePanel () {
    selectedRecipe = null;
  }
</script>

<div class="flex-1 overflow-hidden flex flex-col">
  <div class="flex-1 overflow-y-auto w-full">
    <VirtualList items={ recipes } let:item>
      <RecipeListItem
        recipe={ item }
        on:click={ onSelectRecipe }
      />
    </VirtualList>
  </div>
</div>

{#if selectedRecipe }
  <RecipeView
    on:close={ onClosePanel }
    recipe={ selectedRecipe }
  />
{/if}
