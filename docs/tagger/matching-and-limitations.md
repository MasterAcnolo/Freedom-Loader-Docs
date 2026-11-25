---
title: Matching, metadata, and limitations
sidebar_position: 3
---

# Matching, metadata, and limitations

Freedom Tagger uses MusicBrainz as its source of release and track information, then compares that information with filenames in the selected local folder.

## Finding and selecting a release

The search uses the supplied `--album` value, or the folder name when no album is supplied. If `--artist` is provided, it is included in the query. `--single` adds a single-release filter. Freedom Tagger displays at most the first five results from MusicBrainz.

Interactive selection is the default. Each result includes available release details such as title, artist, date, country, and track count. `--auto-pick` skips this review and selects the first API result, which may be the wrong edition.

## Track matching

The matching code runs two passes:

1. **Strict pass:** MusicBrainz track titles are checked against local filenames, starting with the longest titles. It first checks for a normalized title substring, then uses a fuzzy similarity score with a 50% minimum.
2. **Deductive pass:** Remaining local files are compared against unmatched API tracks using a 10% minimum similarity threshold. This pass is inherently less certain.

Text is lowercased and apostrophe variants are normalized before comparison. The displayed score reflects the similarity used by the matcher; the second pass can produce low-confidence results, so verify those matches before confirming.

The selected filename pattern supports `{pos}` (the track position, padded to at least two digits) and `{title}` (the sanitized MusicBrainz title). The existing extension is appended. The default pattern is `{title}`; use `{pos} - {title}` to make playback order apparent in file listings.

## Tags and artwork

When tagging is enabled, Freedom Tagger writes the track title, artist, album, track number, and release year to MP3 ID3 metadata. It can obtain front-cover artwork from the Cover Art Archive using the selected release ID, or read an image supplied with `--custom-cover`.

The metadata writer supports `.mp3` only. Other recognized audio files may still be renamed or copied, but ID3 tags and embedded artwork are skipped.

## Current limitations

- **One folder, one album:** The tool reads audio files directly inside the supplied directory; it does not recursively scan nested folders or separate a mixed library into albums.
- **Supported audio extensions:** `.mp3`, `.flac`, `.m4a`, `.wav`, and `.ogg` are recognized for matching and file operations. Only `.mp3` receives ID3 tags or embedded artwork.
- **Only five search results:** Refine the query with `--artist` and `--album` if the intended release is not listed.
- **Multi-disc track positions:** Track positions are parsed from each disc and can repeat between discs; Freedom Tagger does not currently add a disc number to filenames.
- **Fuzzy matching can be wrong:** Short or similar track names and the deductive pass may produce incorrect associations. Inspect the proposal before confirming.
- **Cover art may not match your preferred edition:** Select a different release or provide a custom cover.
- **No automatic Freedom Loader integration:** Freedom Tagger is launched separately. Future integration would need to define how the desktop application invokes it and how matching and file changes are presented to users.

For particularly important collections, use `--dry` to inspect all proposed names first, or write results to a separate `--output` directory so originals remain untouched.
