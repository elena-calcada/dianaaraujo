import { ThemeProvider } from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import GlobalStyles from '../styles/global'
import defaultTheme from '../styles/themes/default'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
      <GlobalStyles />
      <Header />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
