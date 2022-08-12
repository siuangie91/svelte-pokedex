<script lang="ts">
  import type { Type } from 'src/types';
  import { capitalizeFirstLetter, TYPE_COLOR_LOOKUP } from 'utils';

  export let id: number;
  export let name: string;
  export let image: string | null = null;
  export let types: Type[] = [];
  export let evolutions: string[] = [];
  export let description: string = '';
</script>

<section style="--card-bg-color: {TYPE_COLOR_LOOKUP[types[0].type.name].color}">
  <div>
    <h1>
      <span>{capitalizeFirstLetter(name)}</span>
      <span>#{id}</span>
    </h1>

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

    {#if evolutions.length > 1}
      <h2 class="card-h2">Evolution</h2>
      <ol
        class="list-evolution"
        style="
          --num-evolutions: {evolutions.length <= 3 ? evolutions.length : 3}
        "
      >
        {#each evolutions as evolution}
          <li style="--evolution-weight: {evolution.toLowerCase() === name.toLowerCase() ? 'bold' : 'normal'}">
            {#if evolution === name}
              <span>{capitalizeFirstLetter(evolution)}</span>
            {:else}
              <a sveltekit:reload href={`/pokemon/${evolution}`}>{capitalizeFirstLetter(evolution)}</a>
            {/if}
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
    @apply shadow-lg;
    @apply shadow-slate-600;
    max-width: 400px;
    background: var(--card-bg-color);
  }

  div {
    @apply p-4;
    background-color: rgba(255, 255, 255, 0.75);
  }

  h1 {
    @apply m-0;
    @apply text-xl;

    @apply flex;
    @apply justify-between;
  }

  .card-h2 {
    @apply text-lg;
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
    @apply p-1;
    @apply rounded-sm;
    @apply text-center;
    background-color: var(--type-bg-color);
    color: var(--type-text-color);
  }

  .list-evolution {
    @apply gap-y-1;
    grid-template-columns: repeat(var(--num-evolutions), minmax(0, 1fr));
  }

  .list-evolution li {
    @apply relative;
    @apply text-center;

    /* right arrow */
    @apply after:content-['\0279E'];
    @apply after:absolute;
    @apply after:-right-3.5;
    @apply after:font-normal;

    @apply last-of-type:after:content-none;

    font-weight: var(--evolution-weight);
  }

  .list-evolution li a {
    @apply text-cyan-800;
    @apply underline;
    @apply hover:no-underline;
  }

  .description {
    @apply text-base;
  }
</style>
