<script lang="ts">
  import Header from '$comps/common/Header.svelte';
  import Router from 'svelte-spa-router';
  import { routes } from './routes/routes';
</script>

<main>
  <Header />
  <Router {routes} />
</main>
