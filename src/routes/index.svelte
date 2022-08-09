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

<h1>Svelte Pokédex</h1>
<div>
  <Selection entryAddedHandler={handleAdd} />
  <Seen {entries} />
</div>

<style lang="postcss">
  h1 {
    @apply text-center;
  }

  @media (min-width: 640px) {
    div {
      @apply grid;
      @apply grid-cols-2;
      @apply gap-4;
      min-height: 50vh;
    }
  }
</style>
