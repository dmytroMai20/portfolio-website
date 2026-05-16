import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'wcqkgv7m',
    dataset: 'production',
  },
  typegen: {
    generates: 'types/sanity.types.ts',
    path: './**/*.{ts,tsx}',
  },
  vite: (prev) => ({
    ...prev,
    define: {
      ...prev.define,
      'process.env.NEXT_PUBLIC_SANITY_PROJECT_ID': JSON.stringify('wcqkgv7m'),
      'process.env.NEXT_PUBLIC_SANITY_DATASET': JSON.stringify('production'),
    },
  }),
})
