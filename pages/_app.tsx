import { Montserrat } from '@next/font/google'
import type { AppProps } from 'next/app'
import Head from 'next/head'  
import '../styles/_variables.scss'
import '../styles/globals.scss'
import '../styles/home.scss'
import '../styles/header.scss'
import '../styles/main.scss'
import '../styles/flag.scss'
import '../styles/glow.scss'
import '../styles/about.scss'
import '../styles/card_about.scss'
import '../styles/title.scss'
import '../styles/price.scss'
import '../styles/galery.scss'
import '../styles/card_image.scss'
import '../styles/indicator.scss'
import '../styles/contacts.scss'
import '../styles/button.scss'
import '../styles/button_scroll.scss'
import '../styles/card_album.scss'
import '../styles/card_video.scss'

const monserrat = Montserrat({subsets: ['latin'], display: 'swap'})

const App = ({ Component, pageProps }: AppProps) => {
  
  return (
    <>
      <Head>
        <title>Ytil.by</title>
        <link rel="shortcut icon" href="/header-image/logo.png" type="image/png"></link>
      </Head>
      <main className={monserrat.className}>
        <Component {...pageProps} />
      </main>
    </>
    
    )
}

export default App