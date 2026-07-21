import { rename, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const outputDirectory = fileURLToPath(new URL('../dist/', import.meta.url));

await rename(`${outputDirectory}styles.css`, `${outputDirectory}theme.css`);
await writeFile(
  `${outputDirectory}styles.css`,
  "@import '@faber-ui/fonts/styles.css';\n@import './theme.css';\n",
);
