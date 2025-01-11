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
        alabaster: {
          '50': '#fafafa',
          '100': '#efefef',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929',
        },
        'steel-blue': {
          '50': '#f2f7fc',
          '100': '#e2ecf7',
          '200': '#cbdff2',
          '300': '#a7cae9',
          '400': '#7daedd',
          '500': '#5e92d3',
          '600': '#517ec8',
          '700': '#4067b5',
          '800': '#395494',
          '900': '#324876',
          '950': '#222e49',
        },
      },
      width: {
        112: '28rem',
      },
    },
  },
  plugins: [],
} satisfies Config
