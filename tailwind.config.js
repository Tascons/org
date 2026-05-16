/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Escala de Cafés Premium
        cafe: {
          // Café Oscuro Premium - Espresso/Cacao Profundo
          oscuro: {
            900: '#0d0805',
            800: '#1a0f0d',
            700: '#261614',
            600: '#2d1b18',
          },
          // Café Claro/Medio - Latte/Caramelo Suave
          medio: {
            500: '#8c6253',
            400: '#9d7564',
            300: '#b58973',
            200: '#c9a896',
          },
          // Café Crema/Acento - Capuchino/Crema
          claro: {
            100: '#f5ebe6',
            50: '#faf7f4',
          },
          // Acentos complementarios
          acento: '#e6ccb2',
          contraste: '#f5ebe6',
        },
      },
      spacing: {
        // Espaciado amplio - breathe-room
        breathe: '2rem',
        'breathe-lg': '3rem',
        'breathe-xl': '4rem',
      },
      borderRadius: {
        // Esquinas suavizadas
        smooth: '16px',
        'smooth-lg': '20px',
        'smooth-xl': '24px',
        'smooth-2xl': '32px',
      },
      backdropBlur: {
        // Efectos de desenfoque de fondo
        subtle: '4px',
        soft: '8px',
        medium: '12px',
        strong: '16px',
      },
      transitionDuration: {
        // Transiciones fluidas
        subtle: '200ms',
        smooth: '300ms',
        elegant: '400ms',
        gentle: '500ms',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        elegant: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      boxShadow: {
        // Sombras sofisticadas
        'soft': '0 2px 8px rgba(26, 15, 13, 0.1)',
        'medium': '0 4px 16px rgba(26, 15, 13, 0.15)',
        'elevated': '0 8px 24px rgba(26, 15, 13, 0.2)',
        'premium': '0 12px 32px rgba(26, 15, 13, 0.25)',
      },
      fontFamily: {
        // Tipografías premium
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        // Escala tipográfica sofisticada
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      opacity: {
        // Niveles de opacidad sutiles
        light: '0.3',
        medium: '0.5',
        strong: '0.7',
      },
    },
  },
  plugins: [
    require('tailwindcss/plugin')(({ addUtilities, theme }) => {
      const newUtilities = {
        // Estilos de vidrio (glass-morphism)
        '.glass': {
          '@apply bg-cafe-oscuro-900/40 backdrop-blur-medium border border-cafe-medio-400/20 rounded-smooth-lg': {},
        },
        '.glass-lg': {
          '@apply bg-cafe-oscuro-900/50 backdrop-blur-medium border border-cafe-medio-400/30 rounded-smooth-xl': {},
        },
        // Estados de hover fluidos
        '.hover-lift': {
          '@apply transition-all duration-elegant ease-smooth hover:shadow-elevated hover:-translate-y-1': {},
        },
        '.hover-glow': {
          '@apply transition-all duration-elegant ease-smooth hover:shadow-premium hover:text-cafe-claro-100': {},
        },
        // Efectos de enfoque
        '.focus-elegant': {
          '@apply focus:outline-none focus:ring-2 focus:ring-cafe-acento focus:ring-offset-2 focus:ring-offset-cafe-oscuro-900 transition-all duration-smooth': {},
        },
        // Fondos degradados
        '.gradient-cafe': {
          'background': 'linear-gradient(135deg, #1a0f0d 0%, #261614 50%, #2d1b18 100%)',
        },
        '.gradient-cafe-light': {
          'background': 'linear-gradient(135deg, #8c6253 0%, #b58973 100%)',
        },
        // Estados deshabilitados
        '.disabled-state': {
          '@apply opacity-50 cursor-not-allowed pointer-events-none': {},
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
