<script lang="ts">
  import type { PokemonLookupGQL } from 'src/types';
  import Container from 'components/shared/Container.svelte';
  import List from './List.svelte';

  export let entries: PokemonLookupGQL = {};
</script>

<Container title="Here's what you've seen so far:">
  <List pokemons={entries} />
</Container>
