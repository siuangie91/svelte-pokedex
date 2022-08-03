<script lang="ts">
  import Container from 'components/shared/Container.svelte';
  import Dropdown from './Dropdown.svelte';

  export let entryAddedHandler = (event: CustomEvent) => {};
</script>

<Container title="What Pokémon did you see?">
  <Dropdown on:add={entryAddedHandler} />
</Container>
