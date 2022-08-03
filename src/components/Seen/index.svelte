<script lang="ts">
  import type { Pokemon } from 'src/types';
  import Container from 'components/shared/Container.svelte';
  import List from './List.svelte';

  export let entries: {
    [key: string]: Pokemon;
  } = {};
</script>

<Container title="Here's what you've seen so far:">
  <List pokemons={entries} />
</Container>
