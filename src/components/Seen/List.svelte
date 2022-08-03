<script lang="ts">
  import type { PokemonLookup } from 'src/types';

  export let pokemons: PokemonLookup = {};

  $: pokemonsList = Object.values(pokemons).sort((a, b) => a.id - b.id);
</script>

{#if !pokemonsList.length}
  <p>You haven't seen any Pokémon yet!</p>
{:else}
  <ul>
    {#each pokemonsList as { id, name, url }}
      <li>
        <p><a href={url} target="_blank">{id}. {name}</a></p>
      </li>
    {/each}
  </ul>
{/if}
