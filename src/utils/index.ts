// TODO test
import axios from 'axios';
import type { Pokemon } from 'src/types';

const POKEAPI_GEN_1_URL = 'https://pokeapi.co/api/v2/pokedex/1';

/**
 * Fetches the first 20 entries for Gen 1 pokemon from PokeAPI
 * @returns
 */
export const getFirst20PokemonEntries = async () => {
  try {
    const { data } = await axios.get<PokemonAPI.ApiResponse>(POKEAPI_GEN_1_URL);

    const { pokemon_entries } = data;

    return pokemon_entries.length ? pokemon_entries.slice(0, 20) : [];
  } catch (error) {
    console.error(error);
  }
};

/**
 * Takes the values `pokemon_entries` and returns
 * an array of flattened `Pokemon` objects
 * @param entries
 * @returns
 */
export const flattenEntries = (entries: PokemonAPI.Entry[]): Pokemon[] => {
  return entries.map(({ entry_number, pokemon_species }) => {
    return {
      id: entry_number,
      name: pokemon_species.name,
      url: pokemon_species.url,
    };
  });
};

/**
 * Creates a lookup table of Pokemon by name
 * @param entries Pokemon entrees
 * @returns
 */
export const createLookupByName = (entries: Pokemon[]) => {
  return entries.reduce<{
    [key: string]: Pokemon;
  }>((acc, { id, name, url }) => {
    acc[name] = {
      id,
      name,
      url,
    };

    return acc;
  }, {});
};

/**
 * Capitalizes the first letter of a string
 * @param str
 * @returns
 */
export const capitalizeFirstLetter = (str: string) => {
  const firstLetter = str[0];
  const rest = str.slice(1);
  return `${firstLetter.toUpperCase()}${rest}`;
};
