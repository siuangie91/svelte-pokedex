import { writable } from 'svelte/store';
import type { PokemonLookup } from 'src/types';

export const seenPokemon = writable<PokemonLookup>({});
