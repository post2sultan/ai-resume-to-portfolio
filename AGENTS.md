# Project instructions for coding agents

## Goal

Turn `resume/RESUME.md` into a truthful, complete, production-ready personal portfolio while preserving the established visual system.

## Source of truth

- `resume/RESUME.md` is the sole factual source for a personalized build.
- Never infer or fabricate facts, dates, metrics, endorsements, contact details, or client relationships.
- Demo content exists only to demonstrate the design. Remove every demo-specific fact that is not supported by the new résumé.

## Editing map

- Put identity, contact, domain, hero, core assets, and global SEO in `content/profile.ts`.
- Put impact, brands, case studies, leadership style, skills, career history, qualifications, languages, and interests in `app/page.tsx`.
- Change `app/interactive.tsx` only for behavior or reusable component needs.
- Preserve the design tokens and component system in `app/globals.css`. Prefer content changes over redesigns.
- Keep images and downloadable files local in `public/`.

## Content behavior

- Omit unsupported optional sections without leaving blank space.
- Prefer three verified impact metrics and up to four evidence-backed case studies.
- Keep résumé dates and figures exact.
- Use concise, direct language and accessible headings.
- When an optional contact method is absent, remove its action rather than inventing a link.

## Safety and privacy

- Never commit secrets, API keys, passwords, private addresses, identity documents, or hidden personal data.
- Do not add analytics, tracking, cookies, forms, or third-party services without explicit authorization.
- Do not deploy or modify DNS unless the user explicitly asks.

## Definition of done

- No unintended demo identity, domain, email, phone number, social URL, biography, or asset remains.
- Metadata, canonical URL, Open Graph, JSON-LD, sitemap, robots, manifest, and footer agree.
- All local assets and external links resolve.
- The page works at mobile and desktop widths with keyboard navigation.
- `npm run lint` and `npm run build` pass.
- The final report names any omitted content and remaining publishing action.
