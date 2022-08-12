<script lang="ts">
  import { capitalizeFirstLetter } from 'utils';

  export let id: number;
  export let name: string;
</script>

{#if id && name}
  <h1>
    <span>{capitalizeFirstLetter(name)}</span>
    <span>#{id}</span>
  </h1>
{/if}

<style lang="postcss">
  h1 {
    @apply m-0;
    @apply text-xl;

    @apply flex;
    @apply justify-between;
  }
</style>
