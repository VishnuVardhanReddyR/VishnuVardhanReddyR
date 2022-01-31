module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
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
        'bgColor': '#100C08'
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}
