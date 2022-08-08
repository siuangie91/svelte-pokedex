<script lang="ts">
  import type { Type } from 'src/types';
  import { capitalizeFirstLetter } from 'utils';

  export let id: number;
  export let name: string;
  export let image: string | null = null;
  export let types: Type[] = [];
  export let evolution: string[] = [];
  export let description: string = '';
</script>

<h1>{id}. {name}</h1>

{#if image}
  <img src={image} alt={`${name}`} />
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
