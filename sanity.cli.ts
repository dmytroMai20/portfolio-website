import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'wcqkgv7m',
    dataset: 'production',
  },
  typegen: {
    generates: 'sanity.types.ts',
    path: './**/*.{ts,tsx}',
  },
})
