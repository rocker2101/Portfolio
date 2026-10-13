import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          warm: '#F5F3EC',
          ink: '#191A17',
          card: '#ECEAE2',
          surface: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#191A17',
          muted: '#4A4C45',
          faint: '#7B7E74',
        },
        olive: {
          DEFAULT: '#777D50',
          dark: '#585D38',
          light: '#91976A',
        },
        lime: {
          accent: '#C9E66B',
          soft: '#Dbf088',
        },
        border: {
          neutral: '#DCDCD2',
          dark: '#2E302B',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'Cambria', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
      },
    },
  },
  plugins: [],
};

export default config;
