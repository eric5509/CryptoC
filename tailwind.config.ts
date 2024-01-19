import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor:{
        'customBlue': '#04b8fb',
        'customGreen': '#3dfa5a',
        'customRose': '#3dfa5a',
        'customGray': '#8494a4',
        'customBlack': '#222a40',
        'customCTA1': '#0193f9',
        'customCTA2': '#04c0fb',
      },
      colors:{
        'customBlue': '#04b8fb',
        'customGreen': '#3dfa5a',
        'customRose': '#3dfa5a',
        'customBlack': '#8494a4',
        'customGray': '222a40',
        'customCTA1': '#0193f9',
        'customCTA2': '#04c0fb',
      },
     fontSize:{
      '10': '10px',
      '11': '11px',
      '13': '13px',
      '15': '15px',
     },
     height: {
      '13': '53px'
     }
    },
  },
  plugins: [],
}
export default config
