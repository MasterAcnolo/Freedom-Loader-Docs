---
sidebar_position: 3
---

# Downloading media

## Download a video or audio track

1. Paste a video URL into the URL field. You can also use the paste button beside the field.
2. If **Auto Fetch Info** is enabled, wait for the information panel to show the title and available details.
3. Leave **Audio Only (MP3)** unchecked for video, or select it to download audio as MP3.
4. Choose **Best Quality**, **Medium Quality**, **Lowest Quality**, or a listed resolution (1080p, 720p, or 480p).
5. Select **Download**.
6. Follow the progress bar, download stage, and speed indicator. Select the stop button to cancel an active download.

The application shows the destination folder below the form. Select **Edit** to change it. Download completion notifications can be enabled or disabled in [Settings](./settings).

## Download a playlist

Paste a playlist URL. When information lookup is enabled, Freedom Loader displays the playlist title, item count, and available video details.

By default, **Download Playlist automatically?** is enabled, so the playlist begins downloading without an additional confirmation. Turn this option off in Settings if you prefer to confirm playlist downloads. You can also:

- Enable **Create Playlist Folders** to put each playlist in a folder named for the playlist.
- Enable **Keep Playlist Order** to prefix output filenames with their playlist index.

## Metadata, thumbnails, and codecs

In the **Advanced Settings** section:

- **Add Metadata** controls whether metadata is included in downloaded files.
- **Add Thumbnail** controls whether thumbnails are included.
- **Custom Codec** selects the preferred video codec: H.264, AV1, AV01, VP9.2, VP9, H.265, or Theora.

The source site and available formats determine which media can actually be downloaded. A selected resolution or codec may not be available for every URL.

## If a download does not start

- Confirm that the URL is complete and supported by yt-dlp.
- Wait for any information lookup to finish, or disable **Auto Fetch Info** and try starting the download directly.
- For content that requires an account, ensure Firefox is installed and that you are signed in there.
- Check the application logs and follow the steps in [Troubleshooting](./troubleshooting).

Download only content you have permission to access and save.
