<script>
  import { _ }    from 'svelte-i18n';
  import constants from '../helpers/constants';
</script>

<footer class="text-xs px-4 my-2 w-full text-gray-400 dark:text-gray-200 text-center">
  { $_('credits', { values : { author : constants.AUTHOR }}) }
  <a href={ constants.GIT_URL } class="text-blue-400 text-lg px-1" target="_blank" rel="noreferrer">
    <i class="icon-github"></i>
  </a>
  v{ constants.VERSION }
</footer>
