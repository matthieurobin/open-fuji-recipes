<script>
  import { Slidy } from 'svelte-slidy';

  import NoImage   from './_recipe-no-image.svelte';

  export let recipe;

  let sliderConfig = {
    wrap : {
      height : '14rem'
    },

    slide : {
      gap       : 20,
      class     : 'rounded-lg', // classname for styling slide
      width     : '100%',
      backimg   : false, // if true image on background slidewrap & slot for content empty
      imgsrckey : 'src', // prop for ypurs image src key
      objectfit : 'contain', // new in 2.3.0
      overflow  : 'hidden' // new in 2.4.1
    },

    controls : {
      dots      : false,
      dotsnum   : false,
      dotsarrow : false,
      dotspure  : false, // dotnav like realy dots : )
      arrows    : false,
      keys      : true, // nav by arrow keys
      drag      : true, // nav by mousedrag
      wheel     : true, // nav by mousewheel (shift + wheel) or swipe on touch/trackpads
    },

    options: {
      axis     : 'x', // new in 2.2.0 axis direction
      loop     : false, // new in 2.3.0 loop/no options
      duration : 500, // duration slides animation
    }
  };
</script>

{#if recipe.images}
  <div class="mb-4">
    <Slidy slides={ recipe.images } { ...sliderConfig } let:item>
      <img alt="" src={ item.src } />
    </Slidy>
  </div>
{:else}
  <NoImage />
{/if}
