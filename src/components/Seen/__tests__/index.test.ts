import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import { seenPokemon } from 'src/stores';
import Seen from '../index.svelte';

describe('Card', () => {
  it('renders a list of seen pokemon', () => {
    const pokemons = {
      fake1: {
        id: 1,
        name: 'Fake1',
        image: 'path/to/one'
      },
      fake2: {
        id: 2,
        name: 'Fake2',
        image: 'path/to/two'
      },
      fake3: {
        id: 3,
        name: 'Fake3',
        image: 'path/to/three'
      },
    };

    seenPokemon.set(pokemons);

    const { container } = render(Seen);

    expect(container).toMatchSnapshot();
  });
});
