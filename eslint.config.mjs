import configNymph from 'eslint-config-nymph';
import pluginJsdoc from 'eslint-plugin-jsdoc';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
  configNymph,
  pluginJsdoc.configs['flat/recommended'],
  // Disable max-len for Vue SFCs
  {
    files: ['**/*.vue'],
    rules: {
      'max-len': 'off',
    },
  },
]);
