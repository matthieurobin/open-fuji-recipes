<script>
  import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  /**
   * handler for click event on close icon
   */
  function onClickCLose () {
    dispatch('close');
  }
</script>

<div
  transition:scale={ { duration : 300, delay : 0, opacity : 0.5, start : 0.1, easing : quintOut }}
  class="bg-white dark:bg-gray-800 dark:text-white absolute top-0 right-0 left-0 flex flex-col h-full overflow-hidden"
>
  <div class="block mt-1 text-xl leading-tight font-medium text-black flex items-center px-4 py-4 dark:text-white">
    <span class="flex-1">
      <slot name="title" />
    </span>

    <svg on:click={ onClickCLose } xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" display="block" id="Cross"><path d="M20 20L4 4m16 0L4 20"/></svg>
  </div>

  <div class="flex-1 overflow-y-auto px-4 pb-4">
    <slot />
  </div>

  {#if $$slots.footer}
  <div class="px-4 py-2 flex flex-row justify-center border-t border-gray-100 dark:border-gray-700">
    <slot name="footer" />
  </div>
  {/if}
</div>
