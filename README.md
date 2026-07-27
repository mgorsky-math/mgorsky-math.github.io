# Maximilian Gorsky — academic website

Working source for the Research Fieldnotes redesign of
[mgorsky.com](https://mgorsky.com).

## Local preview

```bash
pnpm install
pnpm run dev
```

## Verification

```bash
pnpm run build
pnpm test
```

## GitHub Pages

The site has a separate static build for GitHub Pages:

```bash
pnpm run build:github
```

This writes the complete website to `out/`. Verify it with:

```bash
pnpm run test:github
```

Create a public repository named `mgorsky-math.github.io`, push this project to
its `main` branch, and then select **GitHub Actions** under
**Settings → Pages → Build and deployment → Source**. The included workflow
will publish the site after every push to `main`.

The custom domain should be added later under **Settings → Pages → Custom
domain**, after the initial `https://mgorsky-math.github.io/` deployment works.
