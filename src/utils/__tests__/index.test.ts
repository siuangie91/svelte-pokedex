import { capitalizeFirstLetter } from '..';

describe('capitalizeFirstLetter', () => {
  it('returns empty string if argument is empty string', () => {
    const result = capitalizeFirstLetter('');
    expect(result).toBe('');
  });

  it('capitalizes only the first letter of the string', () => {
    const input = 'lowercase something';
    const result = capitalizeFirstLetter(input);

    expect(result).toBe('Lowercase something');
  });
});
