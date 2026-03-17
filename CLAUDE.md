# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Chof.vn** — a Vietnamese fashion & services marketplace (Chợ Fashion & Dịch Vụ). This is a static HTML/CSS prototype with no build tools, frameworks, or external JS dependencies.

## Development

No build step. Since links use root-relative paths, serve with a local server rather than opening via `file://`:

```bash
npx serve .
# or use VS Code Live Server extension
```

## Page Structure

| File | Purpose | Font |
|---|---|---|
| `index.html` | Homepage | Lexend |
| `listing.html` | Product listing / search results | Be Vietnam Pro |
| `detail.html` | Product detail page | Be Vietnam Pro |
| `manage.html` | Post/manage a product listing | Be Vietnam Pro |

Each page is a self-contained `.html` file — all CSS is inlined in `<style>` tags, all JS in `<script>` tags at the bottom. No separate `.css` or `.js` files exist.

## Shared Header & Footer

All four pages share an **identical** `<header>` and `<footer>` block. When updating the header or footer, sync the change across all four files.

**Header structure** (inside `<header>`):
- `.hdr` flex row: logo → `.sw` search wrapper → `.ha` actions
- `.sw` contains `.sb` (search bar): **Danh mục** button + `.manchor` mega menu, input, search icon, submit button
- `.ha` contains: login button (`.blogin`), avatar dropdown (`.uavatar`), post button (`.bpost`)

**Header JS functions** (must be present in every page's `<script>`):

| Function | Purpose |
|---|---|
| `toggleMM(e)` / `closeMM()` | Open/close the Danh mục mega menu |
| `swp(id, el)` | Switch active panel in the mega menu |
| `openDrop()` / `fill(el)` | Open search dropdown / fill input from tag |
| `toggleUDrop(e)` / `closeUDrop()` | Open/close user avatar dropdown |
| `doLogin()` / `doLogout()` | Mock login/logout state toggle |

**Cat-tabs** (`<div class="cat-tabs">`) sits below the header, sticky at `top: 65px`, z-index 400. It contains category pill links (`.ct-pill`) with prev/next scroll buttons.

## Design System (CSS Variables)

Defined in `:root` at the top of each file's `<style>` block:

```css
--p:  #008848   /* primary green */
--pd: #006635   /* dark green */
--pl: #e8f5ee   /* light green (backgrounds, badges) */
--ac: #f97316   /* accent orange (CTAs, highlights) */
--bg: #f2f2f2   /* page background */
--ink: #111     /* body text */
--line: #e5e5e5 /* borders/dividers */
--r:  12px      /* card border-radius */
```

Always use these variables rather than hard-coded hex values for brand colors.

## Icon System

Google **Material Symbols Outlined** loaded via CDN. Use `.ms` class for outlined icons and `.msf` for filled variant:

```html
<span class="ms">shopping_cart</span>
<span class="ms msf">favorite</span>
```

`font-variation-settings` for `.msf`: `'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24`

## Layout Conventions

- Max content width: `1280px`, centered with `margin: 0 auto; padding: 0 16px`
- Header height: `64px`, sticky (`position: sticky; top: 0; z-index: 500`)
- Header has `border-radius: 15px 15px 0 0` and `border-top: 1px solid #888888`
- Internal links use root-relative paths (e.g., `/listing.html`, `/detail.html`)
- On mobile (`≤768px`): login button and search submit button are hidden (`display: none !important`); mega menu becomes a bottom-sheet overlay

## Mega Menu (Danh mục)

The `.manchor` div is `position: absolute` relative to the small wrapper div inside `.sb`. On desktop it floats below the button; on mobile (`≤768px`) it switches to `position: fixed` full-screen overlay with `.mob-open` class toggled on `.manchor`.

**Do not** set `document.body.style.overflow = 'hidden'` on desktop — this causes a scrollbar-width layout shift. Only lock scroll on mobile:
```js
if (window.innerWidth <= 768) document.body.style.overflow = o ? 'hidden' : '';
```

## Assets

All images/icons live in `assets/`. Product category images include fashion items (watches, bags, shoes, cosmetics, perfumes). Social icons: `zalo.png`, `fb.png`, `mess.png`, `youtube.png`, `tiktok.png`.
