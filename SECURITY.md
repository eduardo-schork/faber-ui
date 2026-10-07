# Security policy

## Supported versions

Faber UI is before 1.0. Security fixes are released for the latest published version of each
`@faber-ui` package only.

## Reporting a vulnerability

Please do not open a public issue for a security problem.

Report it privately through GitHub: open the
[Security tab](https://github.com/eduardo-schork/faber-ui/security/advisories/new) of this
repository and choose "Report a vulnerability". Include the affected package and version, what an
attacker could do, and steps or a small example that reproduce it.

You can expect an acknowledgement within seven days. Once a fix is ready, a patched version is
published and the advisory is made public with credit to the reporter, unless they prefer otherwise.

## Scope

In scope: the published packages (`@faber-ui/react`, `@faber-ui/themes`, `@faber-ui/tokens`,
`@faber-ui/icons`, `@faber-ui/fonts`), their build and release tooling, and the documentation
website.

Out of scope: vulnerabilities in an application that come from how it uses a component, such as
passing an untrusted URL to a link. Components render the values they are given.
