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
  {
    files: ['app/client/**/*.ts'],
    rules: {
      'max-len': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'camelcase': 'off',
      'new-cap': 'off',
      '@typescript-eslint/no-dynamic-delete': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
]);
