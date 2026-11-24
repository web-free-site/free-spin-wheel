# Cursor agent brief — free-spin-wheel

Target: https://free-spin-wheel.web-free.site
Repo name (wrangler `name`): `free-spin-wheel`
English name: "Free Spin Wheel". English primary.

Follow every rule in the attached `agent-brief-common.md`, with one SEO override below. Do not write the tool from scratch. Do not deploy. Do not switch models. Push to `main` of this repo when the work is done.

**SEO / language override (takes precedence over the common brief):** do **not** add a French or Swahili landing page, UI translation, or how-to pages. How-to and legal pages are English only. You may omit `hreflang` fr.

This is a **spin-the-wheel / wheel-of-names** picker. Users add names (or custom labels), spin, and get a random winner. No accounts. A shareable list in the URL is welcome; no backend.

## Recommended base (use this)

- Repo: https://github.com/hadihaider055/spin-wheel-of-names
- License: MIT (keep `LICENSE`, credit Hadi Haider in the footer and on `/about`)
- Stars: 2
- Last commit: 6 Oct 2026, 16:13 Africa/Kigali — `77e7ef479b` on `main`
- Official demo: `https://spin-wheel-of-names.netlify.app`
- Stack: Next.js 15, React, TypeScript. A complete customizable wheel: names, colors, dark mode, sound, confetti, import/export, history, categories. `.env.example` is branding-only (title, colors, feature flags, optional GA). Do **not** add Google Analytics. **Must add `output: 'export'`** (current next.config has no static export). `npm run build` must emit a static `out/` (or equivalent).
- Cloudflare: yes — static assets / Workers with assets. You must add prerendered HTML for every public page (no bare SPA fallback).
- Verification (this box, 23 Nov 2026, Africa/Kigali): GitHub API. `LICENSE` is a real MIT file (Copyright (c) 2025 Hadi Haider). Declared dependencies are Next/React/lucide-react/html-to-image/critters — no server, no paid API.
- Why this one: MIT with a real `LICENSE` file, a complete working website (not a library), giveaway-ready features, and a recent 2026 commit.

## Backup (MIT component; build a small static site around it)

- Repo: https://github.com/CrazyTim/spin-wheel
- License: MIT (`LICENSE.md`)
- Stars: 349
- Last commit: 2 Oct 2024, 13:12 Africa/Kigali — `819c1c1082` on `main`
- Official demo: `https://crazytim.github.io/spin-wheel/examples/themes`
- This is a themeable wheel **component**, not a complete product site. Use it only if the recommended base cannot be made into a static export. You would still need prerendered marketing/how-to pages around it.

## Do not use these

- `mihailgaberov/Wheel-of-Names` — MIT, but it is a Wheel of Fortune **letter-guessing game**, not a name picker.
- `ma3u/wheel` — Apache-2.0, but it depends on **Firebase** for a live join/QR mode. Do not import a Firebase backend.
- Discord bots, iOS/Android wheels, or any picker that requires an account or a server.

## What to build on top of hadihaider055/spin-wheel-of-names

1. Import the base into this repo, keep the MIT license, and credit Hadi Haider. Omit GitHub Actions workflows if any (the token lacks the `workflow` scope — do not restore them).
2. Rebrand to "Free Spin Wheel". English primary. No FR/SW translations of the site. The home tool is a customizable wheel of names (also usable for yes/no, numbers, or custom labels). Keep add/edit/remove entries, spin, winner display, and a way to paste or import a list. A "spin the wheel of names" and "yes or no" preset are welcome. Drop any "powered by" third-party branding and any Google Analytics.
3. Keep everything 100% in the browser. No accounts, no paid APIs, no API keys. localStorage and/or a shareable URL query for the entry list is fine. No Firebase, no backend.
4. Adsterra only, never AdSense. Use **only** the placeholder keys in this brief (or real keys if a follow-up provides them). Follow the `free-invoice-generator` pattern: all 10 units, banners in isolated iframes, `public/ads.json`. Never set COEP/COOP headers. Ads must not break spinning or the winner overlay.
5. SEO: prerendered HTML for every page (no bare SPA fallback); unique title, meta description, canonical, OG; JSON-LD (WebApplication + FAQPage); `sitemap.xml` and `robots.txt` for `https://free-spin-wheel.web-free.site`; English how-to pages, at least `/wheel-of-names`, `/spin-the-wheel-yes-or-no`, and `/how-to-pick-a-random-name` (each with its own title, description and canonical); prerendered `/privacy`, `/terms`, `/about`, `/contact`. Canonicals must be `https://free-spin-wheel.web-free.site`. No French landing page.
6. Footer: credit the upstream project, and add a link back to the hub `https://web-free.site/?ref=spin-wheel`.
7. On every prerendered HTML page, before `</body>`, add the More free tools block and the Cloudflare Web Analytics beacon (see below). Implement this with `scripts/inject-more-tools.mjs` hooked into `postbuild` or the end of `npm run build`, so a later rebuild cannot drop the home-page snippets. Do not rely on a one-off manual edit of `dist/` / `out/`.
   - The same **"More free tools"** block used on the other web-free.site tools (`id="wf-more-tools"`). Include a "Guides on this site" column for the how-to pages. List every current hub tool, plus the nine other sites in this batch (50 tools in total). Show **Free Spin Wheel** as bold text, not a self-link. Every outbound tool/hub link must carry `?ref=spin-wheel`.
     - **Documents & writing:** Free Word Counter (`https://free-word-counter.web-free.site/?ref=spin-wheel`), Free PDF Converter (`https://free-pdf-converter.web-free.site/?ref=spin-wheel`), Free CV Maker (`https://free-cv-maker.web-free.site/?ref=spin-wheel`), Free Invoice Generator (`https://free-invoice-generator.web-free.site/?ref=spin-wheel`), Free Typing Test (`https://free-typing-test.web-free.site/?ref=spin-wheel`), Free Signature Generator (`https://free-signature-generator.web-free.site/?ref=spin-wheel`), Free Email Signature Generator (`https://free-email-signature-generator.web-free.site/?ref=spin-wheel`).
     - **Images & codes:** Free QR Code Creator (`https://free-qr-code-creator.web-free.site/?ref=spin-wheel`), Free Image Resizer (`https://free-image-resizer.web-free.site/?ref=spin-wheel`), Free Image to Text (`https://free-image-to-text.web-free.site/?ref=spin-wheel`), Free Background Remover (`https://free-background-remover.web-free.site/?ref=spin-wheel`), Free Image Compressor (`https://free-image-compressor.web-free.site/?ref=spin-wheel`), Free HEIC to JPG Converter (`https://free-heic-to-jpg.web-free.site/?ref=spin-wheel`), Free Image Upscaler (`https://free-image-upscaler.web-free.site/?ref=spin-wheel`), Free Passport Photo Maker (`https://free-passport-photo-maker.web-free.site/?ref=spin-wheel`), Free PNG to SVG Converter (`https://free-png-to-svg.web-free.site/?ref=spin-wheel`), Free Meme Generator (`https://free-meme-generator.web-free.site/?ref=spin-wheel`), Free Color Picker (`https://free-color-picker.web-free.site/?ref=spin-wheel`), Free GIF Maker (`https://free-gif-maker.web-free.site/?ref=spin-wheel`), Free Photo Editor (`https://free-photo-editor.web-free.site/?ref=spin-wheel`), Free Logo Maker (`https://free-logo-maker.web-free.site/?ref=spin-wheel`).
     - **Calculators & currency:** Free Online Calculator (`https://free-online-calculator.web-free.site/en/?ref=spin-wheel`), Free Currency Converter (`https://free-currency-converter.web-free.site/?ref=spin-wheel`), Free Unit Converter (`https://free-unit-converter.web-free.site/?ref=spin-wheel`), Free Loan Calculator (`https://free-loan-calculator.web-free.site/?ref=spin-wheel`), Free Age Calculator (`https://free-age-calculator.web-free.site/?ref=spin-wheel`), Free Percentage Calculator (`https://free-percentage-calculator.web-free.site/?ref=spin-wheel`), Free BMI Calculator (`https://free-bmi-calculator.web-free.site/?ref=spin-wheel`).
     - **Text & SEO:** Free AI Humanizer (`https://free-ai-humanizer.web-free.site/?ref=spin-wheel`), Free SEO Generator (`https://free-seo-generator.web-free.site/?ref=spin-wheel`), Free Backlink Generator (`https://free-backlink-generator.web-free.site/?ref=spin-wheel`), Free JSON Formatter (`https://free-json-formatter.web-free.site/?ref=spin-wheel`), Free Text to Speech (`https://free-text-to-speech.web-free.site/?ref=spin-wheel`), Free Speech to Text (`https://free-speech-to-text.web-free.site/?ref=spin-wheel`), Free Diff Checker (`https://free-diff-checker.web-free.site/?ref=spin-wheel`), Free Citation Generator (`https://free-citation-generator.web-free.site/?ref=spin-wheel`).
     - **Audio & video:** Free Video to MP3 Converter (`https://free-video-to-mp3.web-free.site/?ref=spin-wheel`), Free MP3 Cutter (`https://free-mp3-cutter.web-free.site/?ref=spin-wheel`), Free Screen Recorder (`https://free-screen-recorder.web-free.site/?ref=spin-wheel`), Free Video Compressor (`https://free-video-compressor.web-free.site/?ref=spin-wheel`), Free Video to GIF Converter (`https://free-video-to-gif.web-free.site/?ref=spin-wheel`), Free Audio Converter (`https://free-audio-converter.web-free.site/?ref=spin-wheel`), Free Video Converter (`https://free-video-converter.web-free.site/?ref=spin-wheel`).
     - **Files:** Free ZIP Tool (`https://free-zip-tool.web-free.site/?ref=spin-wheel`).
     - **Test data:** Free Fake Address Generator (`https://free-fake-address-generator.web-free.site/?ref=spin-wheel`), Free Fake Name Generator (`https://free-fake-name-generator.web-free.site/?ref=spin-wheel`).
     - **Security & passwords:** Free Password Generator (`https://free-password-generator.web-free.site/?ref=spin-wheel`).
     - **Time:** Free Time Zone Converter (`https://free-time-zone-converter.web-free.site/?ref=spin-wheel`).
     - **Drawing:** Free Whiteboard (`https://free-whiteboard.web-free.site/?ref=spin-wheel`).
     - **Random & pickers:** **Free Spin Wheel**.
   - The same Cloudflare Web Analytics tag used on the other sites: `<!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "3e2f5f96ab32442ebb6e6f650615b58a"}'></script><!-- End Cloudflare Web Analytics -->`
8. `wrangler.toml`: `name = "free-spin-wheel"`, `[assets]` pointing at the static build output (`dist` or `out`). Use `html_handling = "auto-trailing-slash"` and `not_found_handling = "none"`. Custom domain `free-spin-wheel.web-free.site`. **Do not put `account_id` (or API tokens) in the committed file.** **Do not deploy.** Push to this repo only. Deploy happens from Gentil's box. Add a `.assetsignore` so Worker assets do not publish `AGENT_BRIEF.md`, `wrangler.toml`, `package.json`, `package-lock.json`, `.git/`, `node_modules/`, or other source/config files.
9. Test: production build, run locally, add at least 5 names, spin twice and get a winner, try a yes/no preset if present, check mobile at 390px, confirm no network call is required to spin, fix bugs. Critique your own result and fix issues.
10. Push everything to `main`. Final report: base repo + license, pages, tests and results, remaining caveats, commit hash.

## Adsterra ad codes

Real Adsterra codes are not ready yet (sites are not live). **Do not invent real-looking keys.** Wire all 10 units and `public/ads.json` with the exact placeholder strings below (32 characters each, prefix `wf23bplaceholder`). After a browser agent writes real keys to `adsterra-codes.md`, a later swap (or a follow-up to you with real keys) will replace them before deploy.

Code formats (KEY = the 32-char placeholder, later a 32-hex hash):
- Popunder: <script data-cfasync="false" src="https://abscloud.org/1/KEY"></script>
- Native Banner: <script async="async" data-cfasync="false" src="https://bauval.org/21/KEY"></script><div id="container-KEY"></div>
- Social Bar: <script data-cfasync="false" src="https://bauval.org/14/KEY"></script>
- Banner WxH: <script>atOptions = {'key':'KEY','format':'iframe','height':H,'width':W,'params':{}};</script><script src="https://bauval.org/22/KEY"></script>
- Smartlink URL: https://araplhn.org/4/KEY

## free-spin-wheel.web-free.site — site ID 6222773
Popunder cbb9eb94115762d61e6e845be364c27d
Native Banner afaa00df330d59515dfc2ea418fdedf7
Smartlink 24a0e6fae883fefd0774b74248be9b49
Social Bar a825f7b8005454e2b0b5b5d81040ae2c
468x60 90bd1881235cab2733703355fd6fcdd1
160x300 42f430170b769321f232e010f849baad
320x50 b901bfdb5ba259be13f4a6fcd89a414c
300x250 6cb0afbaea56caf47edc1929f7ecfc87
160x600 4a881e928742f7490527683fd211a487
728x90 87c5202030b8911bf5a8d5041ce2b388
