/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { cusdarkBlue: "rgb(1 12 53)" },
      backgroundImage: {
        headerImg: "url('/src/assets/images/bgNetline.png')",
        bottomImg: "url('/src/assets/images/bg_Netline2.png')",
        logoNet: "url('/src/assets/images/Logo-Netline-Telecom-Site.png')",
        family: "url('/src/assets/images/family.jpeg')",
        velocity: "url('/src/assets/images/speed.jpeg')",
        world: "url('/src/assets/images/world.jpeg')",
      },
      fontFamily: { josefin: ["Josefin Sans", "sans-serif"] },
    },
  },
  plugins: [],
});
