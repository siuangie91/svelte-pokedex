// TODO test
import type { Specy, PokemonLookupGQL } from 'src/types';

// todo jsdoc
export const createLookupByNameGql = (entries: Specy[]) => {
  return entries.reduce<PokemonLookupGQL>((acc, entry) => {
    const { pokemon } = entry;
    const { id, name, forms } = pokemon[0];

    const { front_default: image } = JSON.parse(forms[0].sprites[0].sprites);

    acc[name] = {
      id,
      name,
      image,
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
