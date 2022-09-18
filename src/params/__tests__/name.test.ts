import { match } from '../name';

describe('match', () => {
  it('matches strings of standard letters of any length and case insensitive', () => {
    const strs = ['pikachu', 'Pikachu', 'clEFairy', 'superlongword'];

    strs.forEach(str => {
      const result = match(str);

      expect(result).toBe(true);
    });
  });

  it('allows at most one hyphen and it not be the first or last character', () => {
    const validArgs = ['ho-oh', 'Ho-oh', 'one-two'];

    validArgs.forEach(validArg => {
      expect(match(validArg)).toBe(true);
    });

    const invalidArgs = ['-start', 'end-'];

    invalidArgs.forEach(invalidArg => {
      expect(match(invalidArg)).toBe(false);
    });
  });

  it('does not allow any other special character other than hyphen', () => {
    const args = ['ho+oh', 'some&thing', '&&&&', 'what*is', 'something-else=='];

    args.forEach(arg => {
      expect(match(arg)).toBe(false);
    });
  });
});
