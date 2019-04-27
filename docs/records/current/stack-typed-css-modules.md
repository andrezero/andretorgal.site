---
title: 'Stack: Typed CSS Modules'
---

> Details

- using [typings-for-css-modules-loader](https://github.com/Jimdo/typings-for-css-modules-loader) as per this [guide](https://medium.com/@sapegin/css-modules-with-typescript-and-webpack-6b221ebe5f10)
- classes correctly typed in VSCode and compilation time
- compatible with `post-css`
- using a fork `"typings-for-css-modules-loader": "https://github.com/andrezero/typings-for-css-modules-loader",`
  - merged https://github.com/andrezero/typings-for-css-modules-loader/commit/a4971f0baa82fa129d511572aa9f027e0d55b175 - adds support for css-loader-2

> Why

- css modules because scoping out of global css for atoms, components,
- typed modules because prevents errors in compile time + faster feedback + better developer experience

> Trade-offs

- polluting filesystem with extraneous `*.scss.d.ts` (gitignored for)
- had to patch up weback config in `node.api.js`
  - solves ssg time vs client time hydration of css module classes (see backlog.md issues)
  - underlying `css-loader` is setup to always "extract css to file during node build process"
- build can become flaky
  - right now typescript complains during webpack build `TS2307: Cannot find module './Post.scss'.`
  - but both the ssg and client app seem to be working just fine (for now)
- also, `typings-for-css-modules-loader` not compatible with `css-loader@2` and requires the following in `package.json`

```
"resolutions": {
  "react-static/css-loader": "1.0.1"
}
```

> Read more

- other options considered (all based in webpack loaders)
  - https://github.com/seek-oss/css-modules-typescript-loader
  - https://github.com/olegstepura/typed-css-modules-loader
  - https://github.com/Megaputer/dts-css-modules-loader
- see [typescript-plugin-css-modules](https://github.com/mrmckeb/typescript-plugin-css-modules) for a pure typescript alternative (tested, couldn't get it to work)
