---
sidebar_position: 2
---

# Getting started

## Requirements

- **Windows:** Windows 10 or later.
- **Linux:** a modern 64-bit (x86_64) distribution.
- **Firefox:** install Mozilla Firefox if you need to use browser cookies for content that requires an authenticated session.

The official installers include the tools Freedom Loader needs to download and process media. You do not need to install yt-dlp or FFmpeg separately.

## Install on Windows

1. Open the [Freedom Loader releases](https://github.com/MasterAcnolo/Freedom-Loader/releases) page.
2. Download the latest Windows installer (`.exe`).
3. Run it and follow the setup wizard.
4. Launch **Freedom Loader** from the Start menu or desktop shortcut.

Windows may display a security warning for an unsigned or unfamiliar installer. Only continue if you downloaded the installer from the official releases page and are comfortable proceeding.

## Install on Linux

Choose the package format supported by your distribution:

### Fedora (Copr)

```bash
sudo dnf copr enable masteracnolo/freedom-loader
sudo dnf install freedom-loader
```

### Debian or Ubuntu (`.deb`)

Download the latest `.deb` from the [releases page](https://github.com/MasterAcnolo/Freedom-Loader/releases), then install it:

```bash
sudo apt install ./freedom-loader_VERSION_amd64.deb
```

Replace `VERSION` with the version in the downloaded filename.

### Snap

On a system with `snapd`:

```bash
sudo snap install freedom-loader
```

### AppImage

Download the latest `.AppImage` from the [releases page](https://github.com/MasterAcnolo/Freedom-Loader/releases), then make it executable and launch it:

```bash
chmod +x Freedom-Loader-VERSION.AppImage
./Freedom-Loader-VERSION.AppImage
```

Replace `VERSION` with the version in the downloaded filename.

After installation, launch the application from your desktop application menu. Linux packages also provide the `freedom-loader` command.

## First launch

The main screen contains the URL field, format and quality selectors, download controls, progress information, and the current output folder. Paste a URL to begin; when automatic information lookup is enabled, the application displays available media details as it fetches them.

See [Downloading media](./downloading) for the complete workflow and playlist options.
