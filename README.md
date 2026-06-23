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

## License

Bundled fonts (Newsreader, Inter) are licensed under the SIL Open Font License.
