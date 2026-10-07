# @faber-ui/icons

Outline icons for Faber UI as React components. They inherit the text color, size from a closed
scale, and are decorative unless given a `label`.

## Install

```bash
npm install @faber-ui/icons
```

React 18 or 19 is a peer dependency.

## Use

```tsx
import { CopyIcon, TrashIcon } from '@faber-ui/icons';

<CopyIcon />;
<TrashIcon label="Delete" size="large" />;
```

`createIcon` builds an icon with the same contract from your own SVG paths.

## Documentation

Guides, the component reference, and the source live in the
[Faber UI repository](https://github.com/eduardo-schork/faber-ui).

## License

MIT
