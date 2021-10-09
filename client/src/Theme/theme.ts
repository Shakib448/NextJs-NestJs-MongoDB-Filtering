import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Font family
const font = "'Poppins', sans-serif";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#0c2d48",
    },
  },
  typography: {
    fontFamily: font,
  },
});

export default theme;
