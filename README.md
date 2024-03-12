<div align="center">

# Tailwind Tooltip

Tooltip an element using only CSS classes!

Visit the [website](https://tailwind-tooltip.vercel.app/) to see a demo.
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
> Add the plugin to your Tailwind CSS project:

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

> Here are some simple examples of how to use this plugin:

```html
    <button
      id="tooltip-top"
      class="tooltip-t" <-- add a tooltip
      data-tooltip-text="Copy to clipboard" <-- add tooltip text
    >
      Hover me!
    </button>
```

```html
    <button
      id="tooltip-top"
      class="tooltip-t tooltip-bg-slate-800 tooltip-text-white" <-- change tooltip colors
      data-tooltip-text="Copy to clipboard"
    >
      Hover me!
    </button>
```

```html
    <button
      id="tooltip-top"
      class="tooltip-t tooltip-size-xl" <-- change tooltip size
      data-tooltip-text="Copy to clipboard"
    >
      Hover me!
    </button>
```
