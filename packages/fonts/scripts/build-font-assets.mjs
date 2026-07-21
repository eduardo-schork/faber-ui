import { cp, copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const packageDirectory = fileURLToPath(new URL('../', import.meta.url));
const fontSourceDirectory = fileURLToPath(
  new URL('../node_modules/@fontsource-variable/plus-jakarta-sans/', import.meta.url),
);
const outputDirectory = fileURLToPath(new URL('../dist/', import.meta.url));

const [normalStyles, italicStyles, familyVariables] = await Promise.all([
  readFile(`${fontSourceDirectory}index.css`, 'utf8'),
  readFile(`${fontSourceDirectory}wght-italic.css`, 'utf8'),
  readFile(`${packageDirectory}src/styles.css`, 'utf8'),
]);

await mkdir(`${outputDirectory}files`, { recursive: true });
await Promise.all([
  cp(`${fontSourceDirectory}files`, `${outputDirectory}files`, { recursive: true }),
  copyFile(`${fontSourceDirectory}LICENSE`, `${outputDirectory}OFL.txt`),
  writeFile(
    `${outputDirectory}styles.css`,
    `${normalStyles.trim()}\n\n${italicStyles.trim()}\n\n${familyVariables.trim()}\n`,
  ),
]);
