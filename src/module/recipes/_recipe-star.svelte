<script>
  import { addStar, removeStar } from '../../stores/storeStars.js';

  export let recipe;

  const classNotSelected = 'dark:text-gray-400 text-gray-200 hover:text-yellow-200';
  const classSelected    = 'text-yellow-300';

  function onClickStar () {
    if (recipe.hasStar) {
      return removeStar(recipe.id);
    }

    addStar(recipe.id);
  }
</script>

<i
  class={ 'sm:cursor-pointer ml-4 icon-star text-2xl ' + (recipe.hasStar ? classSelected : classNotSelected) }
  on:click|stopPropagation={ onClickStar }
></i>
