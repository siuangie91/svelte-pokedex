<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import type { Pokemon } from 'src/types';
  import { getFirst20PokemonEntries, flattenEntries, createLookupByName, capitalizeFirstLetter } from 'utils';

  let failedFetch = false;
  let pokemonEntries: Pokemon[] | [] = [];

  let pokemonLookup: {
    [key: string]: Pokemon;
  } = {};

  onMount(async () => {
    const first20Entries = await getFirst20PokemonEntries();

    if (!first20Entries?.length) {
      failedFetch = true;
    } else {
      pokemonEntries = flattenEntries(first20Entries);
    }

    pokemonLookup = createLookupByName(pokemonEntries);
  });

  let selected = pokemonEntries[0]?.name;

  $: console.log('selected', selected);

  const dispatch = createEventDispatcher();

  const addToSeen = (name: string) => {
    const { id, url } = pokemonLookup?.[name];
    dispatch('add', {
      id,
      name,
      url,
    });

    pokemonEntries = pokemonEntries.filter(entry => entry.id !== id);
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
