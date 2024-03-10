// tailwind config is required for editor support

import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';
import colors from 'tailwindcss/colors';

const config: Pick<Config, 'content' | 'presets' | 'theme'> = {
  content: ['./src/**/*.tsx'],
  presets: [sharedConfig],
  theme: {
    colors: {
      green: colors.green[400],
      red: colors.red[400],
    },
  },
};

export default config;
