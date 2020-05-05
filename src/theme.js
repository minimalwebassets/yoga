import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#072A55',
    },
    secondary: {
      main: '#E8715B',
    },
    tertiary: {
      main: '#E2E0CB',
    },
    background: {
      default: '#FCFBF9',
      paper: '#fff',
    },
  },
});

export default theme;
