import path from 'path'
import fs from 'fs'
import type { NormalizedOutputOptions, OutputBundle } from 'rollup'
import { createUnplugin } from 'unplugin'
import { explore } from 'source-map-explorer'

import type { Options } from './types'

const bundleOutputExplorerFile = 'visualizer.html'

function checkExistedJs(filenames: string[]) {
  return filenames.every(name => fs.existsSync(name))
}

function checkExistedMapping(filenames: string[]) {
  return filenames.every(name => fs.existsSync(`${name}.map`))
}

function getBundleAnalysis(jsOutput: string[]) {
  const isExistedJs = checkExistedJs(jsOutput)
  const isExistedMapping = checkExistedMapping(jsOutput)

  if (!isExistedJs) {
    console.log('[ERROR]JS Output does not exist')
  }
  else if (!isExistedMapping) {
    console.log('[ERROR]Map Output does not exist')
  }
  else {
    explore(jsOutput, {
      output: {
        format: 'html',
        filename: bundleOutputExplorerFile,
      },
    })
  }
}

export default createUnplugin<Options>(() => ({
  name: 'unplugin-visualizer',
  rollup: {
    writeBundle(outputOptions: NormalizedOutputOptions, outputBundle: OutputBundle) {
      const bundles = Object.values(outputBundle).filter(bundle => bundle.type === 'chunk')
      const jsOutput = bundles.map(p => path.join(outputOptions.dir || '', p.fileName))

      getBundleAnalysis(jsOutput)
    },
  },
  webpack(compiler) {
    compiler.hooks.done.tapAsync('unplugin-visualizer', (stats) => {
      let bundles: string[] = []
      const outputPath = stats.compilation.outputOptions.path || ''
      const chunks = stats.compilation.chunks
      chunks.forEach((s) => {
        bundles = bundles.concat([...s.files])
      })
      const jsOutput = bundles.map(p => path.join(outputPath, p))

      getBundleAnalysis(jsOutput)
    })
  },
}))
