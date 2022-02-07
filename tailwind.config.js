module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
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
        'fade-out-right': {
          '0%': {
              opacity: '1',
              transform: 'translateX(0)'
          },
          '100%': {
              opacity: '0',
              transform: 'translateX(300px)'
          },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
        'spin-slow': 'spin 1s',
        'fade-in-down': 'fade-in-down 1s ease-out',
        'fade-in-left': 'fade-in-left 1s ease-out',
        'fade-in-right': 'fade-in-right 1s ease-out',
        'fade-in-up': 'fade-in-up 1s ease-out',
        'fade-out-right': 'fade-out-right 1s ease-out',
      },
      backgroundImage: theme => ({
        'profile-sec': "url('/portfoliobg.png')",
        "preloader": "url('/Preloader.svg')",
        "darkbg": "url('/blackbg.jpg')",
        "macblack": "url('/macblack.jpg')",
        "macblack-m": "url('/macblack-m.jpg')",
        "keyboardblack": "url('/keybordblack.jpg')",
        "wave": "url('/aboutWave.jpeg')",
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
