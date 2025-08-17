// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    // ✅ GARANTA QUE ESTES CAMINHOS ESTEJAM CORRETOS E COMPLETOS
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Essencial para o App Router
  ],
  theme: {
    extend: {
      // ... suas configurações
    },
  },
  plugins: [],
};
