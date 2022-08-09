/**
 * Workaround for error when running `vite build`
 * `TypeError: gql is not a function`
 * https://github.com/vitejs/vite/issues/5694#issuecomment-976098129
 */
import GqlTag from 'gql-tag';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const gql = (GqlTag as any).default || GqlTag;

export default gql;
