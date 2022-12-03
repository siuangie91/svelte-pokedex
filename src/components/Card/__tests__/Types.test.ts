import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import { capitalizeFirstLetter } from 'utils';
import type { Type } from 'src/types';
import Types from '../Types.svelte';

describe('Types', () => {
  it('renders all the types passed to it', () => {
    const types: Type[] = [
      {type: {name: 'fire'}},
      {type: {name: 'fighting'}},
    ];

    render(Types, {
      types
    });

    types.forEach(({ type: { name }}) => {
      const typeElem = screen.getByText(capitalizeFirstLetter(name))
      expect(typeElem).toBeInTheDocument();
    })
  });
});
