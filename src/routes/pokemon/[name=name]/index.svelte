<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import type { PokemonStats, Type } from 'src/types';
  import pokemonQuery from 'src/queries/pokemonQuery';
  import { capitalizeFirstLetter } from 'utils';
  import { fetchGraphQL } from 'network';

  import Card from 'components/Card/index.svelte';

  const name = $page.params.name.toLowerCase();

  let failedFetch = false;

  let id: number | null = null;
  let image: string = '';
  let types: Type[] = [];
  let description: string = '';
  let evolutions: string[] = [];

  onMount(async () => {
    const result = await fetchGraphQL<{ data: PokemonStats }>(
      pokemonQuery,
      {
        id: name,
      },
      'Pokemon',
    );

    if (!result?.data?.pokemon?.length) {
      failedFetch = true;
      throw new Error('Could not fetch pokemon stats');
    }

    const { data } = result;
    const { pokemon } = data;

    ({ id, types } = pokemon[0]);
    const { species, images } = pokemon[0];

    image = JSON.parse(images[0].sprites).front_default;

    const { descriptions, evolutionChain } = species;

    const descriptionSet = new Set<string>();
    descriptions.forEach(({ text }) => {
      descriptionSet.add(text);
    });

    descriptionSet.forEach(desc => {
      description += ` ${desc}`;
    });

    evolutions = evolutionChain.chain.map(({ name }) => name);
  });
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
    @apply p-4;
    @apply bg-red-800;
    @apply rounded-md;
    @apply text-white;
    @apply shadow-lg;
    @apply shadow-slate-600;
  }

  .error h2 {
    @apply mt-0;
  }
</style>
