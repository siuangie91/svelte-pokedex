<script lang="ts">
  import type { PokemonLookup } from 'src/types';
  import { capitalizeFirstLetter } from 'utils';

  export let pokemons: PokemonLookup = {};

  $: pokemonsList = Object.values(pokemons).sort((a, b) => a.id - b.id);
</script>

{#if !pokemonsList.length}
  <p>You haven't seen any Pokémon yet!</p>
{:else}
  <ul>
    {#each pokemonsList as { id, name }}
      <li>
        <p><a href={`/pokemon/${name}`} target="_blank">{id}. {capitalizeFirstLetter(name)}</a></p>
      </li>
    {/each}
  </ul>
{/if}
