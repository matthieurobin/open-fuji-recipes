<script>
  import constants from '../../helpers/constants.js';
  import { _ }     from 'svelte-i18n';
</script>

<div class="p-4 mb-5 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-lg text-center">
  <div class="mb-2">{ $_('image.none') }</div>
  <div>
    { $_('image.contribute') }
    <a href={ constants.gitUrl } target="_blank" class="text-blue-400">{ $_('image.project') }</a>
    { $_('image.submit') }
  </div>
</div>
