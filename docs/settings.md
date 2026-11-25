---
sidebar_position: 4
---

# Settings and themes

Open Settings with the gear button on the main screen. Changes are saved automatically. Some options take effect only after restarting the application.

## Basic settings

| Setting | Default | Description |
|---|---:|---|
| Theme | Dark | Select an installed application theme. Use the refresh button to reload the theme list. |
| Discord RPC | On | Show Freedom Loader activity through Discord Rich Presence. |
| Download Playlist automatically? | On | Start playlist downloads without asking for confirmation. |
| Create Playlist Folders | Off | Create a dedicated output folder for each playlist. |
| Notification at the end | On | Show a system notification when a download finishes. |
| Keep Playlist Order | Off | Prefix downloaded filenames with their playlist index. |

## Advanced settings

| Setting | Default | Description |
|---|---:|---|
| Show Changelogs After Update | On | Display the changelog after an application update. |
| System Tray | Off | Minimize the application to the system tray when closing its window. |
| Auto Fetch Info | On | Fetch media information when a URL is entered. |
| Add Metadata | On | Include metadata in downloaded files. |
| Add Thumbnail | On | Include thumbnails in downloaded files. |
| Custom Codec | H.264 | Choose the preferred video codec: H.264, AV1, AV01, VP9.2, VP9, H.265, or Theora. |
| Enable Hardware Acceleration | On | Use GPU acceleration for rendering when available. This setting takes effect on the next launch. |

Some diagnostic and yt-dlp update options are available only in developer mode.

## Custom themes

Select **Open Theme Folder** in Settings to open the theme directory. Add a compatible theme ZIP file there, then refresh the theme list in Settings and select the theme. Community themes can be found in the [Freedom Loader Theme Workshop](https://masteracnolo.github.io/Freedom-Loader-Workshop/).

Only install theme files from sources you trust.

## Configuration file

Most users should change options in the Settings panel. The configuration file is useful for diagnosing or manually adjusting settings:

- **Windows:** `%APPDATA%\Freedom Loader\config.json`
- **Linux:** `~/.config/Freedom Loader/config.json`

The application fills in missing settings with defaults on startup. If you edit the file manually, close the application first and keep a backup of your changes.

## Data and logs

- **Windows logs:** `%LOCALAPPDATA%\FreedomLoader\logs\`
- **Linux logs:** `~/.local/share/FreedomLoader/logs/`
- **Default downloads:** `~/Downloads/Freedom Loader` on Linux; `C:\Users\<username>\Downloads\Freedom Loader` on Windows.

The download folder can be changed at any time using **Edit** beside the output path on the main screen.
