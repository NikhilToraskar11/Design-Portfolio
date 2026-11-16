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

## Add a new case study (e.g. CloudNBFC)
1. **Upload the page:** Add file → Upload files → drop `cloudnbfc-case-study.html` into the root (next to `index.html`). Commit.
2. **Upload its images (if it uses image files):** put them in a folder such as `cs/cloud/` and make sure the HTML points to `cs/cloud/...`. A single self-contained HTML file needs no images folder.
3. **Optional cover:** upload `cs/cloud/cover.jpg` (a screenshot of the main screen, 1600 px wide works well).
4. **Connect it to the card:** open `index.html` → ✏️ → Ctrl+F `key:"cloud"` → right after `name:"CloudNBFC lender portal",` add:
   ```
   file:"cloudnbfc-case-study.html", cover:"cs/cloud/cover.jpg",
   ```
   Commit. The card now shows **Read the case study →**, which opens the page full screen.

A brand-new project (no card yet): copy one whole `{key:... },` block inside `const WORK = [` in `index.html`, give it a new unique `key`, change the text, and add `file` / `cover` as above.
