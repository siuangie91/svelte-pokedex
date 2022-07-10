// TODO test
import type { Pokemon } from 'src/types';

/**
 * Takes the values `pokemon_entries` and returns
 * an array of flattened `Pokemon` objects
 * @param entries
 * @returns
 */
export const flattenEntries = (entries: PokemonAPI.Entry[]): Pokemon[] => {
  return entries.map(({ entry_number, pokemon_species }) => {
    return {
      number: entry_number,
      name: pokemon_species.name,
      url: pokemon_species.url,
    };
  });
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
