<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { capitalizeFirstLetter } from 'utils';
  import { getPokemonById, getSpeciesById } from 'utils/network';

  const id = Number($page.params.id);

  let failedFetch = false;

  let name: string = '';
  let image: string = '';
  let types: PokemonAPI.Type[] = [];
  let description: string = '';

  onMount(async () => {
    const pokemon = await getPokemonById(id);
    if (!pokemon) {
      failedFetch = true;
      return;
    }

    const species = await getSpeciesById(id);
    if (!species) {
      failedFetch = true;
      return;
    }

    const { sprites } = pokemon;
    ({ types, name } = pokemon);

    image = sprites.other.dream_world.front_default;

    description = species.flavor_text_entries
      .filter(({ language }) => language.name === 'en')
      .map(({ flavor_text }) => flavor_text)
      .at(-1)!;
  });

  $: capitalizedName = name && capitalizeFirstLetter(name);
</script>

<main>
  <h1>{id}: {capitalizedName}</h1>

  {#if failedFetch}
    <p>Oh no! We couldn't get that Pokémon!</p>
  {/if}

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
</main>
