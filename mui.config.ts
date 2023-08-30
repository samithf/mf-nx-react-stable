import { createTheme } from '@mui/material';

const defaultTheme = createTheme();

export const theme = createTheme(defaultTheme, {
  components: {
    // Name of the component
    MuiList: {
      styleOverrides: {
        root: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});
