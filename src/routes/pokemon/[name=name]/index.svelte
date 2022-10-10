<script context="module" lang="ts">
  import type { LoadEvent } from '@sveltejs/kit';
  import type { PokemonStats } from 'src/types';
  import pokemonQuery from 'src/queries/pokemonQuery';

  export async function load({ fetch, params }: LoadEvent) {
    const name = params.name?.toLowerCase();

    const response = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
      method: 'POST',
      body: JSON.stringify({
        query: pokemonQuery,
        variables: {
          id: name,
        },
        operationName: 'Pokemon',
      }),
    });

    const { data } = await response.json();

    const pokemon: PokemonStats | null = data?.pokemon?.[0] ?? null;

    if (!pokemon) {
      throw new Error(`${name} not found`);
    }

    return {
      props: {
        pokemon,
      },
    };
  }
</script>

<script lang="ts">
  import { capitalizeFirstLetter } from 'utils';
  import Card from 'components/Card/index.svelte';

  export let pokemon: PokemonStats;

  const { id, images, name, species, types } = pokemon;

  const image = JSON.parse(images[0].sprites).front_default;

  const { descriptions, evolutionChain } = species;

  const descriptionSet = new Set<string>();
  descriptions.forEach(({ text }) => {
    descriptionSet.add(text);
  });

  let description: string = '';
  descriptionSet.forEach(desc => {
    description += ` ${desc}`;
  });

  const evolutions = evolutionChain.chain.map(({ name }) => name);

  let failedFetch = false;
</script>

<svelte:head>
  <title>Svelte Pokédex - {capitalizeFirstLetter(name)}</title>
</svelte:head>

<!-- TODO refactor into separate components -->
{#if failedFetch}
  <section class="error">
    <h2>Sorry!</h2>
    <p>Oh no! We couldn't get that Pokémon!</p>
  </section>
{/if}

{#if typeof id !== 'number'}
  <div />
{:else}
  <Card {id} {name} {image} {types} {evolutions} {description} />
{/if}

<style lang="postcss">
  .error {
    @apply mx-auto;
    max-width: 400px;
  }
  .error h2 {
    @apply mt-0;
  }
</style>
