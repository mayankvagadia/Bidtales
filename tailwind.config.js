/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      heading: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF',  // Royal Blue
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF', 
          900: '#1E3A8A',
        },
        accent: {
          DEFAULT: '#F97316',  // Vibrant Orange
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        neutral: {
          DEFAULT: '#FFFFFF',  // White
          50: '#F9FAFB',
          100: '#F3F4F6',  // Light Grey
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',  // Charcoal Grey (dark)
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
}
