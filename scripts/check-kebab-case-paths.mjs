import { execFileSync } from 'node:child_process';

import { findKebabCasePathViolations } from '../eslint-rules/kebab-case-paths.js';

const gitOutput = execFileSync(
  'git',
  ['ls-files', '--cached', '--others', '--exclude-standard', '-z'],
  { encoding: 'utf8' },
);
const projectPaths = gitOutput.split('\0').filter(Boolean);
const violations = findKebabCasePathViolations(projectPaths);

if (violations.length > 0) {
  for (const violation of violations) {
    console.error(
      `${violation.path}: ${violation.type} segment "${violation.segment}" must use kebab case.`,
    );
  }

  process.exitCode = 1;
}
