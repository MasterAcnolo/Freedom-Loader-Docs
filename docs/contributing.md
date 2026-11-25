---
sidebar_position: 8
---

# Contributing

Thank you for helping improve Freedom Loader. Contributions can be code, documentation, bug reports, feature ideas, or feedback on an existing pull request.

## Before you start

- Search existing [issues](https://github.com/MasterAcnolo/Freedom-Loader/issues) and pull requests so work is not duplicated.
- For a large change, open an issue or discussion first to agree on the approach.
- Read the [Developer guide](./developer-guide) to set up the application and its external binaries.
- Follow the [Code of Conduct](./code-of-conduct) in all project spaces.

## Report a bug

Open an issue through the [Freedom Loader issue tracker](https://github.com/MasterAcnolo/Freedom-Loader/issues) and select the bug-report template. Include:

- A concise description of the problem.
- Steps to reproduce it and the expected and actual behavior.
- Freedom Loader version, operating system, and relevant browser/source details.
- Relevant logs and screenshots, after checking them for private information.

Common log locations are `%LOCALAPPDATA%\FreedomLoader\logs\` on Windows and `~/.local/share/FreedomLoader/logs/` on Linux.

## Propose a feature

Use the [GitHub issue tracker](https://github.com/MasterAcnolo/Freedom-Loader/issues) and select the feature-request template. Explain the problem, who would benefit, and a practical example or use case. For significant changes, discuss the proposal before implementation.

## Submit code or documentation

1. Fork the repository and clone your fork.
2. Create a focused branch from `main`. Suggested prefixes:
   - `feat/` for a feature
   - `fix/` for a bug fix
   - `refactor/` for behavior-preserving code changes
   - `docs/` for documentation
   - `chore/` for maintenance
3. Make a focused change using the surrounding code style. Use camelCase for JavaScript variables and functions, and comment complex logic where needed.
4. Add or update tests and documentation when behavior changes.
5. Run relevant validation before opening a pull request:

   ```bash
   npm test
   npm run lint
   ```

   For UI or download changes, launch the application and verify the affected flow where practical. Test on Windows and/or Linux, and mention which platform you tested.

6. Commit with a short, imperative message, for example `Add playlist progress details`. Keep commits focused and do not change the application version; maintainers handle version bumps for releases.
7. Push your branch and open a pull request against `main`. Use the repository's pull-request template and describe the motivation, changes, tests, and any platform-specific considerations.

## Review and merge

Maintainers review changes, provide feedback, and may ask for revisions. Push follow-up commits to address review comments. Once the pull request is approved, maintainers merge it; changes are included in a later release.

The project follows a trunk-based workflow: `main` should remain deployable, and feature work should be done in short-lived branches rather than long-running version branches.

## Documentation contributions

Documentation changes are welcome. Edit the relevant page in the documentation site, keep instructions aligned with current application behavior, and verify the Docusaurus site builds:

```bash
npm ci
npm run build
```

For diagrams, use Mermaid fenced code blocks. Link to other documentation pages using their relative paths so navigation remains within the documentation site.

## Questions

For help, open a [question issue](https://github.com/MasterAcnolo/Freedom-Loader/issues) or start a [GitHub discussion](https://github.com/MasterAcnolo/Freedom-Loader/discussions).
