const CLIENT_IMPORT =
  /from "(?:react|react-dom|react\/jsx-runtime|styled-components|@radix-ui\/[^"]+)"/u;
const DIRECTIVE = "'use client';";

/**
 * Marks every emitted module that uses React or styled-components as a client module, so the
 * components can be imported straight into a React Server Component. Modules that hold only
 * constants and pure functions are left unmarked and stay readable on the server. This relies on
 * the build preserving one output file per source module.
 */
export function useClientDirective() {
  return {
    name: 'faber-ui:use-client-directive',
    renderChunk(code) {
      if (!CLIENT_IMPORT.test(code) || code.startsWith(DIRECTIVE)) {
        return null;
      }

      return { code: `${DIRECTIVE}\n${code}`, map: null };
    },
  };
}
