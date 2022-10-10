<script context="module" lang="ts">
  import type { LoadEvent } from '@sveltejs/kit';
  import type { Generation1 } from 'src/types';
  import { POKEAPI_GQL_URL } from 'src/network';
  import first20Gen1Query from 'src/queries/first20Gen1Query';

  export async function load({ fetch }: LoadEvent) {
    const response = await fetch(POKEAPI_GQL_URL, {
      method: 'POST',
      body: JSON.stringify({
        query: first20Gen1Query,
        variables: {
          id: 1,
        },
        operationName: 'First20Gen1',
      }),
    });

    const { data } = await response.json();

    const gen1: Generation1 | null = data?.gen1 ?? null;

    console.log('data', gen1);

    if (!gen1) {
      throw new Error('failed getting pokedex');
    }

    return {
      props: {
        gen1,
      },
    };
  }
</script>

<script lang="ts">
  import Selection from 'components/Selection/index.svelte';
  import Seen from 'components/Seen/index.svelte';
</script>

<svelte:head>
  <title>Svelte Pokédex</title>
</svelte:head>

<h1>Svelte Pokédex</h1>
<div>
  <Selection />
  <Seen />
</div>

<style lang="postcss">
  h1 {
    @apply text-center;
  }

  div {
    @apply mx-auto;
    max-width: 1200px;
  }

  @media screen(sm) {
    div {
      @apply grid;
      @apply grid-cols-2;
      @apply gap-4;
      min-height: 50vh;
    }
  }
</style>
