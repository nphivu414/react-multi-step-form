import React from 'react';
import { Paper, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import Header from '../Header';
import Footer from '../Footer';

import { theme } from './styles';

export default function MaterialLayout(props) {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div>
        <Paper
          sx={{
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            padding: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
              marginTop: theme.spacing(6),
              marginBottom: theme.spacing(6),
              padding: theme.spacing(3),
            },
          }}
        >
          {children}
        </Paper>
      </div>
      <Footer />
    </ThemeProvider>
  );
}
