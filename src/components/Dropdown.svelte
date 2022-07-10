<script lang="ts">
  import axios from 'axios';
  import { onMount } from 'svelte';
  import type { Pokemon } from 'src/types';
  import { flattenEntries, capitalizeFirstLetter } from 'src/utils';

  let failedFetch = false;
  let pokemonEntries: PokemonAPI.Entry[] | [] = [];
  let flattenedEntries: Pokemon[] | [] = [];

  const getPokemonEntries = async () => {
    try {
      const { data } = await axios.get<PokemonAPI.ApiResponse>('https://pokeapi.co/api/v2/pokedex/1');

      const { pokemon_entries } = data;

      pokemonEntries = pokemon_entries.length ? pokemon_entries.slice(0, 20) : [];
    } catch (error) {
      console.error(error);
      failedFetch = true;
    }
  };

  onMount(async () => {
    await getPokemonEntries();
    flattenedEntries = flattenEntries(pokemonEntries);
  });
</script>

<!-- TODO style error -->
{#if failedFetch}
  <p>Oh no! We couldn't get the Pokémon list!</p>
{/if}

<!-- TODO style dropdown-->
<select>
  {#each flattenedEntries as { number, name }}
    <option value={name}>
      {number}. {capitalizeFirstLetter(name)}
    </option>
  {/each}
</select>
