import type { Pokemon } from 'src/types';

export const flattenEntries = (entries: PokemonAPI.Entry[]): Pokemon[] => {
  return entries.map(({ entry_number, pokemon_species }) => {
    return {
      number: entry_number,
      name: pokemon_species.name,
      url: pokemon_species.url,
    };
  });
};

export const capitalizeFirstLetter = (str: string) => {
  const firstLetter = str[0];
  const rest = str.slice(1);
  return `${firstLetter.toUpperCase()}${rest}`;
};
