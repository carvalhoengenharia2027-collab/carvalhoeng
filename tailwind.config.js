/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-barlow)', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#dbe4ff',
          500: '#1a3a6b',
          600: '#163260',
          700: '#122855',
          800: '#0e1f42',
          900: '#091530',
        },
        gold: {
          400: '#d4a017',
          500: '#b8860b',
          600: '#9a7209',
        },
      },
    },
  },
  plugins: [],
}
