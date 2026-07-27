# Center for Adolescent Wellness — Website

A rebuild of BBYO's Center for Adolescent Wellness site
(current live site: https://www.centerforadolescentwellness.org/).

Built with Next.js 16, React 19, Tailwind CSS v4, and TypeScript.

## Running the site locally

```bash
npm install      # first time only
npm run dev      # starts the local preview at http://localhost:3000
```

## Where to drop your assets

Each page has its own folder under `public/images/`. Just drop files into the
matching folder and let me know — I'll wire them into the page.

| Page       | Web address   | Drop assets here             |
| ---------- | ------------- | ---------------------------- |
| Home       | `/`           | `public/images/home/`        |
| About Us   | `/about`      | `public/images/about/`       |
| Services   | `/services`   | `public/images/services/`    |
| Resources  | `/resources`  | `public/images/resources/`   |
| Contact Us | `/contact`    | `public/images/contact/`     |
| Logo, icons, anything shared | — | `public/images/shared/`  |

## Pages

The five pages mirror the current site's navigation: Home, About Us, Services,
Resources (Publications & Interviews), and Contact Us. Home is built out with a
hero, mission, and quick links; the inner pages are clean starter shells ready
to fill in one at a time.

## Notes

- The blue palette in `src/app/globals.css` is provisional — it will be refined
  once the official logo and brand assets are added.
- Nothing is deployed. This runs only on your computer until we decide otherwise.
