## Features

  - 👀 `react` as the view.
  - 🔀 `react-router` v4 as the router.
  - 🚄 `express` server.
  - 🎭 `jest` as the test framework.
  - 🖌 Very basic CSS support - it's up to you to extend it with CSS Modules etc.
  - ✂️ Code splitting - easily define code split points in your source using `code-split-component`.
  - 🌍 Server Side Rendering.
  - 😎 Progressive Web Application ready, with offline support, via a Service Worker.
  - 🐘 Long term browser caching of assets with automated cache invalidation.
  - 📦 All source is bundled using Webpack v2.
  - 🚀 Full ES2017+ support - use the exact same JS syntax across the entire project (src/tools/config). No more folder context switching! We also only use syntax that is stage-3 or later in the TC39 process.
  - 🔧 Centralised application configuration with helpers to avoid boilerplate in your code.
  - 🔥 Extreme live development - hot reloading of ALL changes to client/server source, with auto development server restarts when your application configuration changes.  All this with a high level of error tolerance and verbose logging to the console.
  - ⛑ SEO friendly - `react-helmet` provides control of the page title/meta/styles/scripts from within your components.
  - 🤖 Optimised Webpack builds via HappyPack and an auto generated Vendor DLL for smooth development experiences.
  - 🍃 Tree-shaking, courtesy of Webpack.
  - 👮 Security on the `express` server using `helmet` and `hpp`.
  - 🏜 Asset bundling support. e.g. images/fonts.
  - 🎛 Preconfigured to support development and optimised production builds.
  - 👼 Airbnb's ESlint configuration.
  - ❤️ Preconfigured to deploy to `now` with a single command.

Redux/MobX, data persistence, modern styling frameworks and all the other bells and whistles have been explicitly excluded from this starter kit.  It's up to you to decide what technologies you would like to add to your own implementation based upon your own needs.

> However, we now include a set of "feature branches", each implementing a technology on top of the clean master branch.  This provides you with an example on how to integrate said technologies, or use the branches to merge in a configuration that meets your requirements.  See the [`Feature Branches`](/docs/FEATURE_BRANCHES.md) documentation for more.

## Getting started

```bash
yarn
yarn run development
```

Or, if you aren't using [`yarn`](https://yarnpkg.com/):

```bash
npm install
npm run development
```

Now go make some changes to the `Home` component to see the tooling in action.

## Docs

 - [Project Overview](/docs/PROJECT_OVERVIEW.md)
 - [Application Configuration](/docs/APPLICATION_CONFIG.md)
 - [Package Script Commands](/docs/PKG_SCRIPTS.md)
 - [Feature Branches](/docs/FEATURE_BRANCHES.md)
 - [Deploy your very own Server Side Rendering React App in 5 easy steps](/docs/DEPLOY_TO_NOW.md)
 - [FAQ](/docs/FAQ.md)
 - [Changelog](/CHANGELOG.md)
