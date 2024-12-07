import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'hint-of-red': {
          '50': '#f9f7f7',
          '100': '#f2eeee',
          '200': '#e8e0e0',
          '300': '#d8c9c9',
          '400': '#c0a9a9',
          '500': '#a88b8b',
          '600': '#907272',
          '700': '#785d5d',
          '800': '#645050',
          '900': '#564646',
          '950': '#2c2323',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
