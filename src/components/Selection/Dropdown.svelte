<script lang="ts">
  import gql from 'gql-tag';
  import { onMount, createEventDispatcher } from 'svelte';
  import type { Generation1, PokemonGQL, PokemonLookupGQL } from 'src/types';
  import { createLookupByNameGql, capitalizeFirstLetter } from 'utils';
  import { fetchGraphQL } from 'utils/network';

  let failedFetch = false;

  let pokemonLookup: PokemonLookupGQL = {};
  let pokemonEntries: PokemonGQL[] = [];

  const first20Gen1Query = gql`
    query First20Gen1($id: Int!) {
      gen1: pokemon_v2_generation_by_pk(id: $id) {
        name
        species: pokemon_v2_pokemonspecies(limit: 20, order_by: { id: asc }) {
          pokemon: pokemon_v2_pokemons(limit: 1) {
            id
            name
            forms: pokemon_v2_pokemonforms {
              sprites: pokemon_v2_pokemonformsprites {
                sprites
              }
            }
          }
        }
      }
    }
  `;

  onMount(async () => {
    const result = await fetchGraphQL<{ data: Generation1 }>(first20Gen1Query, { id: 1 }, 'First20Gen1');

    if (!result?.data?.gen1?.species?.length) {
      failedFetch = true;
      return;
    }
    const { data } = result;
    const { gen1 } = data;

    console.log('gen1', gen1);

    pokemonLookup = createLookupByNameGql(gen1.species);

    pokemonEntries = Object.entries(pokemonLookup).map(([, data]) => data);
  });

  let selected = pokemonEntries[0]?.name || '';

  $: console.log('selected', selected);
  $: console.log('lookup', pokemonLookup);

  const dispatch = createEventDispatcher();

  // TODO test
  const addToSeen = (name: string) => {
    const pokemon = pokemonLookup?.[name] || null;
    if (!pokemon) return;

    const { id } = pokemon;
    dispatch('add', {
      id,
      name,
    });

    pokemonEntries = pokemonEntries.filter(entry => entry.id !== id);
  };
</script>

<!-- TODO style error -->
{#if failedFetch}
  <p>Oh no! We couldn't get the Pokémon list!</p>
{/if}

<!-- TODO style dropdown-->
<select bind:value={selected}>
  {#each pokemonEntries as { id, name }}
    <option value={name}>
      {id}. {capitalizeFirstLetter(name)}
    </option>
  {/each}
</select>

<button on:click={() => addToSeen(selected)}> + Add to List </button>
