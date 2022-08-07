<script lang="ts">
  import type { PokemonLookup } from 'src/types';
  import Selection from 'components/Selection/index.svelte';
  import Seen from 'components/Seen/index.svelte';

  const entries: PokemonLookup = {};

  // TODO test
  const handleAdd = (event: CustomEvent) => {
    const entry = event.detail;
    console.log('event', event.detail);
    const { name } = entry;

    if (!entries[name]) {
      entries[name] = entry;
    }

    // TODO delete
    console.log('entries', entries);
  };
</script>

<svelte:head>
  <title>Svelte Pokédex</title>
</svelte:head>

<main>
  <h1>Svelte Pokédex</h1>
  <Selection entryAddedHandler={handleAdd} />
  <Seen {entries} />
</main>

<style>
  :global(*) {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :global(html) {
    background: url(http://pngimg.com/uploads/pokeball/pokeball_PNG8.png) no-repeat;
    background-position: center center;
    background-size: contain;
  }

  :global(body) {
    background: rgba(255, 255, 255, 0.5);
  }

  main {
    padding: 10px;
    text-align: center;
  }

  h1 {
    margin: 10px auto;
  }
</style>
