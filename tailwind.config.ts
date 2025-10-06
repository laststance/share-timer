import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#047857',
          'green-dark': '#065F46',
        },
        bg: {
          primary: '#FAF9F6',
          secondary: '#F3F4F6',
        },
        text: {
          primary: '#374151',
          secondary: '#6B7280',
        },
        accent: {
          blue: '#60A5FA',
          amber: '#FBBF24',
        },
      },
      boxShadow: {
        soft: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [],
}

export default config
