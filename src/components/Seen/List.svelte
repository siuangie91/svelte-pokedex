<script lang="ts">
  import { seenPokemon } from 'src/stores';
  import type { PokemonLookup } from 'src/types';
  import { capitalizeFirstLetter } from 'utils';

  let pokemons: PokemonLookup = {};

  seenPokemon.subscribe(seen => {
    if (!seen) return;
    pokemons = { ...seen };
  });

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
            <span class="col-span-1">&#10548;</span><!-- ⤴ -->
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

    @apply shadow-sm;
    @apply shadow-slate-500;
    @apply hover:shadow-none;
  }

  a {
    @apply grid;
    @apply grid-cols-10;
    @apply sm:grid-cols-12;

    /* @apply text-cyan-800;
    @apply underline;
    @apply hover:no-underline; */
  }

  span {
    @apply inline-flex;
    @apply items-center;

    @apply first-of-type:col-span-7;
    @apply sm:first-of-type:col-span-9;

    @apply last-of-type:col-span-1;
  }

  img {
    @apply h-14;

    @apply col-span-2;
  }
</style>
