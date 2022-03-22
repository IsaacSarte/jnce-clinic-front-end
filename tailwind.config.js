module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'custom' : {'max': '639px'},

        'sm': {'min': '640px', 'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }

        'md': {'min': '768px'},
        // => @media (min-width: 768px) { ... }

        'lg': {'min': '1024px'},
        // => @media (min-width: 1024px) { ... }

        'xl': {'min': '1280px', 'max': '1440px'},
        // => @media (min-width: 1280px and max-width: 1440px) { ... }
  
        '2xl': {'min': '1441px'},
        // => @media (min-width: 1441px) { ... }
  
      }

    },
  },
  plugins: [],
}
