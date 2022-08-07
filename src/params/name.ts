import type { ParamMatcher } from '@sveltejs/kit';

// TODO test
export const match: ParamMatcher = (param: string) => {
  return /^[a-z]+$/.test(param);
};
