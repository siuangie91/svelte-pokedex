export interface Pokemon {
  id: number;
  name: string;
  url: string;
}

export interface PokemonLookup {
  [key: string]: Pokemon;
}
