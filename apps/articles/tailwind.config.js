/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      height: {
        navbarLg: '6rem',
        // navbar: '4rem',
      },
      width: {
        sidebar: '18rem',
      },
      maxWidth: {
        phone: '420px',
        tablet: '620px',
        web: '1080px',
        large: '1268px',
      },
      padding: {
        navbar: '4rem',
        sidebar: '18rem',
      },
      margin: {
        navbar: '4rem',
        sidebar: '18rem',
      },
      fontFamily: {
        capital: ['var(--font-capital)'],
        comfortaa: ['var(--font-comfortaa)'],
        lora: ['var(--font-lora)'],
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      colors: {
        main: '#ECE8E1',
        light: '#fefaf3',
        primary: colors.red,
        background: colors.white,
        gray: colors.slate,
        accent: colors.cyan,

        new: {
          accent: '#B3D9D2',
          black: '#171717',
          white: '#fafafa',
          highlight: '#737373',
          highlightLighter: '#b3b3b3',
        },
      },
      transitionTimingFunction: {
        fadeIn: 'cubic-bezier(.24,.6,.64,.65)',
        menu: 'cubic-bezier(0.45,0.02,0.09,0.98)',
      },
      boxShadow: {
        mediumBlur: '0px 8px 28px 0px rgba(0,0,0,0.25)',
        highBlur: '0px 4px 28px 0px rgba(0,0,0,0.25)',
        default: '0px 4px 28px -3px rgba(0,0,0,0.48)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
