import type { ParamMatcher } from '@sveltejs/kit';

export function match(param: ParamMatcher) {
  return /[a-z]/.test(param.name);
}
