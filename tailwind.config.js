/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        custom: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      },
    },
    screens: {
      mb: '480px',

      sm: '576px',

      md: '768px',

      lg: '992px',

      xl: '1200px',

      '2xl': '1536px',
    },
  },
  plugins: [],
};
