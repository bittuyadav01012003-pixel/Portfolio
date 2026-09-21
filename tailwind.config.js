/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#050816',
          surface: '#0a0f26',
          card: '#0f172a',
          elevated: '#131c38',
          border: 'rgba(255, 255, 255, 0.08)',
          hoverBorder: 'rgba(56, 189, 248, 0.3)',
        },
        accent: {
          blue: '#3b82f6',
          indigo: '#6366f1',
          cyan: '#06b6d4',
          purple: '#8b5cf6',
          emerald: '#10b981',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(59, 130, 246, 0.15)',
        'glow-md': '0 0 25px -5px rgba(99, 102, 241, 0.2)',
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.25)',
      },
    },
  },
  plugins: [],
}
