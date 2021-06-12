import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00DBD0",
    },
    secondary: {
      main: '#374b5c'
    },
    background: {
      default: '#fff'
    },
    text: {
      primary: '#374b5c'
    }
  },
  typography: {
    fontFamily: "'Libre Baskerville', serif",
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'capitalize',
      },
      contained: {
        boxShadow: 'none'
      }
    },
  }
});
