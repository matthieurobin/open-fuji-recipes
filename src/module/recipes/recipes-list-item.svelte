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
  class="shadow mb-2 rounded-lg bg-white dark:bg-gray-700 overflow-hidden sm:cursor-pointer mx-4"
>
  <div class="flex flex-row items-center">
    <RecipeStar  recipe={ recipe } />
    <!--star class="ml-4" :isSelected="recipe.hasStar" @click.stop="onClickStar" /-->
    <div class="p-4 flex-1">

      <div class="block mt-1 text-md leading-tight font-medium text-black dark:text-white">
        { recipe.name }
        <span class="text-gray-400 text-xs">{ recipe.creator }</span>
      </div>
    </div>
  </div>
</div>
