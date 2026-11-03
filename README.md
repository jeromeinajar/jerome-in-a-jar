# Jerome in a Jar

A complete, responsive static satire website. Fictional creator: **Jerome Jarrington — digital inventor & conceptualist**.

Includes original SVG brand mark and wordmark, illustrated jar, fictional creator portrait, seven editorial sections, scripted interactive companion demo, three full field-note articles, mobile navigation, keyboard-accessible dialogs and reduced-motion support. No dependencies, build tools, external fonts, tracking, AI keys or backend required.

## Publish on GitHub Pages — no coding required

1. Sign into GitHub and create a **public** repository named `jerome-in-a-jar`.
2. Extract this ZIP. Open the `jerome-in-a-jar` folder.
3. In the repository choose **Add file → Upload files**. Upload `index.html`, `styles.css`, `script.js`, `404.html`, `README.md`, `LICENSE`, and the entire `assets` folder. Commit to `main`. If your computer hides `.nojekyll`, this site's plain files also work without it.
4. The repository root must contain `index.html` directly. Do not upload the enclosing `jerome-in-a-jar` folder as another directory. Upload extracted files, not the ZIP.
5. Open **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, select **main** and **/(root)**, and click **Save**.
6. After deployment, your website will be `https://YOUR-USERNAME.github.io/jerome-in-a-jar/`. GitHub says publishing can take up to ten minutes. The Pages settings screen provides the actual live link.

For a root website instead, create a repository named exactly `YOUR-USERNAME.github.io`. The site will then be at `https://YOUR-USERNAME.github.io/`.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
Publishing source: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Publish using Git

From inside this extracted folder, with Git installed and your GitHub authentication configured:

```bash
git init -b main
git add index.html styles.css script.js 404.html assets README.md LICENSE .nojekyll
git commit -m "Create Jerome in a Jar website"
git remote add origin https://github.com/YOUR-USERNAME/jerome-in-a-jar.git
git push -u origin main
```

Then enable Pages using step 5 above. Never paste passwords or access tokens into chat.

## Preview and edit

Open `index.html` in a browser to use the site locally, including its interactive demo. Optionally run `python3 -m http.server 8000` from this folder and visit http://localhost:8000.

- Copy, creator biography and layout: `index.html`
- Colours, typography, responsive layout: `styles.css`
- Scripted responses and full articles: `script.js`
- Logos and illustrations: `assets/` (editable SVGs, no licensed stock images)

All asset URLs are relative so both root and project GitHub Pages sites work. There is no custom domain configured. No form collects email or sends messages. Demo replies are predetermined local jokes; conversation resets on page refresh. The mock creator has no real contact profile or fabricated external credentials.

The `.openai` folder is local preview configuration and is excluded from the ZIP; it is not required for GitHub.

## Source and satire

The supplied `https://jeremy26111.github.io/` root returned 404 during preparation. The accessible public reference was `https://jeremy26111.github.io/jeremy-blueprint/`. This site responds to that page's AI-companion vision, blueprint, origins, principles, creator and writing format with original satirical text and artwork. No source code, personal photograph or logo from that project is included. No affiliation or endorsement is claimed.

Jerome Jarrington, Jarrington Studio, the biography, quotations and field notes are fictional. The comedy targets grandiose technology concepts and presentation conventions. The website includes a short fictional/parody disclosure.
