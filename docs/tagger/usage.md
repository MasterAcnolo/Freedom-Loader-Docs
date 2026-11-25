---
title: Installation and usage
sidebar_position: 2
---

# Standalone installation and usage

Freedom Tagger is a Node.js command-line program. It is currently used as its own project and is not a feature or dependency of the Freedom Loader desktop application.

## Requirements and installation

Freedom Tagger requires Node.js 18 or later and npm. Clone its repository and install dependencies:

```bash
git clone https://github.com/MasterAcnolo/Freedom-Tagger.git
cd Freedom-Tagger
npm install
```

Run it directly with Node:

```bash
node index.js "/path/to/album-folder" --artist "Artist Name"
```

To make the `freedom-tagger` command available globally from the checked-out project, run `npm link` in its root directory. You can then invoke it from any working directory.

## Arguments

| Argument | Short form | Description |
|---|---|---|
| `<path>` | — | Required path to the folder containing audio files. Only files directly inside this folder are considered; subfolders are not scanned. |
| `--artist <name>` | `-a` | Artist or band name to refine the MusicBrainz search. |
| `--album <name>` | `-r` | Album name to search for. Defaults to the target folder's name. |
| `--single` | `-s` | Adds a MusicBrainz primary type filter for singles. |
| `--output <dir>` | `-o` | Copy processed files to a separate destination instead of renaming the originals in place. |
| `--format <pattern>` | `-f` | Filename template. Supports `{pos}` and `{title}`; the original extension is retained. Defaults to `{title}`. |
| `--custom-cover <path>` | `-c` | Use a local JPG, JPEG, PNG, or WebP image as the cover source instead of fetching the release cover. |
| `--auto-pick` | — | Select the first MusicBrainz result without asking. Review results manually when accuracy matters. |
| `--no-tag` | — | Skip ID3 metadata and cover art. Files are still renamed or copied according to the other options. |
| `--dry` | — | Print proposed matches without writing, renaming, or copying files. |
| `--help` | `-h` | Display command usage. |

## Examples

Preview a proposed match before applying it:

```bash
node index.js "$HOME/Music/Album folder" --artist "Artist Name" --dry
```

Process a selected release and rename matched tracks in place:

```bash
node index.js "$HOME/Music/Album folder" --artist "Artist Name"
```

Keep the source folder unchanged and write processed copies elsewhere:

```bash
node index.js "$HOME/Music/Album folder" \
  --artist "Artist Name" \
  --output "$HOME/Music/Album folder - tagged"
```

Use a custom filename format:

```bash
node index.js "$HOME/Music/Album folder" \
  --artist "Artist Name" \
  --format "{pos} - {title}"
```

Use a custom cover image:

```bash
node index.js "$HOME/Music/Album folder" \
  --artist "Artist Name" \
  --custom-cover "$HOME/Pictures/album-cover.jpg"
```

## Review before applying

Freedom Tagger shows proposed old and new names, along with a confidence percentage. Review low-confidence matches carefully. When you confirm the operation, only matched files are renamed in place or copied to the output directory; unmatched files are reported and left untouched.

Use `--dry` first if you are unsure about the release selection or matching. If preserving originals is important, use a separate `--output` directory.
