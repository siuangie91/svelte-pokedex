import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import { seenPokemon } from 'src/stores';
import type { PokemonLookup } from 'src/types';
import { capitalizeFirstLetter } from 'src/utils';
import List from '../List.svelte';

describe('List', () => {
  let pokemons: PokemonLookup;

  beforeEach(() => {
    pokemons = {
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
  });

  it('notifies when no pokemon have been seen yet', () => {
    seenPokemon.set({});

    render(List);

    const nothingSeenText = screen.getByTestId('no-seen-yet-text');
    expect(nothingSeenText).toBeInTheDocument();
  });

    
  it('renders the id, name, and image, linked to the `/pokemon/:name` route for each seen pokemon', () => {
    seenPokemon.set(pokemons);
  
    render(List);
      
    const seenList = Object.values(pokemons);
    
    seenList.forEach(seenPokemon => {
      const { id, name } = seenPokemon;
       
      const idAndNameElem = screen.getByText(`${id}. ${capitalizeFirstLetter(name)}`);
      expect(idAndNameElem).toBeInTheDocument();

      const imgElem = screen.getByAltText(name);
      expect(imgElem).toBeInTheDocument();


      expect(idAndNameElem.closest('a')).toHaveAttribute('href', `/pokemon/${name}`);
    });
  });
});