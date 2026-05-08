/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00247D', // Azul Corporativo Sirga (del logo)
          light: '#0036B5',
          dark: '#001A5A',
        },
        secondary: {
          DEFAULT: '#1E293B', // Azul Marino Profesional
          light: '#334155',
          dark: '#0F172A',
        },
        accent: {
          DEFAULT: '#F58220', // Naranja para botones y llamadas (según petición)
          hover: '#D16912',
        },
        base: {
          cream: '#FAFAFA', // Fondo limpio
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        heading: ['"Outfit"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
