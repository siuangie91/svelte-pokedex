<script lang="ts">
  import type { Type } from 'src/types';
  import { capitalizeFirstLetter, TYPE_COLOR_LOOKUP } from 'utils';

  export let types: Type[] = [];
</script>

{#if types.length}
  <h2>Types</h2>
  <ul style="--num-types: {types.length}">
    {#each types as { type }}
      <li
        style="--type-bg-color: {TYPE_COLOR_LOOKUP[type.name].color}; --type-text-color: {TYPE_COLOR_LOOKUP[type.name]
          .dark
          ? '#fff'
          : '#000'}"
      >
        {capitalizeFirstLetter(type.name)}
      </li>
    {/each}
  </ul>
{/if}

<style lang="postcss">
  h2 {
    @apply text-lg;
  }

  ul {
    @apply grid;
    @apply gap-4;
    grid-template-columns: repeat(var(--num-types), minmax(0, 1fr));
  }

  li {
    @apply p-1;
    @apply rounded-sm;
    @apply text-sm;
    @apply text-center;
    background-color: var(--type-bg-color);
    color: var(--type-text-color);
  }
</style>
