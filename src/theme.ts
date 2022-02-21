import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
          main: `#16b3b3`,
          contrastText: `#003636`
        },
        secondary: {
          main: `#95b2b8`,
          contrastText: `#003636`
        },
        text: {
          primary: `#003636`,
          secondary: `#375c85`
        }
      },
      typography: {
        fontFamily: '"Merriweather", sans-serif'
      }
  });

export default theme;