<script lang="ts">
  import type { Type } from 'src/types';
  import { capitalizeFirstLetter } from 'utils';

  export let id: number;
  export let name: string;
  export let image: string | null = null;
  export let types: Type[] = [];
  export let evolution: string[] = [];
  export let description: string = '';

  // const gridTemplateColumns = `repeat(${types.length}, minmax(0, 1fr))`;
</script>

<section>
  <div>
    <h1>{id}. {name}</h1>

    {#if image}
      <img src={image} alt={`${name}`} />
    {/if}

    {#if types.length}
      <h2 class="card-h2">Types</h2>
      <ul class="list-types" style="--num-types: {types.length}">
        {#each types as { type }}
          <li>{capitalizeFirstLetter(type.name)}</li>
        {/each}
      </ul>
    {/if}

    {#if evolution.length}
      <h2 class="card-h2">Evolution</h2>
      <ol class="list-evolution" style="--num-evolution: {evolution.length}">
        {#each evolution as name}
          <li>{capitalizeFirstLetter(name)}</li>
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
    max-width: 350px;
    @apply mx-auto;
    @apply p-4;
    @apply bg-amber-300;
    @apply rounded-lg;
  }

  div {
    @apply p-4;
    @apply bg-white;
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

  .list-types {
    grid-template-columns: repeat(var(--num-types), minmax(0, 1fr));
  }
  .list-types li {
    background-color: gray;
    @apply rounded-sm;
    @apply text-center;
  }

  .list-evolution {
    grid-template-columns: repeat(var(--num-evolution), minmax(0, 1fr));
  }
  .list-evolution li {
    background-color: gray;
    @apply rounded-sm;
    @apply text-center;
    @apply relative;

    @apply after:content-['→'];
    @apply after:absolute;
    @apply after:-right-4;

    @apply last-of-type:after:content-none;
  }

  .description {
    @apply text-sm;
  }
</style>
