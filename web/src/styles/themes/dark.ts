import light from "./light";

const dark: typeof light = {
  ...light,
  colors: {
    ...light.colors,
    grey: "#d4d6e0",
    // lightGrey: "#343233",
    lightGrey: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
    darkGrey: "#f3f3f3",
    // background: '#272727',
    background: "linear-gradient(to right, #350202, #830606)",
  },
};

export default dark;
