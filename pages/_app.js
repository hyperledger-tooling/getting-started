import '../styles/globals.css'
import Navbar from '../components/nav/navbar';
import Footer from '../components/footer/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </>
  )

  
  
}

export default MyApp
