<script>
  import '../app.css';
</script>

<main>
  <slot />
</main>

<footer>
  See on <a href="https://github.com/siuangie91/svelte-pokedex" target="_blank">GitHub</a>
</footer>

<style lang="postcss">
  main {
    @apply px-4;
    @apply py-4;
    flex-grow: 1;
    min-height: calc(100vh - 3.5rem);
  }
  footer {
    position: absolute;
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    @apply py-5;
    @apply text-center;
    @apply bg-slate-300;
    @apply text-xs;
  }

  footer a {
    @apply text-cyan-800;
    @apply underline;
  }
</style>
