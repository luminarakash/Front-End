// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["*"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
//   fintFamily:{
//     Whitney:["Whitney"],
//     Ginto:[Ginto],
//     ggSans:[ggSans],
//   }, 
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"], // Make sure to include the correct paths to your files, e.g., "./src/**/*.{html,js}"
  theme: {
    extend: {
      fontFamily: {
        Whitney: ["Whitney", "sans-serif"],
        Ginto: ["Ginto", "sans-serif"], // Replace with a valid font or ensure it's imported
        ggSans: ["ggSans", "sans-serif"], // Replace with a valid font or ensure it's imported
      },
    },
  },
  plugins: [],
};
