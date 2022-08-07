export interface Pokemon {
  id: number;
  name: string;
}

export interface PokemonLookup {
  [key: Pokemon['name']]: Pokemon;
}
