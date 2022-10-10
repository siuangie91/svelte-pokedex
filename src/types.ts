interface Identifiers {
  id: number;
  name: string;
}

interface Forms extends Identifiers {
  forms: {
    sprites: {
      sprites: string;
    }[];
  }[];
}

export interface Specy {
  pokemon: Forms[];
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
  id: number;
  name: string;
  types: Type[];
  species: {
    descriptions: {
      id: number;
      text: string;
    }[];
    evolutionChain: {
      chain: Identifiers[];
    };
  };
  images: {
    sprites: string;
  }[];
}

export interface Summary extends Identifiers {
  image: string;
}

export interface PokemonLookup {
  [key: Summary['name']]: Summary;
}

export interface TypeColorLookup {
  [key: string]: {
    color: string;
    dark: boolean;
  };
}
