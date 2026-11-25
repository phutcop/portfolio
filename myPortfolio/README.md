# Yashraj Dave portfolio

React + Vite portfolio. This is the local Indian-theme version; it has not been published.

## Run locally

```sh
npm ci
npm run dev
```

Vite serves the site at `/portfolio/` (see `vite.config.js`). Run `npm run build` and `npm run lint` before handing off changes.

## Current design

- Home uses an ink-writing name entrance and the clickable Shera tiger.
- About places the original copy directly on the red-and-green rug; the supplied cat frames run across its lower red band.
- Works has a glass jar of eight numbered chits. A selected chit opens in three folds, and Escape or “fold away” closes it.
- Skills is an eleven-card deck with a centered title, caption, and illustrated card back.
- Contact is a postcard with a working FormSubmit form and social links.
- Desktop navigation is a fabric scroll; phone navigation is a fixed bottom tab bar. The top stripe and section chevrons were removed.

Styles load in this order: `index.css`, `experience.css`, `retro.css`, then `styles/indian.css`. Make new visual changes in `styles/indian.css` so the theme stays consistent. Respect `prefers-reduced-motion` for animation work.
