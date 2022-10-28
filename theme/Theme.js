import React from 'react'
import { createTheme } from '@mui/material/styles';
import { green, lightBlue, teal , blueGrey, grey } from '@mui/material/colors';

const Theme = createTheme({
  palette: {
    primary: {
      main: green[500]
    },
    secondary: {
      main: lightBlue[500]
    },
    tertiary: {
      main: teal[500]
    },
    text: {
      primary:grey["A100"]
    },
  },
  // spacing: {

  // },
  shape: {
    borderRadius:20
  },
  shadows : {
    0: "none",
    1: "0px 343px 137px rgba(0, 0, 0, 0.01), 0px 193px 116px rgba(0, 0, 0, 0.05), 0px 86px 86px rgba(0, 0, 0, 0.09), 0px 21px 47px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);",
  },
  typography: {
    h4: {
      fontWeight: 200
    }
  },
});

export default Theme