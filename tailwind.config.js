/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.{html,js,ejs}", "./components/**/*.{html,js,ejs}", "./Bon_travel/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      colors: {
        'bon-zwart': '#2F3C47',
        'bon-zwarter':'#192026',
        'bon-blau-helder': '#0C8FEC',
        'bon-blau-donker': '#0D5AE0',
        'bon-wit': '#FFFFFF',
        'bon-geel': '#FAC726',
        'bon-online':'#43d404',
      },
      
      fontFamily: {
        'bon-font': ['"Sawarabi Gothic", sans-serif'],
      },
  
      dropShadow: {
        'md': '0 2px 2px rgba(0, 0, 0, 0.06)',
        '3xl': '0px 0px 3px rgba(0, 0, 0, 0.45)',
      },
  
      boxShadow: {
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1)',
        '2xl':'0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'bottom': '0 5px 10px 0px rgb(0 0 0 / 0.4)',
        'top': '0 0 15px 10px rgb(0 0 0 / 0.3)',
      },

      animation: {
        'slide': '10s slide infinite linear;',
      },
  
      keyframes: {
        'slide': { 
          '0%': 'transform: translateX(0);', 
          '100%': 'transform: translateX(-100%);',
        },
      },

      'minHeight': {
        '130px':'130px',
      },

      'listStyleType': {
        'lowerAlpha':'lower-alpha',
      },

    },
  },

  plugins: [],
}

