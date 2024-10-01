import type { Config } from 'tailwindcss';

const config: Pick<Config, 'content' | 'presets' | 'theme'> = {
  content: ['./app/**/*.tsx', './components/**/*.tsx'],
  presets: [
    require('@paolojulian.dev/design-system/tailwind-config/tailwind.config.js'),
  ],
};

export default config;
