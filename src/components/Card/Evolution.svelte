<script lang="ts">
  import { capitalizeFirstLetter } from 'utils';

  export let name: string;
  export let evolutions: string[] = [];

  let numColumns = 0;
  if (evolutions.length <= 3) {
    numColumns = evolutions.length;
  } else {
    numColumns = evolutions.length % 2 === 0 ? 4 : 3;
  }
</script>

{#if evolutions.length > 1}
  <h2>Evolution</h2>
  <ol
    style="
      --num-columns: {numColumns}
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

<style lang="postcss">
  h2 {
    @apply text-lg;
  }

  ol {
    @apply grid;
    @apply gap-4;
    @apply gap-y-1;
    grid-template-columns: repeat(var(--num-columns), minmax(0, 1fr));
  }

  li {
    @apply relative;
    @apply text-center;
    @apply text-sm;

    /* right arrow */
    @apply after:content-['\0279E'];
    @apply after:absolute;
    @apply after:-right-3.5;
    @apply after:font-normal;

    @apply last-of-type:after:content-none;

    font-weight: var(--evolution-weight);
  }
</style>
