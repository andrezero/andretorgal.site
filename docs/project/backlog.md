---
title: 'Backlog'
---

## Now

- [x] accessible routing: scroll to top on page route change
- [x] accessible routing: scroll to anchor on page load and on route change
- [ ] accessible routing: set focus on page route change
- [ ] accessible routing: is announcing "loadding ellipsis" on load in dev stage
- [ ] migrate scss

## next

- [ ] migrate experiments
- [ ] auto link children
- [ ] breadcrumbs
- [ ] env variables in markdown
- [ ] suspense fallback loading
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
- [ ] make data available to the 404 page
  - [ ] fix/workaround issue of `getRouteData()` being useless here
  - [ ] refactor routes code, decouple routes from sources so that data from one source can be used in different routers

### Issues

- [ ] acessible routing: scroll to top when clicking on link to current page (and no anchor in link)
- [ ] because now using `react-static-plugin-react-router` instead, need to implement accessible routing by hand
- [ ] `react-static` ssg time vs client time hydration of css module classes breaks down
      / using [typings-for-css-modules-loader](https://github.com/Jimdo/typings-for-css-modules-loader)
      / following [issue here](https://github.com/nozzle/react-static/issues/984)
      / see [loggbook](./logbook-accepted.md)
- [ ] `react-static` tries to build pages for sass typings `404.scss.d.ts`
- [ ] Types for `rehype-raw` `rehype-react` `remark-parse` and `remark-rehype` added manually, waiting for [this PR](https://github.com/remarkjs/remark/pull/383) to be merged, posted on [unified community](https://spectrum.chat/unified/type-definitions/missing-typings-across-plugin-community~49ee93c0-23bf-49f3-9706-2468b0760564)
- [ ] `react-static` maximum call stack error when using helmet with children, following [issue here](https://github.com/nozzle/react-static/issues/1119)
- [ ] `react-static` 404 has no access to `getRouteData()` because it looks up the failed route instead of the `404` path

### Puzzles

- [ ] `react-static` [docs](https://github.com/nozzle/react-static/blob/master/docs/api.md#reloadClientData) mentions `reloadCliendData()` should be used to re-render when data changes, but I only got it to work by using the undocumented api `rebuildRoutes()`
- [ ] `@reach/router` [anchor link support](https://github.com/reach/router/issues/235) and how to tame [focus and scroll on long content](https://github.com/reach/router/issues/62)

### Spikes

- [ ] [mdx](https://mdxjs.com/advanced/typescript) how to have side by side (or plugged to) the unified, remark, rehype pipeline

- [ ] [solid](https://solid.inrupt.com/)

  - [ ] [linked-data-developer-experience](https://ruben.verborgh.org/blog/2018/12/28/designing-a-linked-data-developer-experience/)

- [ ] svg trickery
  - [ ] via [postcss](https://github.com/jonathantneal/postcss-write-svg)

### Learn/Experiment

- [ ] CSS Variables
- [ ] React Portals - a first-class way to render children into a dom node
      that exists outside the dom hierarchy of the parent component.
- [ ] React ErrorBoundary
- [ ] [Lighthouse](https://developers.google.com/web/tools/lighthouse/)