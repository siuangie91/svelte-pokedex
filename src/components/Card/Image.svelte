<script lang="ts">
  export let image: string | null = null;
  export let name: string = '';
</script>

{#if image}
  <img src={image} alt={name} />
{/if}

<style lang="postcss">
  img {
    @apply block;
    @apply w-3/4;
    @apply mx-auto;
  }
</style>
