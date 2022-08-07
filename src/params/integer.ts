import type { ParamMatcher } from '@sveltejs/kit';

export function match(param: ParamMatcher) {
  return Number.isInteger(Number(param));
}
