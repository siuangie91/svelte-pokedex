<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { capitalizeFirstLetter } from 'utils';
  import { getPokemonById } from 'utils/network';

  const id = Number($page.params.id);

  let failedFetch = false;

  let name: string = '';
  let image: string = '';
  let types: PokemonAPI.Type[] = [];

  onMount(async () => {
    const data = await getPokemonById(id);
    console.log(data);

    if (!data) {
      failedFetch = true;
    } else {
      const { sprites } = data;
      ({ types, name } = data);

      image = sprites.other.dream_world.front_default;
    }
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
    <p><b>Types:</b></p>
    <ul>
      {#each types as { type }}
        <li>{type.name}</li>
      {/each}
    </ul>
  {/if}
</main>
