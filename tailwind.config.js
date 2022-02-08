module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-100px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
        },
        'fade-in-left': {
          '0%': {
              opacity: '0',
              transform: 'translatex(300px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
        },
        'fade-in-right': {
          '0%': {
              opacity: '0',
              transform: 'translatex(-300px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
        },
        'fade-in-up': {
          '0%': {
              opacity: '0',
              transform: 'translateY(300px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
        },
        'fill-in-50': {
          '0%':   { width: '5%', backgroundColor: '#8A2BE2'},
          '100%': { width: '50%', backgroundColor: '#4B0082'}
        },
        'fill-in-60': {
          '0%':   { width: '5%', backgroundColor: '#8A2BE2'},
          '100%': { width: '60%', backgroundColor: '#4B0082'}
        },
        'fill-in-70': {
          '0%':   { width: '5%', backgroundColor: '#8A2BE2'},
          '100%': { width: '70%', backgroundColor: '#4B0082'}
        },
        'fill-in-80': {
          '0%':   { width: '5%', backgroundColor: '#8A2BE2'},
          '100%': { width: '80%', backgroundColor: '#4B0082'}
        },
        'fill-in-90': {
          '0%':   { width: '5%', backgroundColor: '#8A2BE2'},
          '100%': { width: '90%', backgroundColor: '#4B0082'}
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 1s ease-out',
        'fade-in-left': 'fade-in-left 1s ease-out',
        'fade-in-left-1': 'fade-in-left 1.3s ease-out',
        'fade-in-left-2': 'fade-in-left 1.6s ease-out',
        'fade-in-left-3': 'fade-in-left 2s ease-out',
        'fade-in-right': 'fade-in-right 1s ease-out',
        'fade-in-right-1': 'fade-in-right 1.3s ease-out',
        'fade-in-right-2': 'fade-in-right 1.6s ease-out',
        'fade-in-up': 'fade-in-up 1s ease-out',
        'fade-in-up-1': 'fade-in-up 1.5s ease-out',
        'fade-in-up-2': 'fade-in-up 2s ease-out',
        'fill-50': 'fill-in-50 2s',
        'fill-60': 'fill-in-60 2s',
        'fill-70': 'fill-in-70 2s',
        'fill-80': 'fill-in-80 2s',
        'fill-90': 'fill-in-90 2s',
      },
      backgroundImage: theme => ({
        "preloader": "url('/Preloader.svg')",
        "macblack": "url('/macblack.jpg')",
        "macblack-m": "url('/macblack-m.jpg')",
      }),
      colors:{
        'Primary': '#4B0082',
        'Primary-hover': '#663399',
        'nav': '#404053'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
}
