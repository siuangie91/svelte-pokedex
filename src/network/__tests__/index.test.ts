import axios from 'axios';
import { fetchGraphQL, POKEAPI_GQL_URL } from '..';

jest.mock('axios', () => {
  return {
    ...jest.requireActual('jest'),
    post: jest.fn().mockResolvedValue({
      data: {},
    }),
  };
});

describe('fetchGraphQL', () => {
  it('makes a POST request with the required GQL payload', async () => {
    const payload = {
      query: 'mock query string',
      variables: {
        id: 1,
      },
      operationName: 'mock operation name',
    };

    const { query, variables, operationName } = payload;

    await fetchGraphQL(query, variables, operationName);

    expect(axios.post).toHaveBeenCalledWith(POKEAPI_GQL_URL, payload);
  });
});
