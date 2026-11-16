# Nikhil Toraskar – Design Portfolio

UI/UX design portfolio of Nikhil Toraskar.

## What's here
| File | What it is |
|---|---|
| `index.html` | Portfolio home page |
| `lap-case-study.html` | Case study: Loan Against Property credit screens |
| `lap-credit-screens.html` | Interactive prototype of the redesigned LAP screens |
| `cs/lap/` | Screenshots and detail crops used in the case study |
| `fl/` | Design-system styles, fonts and components used by the home page |

## Editing
- **Text:** open the HTML file on GitHub, click the pencil, find the sentence (Ctrl+F), edit, then **Commit changes**.
- **Images:** upload a new image with the *same file name* into `cs/lap/` (Add file → Upload files).
- Changes go live on GitHub Pages within a minute or two.

`.nojekyll` must stay in the root, otherwise GitHub Pages skips files that start with `_`.

All data shown in the screens is sample data.

## Add a case study (one step)
Upload the page with the right file name: **Add file → Upload files → drop the file → Commit changes**.
The card's **Read the case study →** button appears by itself within a minute or two.

| Card on the home page | Upload this file name |
|---|---|
| FL Design System | `design-system-case-study.html` |
| Bank statement upload | `bank-statement-case-study.html` |
| CloudNBFC lender portal | `cloudnbfc-case-study.html` |
| Loan Against Property | `lap-case-study.html` (already there) |
| SCF marketing website | `scf-website-case-study.html` |

To **update** a case study, upload a new version with the same name. To **remove** one, delete the file.
A single self-contained HTML file (images inside it) is the easiest. If it uses image files, upload them too and keep the paths the HTML expects.

**New project that has no card yet:** in `index.html`, copy one whole `{key:... },` block inside `const WORK = [`, give it a new `key`, new text and a new `file:"something-case-study.html"`. Commit, then upload that file.
