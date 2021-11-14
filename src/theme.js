import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#b0f566",
    },
    secondary: {
      main: "#f78ae0",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
