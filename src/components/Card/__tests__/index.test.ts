import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import { capitalizeFirstLetter } from 'utils';
import type { Type } from 'src/types';
import Card from '../index.svelte';

describe('Card', () => {
  it('renders all the pokemon information like pokemon card', () => {
    const id = 1;
    const name = "bulbasaur";
    const image = "path/to/image";
    const types = [
      { type: { name: 'grass' } }, 
      { type: { name: 'grass' } },
    ];
    const evolutions = [name, 'ivysaur', 'venusaur'];
    const description = 'mock description';

    const { container } = render(Card, {
      id,
      name,
      image,
      types,
      evolutions,
      description
    });

    expect(container).toMatchSnapshot();
  });
});
