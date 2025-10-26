import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Use absolute path to ensure Vitest is looking at the right location
    include: [
      // 'test/Easy/Array/**/*test.ts',
      'test/Easy/Sets/**/*test.ts'
    ],  // Ensure your test files end with 'test.ts'
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
    ],

    // Environment (set to 'node' for Node.js environment or 'jsdom' for browser-like tests)
    environment: 'node',

    // Enable global variables like `expect`
    globals: true,

    // Silent mode (whether to suppress console logs in test runs)
    silent: false,
  },
});