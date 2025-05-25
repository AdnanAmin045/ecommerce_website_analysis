/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EEF4',
          100: '#CCDDE9',
          200: '#99BBD3',
          300: '#6699BE',
          400: '#3377A8',
          500: '#0F4C81', // Main primary color
          600: '#0C3D67',
          700: '#092E4D',
          800: '#061E34',
          900: '#030F1A',
        },
        secondary: {
          50: '#EAF5EF',
          100: '#D5EBDF',
          200: '#ABD7BF',
          300: '#80C39F',
          400: '#56AF7F',
          500: '#2E8B57', // Main secondary color
          600: '#256F46',
          700: '#1C5334',
          800: '#123823',
          900: '#091C11',
        },
        accent: {
          50: '#FFEFE9',
          100: '#FFDFD3',
          200: '#FFBFA7',
          300: '#FF9F7B',
          400: '#FF8F63',
          500: '#FF7F50', // Main accent color
          600: '#CC6640',
          700: '#994C30',
          800: '#663320',
          900: '#331910',
        },
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: [
          'Inter', 
          'system-ui', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI',
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'sans-serif'
        ],
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.08)',
        dropdown: '0 4px 12px rgba(0, 0, 0, 0.1)',
        modal: '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

