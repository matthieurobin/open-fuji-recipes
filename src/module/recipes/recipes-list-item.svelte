<script>
  import RecipeStar                from './_recipe-star.svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  // props
  export let recipe;

  /**
   * handler for click event
   */
  function onClick () {
    dispatch('click', recipe);
  }
</script>

<div
  on:click={ onClick }
  class="rounded-lg overflow-hidden sm:cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
>
  <div class="flex flex-row items-center">
    <RecipeStar  recipe={ recipe } />
    <!--star class="ml-4" :isSelected="recipe.hasStar" @click.stop="onClickStar" /-->
    <div class="px-4 py-2 flex-1 flex flex-row flex-wrap block mt-1 text-md leading-tight font-medium text-black dark:text-white">
      <div class="mr-2">{ recipe.name }</div>
      <div class="text-gray-500 text-sm">{ recipe.creator }</div>
    </div>
  </div>
</div>
