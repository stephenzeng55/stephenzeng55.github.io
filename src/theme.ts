import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
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
        fontFamily: '"Merriweather", "Sawarabi Mincho", "Noto Sans JP", "Noto Sans HK", "Noto Sans TC", "Noto Sans SC", sans-serif'
      }
  });

export default theme;