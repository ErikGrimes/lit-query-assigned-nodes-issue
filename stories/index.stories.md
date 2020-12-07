```js script
import { html } from '@open-wc/demoing-storybook';
import '../dist/assigned-nodes.js';

export default {
  title: 'AssignedNodes',
  component: 'assigned-nodes',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# AssignedNodes

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add assigned-nodes
```

```js
import 'assigned-nodes/assigned-nodes.js';
```

```js preview-story
export const Simple = () => html`
  <assigned-nodes>text</assigned-nodes>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <assigned-nodes title="Hello World"></assigned-nodes>
`;
```
