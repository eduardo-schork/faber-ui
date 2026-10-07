import { readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

import { describe, expect, it } from 'vitest';

const componentsDirectory = resolve(process.cwd(), 'src/components');
// A declaration runs from `const Name = styled` to the opening backtick of its template; the
// formatter may break the `.attrs` call across lines.
const STYLED_DECLARATION = /^(?:export )?const (\w+) = styled[.(][^`]*`/gmu;
// The class comes first; props of the wrapped library component may follow it.
const CLASS_NAME = /\.attrs\(\{\s*className: '(faber-ui(?:-[a-z0-9]+)+)'[^}]*\}\)/u;

const styleFiles = readdirSync(componentsDirectory, { recursive: true, encoding: 'utf8' })
  .filter((path) => path.endsWith('.styles.ts'))
  .map((path) => join(componentsDirectory, path));

const declarations = styleFiles.flatMap((file) =>
  Array.from(readFileSync(file, 'utf8').matchAll(STYLED_DECLARATION), (match) => ({
    className: CLASS_NAME.exec(match[0])?.[1],
    file,
    name: match[1],
  })),
);

describe('part class names', () => {
  it('SHOULD give every styled part a stable faber-ui class name', () => {
    expect(declarations.length).toBeGreaterThan(0);
    expect(declarations.filter(({ className }) => className === undefined)).toEqual([]);
  });

  it('SHOULD not reuse a class name for two different parts', () => {
    const classNames = declarations.map(({ className }) => className);

    expect(new Set(classNames).size).toBe(classNames.length);
  });
});
