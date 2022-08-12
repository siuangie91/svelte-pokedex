<script lang="ts">
  import type { Type } from 'src/types';
  import { TYPE_COLOR_LOOKUP } from 'utils';

  import Heading from './Heading.svelte';
  import Image from './Image.svelte';
  import Types from './Types.svelte';
  import Evolution from './Evolution.svelte';
  import Description from './Description.svelte';

  export let id: number;
  export let name: string;
  export let image: string | null = null;
  export let types: Type[] = [];
  export let evolutions: string[] = [];
  export let description: string = '';
</script>

<section style="--card-bg-color: {TYPE_COLOR_LOOKUP[types[0].type.name].color}">
  <div>
    <Heading {id} {name} />
    <Image {image} {name} />
    <Types {types} />
    <Evolution {name} {evolutions} />
    <Description {description} />
  </div>
</section>

<style lang="postcss">
  section {
    @apply mx-auto;
    @apply p-4;
    @apply rounded-lg;
    @apply shadow-lg;
    @apply shadow-slate-600;
    max-width: 400px;
    background: var(--card-bg-color);
  }

  div {
    @apply p-4;
    background-color: rgba(255, 255, 255, 0.75);
  }
</style>
