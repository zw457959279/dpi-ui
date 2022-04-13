import baseConfig from './base.config';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  ...baseConfig,
  build: {
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, '../packages/index.js'),
      name: 'dpi',
      fileName: (format) => `dpi.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        name: 'lib',
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    ...(baseConfig).plugins
  ]
});
