import { createTheme } from '@mui/material/styles';
import { red, blueGrey } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: blueGrey[50]
    }
  },
});

export default theme;
