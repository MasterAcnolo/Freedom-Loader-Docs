---
sidebar_position: 5
---

# Troubleshooting

## Media information is not displayed

- Check that the URL is complete and that the source page is accessible in a browser.
- Confirm **Auto Fetch Info** is enabled in Settings.
- Some sites require you to be signed in. Install Firefox and sign in to the relevant site there if cookie-based access is needed.
- A source site may have changed its behavior or may not currently be supported by yt-dlp.

You can still try submitting the URL if the information preview is unavailable.

## The download fails or stops

1. Retry the download and confirm the output folder is writable and has enough free space.
2. Check whether the selected quality or codec is available for that media.
3. If the problem is specific to a playlist, try an individual item URL.
4. Restart Freedom Loader and try again.
5. Review the logs at the location listed in [Settings and themes](./settings).

## Find the application version and logs

The application version appears near the bottom of the main window. On Windows, logs are stored under `%LOCALAPPDATA%\FreedomLoader\logs\`; on Linux, look under `~/.local/share/FreedomLoader/logs/`.

For additional diagnostic output, open Developer Tools with **Ctrl+Shift+I**.

## Report a bug

Use **Report a Bug** in the application, or open an issue on the [Freedom Loader GitHub repository](https://github.com/MasterAcnolo/Freedom-Loader/issues). Include:

- What you expected and what happened instead.
- The steps and URL needed to reproduce the issue (remove private or account-specific information).
- Your operating system and Freedom Loader version.
- Relevant logs and screenshots, after checking that they do not contain private information.

## Installation or update problems

Download installers only from the [official releases page](https://github.com/MasterAcnolo/Freedom-Loader/releases). On Linux, ensure the package format matches your distribution. For AppImage, confirm the file has execute permission.

If an update fails repeatedly, restart the application and check the logs before reporting the issue.
