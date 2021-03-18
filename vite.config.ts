const { resolve } = require("path");
import { defineConfig } from 'vite';

import preactRefresh from '@prefresh/vite';

export default defineConfig({
  css: {
    // hear is the problem
    postcss: require(resolve(process.cwd(), "postcss.config")),
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  plugins: [preactRefresh()]
})
