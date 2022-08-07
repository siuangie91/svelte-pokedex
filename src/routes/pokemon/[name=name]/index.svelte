<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { capitalizeFirstLetter } from 'utils';
  import { getPokemonByName, getSpeciesByName } from 'utils/network';

  const { name } = $page.params;

  let failedFetch = false;

  let id: number | null = null;
  let image: string = '';
  let types: PokemonAPI.Type[] = [];
  let description: string = '';

  onMount(async () => {
    const pokemon = await getPokemonByName(name);
    if (!pokemon) {
      failedFetch = true;
      return;
    }

    const species = await getSpeciesByName(name);
    if (!species) {
      failedFetch = true;
      return;
    }

    ({ types, id } = pokemon);
    const { sprites } = pokemon;

    image = sprites.other.dream_world.front_default;

    description = species.flavor_text_entries
      .filter(({ language }) => language.name === 'en')
      .map(({ flavor_text }) => flavor_text)
      .at(-1)!;
  });

  $: capitalizedName = name && capitalizeFirstLetter(name);
</script>

<!-- TODO refactor into separate components -->
<main>
  {#if failedFetch}
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
          <li>{type.name}</li>
        {/each}
      </ul>
    {/if}

    {#if description}
      <h2>Description</h2>
      <p>{description}</p>
    {/if}
  {/if}
</main>
