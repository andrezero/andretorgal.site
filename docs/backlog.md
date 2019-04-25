# Backlog

## Now

- [ ] spike: storybook + typescript + scssd
- [ ] styleguide
- [ ] migrate scss

## next

- [ ] env variables in markdown
- [ ] suspense fallback loading
- [ ] migrate experiments
- [ ] integrate docs into content
- [ ] router [transition](https://reach.tech/router/example/animation)
- [x] models: page
- [x] models: post
- [ ] jest + enzyme
- [ ] image sharp
- [ ] models: tags
- [ ] husky + lint staged
- [ ] spike: gitlab + pages
- [ ] spike: gitlab + s3

## Later

- [ ] og image
- [ ] refactor og generation
- [ ] search

### Issues

- [ ] scroll to anchor
- [ ] `react-static` interfering with `@reach/router` set focus, opened an [issue here](https://github.com/nozzle/react-static/issues/1147)
- [ ] `react-static` ssg time vs client time hydration of css module classes breaks down
      / using [typings-for-css-modules-loader](https://github.com/Jimdo/typings-for-css-modules-loader)
      / following [issue here](https://github.com/nozzle/react-static/issues/984)
      / see [loggbook](./logbook-accepted.md)
- [ ] `react-static` tries to build pages for sass typings `404.scss.d.ts`
- [ ] Types for `rehype-raw` `rehype-react` `remark-parse` and `remark-rehype` added manually, waiting for [this PR](https://github.com/remarkjs/remark/pull/383) to be merged, posted on [unified community](https://spectrum.chat/unified/type-definitions/missing-typings-across-plugin-community~49ee93c0-23bf-49f3-9706-2468b0760564)
- [ ] `react-static` maximum call stack error when using helmet with children, following [issue here](https://github.com/nozzle/react-static/issues/1119)

### Puzzles

- [ ] `react-static` [docs](https://github.com/nozzle/react-static/blob/master/docs/api.md#reloadClientData) mentions `reloadCliendData()` should be used to re-render when data changes, but I only got it to work by using the undocumented api `rebuildRoutes()`
- [ ] `@reach/router` [anchor link support](https://github.com/reach/router/issues/235) and how to tame [focus and scroll on long content](https://github.com/reach/router/issues/62)

### Spikes

- [ ] [solid](https://solid.inrupt.com/)

  - [ ] [linked-data-developer-experience](https://ruben.verborgh.org/blog/2018/12/28/designing-a-linked-data-developer-experience/)

- [ ] svg trickery
  - [ ] via [postcss](https://github.com/jonathantneal/postcss-write-svg)
