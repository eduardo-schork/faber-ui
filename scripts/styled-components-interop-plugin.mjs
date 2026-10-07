const DEFAULT_IMPORT = /^import (\w+)(\s*,\s*\{[^}]*\})? from "styled-components";$/gmu;

/**
 * styled-components ships CommonJS to Node. A native ES module that imports its default export
 * there receives the whole module object instead of `styled`, so frameworks and test runners that
 * load packages without bundling them would fail on `styled.div`. This unwraps the default export
 * at the top of every emitted chunk, which is a no-op wherever the import is already `styled`.
 */
export function styledComponentsInterop() {
  return {
    name: 'faber-ui:styled-components-interop',
    renderChunk(code) {
      if (!code.includes('"styled-components"')) {
        return null;
      }

      const interopCode = code.replace(
        DEFAULT_IMPORT,
        (_statement, name, namedImports = '') =>
          `import ${name}Module${namedImports} from "styled-components";\n` +
          `const ${name} = ${name}Module.default ?? ${name}Module;`,
      );

      return interopCode === code ? null : { code: interopCode, map: null };
    },
  };
}
