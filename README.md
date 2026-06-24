# warm-minimal

A warm, minimal Hugo theme for academic and personal sites. Self-hosted fonts
(Newsreader + Inter), no external CDN dependencies, a single design-token
stylesheet, and data-driven layouts for projects, publications, a research page,
and a timeline CV.

## Usage

Add the theme as a git submodule and enable it in your site config:

```bash
git submodule add git@github.com:NilsWinter/hugo-warm-minimal.git themes/warm-minimal
```

```toml
# hugo.toml
theme = "warm-minimal"
```

Then run `hugo server`.

## Customizing

- **Colors / type / spacing** live as CSS custom properties in
  `static/css/main.css` (`:root`). The accent ships as terracotta, with a sage
  alternative commented out.
- **Fonts** are self-hosted variable woff2 files in `static/fonts/`.

## Modular design features

Optional design touches are toggled from `[params.features]` in your site
config. Each flag is independent — set it to `false` to remove the feature
entirely (no markup, no CSS effect). The enabled flags are emitted as `f-*`
classes on `<html>` (see `partials/feature-classes.html`), which the matching
rules in `main.css` (section 9) are scoped under.

```toml
[params.features]
  darkMode      = true   # header light/dark toggle button (light is the default)
  linkUnderline = true   # animated underline on in-text prose links
  focusRing     = true   # visible keyboard focus outline
  reducedMotion = true   # honor prefers-reduced-motion (disable animations)
  printStyles   = true   # clean print/PDF layout (especially the CV)
  heroEyebrow   = true   # small accent label above the homepage name
  grain         = true   # faint paper-grain texture overlay
  callouts      = true   # styled note/tip/warning + pull-quote shortcodes
  leadParagraph = true   # emphasized first paragraph on article pages
  dropCap       = false  # decorative drop cap on the first paragraph
  toc           = true   # sticky "On this page" table of contents
  pubBadges     = true   # venue chip + DOI/PDF/Code/Data links on publications
  footerIcons   = true   # academic profile icons in the footer
```

Supporting content fields and config:

- **heroEyebrow** — set `eyebrow: "…"` in the homepage `content/_index.md` front matter.
- **pubBadges** — add any of `venue`, `doi`, `pdf`, `code`, `data` to a publication's
  front matter; only the fields you set are shown. `doi` accepts a bare DOI or a full URL.
- **footerIcons** — fill `[params.social]` (`email`, `orcid`, `scholar`, `github`,
  `researchgate`); leave a value empty (`""`) to hide that icon.
- **callouts** — author with the `callout` shortcode (types `note`, `tip`,
  `warning`) and the `pullquote` shortcode.

## License

Bundled fonts (Newsreader, Inter) are licensed under the SIL Open Font License.
