import gql from 'gql-tag';

const pokemonQuery = gql`
  query Pokemon($id: String!) {
    pokemon: pokemon_v2_pokemon(where: { name: { _eq: $id } }) {
      id
      name
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
        }
      }
      species: pokemon_v2_pokemonspecy {
        descriptions: pokemon_v2_pokemonspeciesflavortexts(
          where: {
            language_id: { _eq: 9 } # en-us
          }
          order_by: { id: desc }
          limit: 3
        ) {
          id
          flavor_text
        }
        evolutionChain: pokemon_v2_evolutionchain {
          chain: pokemon_v2_pokemonspecies {
            id
            name
          }
        }
      }
      images: pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;

export default pokemonQuery;
