<script lang="ts">
  import type { PokemonLookup } from 'src/types';
  import Container from 'components/shared/Container.svelte';
  import List from './List.svelte';

  export let entries: PokemonLookup = {};
</script>

<Container title="Here's what you've seen so far:">
  <List pokemons={entries} />
</Container>
