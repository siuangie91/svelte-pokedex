<script lang="ts">
  import { seenPokemon } from 'src/stores';
  import Container from 'components/shared/Container.svelte';
  import Dropdown from './Dropdown.svelte';

  const handleAdd = (event: CustomEvent) => {
    const entry = event.detail;
    const { name } = entry;

    seenPokemon.update(seenSoFar => {
      if (!seenSoFar[name]) {
        seenSoFar[name] = entry;
      }

      return seenSoFar;
    });
  };
</script>

<Container title="What Pokémon did you see?">
  <Dropdown on:add={handleAdd} />
</Container>
