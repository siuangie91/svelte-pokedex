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
  let evolution: string[] = [];
  let capitalizedName: string = '';

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

    evolution = evolutionChain.chain.map(({ name }) => name);
  });

  capitalizedName = name && capitalizeFirstLetter(name);
</script>

<svelte:head>
  <title>Svelte Pokédex - {capitalizedName}</title>
</svelte:head>

<!-- TODO refactor into separate components -->
{#if failedFetch}
  <p>Oh no! We couldn't get that Pokémon!</p>
{/if}

{#if typeof id !== 'number'}
  <div />
{:else}
  <Card {id} name={capitalizedName} {image} {types} {evolution} {description} />
{/if}
