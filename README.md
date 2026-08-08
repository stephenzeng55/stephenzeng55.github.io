# Stephen Zeng's Portfolio

A multilingual personal portfolio built with Astro. The site supports English,
Cantonese, and Japanese and is generated as a static website.

## Requirements

- Node.js 22.12.0 or newer
- npm

## Getting Started

```sh
npm install
npm run dev
```

The development server runs at `http://localhost:4321` by default.

## 🚀 Project Structure

The main project files are organized as follows:

```text
/
├── src/
│   ├── assets/
│   │   ├── flags/
│   │   │   ├── hk.svg
│   │   │   ├── jp.svg
│   │   │   └── us.svg
│   │   ├── portfolio-hero.png
│   │   └── zeng.webp
│   ├── components/
│   │   ├── AboutSection.astro
│   │   ├── ContactSection.astro
│   │   ├── HeroSection.astro
│   │   ├── HighlightsSection.astro
│   │   ├── HomePage.astro
│   │   └── WorkSection.astro
│   ├── i18n/
│   │   ├── en.ts
│   │   ├── ja.ts
│   │   ├── portfolio.ts
│   │   ├── types.ts
│   │   └── yue.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── [locale]/
│       │   └── index.astro
│       └── index.astro
└── package.json
```

### Component organization

`HomePage.astro` composes the page from five focused section components:

- `HeroSection.astro` contains the header, navigation, language switcher, and hero content.
- `HighlightsSection.astro` presents the portfolio highlights.
- `WorkSection.astro` renders professional experience and project cards.
- `AboutSection.astro` contains the biography, credentials, and skills.
- `ContactSection.astro` provides email and social links.

Localized copy and route metadata are split between `src/i18n/en.ts`,
`src/i18n/yue.ts`, and `src/i18n/ja.ts`. Shared content types live in
`src/i18n/types.ts`, while `src/i18n/portfolio.ts` collects the translations
for the pages and components. English is served from `/`, while Cantonese and
Japanese use `/yue/` and `/ja/`.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Builds the production site to `./dist/`           |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Learn More

See the [Astro documentation](https://docs.astro.build) for framework guides and API references.
