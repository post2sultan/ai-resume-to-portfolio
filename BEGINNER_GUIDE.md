# Build Your Portfolio from a Résumé: A Beginner’s Guide

You do not need to be a programmer to use this project. If you can edit a document, create an online account, and follow a checklist, you can build and publish your portfolio.

This guide takes you from an existing résumé to a website with your own domain name.

## What you are building

You will create a personal website containing your professional summary, experience, results, skills, qualifications, interests, and contact details. The finished website can look like the [live Sultan of Scale example](https://sultanofscale.com), but it will contain your information and branding.

The template is free and open source. You may still need to pay for:

- your chosen AI service, depending on its plan;
- a domain name, normally renewed annually;
- hosting, if you outgrow the free allowance offered by your provider.

## Five useful terms

**Résumé or CV:** The document containing your career information. This is the source the AI uses.

**AI coding assistant or LLM:** The AI that reads the project and updates it for you. Examples include Codex, Claude Code, Cursor, GitHub Copilot, and Gemini CLI.

**GitHub repository:** The online folder that stores your website files and remembers each change.

**Hosting:** The service that puts your website on the internet. Vercel and Cloudflare are examples.

**Domain:** The memorable address people type into a browser, such as `yourname.com`. The domain and hosting are separate things, even when one company sells both.

## Before you start

Prepare the following:

- your current résumé or CV;
- a professional email address you are comfortable publishing;
- your LinkedIn URL and any other public contact links;
- one strong landscape photograph for the top of the website;
- an optional personal logo;
- an optional PDF résumé that visitors can download;
- a GitHub account;
- access to an AI coding assistant that can work with project files.

Only include information you are comfortable making public. Never add passwords, API keys, identity documents, your home address, confidential employer information, or anything covered by an NDA.

## Step 1: Create your own copy

1. Open the [AI Resume to Portfolio repository](https://github.com/post2sultan/ai-resume-to-portfolio).
2. Select the green **Use this template** button.
3. Select **Create a new repository**.
4. Give it a simple name, such as `my-portfolio`.
5. Select **Private** while you are preparing it, or **Public** if you are comfortable with everyone seeing the source files.
6. Select **Create repository**.

You now own a separate copy. Changes to your copy will not affect the original template.

## Step 2: Complete the résumé input

Inside your new repository, open `resume/RESUME.md`.

You can edit it directly on GitHub:

1. Select the pencil icon labelled **Edit this file**.
2. Replace the square-bracket instructions with your information.
3. Delete optional sections that do not apply.
4. Select **Commit changes** to save.

Be specific and truthful. Exact dates, metrics, role descriptions, and public links produce a much stronger website. If you do not have a metric or case study, leave it out—the AI is instructed not to invent one.

## Step 3: Add your public files

Your photos, logo, social preview, and downloadable résumé belong in the `public` folder.

On GitHub:

1. Open the `public` folder.
2. Select **Add file → Upload files**.
3. Upload your public-ready files.
4. Select **Commit changes**.
5. Return to `resume/RESUME.md` and enter each exact filename in the **Public assets** section.

Use JPG, PNG, WebP, or AVIF for images. WebP or AVIF normally keeps the website faster. A PDF is the simplest format for the downloadable résumé.

If you do not have all the images yet, tell the AI to use a tasteful plain background and omit missing logos rather than retaining the demo person’s assets.

## Step 4: Ask the AI to build your version

Give your AI coding assistant access to your repository or downloaded project folder. Then copy and send this instruction:

```text
Personalize this portfolio from resume/RESUME.md. Follow AGENTS.md and
CUSTOMIZE_WITH_AI.md exactly. Preserve the visual quality and responsive
design. Never invent facts. Remove unsupported sections and all demo-person
information. Update the images, contact links, SEO, structured data, sitemap,
robots file, and downloadable resume. Run npm run check before finishing.
Do not deploy until I have reviewed the result.
```

The AI should update the project, test it, and explain what it changed. If it returns only pieces of code instead of editing the project, reply:

```text
Please apply the changes directly to every required project file, validate the
complete build, and give me a preview rather than isolated code snippets.
```

## Step 5: Review before publishing

Check the website on both a computer and a phone. Review every item below:

- Your name, title, biography, dates, and figures are correct.
- No reference to the demo person remains.
- Every button and link works.
- The email, LinkedIn, and optional WhatsApp links belong to you.
- The downloadable résumé opens correctly.
- Images are clear and appropriately cropped.
- Private or confidential information is absent.
- The page is easy to read on a phone.
- The AI confirms that `npm run check` passed.

Do not publish until you are satisfied with this review.

## Step 6: Choose and buy a domain

A domain is optional, but it makes the website look professional. Choose something short, easy to spell, and easy to say aloud. Common patterns include:

- `yourname.com`
- `firstname-lastname.com`
- `yourbrand.com`

You can buy a domain from Cloudflare Registrar, Vercel, Dynadot, Namecheap, GoDaddy, or another accredited registrar. Compare the annual renewal price—not only the first-year promotional price—and enable automatic renewal and two-factor authentication.

If you use Cloudflare Registrar, the domain automatically uses Cloudflare’s DNS service. Follow the [official Cloudflare domain registration guide](https://developers.cloudflare.com/registrar/get-started/register-domain/).

You do not need to buy the domain and hosting from the same company. Your hosting provider will tell you which DNS records to add when connecting a separately purchased domain.

## Step 7: Choose hosting

Hosting keeps the website available online. Choose one route below.

### Option A: Vercel — simplest for most beginners

Vercel is the lowest-friction option for this standard Next.js project.

1. Create a Vercel account and sign in with GitHub.
2. Select **Add New → Project**.
3. Import your portfolio repository.
4. Keep the automatically detected Next.js settings.
5. Select **Deploy**.
6. Wait for the green success screen and open the temporary `vercel.app` address.
7. Review the live temporary website.
8. In the Vercel project, open **Settings → Domains**.
9. Add your purchased domain.
10. Follow the exact DNS instructions Vercel displays.

Vercel’s [official Next.js guide](https://vercel.com/docs/frameworks/full-stack/nextjs) explains the deployment, and its [custom-domain guide](https://vercel.com/docs/domains/working-with-domains/add-a-domain) explains the domain connection.

Once GitHub is connected, future changes pushed to the main branch normally trigger a new deployment automatically.

### Option B: Cloudflare Workers

Cloudflare is a strong option if you want the site, DNS, security, and domain management together.

Cloudflare’s recommended Next.js deployment tooling can change, so ask your coding assistant to follow the current official guide rather than copying old configuration from another project.

Send the AI this instruction:

```text
Prepare this existing Next.js project for Cloudflare Workers using the current
official Cloudflare Next.js and vinext guidance. Preserve the content and design.
Run the compatibility check, create only account-neutral configuration, explain
every command in beginner-friendly language, and stop before login or deployment
so I can authorize Cloudflare myself.
```

Then follow these stages with the AI one at a time:

1. Create a Cloudflare account.
2. Run the compatibility check recommended in the [current Cloudflare Next.js guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/).
3. Let the AI prepare the Cloudflare configuration.
4. Log in to Cloudflare when the terminal opens the authorization page.
5. Run the generated deployment command.
6. Open and review the temporary `workers.dev` address.
7. In Cloudflare, open **Workers & Pages → your Worker → Settings → Domains & Routes**.
8. Select **Add → Custom Domain** and enter your domain.

Cloudflare can create the necessary DNS record and certificate for a Worker custom domain. See the [official custom-domain guide](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).

If both `yourname.com` and `www.yourname.com` should work, choose one as the main address and create a permanent redirect from the other. Ask the AI or hosting provider to guide you through this after the main domain works.

### Option C: Another hosting provider

You can use any provider that supports the Next.js App Router. Give the provider’s official deployment guide to your AI assistant and ask it to make only the required hosting changes. Avoid copying account IDs, access tokens, or DNS values from somebody else’s project.

## Step 8: Update the domain inside the website

Before the final deployment, tell the AI your exact production domain:

```text
My final domain is https://yourname.com. Update the canonical URL, metadata,
Open Graph data, structured data, sitemap, robots file, manifest, and every
internal reference. Validate the build and list every file changed.
```

This step helps search engines understand the correct address for your website.

## Step 9: Make the website discoverable

After the domain works:

1. Open `https://yourname.com/robots.txt` and confirm it loads.
2. Open `https://yourname.com/sitemap.xml` and confirm it loads.
3. Add the domain to Google Search Console.
4. Submit `https://yourname.com/sitemap.xml` in Search Console.
5. Inspect the homepage URL and request indexing.
6. Add the site to Bing Webmaster Tools and submit the same sitemap.
7. Test the website with PageSpeed Insights on mobile and desktop.
8. Share the domain from your LinkedIn profile and other trusted public profiles.

Search indexing is not immediate. A correct sitemap and indexing request help discovery, but no service can promise a particular ranking.

## Step 10: Make changes later

When you change jobs, complete a project, or want new wording:

1. Update `resume/RESUME.md`.
2. Tell the AI exactly what changed.
3. Ask it to update the relevant website content without altering verified facts.
4. Review the preview.
5. Ask it to run `npm run check`.
6. Save or push the changes to GitHub.

If your host is connected to GitHub, it will normally publish the update automatically.

## A simple help request

If something goes wrong, paste the full error into your AI coding assistant and say:

```text
Explain this error in plain language. Diagnose it without deleting my work or
changing my domain. Give me one safe action at a time, wait for my result, and
then provide the next action.
```

Never send an AI your password, recovery code, API token, billing information, or private key.

## Your complete checklist

- [ ] Create your repository from the template
- [ ] Complete `resume/RESUME.md`
- [ ] Upload your own public images and PDF résumé
- [ ] Ask the AI to personalize and validate the project
- [ ] Review the computer and phone versions
- [ ] Buy a domain
- [ ] Choose hosting
- [ ] Deploy to a temporary address
- [ ] Connect the custom domain
- [ ] Confirm HTTPS and the `www` redirect
- [ ] Submit the sitemap to Google and Bing
- [ ] Share your new portfolio

That is the complete journey: **résumé → AI-assisted website → hosting → custom domain → search discovery**.
