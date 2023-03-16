import type { Specy } from 'src/types';
import { createLookupByName, capitalizeFirstLetter, IMAGE_HOST_DIR, getFullImageUrl } from '..';

describe('createLookupByName', () => {
  it('returns an empty object if entries is empty', () => {
    const result = createLookupByName([]);

    expect(result).toEqual({});
  });

  it('returns an object of pokemon name:{id, name, image} pairs', () => {
    const pokemon1 = {
      id: 1,
      name: 'pokemon1',
      image: 'fake/pokemon1.png',
    };

    const pokemon2 = {
      id: 2,
      name: 'pokemon2',
      image: 'fake/pokemon2.png',
    };

    const result = createLookupByName([
      {
        pokemon: [
          {
            id: pokemon1.id,
            name: pokemon1.name,
            forms: [
              {
                sprites: [
                  { sprites: `{"front_default": "${pokemon1.image}"}` }
                ], 
              },
            ],
          },
        ],
      },
      {
        pokemon: [
          {
            id: pokemon2.id,
            name: pokemon2.name,
            forms: [
              {
                sprites: [
                  { sprites: `{"front_default": "${pokemon2.image}"}` }
                ], 
              },
            ],
          },
        ],
      },
    ]);

    expect(result).toEqual({
      pokemon1,
      pokemon2,
    });
  });

  it('uses an empty string as image if a pokemon entry does not have a `front_default` sprite', () => {
    const id = 1;
    const name = 'imageless';

    const entries: Specy[] = [
      {
        pokemon: [
          {
            id,
            name,
            forms: [
              {
                sprites: [
                  { 
                    sprites: '{ "not": "front_default"}' 
                  }
                ], 
              },
            ],
          },
        ],
      },
    ];

    const result = createLookupByName(entries);

    expect(result).toEqual({
      [name]: {
        id,
        name,
        image: '',
      },
    });
  });
});

describe('capitalizeFirstLetter', () => {
  it('returns empty string if argument is empty string', () => {
    const result = capitalizeFirstLetter('');
    expect(result).toBe('');
  });

  it('capitalizes only the first letter of the string', () => {
    const input = 'lowercase something';
    const result = capitalizeFirstLetter(input);

    expect(result).toBe('Lowercase something');
  });
});

describe('getFullImageUrl', () => {
  it('replaces the media folder in the path with the full image host directory', () => {
    const folder = '/media/some/image.png';
    const result = getFullImageUrl(folder);

    expect(result.startsWith(IMAGE_HOST_DIR)).toBe(true);
  });

  it('returns the given image path undisturbed if it is not in the media folder', () => {
    const folder = '/not/in/media/image.png';
    const result = getFullImageUrl(folder);

    expect(result).toBe(folder);
  });
});
