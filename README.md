# Dev Portfolio

A small SvelteKit portfolio site built for static hosting on GitHub Pages.

## Local Setup

```bash
npm install
npm run dev
```

Build the static site:

```bash
npm run build
```

The production output is written to `build/`.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the static `build/` folder on pushes to `main`.

For a normal repository deployment like `https://OWNER.github.io/dev-portfolio/`, the workflow sets `BASE_PATH` to `/{repository-name}` automatically.

For a custom domain later:

1. Set the repository variable `CUSTOM_DOMAIN` to your domain, for example `portfolio.example.com`.
2. Configure the same custom domain in GitHub Pages settings.
3. The workflow will publish a `CNAME` file and build with an empty base path.

If you prefer a committed CNAME file, copy `static/CNAME.example` to `static/CNAME` and replace the placeholder with your domain.

## Content

The site is organized as a small static portfolio:

- `/` landing page
- `/what-i-can-do/`
- `/sites/`
- `/contact/`

Update contact details and project copy in:

- `src/lib/data/content.js`
