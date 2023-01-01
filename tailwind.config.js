/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

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
    extend: {
      backgroundColor: {
        'base-1': 'var(--bg-1)',
        'base-2': 'var(--bg-2)',
        'base-3': 'var(--bg-3)',
        'base-4': 'var(--bg-4)',
      },
    },
    colors: {
      'base-1': 'var(--text-1)',
      'base-2': 'var(--text-2)',
      'base-3': 'var(--text-3)',
      'base-4': 'var(--text-4)',
      'primary-1': 'var(--primary-1)',
      'primary-2': 'var(--primary-2)',
    },
  },
  plugins: [],
}
