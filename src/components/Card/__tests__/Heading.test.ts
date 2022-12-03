import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import { capitalizeFirstLetter } from 'utils';
import Heading from '../Heading.svelte';

describe('Heading', () => {
  let id: number;
  let name: string;
  beforeEach(() => {
    id = 1;
    name = 'lowercased';

    render(Heading, {
      id,
      name,
    });
  });

  it('renders the id of the pokemon', () => {
    const idElem = screen.getByText(`#${id}`);
    expect(idElem).toBeInTheDocument();
  });

  it('renders the name of the pokemon with the first letter capitalized', () => {
    const nameElem = screen.getByText(capitalizeFirstLetter(name));
    expect(nameElem).toBeInTheDocument();
  });
});
