import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#0071E3',
        primary: '#000000',
        secondary: '#6B7280',
        border: '#E5E7EB',
        light: '#F9FAFB',
        dark: {
          bg: '#000000',
          card: '#111111',
          border: '#1F2937',
          text: '#F9FAFB',
          secondary: '#9CA3AF',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        'section': '72rem',
      },
    },
  },
  plugins: [],
}

export default config
