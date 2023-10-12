import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        base: {
          50: '#fff9f4',
          100: '#fff4ea',
          200: '#ffefe0',
          300: '#ffe8d1',
          400: '#ffe2c6',
          500: '#ffddbc',
          600: '#ffd8b2',
          700: '#ffd3a8',
          800: '#ffce9e',
          900: '#ffc993',
          950: '#ffc489',
          1000: '#ffbf7f',
          DEFAULT: '#ffd8b2',
        }
      }
    },
  },
  plugins: [],
}
export default config
