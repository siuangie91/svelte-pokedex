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
  <p data-testid="no-seen-yet-text">You haven't seen any Pokémon yet!</p>
{:else}
  <ul>
    {#each pokemonsList as { id, name, image }}
      <li>
        <p>
          <a href={`/pokemon/${name}`} target="_blank">
            <span class="id-name">{id}. {capitalizeFirstLetter(name)}</span>
            <img src={image} alt={name} />
            <!-- use html entities to create open in new tab icon -->
            <span aria-hidden="true" class="link-icon">
              <span>&#9744</span><!-- ☐ -->
              <span class="link-icon-arrow">&#8599;</span><!-- ↗ -->
            </span>
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
    @apply no-underline;
  }

  span {
    @apply inline-flex;
    @apply items-center;
  }

  span.id-name {
    @apply col-span-7;
    @apply sm:col-span-9;
    @apply underline;
    @apply underline-offset-4;
    @apply hover:no-underline;
  }

  span.link-icon {
    @apply col-span-1;
    @apply no-underline;
  }

  img {
    @apply h-14;
    @apply col-span-2;
  }

  .link-icon-arrow {
    @apply relative;
    top: -0.2rem;
    left: -0.5rem;
  }
</style>
