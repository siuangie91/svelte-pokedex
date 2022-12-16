<script lang="ts">
  import { page } from '$app/stores';

  const { pathname } = $page.url;
</script>

<svelte:head>
  <title>Svelte Pokédex - Error</title>
</svelte:head>

<main>
  <h1>Svelte Pokédex</h1>
  <p>Uh oh! The <code>{pathname}</code> route doesn't exist!</p>
</main>
