// TODO test
import axios from 'axios';
import type { Pokemon, PokemonLookup } from 'src/types';

const POKEAPI_URL_BASE = 'https://pokeapi.co/api/v2';

const POKEAPI_URLS = {
  GEN_1: `${POKEAPI_URL_BASE}/pokedex/1`,
  POKEMON: `${POKEAPI_URL_BASE}/pokemon/`,
};

/**
 * Fetches the first 20 entries for Gen 1 pokemon from PokeAPI
 * @returns
 */
export const getFirst20PokemonEntries = async () => {
  try {
    const { data } = await axios.get<PokemonAPI.Generation>(POKEAPI_URLS.GEN_1);

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
  return entries.reduce<PokemonLookup>((acc, { id, name }) => {
    acc[name] = {
      id,
      name,
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

export const getPokemonById = async (id: number) => {
  try {
    const { data } = await axios.get<PokemonAPI.Pokemon>(`${POKEAPI_URLS.POKEMON}${id}`);

    return data;
  } catch (error) {
    console.error(error);
  }
};
