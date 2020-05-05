import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#184A45',
    },
    secondary: {
      main: '#FC766A',
    },
    tertiary: {
      main: '#B0B8B4',
    },
    background: {
      default: '#FCFBF9',
      paper: '#fff',
    },
  },
});

export default theme;
