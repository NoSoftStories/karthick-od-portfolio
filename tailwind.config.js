/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: '#050608',
          900: '#0a0d12',
          850: '#10151d',
          800: '#161c25',
          700: '#222b36',
        },
        signal: {
          cyan: '#2dd4bf',
          blue: '#60a5fa',
          amber: '#fbbf24',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(45, 212, 191, 0.16)',
        panel: '0 24px 70px rgba(0, 0, 0, 0.34)',
      },
      animation: {
        'fade-up': 'fadeUp 700ms ease both',
        'soft-pulse': 'softPulse 4s ease-in-out infinite',
        scan: 'scan 7s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        softPulse: {
          '0%, 100%': { opacity: '0.72' },
          '50%': { opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateX(-35%)' },
          '100%': { transform: 'translateX(135%)' },
        },
      },
    },
  },
  plugins: [],
};
