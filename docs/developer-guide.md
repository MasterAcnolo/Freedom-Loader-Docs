---
sidebar_position: 7
---

# Developer guide

This guide brings together the information needed to set up, run, test, and contribute to Freedom Loader. The application is an Electron desktop app: its renderer displays the interface, a preload bridge exposes selected APIs, and a local Express service coordinates yt-dlp downloads and streams progress to the UI.

## Prerequisites

- Git
- Node.js 22 or later recommended, with npm
- The external runtime and media binaries listed below
- On Linux, system libraries required by Electron and permission to run the downloaded binaries

The application targets Windows and Linux. Firefox is used when yt-dlp needs browser cookies for authenticated sources.

## Clone and install dependencies

```bash
git clone https://github.com/MasterAcnolo/Freedom-Loader.git
cd Freedom-Loader
npm ci
```

Before running or packaging the app from source, place the external binaries in the expected platform directory. They are intentionally not committed to the repository.

## Prepare external binaries

Freedom Loader uses four command-line tools:

| Binary | Purpose |
|---|---|
| `yt-dlp` | Fetches video and audio formats, metadata, and media. |
| `ffmpeg` | Merges streams, converts audio, and processes metadata or thumbnails. |
| `ffprobe` | Inspects media files and formats. |
| `deno` | Provides the JavaScript runtime used by yt-dlp extractors. |

### Expected paths and filenames

Use the exact names below. Development mode resolves binaries from the platform-specific folder; packaged builds place the platform binaries directly under the application's `binaries/` resource directory.

```text
resources/
└── binaries/
    ├── linux/
    │   ├── yt-dlp
    │   ├── ffmpeg
    │   ├── ffprobe
    │   └── deno
    └── win-32/
        ├── yt-dlp.exe
        ├── ffmpeg.exe
        ├── ffprobe.exe
        └── deno.exe
```

The `win-32` directory name is the path expected by the development configuration; use the Windows x64 executables within it.

### Download sources

Download current releases from the upstream projects:

| Tool | Windows x64 | Linux x64 |
|---|---|---|
| yt-dlp | [Latest Windows executable](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp.exe) | [Latest Linux executable](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp) |
| FFmpeg and FFprobe | [Windows x64 GPL build archive](https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl.zip) | [Linux x64 GPL build archive](https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-linux64-gpl.tar.xz) |
| Deno | [Windows x64 archive](https://github.com/denoland/deno/releases/latest/download/deno-x86_64-pc-windows-msvc.zip) | [Linux x64 archive](https://github.com/denoland/deno/releases/latest/download/deno-x86_64-unknown-linux-gnu.zip) |

For Linux ARM64, use the matching upstream builds: [FFmpeg ARM64](https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-linuxarm64-gpl.tar.xz) and [Deno ARM64](https://github.com/denoland/deno/releases/latest/download/deno-aarch64-unknown-linux-gnu.zip). Confirm that the yt-dlp executable and the Freedom Loader/Electron build you are using target the same architecture.

Extract the archives. Copy `ffmpeg` and `ffprobe` from the FFmpeg archive's `bin/` directory. The Deno archive contains the Deno executable. Rename files only as needed to match the filenames in the expected-path tree above.

On Linux, make each binary executable:

```bash
chmod +x resources/binaries/linux/yt-dlp
chmod +x resources/binaries/linux/ffmpeg
chmod +x resources/binaries/linux/ffprobe
chmod +x resources/binaries/linux/deno
```

The packaged application can update its user-data copy of yt-dlp on startup when automatic yt-dlp updates are enabled. That does not remove the need for the initial source binary when developing or packaging.

## Run and debug the application

```bash
npm start
```

Useful development commands:

| Command | Purpose |
|---|---|
| `npm start` | Start Electron without warning traces. |
| `npm run start:warn` | Show Node/Electron warning traces. |
| `npm run electron:debug` | Enable Electron, Wayland, and stack-dump diagnostics on Linux. |
| `npm run dev` | Restart Electron when watched app, server, or configuration files change. |

The app's local Express server binds to `127.0.0.1:8787`. If startup fails, check that this port is available, all four binaries are present and executable, and the logs contain no missing-library or permission errors.

## Test and lint

```bash
npm test
npm run test:unit
npm run lint
```

`npm test` runs Jest; `npm run test:unit` runs the unit-test directory. Add or update tests for behavior changes and verify the feature in the desktop app.

## Build packages

| Command | Output |
|---|---|
| `npm run build` | Build for the current host platform. |
| `npm run build:win` | Build the Windows installer. |
| `npm run build:linux` | Build Linux AppImage, deb, and snap packages. |
| `npm run build:rpm` | Build Linux packages and create RPM/SRPM outputs for COPR. |

Builds are written to `dist/`; RPM source-package output is also placed under `srpm-out/`. `npm run build:all` combines Windows and Linux targets and can produce unnecessarily large packages containing binaries for both platforms.

## Documentation site

The documentation is maintained in its own Docusaurus project. From the documentation repository root (the directory containing `package.json`):

```bash
npm ci
npm run start
```

Build the static documentation site with `npm run build`. Add Mermaid diagrams using fenced `mermaid` code blocks. Update the relevant page whenever application behavior or setup requirements change.

## Contributing

Freedom Loader welcomes bug reports, feature proposals, code changes, and documentation improvements. The local [Contributing guide](./contributing) explains how to report issues, prepare a pull request, and follow the project's workflow. Please read the [Code of Conduct](./code-of-conduct) before participating.
