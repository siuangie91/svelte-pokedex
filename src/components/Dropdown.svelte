<script lang="ts">
  import { onMount } from 'svelte';
  import type { Pokemon } from 'src/types';
  import { getFirst20PokemonEntries, flattenEntries, capitalizeFirstLetter } from 'utils';

  let failedFetch = false;
  let pokemonEntries: Pokemon[] | [] = [];

  onMount(async () => {
    const first20Entries = await getFirst20PokemonEntries();

    if (!first20Entries?.length) {
      failedFetch = true;
    } else {
      pokemonEntries = flattenEntries(first20Entries);
    }
  });
</script>

<!-- TODO style error -->
{#if failedFetch}
  <p>Oh no! We couldn't get the Pokémon list!</p>
{/if}

<!-- TODO style dropdown-->
<select>
  {#each pokemonEntries as { number, name }}
    <option value={name}>
      {number}. {capitalizeFirstLetter(name)}
    </option>
  {/each}
</select>
