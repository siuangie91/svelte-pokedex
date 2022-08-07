<script lang="ts">
  import type { PokemonLookupGQL } from 'src/types';
  import { capitalizeFirstLetter } from 'utils';

  export let pokemons: PokemonLookupGQL = {};

  $: pokemonsList = Object.values(pokemons).sort((a, b) => a.id - b.id);
</script>

{#if !pokemonsList.length}
  <p>You haven't seen any Pokémon yet!</p>
{:else}
  <ul>
    {#each pokemonsList as { id, name, image }}
      <li>
        <p>
          <a href={`/pokemon/${name}`} target="_blank">
            <span>{id}. {capitalizeFirstLetter(name)}</span>
            <img src={image} alt={name} />
          </a>
        </p>
      </li>
    {/each}
  </ul>
{/if}
