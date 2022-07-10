<script lang="ts">
  import SectionHeader from 'components/SectionHeader.svelte';

  export let title = '';
</script>

<section>
  <SectionHeader content={title} />
  <slot />
</section>

<!-- TODO receive color as prop -->
<style>
  section {
    position: relative;
    min-height: 150px;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;

    background: #ccc;
  }

  /* @media screen and (min-width: 500px) {
    section {
      float: left;
      width: calc(50% - 25px);
      min-height: 50vh;
    }
  } */
</style>
