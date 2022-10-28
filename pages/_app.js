import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import theme from '../theme/Theme'


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )

  
  
}

export default MyApp
