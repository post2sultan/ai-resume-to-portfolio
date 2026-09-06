# Publishing

Run `npm run check` before any deployment. Confirm the production domain in `content/profile.ts`, replace all demo assets, and verify the résumé download.

## Cloudflare

Cloudflare supports Next.js through its current Workers/OpenNext workflow. Because that workflow changes over time, follow the official Cloudflare Next.js guide for the current adapter and generated configuration. Do not copy another person’s account ID, Worker name, KV namespace, custom domain, or Wrangler login.

At a high level:

1. Create or select your own Cloudflare account and domain.
2. Add the current Cloudflare adapter recommended for Next.js.
3. Build and preview locally.
4. Deploy to a temporary Workers URL.
5. Test the temporary URL, then attach the custom domain.
6. Confirm HTTPS, the `www`/root redirect, `/robots.txt`, and `/sitemap.xml`.

## Vercel

Import the repository into Vercel, accept the detected Next.js settings, add the custom domain, and deploy. No application secrets are required for the base template.

## Other Next.js hosts

Use any host that supports Next.js App Router. Follow the host’s current framework guide rather than committing account-specific deployment files to this template.

## Search launch checklist

- Open the homepage in a private browser window.
- Confirm only one canonical domain resolves; redirect `www` to root or root to `www` with a permanent redirect.
- Open `/robots.txt` and `/sitemap.xml`.
- Test the live URL in Google Search Console, request indexing, and submit the sitemap.
- Submit the sitemap to Bing Webmaster Tools.
- Run PageSpeed Insights for mobile and desktop.
- Validate ProfilePage/Person structured data and the social preview.
