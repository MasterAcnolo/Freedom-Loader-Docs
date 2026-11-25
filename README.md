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

The production hostname and root path are set in `docusaurus.config.js`; `static/CNAME` declares the custom hostname for compatible static hosting. The main website has its own existing GitHub Pages deployment. GitHub Pages provides one Pages site per repository, so publishing this documentation on a separate subdomain requires a separate Pages project/repository or another static host, plus DNS configuration for `docs.freedomloader.acnolo.fr`. Do not deploy this build over the main website's Pages artifact.

The current deployment workflow in the parent repository builds and publishes the main website only. Configure the documentation host and DNS separately before expecting the custom domain to resolve.
