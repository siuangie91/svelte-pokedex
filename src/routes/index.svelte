<script>
  import Container from '../components/Container.svelte';
  import Dropdown from '../components/Dropdown.svelte';
</script>

<main>
  <h1>Svelte Pokédex</h1>
  <Container title="What Pokémon did you see?">
    <Dropdown />
  </Container>
  <Container title="Here's what you've seen so far:" />
</main>

<style>
  :global(*) {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :global(html) {
    background: url(http://pngimg.com/uploads/pokeball/pokeball_PNG8.png) no-repeat;
    background-position: center center;
    background-size: contain;
  }

  :global(body) {
    background: rgba(255, 255, 255, 0.5);
  }

  main {
    padding: 10px;
    text-align: center;
  }

  h1 {
    margin: 10px auto;
  }
</style>
