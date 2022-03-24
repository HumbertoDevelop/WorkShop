module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('https://images.pexels.com/photos/6281877/pexels-photo-6281877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000')",
        "hero-especialidades": "url('https://images.pexels.com/photos/7504837/pexels-photo-7504837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000')",
        "hero-cursos": "url('https://images.pexels.com/photos/5905703/pexels-photo-5905703.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000')",
        "hero-prefesores": "url('https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2000')"
      },
    },
    screens: {
      'smx2': '320px',
      // => @media (min-width: 320px) { ... }
      
      'smx1': '425px',
      // => @media (min-width: 425px) { ... }
      
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
