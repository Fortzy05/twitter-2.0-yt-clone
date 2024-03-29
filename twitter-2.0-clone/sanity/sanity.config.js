import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: 'wgks7i2e',
  dataset: 'productionnpm',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
