<script>
  export let value;
  export let filterValues;
  export let direction = 'flex-row';

  function onSelectValue (filterValue) {
    value = filterValue;
  }
</script>

<div class="mb-1">
  <div class="font-semibold">
    <slot name="header"></slot>
  </div>
  <div class="flex overflow-y-auto pt-2 pb-4 { direction }">
    {#each filterValues as filterValue}
      <div
        class="flex-shrink-0 py-1 px-3 mr-3 rounded border-2 sm:cursor-pointer"
        class:mb-1={ direction === 'flex-col' }
        class:border-blue={ filterValue.value === value }
        on:click={ onSelectValue(filterValue.value) }
      >
        <slot name="item" filterValue={ filterValue }>
          { filterValue.label }
        </slot>
      </div>
    {/each}
  </div>
</div>
