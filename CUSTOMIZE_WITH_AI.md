# Customize with an LLM

This file is both a human guide and a ready-to-use instruction for an LLM coding assistant.

## Before you begin

1. Fill every applicable section of `resume/RESUME.md`.
2. Put your public-ready assets in `public/` using clear filenames.
3. Keep the demo files until the assistant has finished, because it can use them as layout references.

## Master instruction

Copy everything in the block below into your preferred coding assistant.

```text
You are personalizing an open-source executive portfolio from one structured
résumé. Work directly in this repository.

Read, in this order:
1. AGENTS.md
2. resume/RESUME.md
3. content/profile.ts
4. app/page.tsx
5. app/interactive.tsx
6. app/globals.css
7. docs/DESIGN_SYSTEM.md

Objective:
Transform the current demo into a complete portfolio for the person described
in resume/RESUME.md while preserving the established design system and responsive
behavior.

Content rules:
- Treat the résumé as the only factual source of truth.
- Never invent employers, dates, qualifications, metrics, client names, awards,
  testimonials, links, contact details, or claims.
- You may improve clarity and hierarchy, but do not change the meaning.
- If information is absent, omit the affected item or section cleanly. Do not
  leave placeholders, empty cards, broken controls, or demo-person content.
- Use the strongest three verified metrics in the impact band.
- Use up to four well-supported roles or projects as case studies. A case study
  requires a challenge, action/approach, result, and at least one verified metric.
- Keep dates and numbers exactly aligned with the résumé.
- Remove the personality section unless the résumé explicitly supplies a valid
  assessment or leadership-style content that can replace it honestly.

Implementation rules:
- Replace identity, contact, domain, hero, asset paths, and metadata in
  content/profile.ts.
- Replace all demo biography and career content in app/page.tsx.
- Search the entire repository for the demo name, demo domain, demo email,
  demo phone number, and demo social URLs; none may remain in the personalized
  site unless the new résumé belongs to that demo person.
- Preserve the overall visual language, navigation, responsiveness, accessible
  labels, keyboard behavior, reduced-motion behavior, and semantic headings.
- Update or remove brand and case-study images to match files supplied in public/.
- Do not use remote hotlinked images. Add local optimized WebP/AVIF assets.
- Add descriptive alt text. Decorative images must use empty alt text.
- Update title, description, canonical URL, Open Graph data, JSON-LD, robots,
  sitemap, manifest, résumé download, mail link, social links, and footer copyright.
- If no production domain is provided, use http://localhost:3000 and clearly flag
  the domain as the only remaining pre-publish action.
- Do not add analytics, cookies, trackers, forms, APIs, or paid services unless
  the résumé explicitly requests them.
- Do not alter LICENSE or NOTICE.md.

Quality checks:
- Run npm install if dependencies are not installed.
- Run npm run lint and npm run build.
- Inspect the finished page at desktop and mobile widths.
- Verify that /robots.txt, /sitemap.xml, and /manifest.webmanifest are generated.
- Check every external link and every referenced local asset.
- Report what changed, any intentionally omitted sections, validation results,
  and the exact publishing steps still needed.

Do not deploy or change DNS without the user explicitly asking for that separate
action.
```

## If your LLM only accepts file uploads

Compress this project folder, upload the ZIP and your completed `resume/RESUME.md`, and use the same master instruction. Ask the model to return a complete edited ZIP rather than isolated snippets.
