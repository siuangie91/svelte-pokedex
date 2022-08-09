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

<style lang="postcss">
  li {
    @apply rounded;
    @apply bg-white/80;
    @apply px-2;
    @apply py-1;
    @apply mb-2;
  }

  a {
    @apply flex;
    @apply flex-row;
    @apply justify-between;
  }

  span {
    @apply inline-flex;
    @apply items-center;
  }
</style>
