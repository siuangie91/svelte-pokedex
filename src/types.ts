export interface Generation1 {
  gen1: {
    name: string;
    species: {
      pokemon: {
        id: number;
        name: string;
        forms: {
          sprites: {
            sprites: string;
          }[];
        }[];
      }[];
    }[];
  };
}

export interface PokemonGQL {
  id: number;
  name: string;
  image: string;
}

export interface PokemonLookupGQL {
  [key: PokemonGQL['name']]: PokemonGQL;
}
