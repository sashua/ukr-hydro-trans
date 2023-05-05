/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    blur: {
      DEFAULT: '100px',
    },
    boxShadow: {
      none: 'none',
      1: '0px 52px 44px rgba(136, 136, 134, 0.2)',
      2: '0px 20px 20px rgba(187, 187, 186, 0.2)',
      3: '0px 60px 68px rgba(31, 31, 30, 0.08)',
      4: '-56px 36px 44px rgba(31, 31, 30, 0.04)',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      brand: {
        DEFAULT: '#f16336',
        50: '#fef4ee',
        100: '#fde5d7',
        200: '#fac7ae',
        300: '#f7a07a',
        400: '#f16336',
        500: '#ee4a21',
        600: '#e03116',
        700: '#b92315',
        800: '#941d18',
        900: '#771b17',
        950: '#400b0a',
      },
      neutral: {
        soft: '#f4f4f4',
        light: '#d9d9d9',
        DEFAULT: '#888888',
        dark: '#1f1f1f',
        50: '#f8f8f8',
        100: '#f4f4f4',
        200: '#e4e4e4',
        300: '#d9d9d9',
        400: '#b4b4b4',
        500: '#9a9a9a',
        600: '#888888',
        700: '#6a6a6a',
        800: '#5a5a5a',
        900: '#4e4e4e',
        950: '#1f1f1f',
      },
    },
    container: {
      center: true,
      padding: '24px',
    },
    fontFamily: {
      primary: ['Monserrat', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      'H0-desktop': [
        '7rem',
        { lineHeight: '0.9', letterSpacing: '-5%', fontWeight: '500' },
      ],
      'H0-mobile': [
        '5rem',
        { lineHeight: '0.9', letterSpacing: '-5%', fontWeight: '500' },
      ],
      'H1-desktop': [
        '6rem',
        { lineHeight: '1', letterSpacing: '-6%', fontWeight: '500' },
      ],
      'H2-desktop': [
        '4rem',
        { lineHeight: '1.5', letterSpacing: '0', fontWeight: '700' },
      ],
      'H2-mobile': [
        '3.5rem',
        { lineHeight: '1.5', letterSpacing: '0', fontWeight: '700' },
      ],
      'H3-desktop': [
        '3.5rem',
        { lineHeight: '0.9', letterSpacing: '-4%', fontWeight: '500' },
      ],
      'H3-mobile': [
        '3rem',
        { lineHeight: '0.9', letterSpacing: '-4%', fontWeight: '500' },
      ],
      'H4-desktop': [
        '2.5rem',
        { lineHeight: '1.2', letterSpacing: '-2%', fontWeight: '700' },
      ],
      'H4-mobile': [
        '2.5rem',
        { lineHeight: '1.1', letterSpacing: '-2%', fontWeight: '700' },
      ],
      'H5-desktop': [
        '1.75rem',
        { lineHeight: '1.4', letterSpacing: '-3%', fontWeight: '700' },
      ],
      'H5-mobile': [
        '1.5rem',
        { lineHeight: '1.3', letterSpacing: '-3%', fontWeight: '700' },
      ],

      'xxl-400': [
        '1.5rem',
        { lineHeight: '1.5', letterSpacing: '0', fontWeight: '500' },
      ],
      'xl-700': [
        '1.25rem',
        { lineHeight: '1.4', letterSpacing: '0', fontWeight: '500' },
      ],
      'xl-400': [
        '1.25rem',
        { lineHeight: '1.6', letterSpacing: '0', fontWeight: '500' },
      ],
      'lg-700': [
        '1.125rem',
        { lineHeight: '1.6', letterSpacing: '0', fontWeight: '700' },
      ],
      'md-700': [
        '1rem',
        { lineHeight: '1.2', letterSpacing: '0', fontWeight: '700' },
      ],
      'md-400': [
        '1rem',
        { lineHeight: '1.6', letterSpacing: '0', fontWeight: '700' },
      ],
      'sm-400': [
        '0.875rem',
        { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' },
      ],

      'button-900': [
        '0.875rem',
        { lineHeight: '1.2', letterSpacing: '1%', fontWeight: '900' },
      ],
    },
    extend: {},
  },
  plugins: [],
};
