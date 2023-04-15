import '@component/styles/globals.css'
import '../component/header/header.css'
import '../component/home/home.css'
import '../component/about/about.css'
import '../component/skills/skills.css'
import '../component/portfolio/portfolio.css'
import '../component/qualification/qualification.css'
import '../component/contact/contact.css'
import '../component/footer/footer.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
