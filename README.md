# unplugin-visualizer

It is an universal plugin for bundle visualizer, which can be used with vite/webpack/rollup, powered by [source-map-explorer](https://github.com/danvk/source-map-explorer)
## Install

```bash
pnpm i unplugin-visualizer
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import unpluginVisualizer from 'unplugin-visualizer/vite'

export default defineConfig({
  plugins: [
    unpluginVisualizer({ /* options */ }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import unpluginVisualizer from 'unplugin-visualizer/rollup'

export default {
  plugins: [
    unpluginVisualizer({ /* options */ }),
  ],
}
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-visualizer/webpack')({ /* options */ }),
  ],
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default {
  buildModules: [
    ['unplugin-isualizer/nuxt', { /* options */ }],
  ],
}
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-visualizer/webpack')({ /* options */ }),
    ],
  },
}
```

<br></details>

## License

[Brandonxiang@MIT](./LICENSE)
