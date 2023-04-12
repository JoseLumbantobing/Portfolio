import '@component/styles/globals.css'
import '../component/header/header.css'
import '../component/home/home.css'
import '../component/about/about.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
