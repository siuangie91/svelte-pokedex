import gql from 'gql-tag';

const first20Gen1Query = gql`
  query First20Gen1($id: Int!) {
    gen1: pokemon_v2_generation_by_pk(id: $id) {
      name
      species: pokemon_v2_pokemonspecies(limit: 20, order_by: { id: asc }) {
        pokemon: pokemon_v2_pokemons(limit: 1) {
          id
          name
          forms: pokemon_v2_pokemonforms {
            sprites: pokemon_v2_pokemonformsprites {
              sprites
            }
          }
        }
      }
    }
  }
`;

export default first20Gen1Query;
