'use client'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import type { ReactNode } from 'react';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#ffefe0',
      main: '#ffd8b2',
      dark: '#ffc489',
      contrastText: '#3a2a1a',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffbf7f',
          color: '#111',
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingTop: '8px',
          paddingBottom: '8px',
          '&:hover': {
            backgroundColor: '#ffc993',
          },
        },
      },
    },
  },
});

const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
