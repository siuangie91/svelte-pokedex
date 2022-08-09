<script lang="ts">
  import SectionHeader from 'components/shared/SectionHeader.svelte';

  export let title = '';
</script>

<section>
  <SectionHeader content={title} />
  <!-- receive any children components -->
  <slot />
</section>

<!-- TODO receive color as prop -->
<style lang="postcss">
  section {
    @apply px-4;
    @apply py-4;
    @apply mb-4;
    @apply rounded-lg;
    @apply bg-slate-200/90;
    @apply shadow-lg;
  }
</style>
