# Portfolio Analytics

This portfolio supports optional GoatCounter analytics for private visitor statistics.

## Why this is not stored directly in Git

GitHub Pages is a static host. The browser cannot safely write visitor events back into this repository because that would require exposing a GitHub write token to every visitor. Use a hosted analytics endpoint instead, then keep only the configuration in Git.

## Recommended Setup

1. Create a GoatCounter site at https://www.goatcounter.com/.
2. Choose a site code, for example `karthickod`.
3. In GitHub, open this repository.
4. Go to `Settings > Secrets and variables > Actions > Variables`.
5. Add a repository variable:

```text
VITE_GOATCOUNTER_CODE=karthickod
```

6. Re-run the GitHub Pages deployment workflow, or push a new commit to `main`.
7. View private stats at:

```text
https://karthickod.goatcounter.com/
```

Replace `karthickod` with the actual GoatCounter site code you create.

## Local Testing

Create `.env.local`:

```text
VITE_GOATCOUNTER_CODE=karthickod
```

Then run:

```powershell
npm run build
npm run preview
```

Open the preview site and confirm the browser network tab loads `https://gc.zgo.at/count.js`.
