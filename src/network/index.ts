// TODO test
import axios from 'axios';

export const POKEAPI_GQL_URL = 'https://beta.pokeapi.co/graphql/v1beta';

export const fetchGraphQL = async <ResponseShape>(
  query: string,
  variables: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: number | string]: any;
  },
  operationName: string,
) => {
  try {
    const { data } = await axios.post<ResponseShape>(POKEAPI_GQL_URL, {
      query,
      variables,
      operationName,
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};
