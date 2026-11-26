# Freedom Loader documentation

This directory contains the English Docusaurus documentation for Freedom Loader. The main project website remains a separate site; the documentation is configured for `https://docs.freedomloader.acnolo.fr/`.

## Local development

From this directory, install dependencies and start the Docusaurus development server:

```bash
npm ci
npm run start
```

Build the production site with:

```bash
npm run build
```

The generated static site is written to `build/`. Mermaid diagrams are rendered by the Docusaurus Mermaid theme from fenced `mermaid` code blocks.

See the [Developer guide](docs/developer-guide.md) for Freedom Loader source setup and binary prerequisites, and [Contributing](docs/contributing.md) for the project's contribution workflow.

## Hosting and DNS

The production hostname and root path are set in `docusaurus.config.js`, and `static/CNAME` declares `docs.freedomloader.acnolo.fr`. The workflow at `.github/workflows/deploy.yml` builds the site and publishes the `build/` directory to this repository's GitHub Pages whenever a commit is pushed to `main`. It can also be started manually with **Actions → Deploy documentation to GitHub Pages → Run workflow**.

In the repository's **Settings → Pages**, set the publishing source to **GitHub Actions**. Configure DNS for `docs.freedomloader.acnolo.fr` to point to this repository's GitHub Pages host, then enable and verify the custom domain in the Pages settings. The main website uses its own separate repository and deployment; do not deploy the documentation artifact to the main website's Pages site.
