# DevMayuree Portfolio

A personal portfolio by Mayuree Reunsati, a frontend and mobile developer based in Finland.

Live website: https://mareerray.github.io/devmayuree/

## Design

A continuous warm-cream background, terracotta accents, portrait photography, and spacious project previews. No project slider, custom cursor, or UI framework.

## Built with

- HTML
- CSS: custom properties, Grid, Flexbox, responsive layouts
- Vanilla JavaScript: shared navigation, keyboard-accessible project tabs, optional reveal animation
- Font Awesome on existing project-detail pages

## Structure

- `index.html`: homepage
- `css/styles.css`: shared theme, navigation, homepage and project-detail layouts
- `css/work.css`: project tabs and homepage project previews
- `js/components.js`: shared logo/name navigation and mobile menu
- `js/animations.js`: small optional reveal effect, respecting reduced motion
- `js/tabcontroller.js`: project tabs with arrow-key, Home and End navigation
- Individual `.html` files: existing project details
- `img/` and `icons/`: existing assets

## Run locally

Open the project with VS Code Live Server or another local static server. No package installation or build step is required.

## Publishing

The live GitHub Pages site publishes from `main`, repository root. Work on a separate branch, preview locally, and merge only after testing.

## Project content

Web, Flutter and full-stack projects are presented with links to demos, source code, or individual detail pages. Team project credits remain in the existing detail pages.

## Before publishing

- Confirm that `img/kotiloplay-demo-2.jpg` exists.
- Add confirmed KotiloPlay demo/repository links to its feature when available.
- In `piscine-js-igen.html`, replace the empty `js/index.js` reference with `js/components.js`.
- Test mobile navigation, tabs, images, email and project links.
- Preserve existing project-detail filenames and assets.
