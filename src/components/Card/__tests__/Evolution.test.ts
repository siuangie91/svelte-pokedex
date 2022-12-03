import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/svelte';
import { capitalizeFirstLetter } from 'utils';
import Evolution from '../Evolution.svelte';

describe('Evolution', () => {
  let name: string;
  let evolutions: string[];
  beforeEach(() => {
    name = 'charmander';
    evolutions = [name, 'charmeleon', 'charizard'];

    render(Evolution, {
      name,
      evolutions,
    });
  });

  it('renders the evolution chain with the first letter of the pokemon name capitalized', () => {
    evolutions.forEach(evolution => {
      const elem = screen.getByText(capitalizeFirstLetter(evolution));
      expect(elem).toBeInTheDocument();
    });
  });

  it('wraps the non-current evolution in a link that goes to the /pokemon route', async () => {
    const otherEvolutions = evolutions.slice(1);

    otherEvolutions.forEach(otherEvolution => {
      const elem = screen.getByText(capitalizeFirstLetter(otherEvolution));
      expect(elem.closest('a')).toHaveAttribute('href', `/pokemon/${otherEvolution}`);
    });
  });
});
