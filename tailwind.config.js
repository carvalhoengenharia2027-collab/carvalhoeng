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
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        background: '#FAF9F6',
        foreground: '#1C1917',
        primary: {
          DEFAULT: '#C2510F',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#78716C',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#F5F5F4',
          foreground: '#78716C',
        },
        accent: {
          DEFAULT: '#C2510F',
          foreground: '#FFFFFF',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1C1917',
        },
        border: '#E7E5E4',
      },
      borderRadius: {
        xl: '0.75rem',
      },
    },
  },
  plugins: [],
}
