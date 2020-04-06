import Typography from "typography";

const googleFonts = [
  {
    name: "Poppins",
    styles: ["400", "400i", "500", "500i", "600", "600i", "700", "700i"],
  },
];

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Bebas Neue Bold", "sans-serif"],
  bodyFontFamily: ["Poppins", "sans-serif"],
  googleFonts,
  includeNormalize: false,
});

export default typography;
