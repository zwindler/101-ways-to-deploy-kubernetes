/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'k8s-blue': '#326CE5',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
