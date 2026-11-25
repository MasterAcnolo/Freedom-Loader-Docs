---
sidebar_position: 8
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# Changelog

This archive contains the original release notes published for Freedom Loader on GitHub, from version 1.0.0 to the latest published release available when this page was generated. The wording and links are retained; each version heading links to its original GitHub release. New releases can be added here from the [GitHub Releases page](https://github.com/MasterAcnolo/Freedom-Loader/releases).

## [1.6.4](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.6.4)

*Released: 2026-10-07*


### Changelog

#### Features
- **In-App Feedback**: Added a built-in feedback form allowing users to send feedback, bug reports, and daily logs directly to the development team.
- **Community Contributions**: GitHub issues are now better maintained on the repository. If you want to contribute to the project, feel free to drop by and check out the `good first issue` tags!
- **Changelog**: The changelog is now automatically displayed after an update (can be disabled if preferred). Old changelog are cached.
- **Updater UI**: Reworked the update notification for better clarity. Windows and AppImage users can download updates seamlessly in-app, while unsupported Linux package users are gracefully redirected to the manual download page. Flatpak and Snap users are not prompted, as updates are handled natively by their respective package managers.

<img width="55%" alt="image" src="https://github.com/user-attachments/assets/cfa1b5ca-2e03-43fa-9491-9e17240bd1cf" />


#### Improvements
- **Bundle Size**: Optimized assets and dependencies, reducing the overall application bundle size by approximately 30% for specific versions.
- **Toast Notifications**: Refactored the style and overall UX of toast alerts.
- **Code Quality**: Implemented a linter to enforce coding standards.

#### Fixes
- **Auto-Updater**: Fixed a major issue causing `404 Not Found` errors when attempting to download updates for `.AppImage` releases.
- **Linux Updates**: Fixed update crashes on `.rpm` and `.snap` packages. In-app update flows are now disabled for these formats to let the OS handle the process natively.
- **Windows Logs**: Fixed a file naming issue with the log transport system on Windows.
- **Desktop Entry Name**: Fixed the desktop entry name for Linux users, ensuring it displays correctly in application menus.
- **Custom Top Bar**: Removed the `customTopBar` settings.
- **Auto Update**: Removed the `autoUpdate` settings. To avoid conflicts with OS and UI.
- **UI (System Tray)**: Removed the ***[EXPERIMENTAL]*** label from the config panel.

#### Chores
- **Dependencies**: Removed `dotenv` from the project.
- **Website**: A brand new website URL is now available: [freedomloader.acnolo.fr](https://freedomloader.acnolo.fr)
- **Dev**: Added a new npm script to check Linux file quality.

### Found a bug or issue?
Please report it in the [GitHub Issues](https://github.com/MasterAcnolo/Freedom-Loader/issues) section.

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.6.3...1.6.4

## [1.6.3](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.6.3)

*Released: 2026-09-11*


### Changelog

#### Improvements
- **System Tray Refactor**: Reworked system tray window management - the main window is now retrieved on demand via `getMainWindow()` instead of being passed around at initialization.
- **Settings**: `createPlaylistFolders` now defaults to `false`.
- **Browser Detection**: Cleaned up and refactored the browser detection function.
- **Code Cleanup**: Removed unused code sections and refined various implementation details.
- **Internal Server**: Light refactor of the internal server stop messages.
- **Devron**: Fixed logic error preventing DevTron from loading correctly in development mode.
- **Icons**: Removed unused legacy icons.
- **README**: Various fixes and detail improvements.

#### Bug Fixes

- **Dev Mode**: Fixed incorrect `devMode` declaration.
- **Electron**: Upgraded to `electron@44.3.0` to fix the system tray icon.
- **UI**: Fixed grammatical error "Will be save on" -> "Will be saved in" (thanks [@aurecx](https://github.com/aurecx) !)

#### Under the Hood (Dev & DX)

- **Refactor**: Centralized OS/platform detection logic.

### Found a bug or issue?
Please report it in the [GitHub Issues](https://github.com/MasterAcnolo/Freedom-Loader/issues) section.

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.6.2...1.6.3

## [1.6.2](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.6.2)

*Released: 2026-08-15*


### Changelog

#### Features
- **System Tray [EXPERIMENTAL]**: The application can now be minimized to the system tray. This feature is disabled by default and can be toggled in the settings. (Note: Currently considered slightly unstable on some Linux distributions).

#### Improvements
- **File Signatures**: Added signatures to downloaded files.
- **Folder Management**: Improved default folder management and fallback logic.
- **Startup**: Various optimizations to the application startup sequence.
- **UI Tweaks**: Renamed the subtitle/quote for the Dark Theme.
- **Credits**: Added a special thanks to [@AureCX](https://github.com/AureCX) !

#### Bug Fixes
- **Linux Discord RPC**: Fixed a major bug that prevented Discord Rich Presence (RPC) from working correctly on Linux systems.
- **Log Spam**: Fixed an issue during startup where minor background warnings (such as Discord not being open) would trigger massive and unnecessary error logs.

#### Under the Hood (Dev & DX)
- **Enhanced Logging**: Introduced colored terminal logs and proper date formatting (Starting and Ending) for a better Developer Experience (DX).
- **Code Cleanup**: General code cleanups, optimizations, and removal of dead frontend code (e.g., `configuration.js`).
- **Dev Environment**: `yt-dlp` binaries are no longer tracked in the repository. Developers must now download them manually and place them as instructed in the `BINARIES.md` file.

### Found a bug or issue?
Please report it in the [GitHub Issues](https://github.com/MasterAcnolo/Freedom-Loader/issues) section.

### Next Release (non-exhaustive roadmap)
- More format options
- Subtitle support
- Improved UI / UX
- Language selection
- Download specific parts of videos
- File renaming options
- Parallel downloads
- Skip sponsored parts automatically

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.6.1...1.6.2

## [1.6.1](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.6.1)

*Released: 2026-08-07*


### Changelog

#### Features
- Added playlist index ordering — downloaded playlist items can now be prefixed with their index number to preserve the original order. Can be disabled in settings.

#### Bug Fixes

- Fix a white line that appeared at the top of the application on Linux System.
- Fixed configuration not being refreshed between downloads — settings changes (e.g. toggling playlist folders) now take effect immediately without requiring a restart.
- Various small code fixes and improvements.


#### API
- Changed `/info` endpoint from `POST` to `GET`.

#### Notifications
- Improved notification management.

### Found a bug or issue?
Please report it in the [GitHub Issues](https://github.com/MasterAcnolo/Freedom-Loader/issues) section.

### Next Release (non-exhaustive roadmap)
- More format options
- Subtitle support
- Improved UI / UX
- Language selection
- Download specific parts of videos
- File renaming options
- Parallel downloads
- Skip sponsored parts automatically

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.6.0...1.6.1

## [1.6.0](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.6.0)

*Released: 2026-07-28*


### Changelog

####  Linux Support
- Added full Linux support with distribution packages for **Fedora**, **Debian/Ubuntu**, **RPM-based distros**, **AppImage** (universal), and **Snap**
- Added an official **Fedora COPR** repository for seamless installation and automatic updates via `dnf`:
  - https://copr.fedorainfracloud.org/coprs/masteracnolo/freedom-loader/
- Published on the **Snap Store**: `sudo snap install freedom-loader`
- Refactored the internal resources architecture to support both Windows and Linux builds
- Added `BINARIES.md` documenting how to set up the required binaries for development

####  Themes
- Fixed default theme integration — the built-in **Dark** and **Light** themes are now properly bundled as `.zip` files and loaded correctly on both Windows and Linux
- Fixed theme loading on Linux (themes were previously skipped due to a platform check that has been removed)
- Fixed a circular dependency issue in `path.helpers.js` causing the logger to be undefined at startup, which silently swallowed theme errors

#### Website

- Refactor the [download page](https://masteracnolo.github.io/Freedom-Loader-Site/#/download) on the website, to include linux packages

####  Bug Fixes
- Fixed a startup crash on Linux caused by an incorrect logger initialization order (`path.helpers.js` → `logger.js` circular dependency)
- Fixed auto-updater showing a popup error on first launch when no previous release exists (404 on `latest-linux.yml` is now silently ignored)
- Fixed corrupted theme entries (`dark.zip` being created as an empty folder instead of a file) — the app now auto-corrects this on startup

####  Logging
- Enhanced startup logs with system information (platform, distro on Linux, CPU, memory, Electron/Node versions, Firefox presence, display server, desktop environment, log directory, download path)

#### Packaging & Distribution
- Renamed Linux executable and install path to `freedom-loader` (no spaces) for compatibility with RPM build tools
- Added AppStream metadata (`com.masteracnolo.freedomloader.metainfo.xml`) for proper integration with GNOME Software and other app stores
- Updated `package.json` with `homepage`, `repository`, `license`, and `bugs` fields

####  Security
- Overhauled `SECURITY.md` — clarified latest-only support model, updated distribution sources (COPR, Snap Store)

### Found a bug or issue?
Please report it in the [GitHub Issues](https://github.com/MasterAcnolo/Freedom-Loader/issues) section.

### Next Release (non-exhaustive roadmap)
- More format options
- Subtitle support
- Improved UI / UX
- Language selection
- Download specific parts of videos
- File renaming options
- Parallel downloads
- Skip sponsored parts automatically

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.5.1...1.6.0

## [1.5.1](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.5.1)

*Released: 2026-06-02*

### Changelog

#### New features
- Add Devtron in dev mode for easier debugging
- Add `enableHardwareAcceleration` setting in the UI and `settings.json` (enabled by default)
- Improved lazy loading at startup *(experimental)*
- The app can no longer be launched as multiple instances simultaneously

#### Fixes & improvements
- Update all dependencies
- Rename `localMode` to `devMode` for clarity
- Fix app version displayed as `dev` when the app is not packaged
- Fix form width
- Improve theme loading robustness
- Add full code documentation

### Found a bug or issue?
Please report it in the GitHub Issues section.

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.5.0...1.5.1

## [1.5.0](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.5.0)

*Released: 2026-04-14*


This is a massive update. A lot has changed under the hood, on the surface, and even outside the app itself. New theme engine, new launch experience, new web tools, refactored architecture - 1.5.0 is easily the biggest release so far.

---

### Custom Theme System

Freedom Loader now has a fully custom theme engine. The old CSS-class approach is gone - themes are now self-contained files you can drop in, share, and build yourself.

- Themes live in the `/theme` folder at the root of the installation
- A theme is either a `.zip` archive (containing a `.theme.json` + optional background image) or an unzipped folder - both formats are supported
- Background images are validated: only JPG, PNG, WebP, GIF, AVIF are accepted, with a **10 MB size limit** for security
- Themes are loaded, validated, and cached at startup - invalid or malformed themes are skipped gracefully with a warning in the logs
- Themes are sorted: official themes appear first in a defined order, custom/community themes fall after
- A **Refresh button** in the settings panel lets you reload themes without restarting the app
- The selected theme is now saved in `config.json` and persists across sessions
- Added a dedicated **"Open Theme Folder"** button in the settings panel

#### Theme format

Each `.theme.json` defines colors, background settings, form styles, checkbox, progress bar, video info, settings panel, and more. A full template is available in the repository.

---

### Theme Workshop - New Standalone Web Tool

A brand new web tool is now available separately:

**[Freedom Loader Workshop](https://masteracnolo.github.io/Freedom-Loader-Workshop/)**

- **Create page** - live preview of the Freedom Loader interface with real-time color editing using a color picker (supports HEX and RGBA)
- **Browse page** - gallery of all official and community-validated themes with preview screenshots, creator info, and direct ZIP download
- Background image upload with size/position/attachment controls
- One-click export as a `.zip` ready to drop into your `/theme` folder
- Light/dark mode is integrated by default

#### Submitting a community theme

Want your theme featured in the Workshop? Open an issue on the [Workshop repository](https://github.com/MasterAcnolo/Freedom-Loader-Workshop) with:
- Preview screenshots of your theme
- Your `.theme.json` + background image (if any)
- The theme name, description, and your GitHub username

---

### New Application Startup

The launch experience has been completely reworked:

- A **splash screen** is displayed immediately on launch - clean, minimal, with a live progress bar showing each boot step (dependency check > server start > theme loading > window ready)
- The main window stays hidden until everything is ready, then fades in - no more white flash or content rendering mid-load
- The boot sequence is now modular and ordered: dependencies > yt-dlp update > Express server > IPC registration > themes > window > Discord RPC > auto-updater

---

### Download Experience

- Added a **Stop Download** button - cancel any in-progress download at any time
- Playlist downloads now display **"Video X of Y"** in real time so you always know where you are
- Playlists now create a **dedicated output folder** named after the playlist title
- New setting: **"Create Playlist Folders"** - disable this if you prefer all files in the same directory
- New setting: **"Notification at the end"** - disable this if you don't like Windows Notification at the end of a download.
- If fetching playlist data fails, the app automatically retries as a single video - no more hard failures
- The save path display now includes a `title` attribute to show the full path on hover when it's truncated

---

### Toast Notifications

A new in-app toast notification system replaces silent failures and missing feedback:

- Three types: **Info**, **Success**, **Error**
- Displayed top-right, auto-dismisses after a few seconds
- Download completion, errors, and key actions now trigger a toast
- Fully wired through IPC so backend events can push notifications to the UI

---

### Auto-Update Improvements

The auto-update flow has been redesigned to give the user control:

- On startup, Freedom Loader checks for updates silently
- If an update is available, a **native dialog** appears asking whether to install now or later
- Clicking "Mabe Later" shows a small **badge in the UI** indicating a new version is available - click it to trigger the dialog again
- Download progress is shown during the update
- After download, a second dialog prompts to **Restart & Install**
- The app no longer force-installs without consent

---

### Architecture Refactor

The codebase has been significantly resytructured:

- `main.js` has been split into dedicated modules inside a new `/app` folder:
  - `windowManager.js` - BrowserWindow lifecycle
  - `ipcHandlers.js` - all IPC handlers
  - `pathValidator.js` - download path validation
  - `ytDlpUpdater.js` - yt-dlp update logic
  - `autoUpdater.js` - electron-updater integration
  - `discordRPC.js` - Discord Rich Presence
  - `dependencyCheck.js` - binary presence validation
  - `themeManager.js` - theme loading, caching, sorting
  - `splashManager.js` - splash screen window management
- The boot sequence in `main.js` is now clean, readable, and sequential
- `server.js` no longer handles anything outside of Express

---

### Config Persistence Fix

- User configuration (`config.json`) is now stored in `AppData\Roaming\FreedomLoader\` instead of the installation directory
- **Updates no longer wipe your settings** - the config is preserved across every update
- On first launch, the default config is copied from the installation folder to AppData
- A `config.dev.json` is used in development mode and is excluded from production builds

---

### Full Website Redesign

The official Freedom Loader website has been completely rebuilt from scratch:

- Migrated to **React + Vite** with React Router v6 - the site is now a full SPA
- New unified design system shared with the Workshop - same typography, same color tokens, same light/dark mode
- All pages migrated and expanded: Home, About, Features, Wiki, FAQ, Download, Roadmap, Contribute, Contact, Privacy, Terms
- Completely redesigned UI: hero section, feature cards, tech stack, visual roadmap, contribution guide
- **URL migration** - the site moved from `/FreedomLoader` to `/Freedom-Loader-Site`, update your bookmarks. Don't worry, an automatic redirection is in place on the old URL for a while.

> Want to see this? [Visit the website](https://masteracnolo.github.io/Freedom-Loader-Site/)

---

### CSS & Style Cleanup

- Removed all per-theme CSS files (`dark-theme.css`, `nf-theme.css`, etc.) - themes are now 100% driven by JSON and CSS variables
- `themeimport.css` removed
- Hardcoded theme class rules (`body.dark`, `body.light`, etc.) cleaned up across all stylesheets
- CSS variables in `variables.css` now have concrete values instead of `var()` references for compatibility with dynamic injection
- Global transitions cleaned up for better performance

---

### Related Repositories

- [Freedom Loader Workshop](https://github.com/MasterAcnolo/Freedom-Loader-Workshop) - Theme creator and browser
- [Freedom Loader Site](https://github.com/MasterAcnolo/Freedom-Loader-Site) - Official website and wiki

---

### Fixes

- Fixed save path display being cut off for long paths
- Fixed theme not saving correctly between sessions, they are now saved in `Appdata` too
- Fixed `customTopBar` setting moved to Advanced section where it belongs
- Fixed external links for website and wiki in IPC handlers
- Fixed stop button hover scale effect
- Fixed playlist fetch retry logic on failure
- Fixed z-index layering issues on several UI elements
- Fixed icon not displaying correctly in production builds

### Removed

- Removed all legacy CSS theme files
- Removed yt-dlp update logic from `server.js` (moved to boot sequence)
- Removed Discord RPC and auto-updater from `server.js` (moved to `/app`)

### Known Issues

- **Cookie extraction works only with Firefox**  
  Freedom Loader retrieves browser cookies using Firefox. If Firefox is not installed, extraction will fail.  
  > See the [Firefox setup guide](https://masteracnolo.github.io/Freedom-Loader-Site/wiki)


### Found a bug or issue?

Please report it in the [GitHub Issues section](https://github.com/MasterAcnolo/Freedom-Loader/issues).

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.4.7...1.5.0

*Because why not?*

## [1.4.7](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.4.7)

*Released: 2026-04-09*


### Changelog

- Update all dependencies for Security Issues
- Remove unused picture `apercu1.2.4.png`

### Found a bug or issue?
- Please report it in the GitHub Issues section

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.4.6...1.4.7

## [1.4.6](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.4.6)

*Released: 2026-03-18*


### Changelog

- Update YT-DLP to `2026.03.17`
- Update all dependencies for Security Issues
- Remove unused modules
- Disable Dev Tools when the app isn't packaged
- Improve code structure by renaming helper files.

### Found a bug or issue?
- Please report it in the GitHub Issues section

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.4.5...1.4.6

## [1.4.5](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.4.5)

*Released: 2026-02-21*


### Changelog

- You can now fetch thumbnail from all websites
- Improve performance by removing RPC update
- Small Code improvements 

### Found a bug or issue?
- Please report it in the GitHub Issues section

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.4.4...1.4.5

## [1.4.4](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.4.4)

*Released: 2026-02-18*


### Changelog

#### Core Improvements

- Centralized all ressources paths in `path.js`, this improves readability and maintainability by keeping everything in one place.
- Improved playlist handling logic.
- Refactored playlist CSS to enhance UX. This version looks cleaner and more consistent.

<div align="center">
  <img width="90%" alt="Desktop - 1" src="https://github.com/user-attachments/assets/a3851f8f-6421-4982-a1f7-5932729579c1" />
</div>

<br />

- Added small comments to improve code readability.
- Removed unused code, like macOS-specific logic.
- Cleaned up `logger.js` to reduce code duplication and improve structure.
- ~~Improved folder creation and sanitization logic. You can now choose any disk without issues.~~
- Improved application shutdown logic.
- Fixed incorrect rate limit handling logic.
- Minor code tweaks to improve overall readability.
- Improved full changelog link formatting in the release template.

*In the next version, I will start working on a Linux version. I will also focus on improving code readability and performance.
I also want to learn how to write tests and set up CI/CD integration. If you have experience with these topics, I would really appreciate your help.
The code should be easily understandable by others. If you would like to help, feel free to contribute using the guide I wrote :)*

### Found a bug or issue?

Please report it in the GitHub Issues section.

**Full Changelog:**  https://github.com/MasterAcnolo/Freedom-Loader/compare/1.4.3...1.4.4

*Have a nice day !*

## [1.4.3](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.4.3)

*Released: 2026-02-16*


### Changelog

#### Features
- Added clipboard paste button integrated inside URL input field
- Click-to-paste functionality with visual feedback
- Automatic input focus after pasting

#### Updates & Improvements
- Updated multiple dependencies for improved stability
- Enhanced UI/UX with integrated clipboard button design
- Improved form layout and input container styling

#### Bug Fixes
- Fixed URL input overflow issue with button integration
- Improved responsive design for URL input container

#### Technical Changes
- Added `clipboardPaste.js` script for clipboard functionality
- Updated form CSS with modern input positioning
- Updated package dependencies (254 additions, 168 deletions in lock file)

### Found a bug or issue?
- Please report it in the GitHub Issues section

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.4.2...1.4.3

## [1.4.2](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.4.2)

*Released: 2026-02-06*


### Changelog

####  Security Fixes
- Fixed critical security vulnerabilities in dependencies (`tar` and `@isaacs/brace-expansion`)

####  Updates & Improvements
- Updated yt-dlp to latest version for improved compatibility
- Updated dependencies to address security concerns (removed 232 packages, updated 20 packages)

#### Dependencies
- Upgraded `tar` to secure version (>7.5.6)
- Fixed `@isaacs/brace-expansion` resource consumption vulnerability
- Updated `electron-builder` and related dependencies

### Found a bug or issue?
- Please report it in the GitHub Issues section

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.4.1...1.4.2

## [1.4.1](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.4.1)

*Released: 2026-01-25*


### Changelog

- `Discord RPC` now stops correctly. This was due to a misconfiguration and bad Electron behavior. #26 

### Found a bug or issue?
- Please report it in the GitHub Issues section

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.4.0...1.4.1

## [1.4.0](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.4.0)

*Released: 2026-01-22*


This is a big update. It was not expected, but here we are. This is clearly a big update (could be a major update, I guess).

### Major Updates

- Added a Configuration Panel, so you can easily swap configuration. It aims to improve UX and it will be improved over time. Things like custom themes will be handled here.
- Added a `JSON` file located at `resources/config/config.json`. It aims to improve customization of the Freedom Loader experience. You can change some variables to `TRUE` or `FALSE` to trigger features. You need to restart the application to apply changes.
- Added the possibility to change the Video Codec. You can edit it inside the configuration files. Supported codecs are now limited to:

  `"av01", "vp9.2", "vp9", "h265", "h264", "h263", "theora"`

- All the application is now packed into an ASAR archive. It’s faster and we don’t need to write inside the code (except `config.json`). ASAR is read-only, so it makes sense.
- Fixed major security weaknesses, such as missing verification when handling actions like `customDownloadPath` or URL validation.

### Minor Updates / Improvements

- Better path verification to avoid issues. You can now only set your download path inside your own directory (example: `C:\Users\[USER]`). If you try to put it outside, it won’t work. A toast notification or feedback will be added in the next update.
- Added NSIS installer banner (seems useless, but why not?).
- Added a Verbose switch to yt-dlp args. You can toggle it in Settings Panel or  `config.json` (disabled by default).
- The frontend now displays the version badge automatically. It’s read from `package.json` and injected into HTML using IPC. No more manual edits.
- Fixed all themes to fit the new settings panel.
- Added a small reference. Can you find it? 👀
- Added Rate Limit to the API. For the Front parts (Why not?).

### Fixes

- Better logs, cleaner code, better everything.
- Renamed “Neon” theme to “purple”.

### Removed

- Removed “Default” theme (because why not?).
- Removed unused files.
- Removed Electron Squirrel dependencies (why did I add it? don’t remember).

### Known Issues
- **Cookie extraction works only with Firefox**  
  Freedom Loader retrieves browser cookies using Firefox.  
  If Firefox is not installed on the system, the extraction will fail.  

  > Refer to the tutorial here: https://masteracnolo.github.io/FreedomLoader/pages/wiki.html (Section *Firefox*) 

- Discord RPC not stopping. You need to restart discord. I don't why. 
- Unable to Fetch Playlist Data #20 
- Download Finished Popup not showing at 1st download #19  


### Found a bug or issue?

- Please report it in the GitHub Issues section.

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.3.1...1.4.0

*Because why not?*

## [1.3.1](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.3.1)

*Released: 2025-12-20*


### Changelog

- Discord RPC Link Fix
- Better Launching (Verification of Dependencies)
- Using Custom Topbar
- `Package.json` tweaks
- ReadME Fix

### Known Issues
- **Cookie extraction works only with Firefox**  
  Freedom Loader retrieves browser cookies using Firefox.  
  If Firefox is not installed on the system, the extraction will fail.  

  > Refer to the tutorial here: https://masteracnolo.github.io/FreedomLoader/pages/wiki.html (Section *Firefox*) 
- Unable to Fetch Playlist Data #20 
- Download Finished Popup not showing at 1st download #19  

### Next Release (non-exhaustive roadmap)
- More format options
- Subtitle support
- Improved UI / UX
- Language selection
- Download specific parts of videos
- File renaming options
- Parallel downloads
- Skip sponsored parts automatically

**Full Changelog**:  [1.3.0...1.3.1](https://github.com/MasterAcnolo/Freedom-Loader/compare/1.3.0...1.3.1)

## [1.3.0](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.3.0)

*Released: 2025-11-21*


This is the biggest update I’ve produced so far, 3 weeks of work, countless hours of debugging, and I also built the [website](https://masteracnolo.github.io/FreedomLoader/index.html) during this period. Check out all the updates below, hope you like it!  MasterAcnolo

### Changelog

#### Major Updates
- Full website integration, available at [this link](https://masteracnolo.github.io/FreedomLoader/index.html) 
- Application now auto-updates at launch  
- UI: Loading bar + Taskbar progress support  
- Better UI Feedback when something is processing, like Fetching info.
- Download speed displayed
- Playlist info: Display each item + copy unique video URL button  
- Dynamic cookie handling; user notified on error (Firefox only)  
- Added Deno runtime for youtube challenge.

#### Minor Updates / Improvements
- Frontend code cleanup  
- Backend code cleanup  
- Added Drift Theme  
- Added SongBird Theme
- Reworked Spicy Theme
- "Documentation" and "Website" button in topbar  
- App version now centralized in package (changes propagate automatically)  
- Safe boot: Closes redundant instances  
- Adopted MVC pattern + helpers  
- All logs/content now in English  
- ReadME Improved
- Change the Application Logo

#### Fixes
- Download finished notification fixed  
- RPC stability improved  
- Better Logs 

#### Removed
- Vilbrequin Theme  
- Cyberpunk Theme 

### Known Issues
- **Cookie extraction works only with Firefox**  
  Freedom Loader retrieves browser cookies using Firefox.  
  If Firefox is not installed on the system, the extraction will fail.  
  > Refer to the tutorial here: https://masteracnolo.github.io/FreedomLoader/pages/wiki.html (Section *Firefox*)

- **First download after installation: folder does not open automatically**  
  During the very first download right after installing the application,  
  the target folder may not open automatically.  
  This is a known issue and **does not impact** downloads or application stability.
 

### Found a bug or issue?
- Please report it in the GitHub Issues section

### Next Release (non-exhaustive roadmap)
- More format options  
- Subtitle support  
- Improved UI / UX  
- Language selection  
- Download specific parts of videos  
- File renaming options  
- Parallel downloads  
- Skip sponsored parts automatically  
- Chrome Support (And Other Browser)

**Full Changelog**: [1.2.4...1.3.0](https://github.com/MasterAcnolo/Freedom-Loader/compare/1.2.4...1.3.0)

*I guess I can sleep now...*

## [1.2.4](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.2.4)

*Released: 2025-09-27*


### Changelog

- `YT-DLP` Will Now update when the application is launched 

### Found a bug or issue?
- Please report it in the GitHub Issues section

### Next Release (non-exhaustive roadmap)
- More format options  
- Subtitle support  
- Improved UI / UX  
- Language selection  
- Download specific parts of videos  
- File renaming options  
- Parallel downloads  
- Skip sponsored parts automatically  

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.2.3...1.2.4

## [1.2.3](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.2.3)

*Released: 2025-09-25*


### Changelog

- Update Yt-DLP from `2025.08.27` to `2025.09.23`
- Fix Spicy Theme pictures not showing

### Found a bug or issue?
- Please report it in the GitHub Issues section

### Next Release (non-exhaustive roadmap)
- More format options  
- Subtitle support  
- Improved UI / UX  
- Language selection  
- Download specific parts of videos  
- File renaming options  
- Parallel downloads  
- Skip sponsored parts automatically  

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.2.2...1.2.3

## [1.2.2](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.2.2)

*Released: 2025-09-20*


### Changelog

- Using `ASAR ` to make the project safer and faster to read
- Window will now have the name `Freedom Loader {VERSION}` . That could be usefull for bug report ;)
- Notification should now display the right name of the applications (`ISSUE #13`) . Thanks to @SpicyFire21 for ideas


<img width="1028" height="334" alt="image" src="https://github.com/user-attachments/assets/48ea3220-8912-47c3-b698-130d63fdaada" />


### Found a bug or issue?
- Please report it in the GitHub Issues section

### Next Release (non-exhaustive roadmap)
- More format options  
- Subtitle support  
- Improved UI / UX  
- Language selection  
- Download specific parts of videos  
- File renaming options  
- Parallel downloads  
- Skip sponsored parts automatically  

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.2.1...1.2.2

## [1.2.1](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.2.1)

*Released: 2025-09-17*


### Changelog

- Added FFMPEG Inside of .exe
- Fix Auto Folder Creation


### Found a bug or issue?
- Please report it in the GitHub Issues section

### Next Release (non-exhaustive roadmap)
- More format options  
- Subtitle support  
- Improved UI / UX  
- Language selection  
- Download specific parts of videos  
- File renaming options  
- Parallel downloads  
- Skip sponsored parts automatically  

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.2...1.2.1

## [1.2.0](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.2)

*Released: 2025-08-29*


### Changelog

- Added Discord Rich Presence
- Rework Files Names, the name is gonna be written as the original files names like:
<img width="1134" height="594" alt="image" src="https://github.com/user-attachments/assets/8fcda3b5-cf0a-42fe-9a19-b527f7f60ffc" />

- Added `NF Theme`
- Reworked **Edit Button** on UI
- Reworked **Chirac, Spicy & Vilbrequin Theme**
- Small UI Tweaks

### Found a bug or issue?
- Please report it in the GitHub Issues section

### Next Release (non-exhaustive roadmap)
- More format options  
- Subtitle support  
- Improved UI / UX  
- Language selection  
- Download specific parts of videos  
- File renaming options  
- Parallel downloads  
- Skip sponsored parts automatically  

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.1.3...1.2

## [1.1.3](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.1.3)

*Released: 2025-08-21*


### Changelog

- Added metadata for both videos and audio
- If you open videos with VLC or other media player you can see natives chapter from Youtube Video.
- Updated YT-DLP from `2025.06.30` to `2025.08.20`
- Some codes optimisations


### Found a bug or issue?
- Please report it in the GitHub Issues section

### Next Release (non-exhaustive roadmap)
- More format options  
- Subtitle support  
- Improved UI / UX  
- Language selection  
- Download specific parts of videos  
- File renaming options  
- Parallel downloads  
- Skip sponsored parts automatically  

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.1.2...1.1.3

## [1.1.2](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.1.2)

*Released: 2025-08-13*


### Changelog

- Added a “Logs” menu in the toolbar to open the logs folder directly
- Fixed log path for better Windows/Linux compatibility
- Disabled hardware acceleration to improve stability on some systems
- Fixed Electron menu merging logic
- Various minor improvements and bug fixes

### Found a bug or issue?
- Please report it in the GitHub Issues section

### Next Release (non-exhaustive roadmap)
- More format options  
- Subtitle support  
- Improved UI / UX  
- Language selection  
- Download specific parts of videos  
- File renaming options  
- Video extraction/splitting using native chapters  
- Parallel downloads  
- Skip sponsored parts automatically  

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.1.1...1.1.2

## [1.1.1](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.1.1)

*Released: 2025-07-20*


### Changelog

- Notification System when a video is fully downloaded
- YT DLP Upgraded from `2025.03.27` to `2025.06.30`
- Bug Fixes 
- README fixes  

### Found a bug or issue?
- Please report it in the GitHub Issues section

### Next Release (non-exhaustive roadmap)
- More format options  
- Subtitle support  
- Improved UI / UX  
- Language selection  
- Download specific parts of videos  
- File renaming options  
- Video extraction/splitting using native chapters  
- Parallel downloads  
- Skip sponsored parts automatically  

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.1...1.1.1

## [1.1.0](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.1)

*Released: 2025-07-02*


### Changelog

- Many UI improvements  
- Download security enhancements  
- Custom installation path with persistence  
- Multiple themes available  
- Logger rotation reduced from 14 days to 7 days  
- README fixes  

### Found a bug or issue?
- Please report it in the GitHub Issues section

### Next Release (non-exhaustive roadmap)
- More format options  
- Subtitle support  
- Improved UI / UX  
- Language selection  
- Download specific parts of videos  
- File renaming options  
- Video extraction/splitting using native chapters  
- Parallel downloads  
- Skip sponsored parts automatically  
- Notification system

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/compare/1.0.1...1.1.0

## [1.0.1](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.0.1)

*Released: 2025-07-01*


### Changelog
- Enforced minimum window size   
- Added new quality options: **Medium quality**, **1080p**, **720p**, and **480p**  
- Fixed bugs in "**Best Quality**" and "**Worst Quality**" selections  
- UI adjustments
- README  adjustements

### Found a bug or issue?
- Please report it in the GitHub Issues section

### Next Release (non-exhaustive roadmap)
- More format options  
- Subtitle support  
- Improved UI / UX  
- Language selection  
- Download specific parts of videos  
- File renaming options  
- Video extraction/splitting using native chapters  
- Parallel downloads  
- Skip sponsored parts automatically  
- Custom output folder selection
- Notification

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/commits/1.0.1

## [1.0.0](https://github.com/MasterAcnolo/Freedom-Loader/releases/tag/1.0.0)

*Released: 2025-06-29*


### Changelog
- Audio and video download fully functional  
- UI fixes  
- Packaged as a Windows .exe

### Found a bug or issue?
- Please report it in the GitHub Issues section

### Next Release (non-exhaustive roadmap)
- More format options  
- Subtitle support  
- Improved UI / UX  
- Language selection  
- Download specific parts of videos  
- File renaming options  
- Video extraction/splitting using native chapters  
- Parallel downloads  
- Skip sponsored parts automatically  
- Custom output folder selection

**Full Changelog**: https://github.com/MasterAcnolo/Freedom-Loader/commits/1.0.0

---

Archived 28 published release notes.
