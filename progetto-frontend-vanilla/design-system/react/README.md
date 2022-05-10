# Design System with React and TailwindCSS

`nvm install`

`nvm use`

`npm install`

`npm run storybook` to explore our _design system_ on `http://localhost:6006`

`npm run build` to populate `dist/` with sources (hopefully) ready for npm publish

## todo

- https://github.com/ben-rogerson/twin.macro/discussions/227
- chromatic setup
- npm publish

## good reads

- https://mxstbr.com/thoughts/tailwind/
- https://storybook.js.org/tutorials/design-systems-for-developers/
- https://dev.to/bespoyasov/clean-architecture-on-frontend-4311
- https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html + https://egghead.io/lessons/react-replace-react-createelement-function-call-with-jsx
- https://it.reactjs.org/blog/2020/10/20/react-v17.html _We’ve only had to change fewer than twenty components out of 100,000+ in the Facebook product code to work with these changes, so we expect that most apps can upgrade to React 17 without too much trouble_

## thanks to

Following articles were fundamental to create this sample.
### babel

- https://www.npmjs.com/package/babel-plugin-macros
- https://babeljs.io/blog/2017/09/11/zero-config-with-babel-macros
- https://github.com/jgierer12/awesome-babel-macros

### tailwinders

- https://github.com/ben-rogerson/twin.macro
- https://github.com/ben-rogerson/twin.examples/tree/master/storybook-emotion
- https://github.com/ben-rogerson/twin.macro/blob/master/docs/options.md
- https://github.com/ben-rogerson/babel-plugin-twin
- https://github.com/ben-rogerson/twin.macro/issues/238 _use of css attributes results in css="[object Object]"_
- https://github.com/ben-rogerson/twin.macro/discussions/393 _tailwind classes and short css values can’t have any part of them dynamically created_

### emotion

- https://emotion.sh/docs/@emotion/babel-preset-css-prop
- https://emotion.sh/docs/css-prop#babel-preset
- https://github.com/emotion-js/emotion/issues/1741 _Css classes are not splitted to treat output CSS effectively_
- https://github.com/emotion-js/emotion/issues/2410 _Composition duplicates css rules by creating different classes for each css block_

## (maybe) future advanced setups

- https://dev.to/hamatoyogi/how-to-build-a-react-ts-tailwind-design-system-1ppi
- https://tsdx.io/
- https://tailwindcss.com/docs/installation/using-postcss > https://dev.to/ynwd/how-to-integrate-tailwind-react-and-webpack-2gdf
- https://blog.devgenius.io/react-vite-tailwind-css-twin-macro-storybook-svg-imports-as-react-component-6b44d5e2641
- https://babeljs.io/docs/en/babel-plugin-transform-react-jsx