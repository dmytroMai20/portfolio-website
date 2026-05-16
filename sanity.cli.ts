import { defineCliConfig } from '@sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'wcqkgv7m',
    dataset: 'production',
  },
  schema: {
    path: './.sanity/schema.json',
  },
})
