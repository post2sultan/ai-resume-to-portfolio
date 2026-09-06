# Design system

## Color palette

| Token | Hex | Use |
|---|---:|---|
| Primary text | `#17263C` | Body copy and high-contrast text on light backgrounds |
| Main background | `#FAF9F6` | Warm off-white page background and light text on dark sections |
| Brand primary | `#3E5C76` | Buttons, labels, secondary text, and interaction emphasis |
| Brand secondary | `#1D2D44` | Dark sections, headings, navigation, and footer |
| Accent | `#738BAB` | Focus rings, fine emphasis, progress, and decorative details |

Transparent borders and overlays are derived from those five colors. Change the variables at the top of `app/globals.css` to reskin the site consistently.

## Typography

- Display and editorial headings: **Roboto Serif**, self-hosted from `public/fonts/roboto-serif-latin.woff2`.
- Interface and body text: **Segoe UI Variable**, with **Segoe UI** and the system sans-serif as fallbacks.

The serif carries personality and hierarchy; the sans-serif keeps detailed content and controls highly legible.

## Layout principles

- Maximum content shell: 1280px with responsive side gutters.
- Major sections use editorial whitespace, numbered introductions, and a consistent vertical rhythm.
- Cards use restrained 12px rounding, low-contrast borders, and subtle shadows.
- Dark and light sections alternate to make long-form content easier to scan.
- Motion is supportive, not required; content remains visible without JavaScript and honors reduced-motion preferences.

## Content principles

- Lead with outcomes, then explain the operating system behind them.
- Use no more than three metrics in a single proof cluster.
- Keep case studies factual and comparable: challenge, approach, result, evidence.
- Do not add decorative sections when résumé evidence is missing.
