import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#facc15', dark: '#1e293b' },
      },
      borderRadius: { '2xl': '1rem' },
    },
  },
  plugins: [],
} satisfies Config
