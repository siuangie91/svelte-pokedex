<script lang="ts">
  import type { Pokemon } from 'src/types';
  import Container from 'components/Container.svelte';
  import Dropdown from 'components/Dropdown.svelte';
  import List from 'components/List.svelte';

  const entries: {
    [key: string]: Pokemon;
  } = {};
</script>

<main>
  <h1>Svelte Pokédex</h1>
  <Container title="What Pokémon did you see?">
    <Dropdown
      on:add={event => {
        const entry = event.detail;
        console.log('event', event.detail);
        const { name } = entry;

        if (!entries[name]) {
          entries[name] = entry;
        }

        console.log('entries', entries);
      }}
    />
  </Container>
  <Container title="Here's what you've seen so far:">
    <List pokemons={entries} />
  </Container>
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
