import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00DBD0",
    },
    background: {
      default: '#fff'
    }
  },
  typography: {
    fontFamily: "'Libre Baskerville', serif"
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
