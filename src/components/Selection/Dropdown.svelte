<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import type { Generation1, Summary, PokemonLookup } from 'src/types';
  import first20Gen1Query from 'queries/first20Gen1Query';
  import { createLookupByNameGql, capitalizeFirstLetter } from 'utils';
  import { fetchGraphQL } from 'network';

  let failedFetch = false;

  let pokemonLookup: PokemonLookup = {};
  let pokemonEntries: Summary[] = [];

  onMount(async () => {
    const result = await fetchGraphQL<{ data: Generation1 }>(first20Gen1Query, { id: 1 }, 'First20Gen1');

    if (!result?.data?.gen1?.species?.length) {
      failedFetch = true;
      return;
    }
    const { data } = result;
    const { gen1 } = data;

    console.log('gen1', gen1);

    pokemonLookup = createLookupByNameGql(gen1.species);

    pokemonEntries = Object.entries(pokemonLookup).map(([, data]) => data);
  });

  let selected = pokemonEntries[0]?.name || '';

  $: console.log('selected', selected);
  $: console.log('lookup', pokemonLookup);

  const dispatch = createEventDispatcher();

  // TODO test
  const addToSeen = (name: string) => {
    const pokemon = pokemonLookup?.[name] || null;
    if (!pokemon) return;

    dispatch('add', pokemon);

    pokemonEntries = pokemonEntries.filter(entry => entry.name !== name);
  };
</script>

<!-- TODO style error -->
{#if failedFetch}
  <p>Oh no! We couldn't get the Pokémon list!</p>
{/if}

<!-- TODO style dropdown-->
<select bind:value={selected}>
  {#each pokemonEntries as { id, name }}
    <option value={name}>
      {id}. {capitalizeFirstLetter(name)}
    </option>
  {/each}
</select>

<button on:click={() => addToSeen(selected)}> + Add to List </button>

<style lang="postcss">
  select,
  button {
    @apply block;
    @apply w-full;
    @apply h-12;
    @apply mb-2;
    @apply px-2;
    @apply rounded;
  }

  button {
    @apply bg-cyan-800;
    @apply text-white;
  }
</style>
