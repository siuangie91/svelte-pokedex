import type { ParamMatcher } from '@sveltejs/kit';

/**
 * Checks whether the [name] route param matches
 * https://regex101.com/r/wFbmgb/1
 * @param param
 */
export const match: ParamMatcher = (param: string): boolean => {
  return /^[a-zA-Z]+-?[a-zA-Z]+$/.test(param);
};
