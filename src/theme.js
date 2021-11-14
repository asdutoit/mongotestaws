import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#ea4336",
    },
    secondary: {
      main: "#3572F7",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
