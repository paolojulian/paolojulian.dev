import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors'

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        black: '#0D0D0D',
        white: '#FCF5ED',
        primary: '#CE5A67',
        secondary: '#F4BF96',
        gray: {
          darker: colors.stone[500],
          DEFAULT: '#A3A3A3',
          lighter: '#e0e6ed'
        }
      },
    },
  },
  plugins: [],
};
export default config;