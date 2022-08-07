export interface PokemonRaw {
  id: number;
  name: string;
  forms: {
    sprites: {
      sprites: string;
    }[];
  }[];
}

export interface Specy {
  pokemon: PokemonRaw[];
}

export interface Generation1 {
  gen1: {
    name: string;
    species: Specy[];
  };
}

export interface Type {
  type: {
    name: string;
  };
}

export interface PokemonStats {
  pokemon: {
    id: number;
    name: string;
    types: Type[];
    species: {
      descriptions: {
        id: number;
        flavor_text: string;
      }[];
      evolutionChain: {
        chain: {
          id: number;
          name: string;
        }[];
      };
    };
    images: {
      sprites: string;
    }[];
  }[];
}

export interface PokemonGQL {
  id: number;
  name: string;
  image: string;
}

export interface PokemonLookup {
  [key: PokemonGQL['name']]: PokemonGQL;
}
