<div align="center">

# Tailwind Tooltip

Tooltip an element using only CSS classes!

Visit the [website](https://github.com/SantiMit1/tailwind-tooltip) to get more information.
</div>
  
## Installation :book:

#### Package install

> Install the package with your favorite package manager:

- npm
```bash
npm install tailwind-tooltip
```
- pnpm
```bash
pnpm install tailwind-tooltip
```
- yarn
```bash
yarn add tailwind-tooltip
```

#### Plugin Implementation
> Use the plugin in your Tailwind CSS project:

```js
// tailwind.config.mjs
import tooltip from 'tailwind-tooltip'

export default {
  // rest of the options
  plugins: [
    tooltip
  ],
}
```

## Usage :gear:

#### Example

> Here are some simple examples of how to use this plugin and its animations:

```html
<div class="tooltip-wrapper"> <-- add a wrapper container
  <div class="tooltip-t" data-tooltip-text="This is a tooltip!"> <-- add the tooltip position and content
    Hover over me!
  </div>
</div>
```

```html
<div class="tooltip-wrapper">
  <div class="tooltip-t tooltip-bg-slate-700 text-black" data-tooltip-text="This is a tooltip!"> <-- change background and text colors
    Hover over me!
  </div>
</div>
```
