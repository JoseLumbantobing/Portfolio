import '@component/styles/globals.css'
import '../component/header/header.css'
import '../component/home/home.css'
import '../component/about/about.css'
import '../component/skills/skills.css'
import '../component/portfolio/portfolio.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
