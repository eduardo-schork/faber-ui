import { execFileSync } from 'node:child_process';
import { mkdtempSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// Dependencies first, so a package never reaches the registry before what it depends on.
const PACKAGES = ['tokens', 'fonts', 'themes', 'icons', 'react'];

const dryRun = process.argv.includes('--dry-run');
const tag = process.argv.find((argument) => argument.startsWith('--tag='))?.slice(6) ?? 'latest';
// Writes the tarballs to a directory and publishes nothing, for testing them in a consumer.
const packTo = process.argv.find((argument) => argument.startsWith('--pack-to='))?.slice(10);
// Sends each version to npm's staging area instead of publishing it. A maintainer then approves it
// on npmjs.com with two-factor authentication, which is what the automated release uses.
const stage = process.argv.includes('--stage');
const otp = process.argv.find((argument) => argument.startsWith('--otp='));

const run = (command, commandArguments, options = {}) =>
  execFileSync(command, commandArguments, { encoding: 'utf8', ...options });

const readManifest = (directoryName) =>
  JSON.parse(readFileSync(join('packages', directoryName, 'package.json'), 'utf8'));

const WORKSPACE_VERSIONS = new Map(
  PACKAGES.map((directoryName) => {
    const { name, version } = readManifest(directoryName);

    return [name, version];
  }),
);

/** Replaces `workspace:*` with the exact sibling version and `workspace:^` with a caret range. */
const resolveWorkspaceRanges = (manifestSource) => {
  const manifest = JSON.parse(manifestSource);

  for (const field of ['dependencies', 'peerDependencies', 'optionalDependencies']) {
    for (const [dependency, range] of Object.entries(manifest[field] ?? {})) {
      if (!range.startsWith('workspace:')) {
        continue;
      }

      const version = WORKSPACE_VERSIONS.get(dependency);

      if (version === undefined) {
        throw new Error(`${manifest.name} depends on ${dependency}, which is not published here.`);
      }

      const prefix = range.slice('workspace:'.length);

      manifest[field][dependency] =
        prefix === '^' || prefix === '~' ? `${prefix}${version}` : version;
    }
  }

  // Tooling-only fields have no use in the published manifest.
  delete manifest.devDependencies;
  delete manifest.scripts;

  return `${JSON.stringify(manifest, null, 2)}\n`;
};

const isStaged = (name, version) => {
  try {
    return run('npm', ['stage', 'list', name], { stdio: 'pipe' }).includes(version);
  } catch {
    return false;
  }
};

const isPublished = (name, version) => {
  try {
    return run('npm', ['view', `${name}@${version}`, 'version'], { stdio: 'pipe' }).trim() !== '';
  } catch {
    return false;
  }
};

// Prints the packages whose current version is not on the registry and publishes nothing.
if (process.argv.includes('--list-pending')) {
  for (const directoryName of PACKAGES) {
    const { name, private: isPrivate, version } = readManifest(directoryName);

    if (isPrivate !== true && !isPublished(name, version)) {
      console.log(`${name}@${version}`);
    }
  }

  process.exit(0);
}

for (const directoryName of PACKAGES) {
  const directory = join('packages', directoryName);
  const {
    name,
    private: isPrivate,
    version,
  } = JSON.parse(readFileSync(join(directory, 'package.json'), 'utf8'));

  if (isPrivate === true) {
    console.log(`skip ${name}: private`);
    continue;
  }

  if (packTo === undefined && isPublished(name, version)) {
    console.log(`skip ${name}@${version}: already on the registry`);
    continue;
  }

  // npm does not understand the workspace protocol, so the manifest is packed with the real
  // versions of its sibling packages and restored afterwards.
  const destination = packTo ?? mkdtempSync(join(tmpdir(), 'faber-ui-pack-'));
  const manifestPath = join(directory, 'package.json');
  const originalManifest = readFileSync(manifestPath, 'utf8');

  try {
    writeFileSync(manifestPath, resolveWorkspaceRanges(originalManifest));
    run('npm', ['pack', '--pack-destination', destination], { cwd: directory, stdio: 'pipe' });
  } finally {
    writeFileSync(manifestPath, originalManifest);
  }

  const tarballName = `${name.replace('@', '').replace('/', '-')}-${version}.tgz`;

  if (!readdirSync(destination).includes(tarballName)) {
    throw new Error(`No tarball was produced for ${name}.`);
  }

  const tarball = join(destination, tarballName);
  const packedManifest = run('tar', ['-xOf', tarball, 'package/package.json']);

  if (packedManifest.includes('workspace:')) {
    throw new Error(`${name} still references the workspace protocol in its tarball.`);
  }

  if (packTo !== undefined) {
    console.log(`packed ${tarball}`);
    continue;
  }

  if (stage && isStaged(name, version)) {
    console.log(`skip ${name}@${version}: already staged and waiting for approval`);
    continue;
  }

  const publishArguments = [
    ...(stage ? ['stage', 'publish'] : ['publish']),
    tarball,
    '--access',
    'public',
    '--tag',
    tag,
  ];

  if (otp !== undefined) {
    publishArguments.push(otp);
  }

  if (dryRun) {
    publishArguments.push('--dry-run');
  }

  console.log(`${dryRun ? 'dry run' : stage ? 'stage' : 'publish'} ${name}@${version} (${tag})`);
  run('npm', publishArguments, { stdio: 'inherit' });
}
