/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      'social-pink': '#F62E8E',
      'social-blue': '#2E8AF6',
      'dark-black': '#181A1C',
      'light-white': '#ECEBED',
      'black': '#000000',
      'white': '#FFFFFF',
      'gray': '#323436',
      'light-gray': '#727477',
      'dark-gray': '#323436',
      'purple': '#AC1AF0',
    },
    fontFamily: {
      custom: ['HK Grotesk', 'sans-serif']
    },
    extend: {
      zIndex: {
        '1': '1',
        '2': '2',
      },
      borderWidth: {
        '1': '1px'
      },
      width: {
        '1/10': '10%',
        '5/8' : '85%',
        '300': '650px'
      },
      lineHeight: {
        '4.5': '18px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

// bg-gradient-to-r from-social-pink to-purple -- PARA EL DEGRADADO