import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        circus: {
          black: '#0a0608',
          deep: '#120d10',
          card: '#1a1118',
          border: '#2e1f28',
          red: '#8b1a1a',
          crimson: '#c0392b',
          gold: '#c9a84c',
          'gold-light': '#e8c97a',
          purple: '#4a1942',
          'purple-light': '#7b3f6e',
          muted: '#8a7a85',
          text: '#d4c5cc',
          white: '#f0e8ec',
        },
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', 'serif'],
        body: ['"Crimson Text"', 'Georgia', 'serif'],
        sans: ['"Georgia"', 'serif'],
        mono: ['"Courier Prime"', 'monospace'],
      },
      backgroundImage: {
        'circus-texture': "url('/textures/parchment.png')",
        'gradient-circus': 'linear-gradient(180deg, #0a0608 0%, #1a0f15 50%, #0a0608 100%)',
      },
      boxShadow: {
        'glow-gold': '0 0 20px rgba(201,168,76,0.3)',
        'glow-red': '0 0 20px rgba(139,26,26,0.4)',
        'glow-purple': '0 0 15px rgba(74,25,66,0.5)',
      },
      animation: {
        flicker: 'flicker 3s infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
          '75%': { opacity: '0.95' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
