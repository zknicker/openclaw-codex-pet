<div align="center">

# Openclaw Codex Pet

![pet: Openclaw](https://img.shields.io/badge/pet-Openclaw-2ea44f)
![format: Codex pet](https://img.shields.io/badge/format-Codex%20pet-0969da)
![license: MIT OR Apache--2.0](https://img.shields.io/badge/license-MIT%20OR%20Apache--2.0-f97316)

An (unofficial) OpenClaw lobster pet for your Codex App. This is a v1, but he's Codex-generated, and hand animated. I'm going to hopefully take another pass at some of the animations that didn't turn out as well at some point.

</div>

## Preview

<table>
<tr><th>Action</th><th>Preview</th></tr>
<tr><td><strong>Idle</strong></td><td><img src="./assets/previews/gifs/idle.gif" alt="Openclaw idle" width="192" height="208"></td></tr>
<tr><td><strong>Waving</strong></td><td><img src="./assets/previews/gifs/waving.gif" alt="Openclaw waving" width="192" height="208"></td></tr>
<tr><td><strong>Running</strong></td><td><img src="./assets/previews/gifs/running.gif" alt="Openclaw running" width="192" height="208"></td></tr>
<tr><td><strong>Running Right</strong></td><td><img src="./assets/previews/gifs/running-right.gif" alt="Openclaw running right" width="192" height="208"></td></tr>
<tr><td><strong>Running Left</strong></td><td><img src="./assets/previews/gifs/running-left.gif" alt="Openclaw running left" width="192" height="208"></td></tr>
<tr><td><strong>Waiting</strong></td><td><img src="./assets/previews/gifs/waiting.gif" alt="Openclaw waiting" width="192" height="208"></td></tr>
<tr><td><strong>Jumping</strong></td><td><img src="./assets/previews/gifs/jumping.gif" alt="Openclaw jumping" width="192" height="208"></td></tr>
<tr><td><strong>Failed</strong></td><td><img src="./assets/previews/gifs/failed.gif" alt="Openclaw failed" width="192" height="208"></td></tr>
<tr><td><strong>Review</strong></td><td><img src="./assets/previews/gifs/review.gif" alt="Openclaw review" width="192" height="208"></td></tr>
</table>

## Install

Clone or download this repo, then copy the pet package into your Codex pets directory:

```sh
mkdir -p ~/.codex/pets
mkdir -p ~/.codex/pets/openclaw
cp pet.json spritesheet.webp ~/.codex/pets/openclaw/
```

Restart Codex, then choose `Openclaw` from the pet picker.

## Package

```text
.
├── pet.json
└── spritesheet.webp
```

Preview assets live outside the pet package:

```text
assets/previews/
├── contact-sheet.png
└── gifs/
```

## Validate

```sh
npm run validate
```

## License

Openclaw Codex Pet is licensed under `MIT OR Apache-2.0`.

That applies to the pet assets, generated previews, metadata, scripts, and docs.
Use whichever license best fits your downstream project.

Full texts:

- [MIT](./LICENSE-MIT)
- [Apache-2.0](./LICENSE-APACHE)
