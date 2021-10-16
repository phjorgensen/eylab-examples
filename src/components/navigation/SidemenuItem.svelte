<script lang="ts">
  import { location } from 'svelte-spa-router';

  export let text: string;
  export let path: string;
</script>

<li>
  <a href="#{path}" class:selected={$location === path}>{text}</a>
</li>

<style lang="postcss">
  a {
    @apply text-white px-3 py-2 rounded;
  }

  a:hover {
    @apply bg-blue-500;
  }

  a.selected {
    @apply bg-blue-600;
  }
</style>
