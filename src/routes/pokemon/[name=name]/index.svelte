<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import type { PokemonStats, Type } from 'src/types';
  import pokemonQuery from 'src/queries/pokemonQuery';
  import { capitalizeFirstLetter } from 'utils';
  import { fetchGraphQL } from 'network';

  const { name } = $page.params;

  let failedFetch = false;

  let id: number | null = null;
  let image: string = '';
  let types: Type[] = [];
  let description: string = '';
  let evolution: string[] = [];

  onMount(async () => {
    const result = await fetchGraphQL<{ data: PokemonStats }>(
      pokemonQuery,
      {
        id: name,
      },
      'Pokemon',
    );

    if (!result?.data?.pokemon?.length) {
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

  $: capitalizedName = name && capitalizeFirstLetter(name);
</script>

<svelte:head>
  <title>Svelte Pokédex - {capitalizedName}</title>
</svelte:head>

<!-- TODO refactor into separate components -->
<main>
  {#if failedFetch || typeof id !== 'number'}
    <p>Oh no! We couldn't get that Pokémon!</p>
  {:else}
    <h1>{id}. {capitalizedName}</h1>

    {#if image}
      <img src={image} alt={`${capitalizedName}`} />
    {/if}

    {#if types.length}
      <h2>Types</h2>
      <ul>
        {#each types as { type }}
          <li>{capitalizeFirstLetter(type.name)}</li>
        {/each}
      </ul>
    {/if}

    {#if evolution.length}
      <h2>Evolution</h2>
      <ol>
        {#each evolution as name}
          <li>{capitalizeFirstLetter(name)}</li>
        {/each}
      </ol>
    {/if}

    {#if description}
      <h2>Description</h2>
      <p>{description}</p>
    {/if}
  {/if}
</main>
