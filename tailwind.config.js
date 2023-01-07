/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

//Set opacity
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto Slab', 'serif'],
    },
    screens: {
      sm: { max: '600px' },
      md: { min: '601', max: '1080' },
      xl: { min: '1081px' },
    },
    extend: {
      backgroundColor: {
        'base-1': withOpacityValue('--bg-1'),
        'base-2': withOpacityValue('--bg-2'),
        'base-3': withOpacityValue('--bg-3'),
        'base-4': withOpacityValue('--bg-4'),
        transparent: 'transparent',
      },

      colors: {
        'base-1': withOpacityValue('--text-1'),
        'base-2': withOpacityValue('--text-2'),
        'base-3': withOpacityValue('--text-3'),
        'base-4': withOpacityValue('--text-4'),
        'primary-1': withOpacityValue('--primary-1'),
        'primary-2': withOpacityValue('--primary-2'),
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}
