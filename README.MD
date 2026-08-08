# For You — A Love Story

A cinematic, Apple-keynote-style romantic website: black screen → gift box →
envelope → typewriter love letter → photo gallery → timeline → live "together
for" counter → flip-card reasons → quote carousel → floating music player →
fireworks finale → replay.

## Run it
Just open `index.html` in any modern browser (Chrome, Safari, Edge, Firefox).
No build step, no install. It needs an internet connection once, to load the
Google Fonts, Font Awesome icons, and the GSAP/AOS/Lenis animation libraries
from their CDNs.

## Project structure
```
romantic-website/
├── index.html          → page structure
├── style.css            → all visual design (glassmorphism, colors, layout)
├── script.js             → all interactivity + the CONFIG block (see below)
└── assets/
    ├── images/            → gallery photos, hero, favicon
    ├── music/              → the floating player's playlist
    ├── icons/               → favicon
    └── fonts/                 → (empty — using Google Fonts by default)
```

## Customize everything from one place
Open `script.js` and edit the `CONFIG` object at the very top. Every piece of
content on the site is generated from it:

| What to change            | Where |
|----------------------------|-------|
| Recipient name              | `CONFIG.recipientName` |
| The love letter              | `CONFIG.letterParagraphs` |
| Anniversary / start date      | `CONFIG.anniversaryDate` |
| Gallery photos                 | `CONFIG.photos` — swap the `src` for files in `assets/images/` |
| Timeline events                  | `CONFIG.timeline` |
| "Reasons I love you" cards        | `CONFIG.reasons` |
| Quotes carousel                     | `CONFIG.quotes` |
| Firework colors                      | `CONFIG.fireworkColors` |
| Music playlist                        | `CONFIG.playlist` — swap `src` for files in `assets/music/` |

Colors and fonts live at the top of `style.css`, inside the `:root { ... }`
block (look for `--c-*` color variables and `--font-*` font variables).

## About the photos, music & language
- **Photos**: the gallery uses your 5 uploaded photos (`assets/images/real-1.jpg`
  through `real-5.jpg`). Captions are short Lao phrases — edit them anytime
  in `CONFIG.photos` in `script.js`.
- **Language**: the entire site — letter, section headings, timeline, "reasons
  I love you" cards, quotes, finale, buttons, footer, and accessibility
  labels — is in Lao (`<html lang="lo">`). The Lao text uses **Noto Serif
  Lao** (for the letter and quotes) and **Noto Sans Lao** (for everything
  else), loaded from Google Fonts alongside the original Latin fonts, so
  Latin characters/emoji still render in the original typefaces.
- **Music**: the playlist is set up for "เพลงรัก" by Three Man Down (title,
  artist, and cover art are already wired up — song titles are proper names,
  so this one is left as-is rather than translated) — but the actual mp3
  isn't included, since it's a commercially released, copyrighted song I'm
  not able to source or embed. Add the file yourself as
  `assets/music/เพลงรัก.mp3` (get it legally — e.g. export it from a copy you
  already own) and it'll start playing automatically. Until then, the player
  gracefully falls back to the included original instrumental placeholder so
  it's never silent.

## Notes
- Fully responsive, mobile-first, and respects `prefers-reduced-motion`.
- The whole page waits behind the gift-box/envelope opening sequence — this
  is also what unlocks audio playback, since browsers block autoplay before
  a user interacts with the page.
- To reset and re-experience it, use the "Open My Heart Again" button at the
  end, or just reload the page.
