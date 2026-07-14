# Abdulmjeed Alqurashi — Portfolio

A premium single-page portfolio for an HCI graduate and inclusive / accessibility-focused designer, built with **React 19**, **Vite 7**, and **Tailwind CSS 4**.

## Brand

| Token | Hex | Usage |
| --- | --- | --- |
| Primary | `#AEB1AD` | Hero background, light surfaces |
| Accent | `#7B3034` | Case studies & footer background, CTAs |

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
```

## Replacing the placeholders

- **Midan** now uses real app screenshots in a scroll-snap phone gallery, in
  `public/midan/` (`login.webp`, `team.webp`, `stats.png`, `accessibility.png`, `players.webp`).
  To adjust which screens show or their order, edit the `gallery` array in
  [`src/components/CaseStudies.jsx`](src/components/CaseStudies.jsx).
- **Khatib & Alami** now uses real screenshots in a responsive showcase (desktop hero + two RTL
  mobile cards), in `public/ka/` (`desktop.png`, `mobile.png`, `partners.png`). Edit the `showcase`
  object in [`src/components/CaseStudies.jsx`](src/components/CaseStudies.jsx) to change them.
- **Nathr** now uses real UI screens in a small-card scroll gallery, in `public/nathr/`
  (`wireframe.png`, `home.png`, `browse.png`, `shelves.png`). Edit the `gallery` array in
  [`src/components/CaseStudies.jsx`](src/components/CaseStudies.jsx). Its Figma link is still a
  placeholder (`#`) — set it in the same `links` array.
- **Project links** (Figma / Source Code / Live) — edit the `links` arrays in
  [`src/components/CaseStudies.jsx`](src/components/CaseStudies.jsx). Real `http(s)` links open
  in a new tab automatically. Midan's Figma and Source Code links are already wired.
- **LinkedIn / GitHub URLs** — edit the `socials` array in
  [`src/components/Footer.jsx`](src/components/Footer.jsx).

## Structure

```
src/
  App.jsx                  # page composition + skip link
  components/
    Navbar.jsx             # fixed nav with blur-on-scroll
    Hero.jsx               # silver hero, headline, CTAs
    CaseStudies.jsx        # maroon color-block, 3 split-layout projects
    Footer.jsx             # contact block, oversized email, socials
    Reveal.jsx             # IntersectionObserver fade-up animation
    Icons.jsx              # inline SVG icon set
```
