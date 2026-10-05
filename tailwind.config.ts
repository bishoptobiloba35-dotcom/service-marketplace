import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f9ff',
          100: '#dfeeff',
          500: '#1976d2',
          600: '#0f5cb3',
          700: '#0d4c94',
          900: '#0d2a4d',
        },
        accent: '#f59e0b',
      },
      boxShadow: {
        soft: '0 20px 50px rgba(15, 23, 42, 0.10)',
      },
    },
  },
  plugins: [],
};

export default config;
