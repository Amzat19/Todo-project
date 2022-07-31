import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import ActionsProvider from '../lib/Context'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <ActionsProvider>
      <Component {...pageProps} />
    </ActionsProvider>
  )  
}

export default MyApp
