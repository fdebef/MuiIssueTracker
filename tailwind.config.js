/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['Asap Condensed', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [forms],
};
