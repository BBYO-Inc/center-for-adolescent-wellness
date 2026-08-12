# Center for Adolescent Wellness — Project Guide

Rebuild of BBYO's Center for Adolescent Wellness website, replacing the current
Squarespace site. Read this file first — it should be enough to start work without
re-exploring the codebase.

- **Live site being replaced:** https://www.centerforadolescentwellness.org/
- **New site (preview):** https://center-for-adolescent-wellness.vercel.app
- **GitHub:** https://github.com/ryan-ladd/center-for-adolescent-wellness (public)
- **Local:** `/Users/ryanladd/Documents/Claude/center-for-adolescent-wellness`
- Started 2026-07-21. Ryan is a non-coder — keep explanations plain and non-technical.

## Quick start

```bash
npm run dev
```

Runs at http://localhost:3000 when started this way.

**Preferred:** launch it through the preview tool using the saved config name
**`caw-site`**, which pins it to **port 3200** — http://localhost:3200. That config
lives in `/Users/ryanladd/Documents/Claude/.claude/launch.json` (the parent folder,
*not* this project's `.claude/`) alongside `portfolio` (3001) and
`mobilization-calendar` (3100), so the three sites never collide.

Other commands: `npm run build`, `npm run lint`.

## Stack

Next.js 16.2.10 (App Router) · React 19.2.4 · Tailwind CSS v4 · TypeScript.
App code lives in `src/app`, components in `src/components`, `@/*` → `./src/*`.
No external UI libraries — every component is hand-rolled in this repo.

## Design system

### Colors

Two systems coexist. **The hex values are the real palette**; the `caw-*` Tailwind
tokens in `globals.css` were a provisional starter set and are now only used for
small UI details (borders, muted text, table stripes).

| Use | Value |
|---|---|
| Pink — headings, footer, accents, form asterisks | `#e42158` |
| Cyan — section backgrounds (quick links, staff) | `#00d7eb` |
| Yellow — hover glow on the homepage/hero only | `#f8f90a` |
| Body text | plain `black` |
| Footer muted text | `#fbdbe4` |

Provisional tokens still in use: `caw-gray` (muted text), `caw-gray-light`
(borders, alternating table rows), `caw-blue-light` (hover states), `caw-ink`.
`caw-blue`, `caw-blue-dark`, `caw-sky` are effectively unused now.

### Fonts

Both are local OTFs in `src/fonts/`, loaded via `next/font/local`.

- **Graphik** — body/sans, `--font-graphik`, the default for everything.
  Note: weight 400 is mapped to **Graphik Medium** on purpose, so normal body text
  runs slightly heavier than usual. Weights available: 400, 600, 700 (+ italics).
- **Gamay Narrow Black** — display, `--font-gamay`, used via the `font-display`
  utility class. Weight 900 only. Reserved for `<h1>` hero headlines.

### Signature patterns

These recur across every page — match them when adding anything new.

- **Section padding:** `px-6 py-20 sm:px-10 md:px-[100px]`
- **`-mt-[50px]`** on the first section after a `PageHeader`, to tuck content up
  under the floating header card.
- **Float shadow:** `shadow-[0_30px_60px_-12px_rgba(13,22,58,0.35)]` (cards),
  `shadow-[0_30px_70px_-15px_rgba(13,22,58,0.45)]` (page headers).
- **Section headings:** `text-4xl font-bold text-[#e42158] sm:text-5xl` — pink on
  white sections, white on cyan/photo sections.
- **Rounded corners:** `rounded-2xl` for cards, `rounded-[2rem]` for large panels.
- **Glow on hover:** `hover:shadow-[0_0_24px_4px_rgba(...)]` — yellow over the
  hero, pink everywhere else. Ryan specifically likes this effect.
- **Everything animates in** via `<Reveal>` with staggered `delay` props
  (usually 0 / 100–150 / 200–300ms down the page).

## File map

```
src/app/
  layout.tsx          Root layout — fonts, Nav, Footer, site metadata
  globals.css         Tailwind import + palette tokens
  page.tsx            Home
  about/page.tsx      About Us (staff + partners + testimonials data lives here)
  services/page.tsx   Services (trainings + accordion data lives here)
  resources/page.tsx  Resources (resource list lives here)
  contact/page.tsx    Contact Us (thin wrapper around ContactForm)
src/components/
  Nav.tsx             Header nav (client)
  Footer.tsx          Footer w/ inline social SVG paths
  PageHeader.tsx      Floating hero card used by all inner pages
  Reveal.tsx          Scroll/load fade-and-rise animation wrapper
  Accordion.tsx       Expanding sections (used on Services)
  Testimonials.tsx    Auto-rotating quote carousel (10s, used on About)
  ContactForm.tsx     Contact form (client)
src/fonts/            Graphik + Gamay OTFs and their loaders
public/images/        One folder per page (see Assets)
Brand/                Design source files — git-ignored, local only
```

**Content lives inside the page files**, not in a CMS or data folder. Staff bios,
partner logos, trainings, and resource links are all `const` arrays at the top of
their page's `page.tsx`.

## Navigation

Nav links: About Us, Services, Resources, Contact Us. **There is no "Home" link** —
the logo does that job. Contact Us renders as an outlined pill; the rest are plain
rounded pills.

- **Homepage:** nav is `absolute`, transparent, overlaying the hero, white text,
  yellow glow on hover.
- **Inner pages:** solid white, ink text, pink for the active page, pink glow on hover.
- Not sticky anywhere.
- Logo is 160px source, displayed responsively (h-20 mobile → h-40 desktop).
- Mobile: hamburger toggles a white dropdown; opening it makes the nav solid.

## Page states

| Page | Content | Notes |
|---|---|---|
| **Home** | Hero, Our Mission + YouTube embed, 3 quick-link cards | Video is `X4Sbfi5M0jM` |
| **About** | Intro copy, Meet the Team (4 people), testimonials over a photo, 34 partner logos | Real bios, all final |
| **Services** | What We Offer, audience list, 4-item accordion, Request Services button | 8 trainings nested in the accordion |
| **Resources** | Articles & Media intro + 9 links | Table on desktop, cards below `md` |
| **Contact** | Contact form only | **Form does not actually send anything** |

**Staff currently shown:** Drew Fidler (Executive Director), Rabbi Brandon
Bernstein, Jennifer Ferris-Glick, Michal Berkson Powell. Photos for Andy Harkavy,
Sascha Meier, and Taneesha Thomas exist in `public/images/about/staff/` but are
**not** in the `STAFF` array — they were dropped in but never added, or were
removed. Confirm with Ryan before adding them.

## Assets

`public/images/` mirrors the site structure — one folder per page:
`home/`, `about/` (with `staff/` and `partners/` subfolders), `services/`,
`resources/`, `contact/`, `shared/` (CAW + BBYO logos).

Ryan drops files into the matching folder, then they get wired into the page.
Filenames are lowercase-with-hyphens (`brandon-bernstein.jpg`, `camp-harlam.png`).

- **Logo:** `shared/caw-logo.png` — the RGB full-color PNG (1283×1224, 488KB),
  copied from `Brand/Logo/CAW Logo RGB - Full Color.png` on 2026-08-10. Used in
  `Nav.tsx` and `Footer.tsx`, the only two places it appears.
  - It is **not square** (ratio 1.048). Size it with a height class plus `w-auto`
    (e.g. `h-40 w-auto`) — never `h-40 w-40`, which squashes it.
  - Do **not** add `unoptimized`; Next compresses it to a ~38KB WebP.
  - `shared/caw-logo.svg` (868KB) is the previous logo, now unused. It needed
    `unoptimized` because of its embedded wordmark. The CMYK PNG that used to sit
    at `caw-logo.png` was replaced by the RGB one; it's still in `Brand/Logo/`.
- **`Brand/`** is the design source of truth and is **git-ignored** (161MB).
  Contains: `Fonts/` (Graphik + Gamay OTFs), `Logo/`, `Graphics/` (FY27 header PNGs
  the page heroes are cropped from), `Partner Logos/`, `Photos/` (raw camera files,
  ~20MB each — always compress before moving into `public/`).

## Deploy

**Publishing is a Vercel CLI deploy run by Claude.** When Ryan says "publish it":

```bash
cd /Users/ryanladd/Documents/Claude/center-for-adolescent-wellness && npx --yes vercel@latest --prod --yes
```

Takes ~1 min. Always verify the public URL afterwards rather than assuming success.

- **Public link to share:** https://center-for-adolescent-wellness.vercel.app — same
  on every deploy, no auth wall. Vercel's `...-git-main-...` and hashed URLs sit
  behind a Vercel login; never hand those out.
- Vercel CLI is authenticated on this Mac as `ryanladd10-3726`, org
  `ryan-ladds-projects`. Ryan did the interactive login himself — never handle
  Vercel or GitHub tokens.
- The folder is linked to the existing Vercel project via `.vercel/project.json`
  (git-ignored). Don't create a second project.
- **This deploys the LOCAL folder, not GitHub.** Uncommitted changes go live, and
  the repo is no longer the record of what's live.

### Why not push-to-deploy

The repo was transferred to the **`rl-bbyo` personal GitHub account** on 2026-08-12,
which broke both halves of the old flow:

1. `ryan-ladd` gets **403** pushing to it — the keychain PAT is a fine-grained token
   scoped to repos that account owns, and it no longer owns this one.
2. Vercel **cannot connect** it: for a repo owned by a *personal* account you must be
   the repo Owner. Collaborator access is explicitly not enough. Org-owned repos are
   fine.

**Open recommendation:** move the repo into a **GitHub organization** (check with BBYO
IT whether one exists). That restores push access via org membership and lets Ryan's
existing Vercel account reconnect — no second Vercel account. GitHub and Vercel are
both BBYO-sanctioned platforms, so either path is on-policy.

Git identity on this Mac is Ryan Ladd / ryan.ladd10@gmail.com. Repo:
https://github.com/rl-bbyo/center-for-adolescent-wellness (public; the old
`ryan-ladd` URL 301-redirects to it).
The custom domain is not attached yet; the real site is still Squarespace.

## Known issues / open work

1. **Contact form is a dead end.** `ContactForm.tsx` validates fields and shows a
   "Thank you!" message, but nothing is sent — no email, no API route, no database.
   This must be wired up before launch.
2. **Hero images are enormous.** The page hero PNGs run 6–19MB each
   (contact 19MB, resources 15MB, services 14MB). Next optimizes what it serves,
   but these bloat the repo and slow builds. Worth compressing at source.
3. **The Wellness Assessment Tool PDF is still hosted on Squarespace** — the link
   inside the Services accordion points off-site. It should be moved into
   `public/` and served from this site before the Squarespace site goes away.
   (The "Request Services" button used to have the same problem; it was pointed
   at `/contact` on 2026-08-10.)
4. **Uncommitted work in progress** (as of 2026-08-10): Rabbi Brandon Bernstein's
   real bio + a new 1MB headshot on the About page. Compress the photo before pushing.
5. `public/images/home/hero.png` is unused — the homepage uses `hero-subpage.png`.
6. Footer address is **PO Box 14540, Washington, DC 20004 · (202) 857-6563**.
   The old site listed a street address; confirm which is current before changing.

## Gotchas

- **Screenshots of the preview pane render blank below the YouTube iframe** and
  won't capture lazy-loaded card images. Verify those with DOM/JS reads or in real
  Chrome — don't trust a blank screenshot as a bug.
- Only **one commit** exists in this repo's history (`f7ef39b`), so `git log` is not
  a useful record of past decisions. This file is the record.
- Tailwind v4 — the palette is defined in `@theme inline` inside `globals.css`,
  not in a `tailwind.config.js` (there isn't one).
