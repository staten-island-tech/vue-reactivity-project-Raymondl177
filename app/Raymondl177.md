# Vue Reactivity Project Feedback
**Student:** Raymond L

This is a polished burger maker app with a dark theme, working reactive wallet, ingredient selection, and running total — one of the most complete and technically correct projects in the class.

## Vite CLI – Mastery
`package.json` correctly includes `vite` and `vue` with proper `dev`, `build`, and `preview` scripts.

## Iteration in Vue – Mastery
`v-for` is used with `:key` in both `IngredientSelector` and `SelectedIngredients` components. Keys are bound to unique values. Excellent pattern.

## Data Binding – Mastery
Reactive state is correctly declared with `ref` and `reactive` throughout. A shared store pattern is used to pass state between components. Data is displayed in the template with `{{ }}` and updates correctly.

## Click Methods – Mastery
All `@click` handlers are defined and work correctly. The `.value` accessor is used properly in the script. Ingredient selection and deselection, wallet deduction, and total calculation all function as expected.

## Reactive UI – Mastery
The wallet balance, selected ingredients list, and total price all update in real time when the user interacts. This is exactly how reactive Vue apps should work.

## Semantic HTML – Approaching
The `<ul>/<li>` structure is used for lists, which is great. However, the ingredient selection grid uses raw `<div>` elements. Consider using `<ul>/<li>` there as well, since it's a list of selectable items. Also avoid using `document.getElementById()` in `<script setup>` — Vue has reactive alternatives.

Replace any DOM manipulation like this:
```js
// Avoid in Vue:
document.getElementById('wallet').textContent = wallet.value

// Vue way — just bind to reactive state:
// {{ wallet }} in the template updates automatically
```

## BEM CSS – Not Yet
The project uses Tailwind CSS utility classes throughout. There are no custom BEM class names. If BEM is a requirement for this project, you'd need to add custom class names to your component wrappers following `block__element--modifier`:
- `burger-maker` (block)
- `burger-maker__ingredient` (element)
- `burger-maker__ingredient--selected` (modifier)

## Bonus – Aesthetics – Mastery
The dark theme with color-coded buttons, hover effects, and clean grid layout is visually impressive. This is one of the best-looking projects in the class.

## Summary of Critical Fixes
- **Add BEM class names** — even if you're using Tailwind, add a few custom BEM class names to satisfy the requirement.
- **Remove `document.getElementById()`** from the script — use reactive state bound in the template instead (Vue handles the DOM updates for you).
- Minor: Consider using `<ul>/<li>` for the ingredient grid instead of `<div>` elements.
