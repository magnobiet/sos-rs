import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        rs: {
          green: '#00ab4e',
          red: '#ee302f',
          yellow: '#ffcb04',
        },
      },
    },
  },
  plugins: [],
};
export default config;
