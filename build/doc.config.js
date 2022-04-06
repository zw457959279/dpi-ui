import baseConfig from './base.config';
import { defineConfig } from 'vite';

export default defineConfig({
  ...baseConfig,
  // base: '/component-lib-demo',
  build: {
    outDir: 'docs',
  }
});
