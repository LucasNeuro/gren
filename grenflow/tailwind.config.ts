import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#2E8B57',
          blue: '#0066CC',
        },
        secondary: {
          green: '#4CAF50',
          blue: '#2196F3',
        },
        status: {
          success: '#4CAF50',
          warning: '#FFC107',
          error: '#F44336',
          info: '#2196F3',
        },
        neutral: {
          textPrimary: '#424242',
          textSecondary: '#757575',
          bgPrimary: '#FFFFFF',
          bgSecondary: '#F5F5F5',
          bgDark: '#212121',
          border: '#E0E0E0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2E8B57 0%, #0066CC 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #4CAF50 0%, #2196F3 100%)',
      },
    },
  },
  plugins: [],
}

export default config
