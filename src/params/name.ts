import type { ParamMatcher } from '@sveltejs/kit';

// TODO test
/**
 * Checks whether the [name] route param matches
 * https://regex101.com/r/OcQlAQ/1
 * @param param
 */
export const match: ParamMatcher = (param: string) => {
  return /^[a-zA-Z]+-?[a-zA-Z]+$/.test(param);
};
