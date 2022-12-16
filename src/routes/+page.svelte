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
