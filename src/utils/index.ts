// TODO test
import type { Pokemon, PokemonLookup } from 'src/types';

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
