<script lang="ts">
  export let description: string = '';
</script>

{#if description}
  <h2 class="card-h2">Description</h2>
  <p class="description">{description}</p>
{/if}

<style lang="postcss">
  .description {
    @apply text-base;
  }
</style>
