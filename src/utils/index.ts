import type { Specy, PokemonLookup, TypeColorLookup } from 'src/types';

/**
 * Given a species array, return a lookup table by pokemon name
 * @param entries
 */
export const createLookupByName = (entries: Specy[]) => {
  if (!entries.length) return {};

  return entries.reduce<PokemonLookup>((acc, entry) => {
    const { pokemon } = entry;
    const { id, name, forms } = pokemon[0];

    const { front_default: image } = JSON.parse(forms[0].sprites[0].sprites);

    acc[name] = {
      id,
      name,
      image: image ?? '',
    };

    return acc;
  }, {});
};

/**
 * Capitalizes the first letter of a string
 * @param str
 */
export const capitalizeFirstLetter = (str: string) => {
  if (!str) return '';

  const firstLetter = str[0];
  const rest = str.slice(1);
  return `${firstLetter.toUpperCase()}${rest}`;
};

export const IMAGE_HOST_DIR = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/';

/**
 * Get the full image URL for a given sprite path like
 * `/media/sprites/pokemon/3.png`
 * @param image 
 */
export const getFullImageUrl = (image: string) => {
  if (image.startsWith('/media/')) {
    return image.replace('/media/', IMAGE_HOST_DIR);
  }
  return image;
};

/**
 * Lookup table to associate a Pokemon's type with a color
 * and whether that color is considered dark
 */
export const TYPE_COLOR_LOOKUP: Readonly<TypeColorLookup> = {
  normal: {
    color: '#eeeeee',
    dark: false,
  },
  fighting: {
    color: '#e08026',
    dark: false,
  },
  flying: {
    color: '#68c8f1',
    dark: false,
  },
  poison: {
    color: '#5a0990',
    dark: true,
  },
  ground: {
    color: '#5d2510',
    dark: true,
  },
  rock: {
    color: '#383737',
    dark: true,
  },
  bug: {
    color: '#04583f',
    dark: true,
  },
  ghost: {
    color: '#1d1d1d',
    dark: true,
  },
  steel: {
    color: '#969494',
    dark: false,
  },
  fire: {
    color: '#eb3d1b',
    dark: true,
  },
  water: {
    color: '#1b91eb',
    dark: false,
  },
  grass: {
    color: '#03ab78',
    dark: false,
  },
  electric: {
    color: '#fbf83f',
    dark: false,
  },
  psychic: {
    color: '#2b0990',
    dark: true,
  },
  ice: {
    color: '#1db6f8',
    dark: false,
  },
  dragon: {
    color: '#1d57f8',
    dark: true,
  },
  dark: {
    color: '#000000',
    dark: true,
  },
  fairy: {
    color: '#dddddd',
    dark: false,
  },
  unknown: {
    color: '#c1b6b6',
    dark: false,
  },
  shadow: {
    color: '#474545',
    dark: true,
  },
} as const;

