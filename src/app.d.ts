/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Locals {}
  // interface Platform {}
  // interface Session {}
  // interface Stuff {}
}

declare namespace PokemonAPI {
  interface PokemonSpecies {
    name: string;
    url: string;
  }

  interface Entry {
    entry_number: number;
    pokemon_species: PokemonSpecies;
  }

  interface Generation {
    pokemon_entries: Entry[];
  }

  interface Sprites {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  }

  interface Type {
    type: {
      slot: number;
      name: string;
    };
  }

  interface Pokemon {
    name: string;
    species: PokemonSpecies;
    sprites: Sprites;
    types: Type[];
  }
}
