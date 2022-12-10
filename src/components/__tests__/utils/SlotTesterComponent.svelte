<script lang="ts">
  /**
   * This is a pass-through component for testing purposes,
   * as there is no way to test <slot />.
   * It renders a component dynamically,
   * whose <slot /> will be the element [data-testid="slot"].
   * @see https://svelte.dev/docs#template-syntax-svelte-component
   * @see https://sveltesociety.dev/recipes/testing-and-debugging/unit-testing-svelte-component
   */

  /**
   * Generic type for components
   * @see https://www.viget.com/articles/typing-components-in-svelte/
   */
  import type { ComponentType } from 'svelte';

  export let Component: ComponentType;
</script>

<svelte:component this={Component}>
  <div data-testid="slot">Test Slot Content</div>
</svelte:component>
