// TODO test
import axios from 'axios';

const POKEAPI_URL_BASE = 'https://pokeapi.co/api/v2';

const POKEAPI_URLS = {
  GEN_1: `${POKEAPI_URL_BASE}/pokedex/1`,
  POKEMON: `${POKEAPI_URL_BASE}/pokemon/`,
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

export const getPokemonById = async (id: number) => {
  try {
    const { data } = await axios.get<PokemonAPI.Pokemon>(`${POKEAPI_URLS.POKEMON}${id}`);

    return data;
  } catch (error) {
    console.error(error);
  }
};
