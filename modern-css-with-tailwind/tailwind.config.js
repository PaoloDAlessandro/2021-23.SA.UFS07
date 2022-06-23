/***
 * Excerpted from "Modern CSS with Tailwind",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tailwind for more book information.
***/
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fade_in: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'},
        },
      },
      animation: {
        'fade-in-1': 'fade_in 1000ms ease-in forwards',
        'fade-in-2': 'fade_in 1000ms ease-in forwards 200ms',
        'fade-in-3': 'fade_in 1000ms ease-in forwards 400ms',
        'fade-in-4': 'fade_in 1000ms ease-in forwards 600ms',
        'fade-in-arrow': 'fade_in 1600ms ease-in forwards',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
