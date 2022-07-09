<script lang="ts">
  import SectionHeader from './SectionHeader.svelte';

  export let title = '';
</script>

<section>
  <SectionHeader content={title} />
</section>

<style>
  section {
    position: relative;
    min-height: 150px;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;

    background: #ddd;
  }

  /* @media screen and (min-width: 500px) {
    section {
      float: right;
      width: calc(50% - 25px);
      min-height: 50vh;
    }
  } */
</style>
