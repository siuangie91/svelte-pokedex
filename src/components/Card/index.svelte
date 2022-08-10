<script lang="ts">
  import type { Type } from 'src/types';
  import { capitalizeFirstLetter, TYPE_COLOR_LOOKUP } from 'utils';

  export let id: number;
  export let name: string;
  export let image: string | null = null;
  export let types: Type[] = [];
  export let evolution: string[] = [];
  export let description: string = '';
</script>

<section style="--card-bg-color: {TYPE_COLOR_LOOKUP[types[0].type.name].color}">
  <div>
    <h1>{id}. {name}</h1>

    {#if image}
      <img src={image} alt={`${name}`} />
    {/if}

    {#if types.length}
      <h2 class="card-h2">Types</h2>
      <ul class="list-types" style="--num-types: {types.length}">
        {#each types as { type }}
          <li
            style="--type-bg-color: {TYPE_COLOR_LOOKUP[type.name].color}; --type-text-color: {TYPE_COLOR_LOOKUP[
              type.name
            ].dark
              ? '#fff'
              : '#000'}"
          >
            {capitalizeFirstLetter(type.name)}
          </li>
        {/each}
      </ul>
    {/if}

    {#if evolution.length}
      <h2 class="card-h2">Evolution</h2>
      <ol class="list-evolution" style="--num-evolution: {evolution.length}">
        {#each evolution as stageName}
          <li style="--evolution-weight: {stageName.toLowerCase() === name.toLowerCase() ? 'bold' : 'normal'}">
            {capitalizeFirstLetter(stageName)}
          </li>
        {/each}
      </ol>
    {/if}

    {#if description}
      <h2 class="card-h2">Description</h2>
      <p class="description">{description}</p>
    {/if}
  </div>
</section>

<style lang="postcss">
  section {
    @apply mx-auto;
    @apply p-4;
    @apply rounded-lg;
    max-width: 350px;
    background: var(--card-bg-color);
  }

  div {
    @apply p-4;
    background-color: rgba(255, 255, 255, 0.75);
  }

  h1 {
    @apply m-0;
    @apply text-lg;
  }

  .card-h2 {
    @apply text-sm;
  }

  img {
    @apply block;
    @apply w-3/4;
    @apply mx-auto;
  }

  .list-types,
  .list-evolution {
    @apply grid;
    @apply gap-4;
  }

  li {
    @apply text-sm;
  }

  .list-types {
    grid-template-columns: repeat(var(--num-types), minmax(0, 1fr));
  }
  .list-types li {
    background-color: var(--type-bg-color);
    color: var(--type-text-color);
    @apply rounded-sm;
    @apply text-center;
    @apply p-1;
  }

  .list-evolution {
    grid-template-columns: repeat(var(--num-evolution), minmax(0, 1fr));
  }
  .list-evolution li {
    @apply relative;
    @apply rounded-sm;
    @apply text-center;

    @apply after:content-['→'];
    @apply after:absolute;
    @apply after:-right-3.5;
    @apply after:font-normal;

    @apply last-of-type:after:content-none;

    font-weight: var(--evolution-weight);
  }

  .description {
    @apply text-sm;
  }
</style>
