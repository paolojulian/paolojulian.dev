import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        black: '#1f1717',
        white: '#FCF5ED',
        primary: '#CE5A67',
        secondary: '#F4BF96',
        gray: {
          darker: '#3c4858',
          DEFAULT: '#A3A3A3',
          lighter: '#e0e6ed'
        }
      },
    },
  },
  plugins: [],
};
export default config;