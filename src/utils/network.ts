// TODO test
import axios from 'axios';

const POKEAPI_URL_BASE = 'https://pokeapi.co/api/v2';

const POKEAPI_URLS = {
  GEN_1: `${POKEAPI_URL_BASE}/pokedex/1`,
  POKEMON: `${POKEAPI_URL_BASE}/pokemon/`,
  SPECIES: `${POKEAPI_URL_BASE}/pokemon-species/`,
};

/**
 * Fetches the first 20 entries for Gen 1 pokemon from PokeAPI
 * @returns
 */
export const getFirst20PokemonEntries = async () => {
  try {
    const { data } = await axios.get<PokemonAPI.Generation>(POKEAPI_URLS.GEN_1);

    const { pokemon_entries } = data;

    return pokemon_entries.length ? pokemon_entries.slice(0, 20) : [];
  } catch (error) {
    console.error(error);
  }
};

/**
 * Fetch the Pokemon data by name
 * @param name
 */
export const getPokemonByName = async (name: string) => {
  try {
    const { data } = await axios.get<PokemonAPI.Pokemon>(`${POKEAPI_URLS.POKEMON}${name}`);

    return data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Fetch the Pokemon's species data by name
 * @param name
 */
export const getSpeciesByName = async (name: string) => {
  try {
    const { data } = await axios.get<PokemonAPI.Species>(`${POKEAPI_URLS.SPECIES}${name}`);

    return data;
  } catch (error) {
    console.error(error);
  }
};
