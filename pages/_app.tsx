import { Montserrat } from '@next/font/google'
import type { AppProps } from 'next/app'  
import '../styles/globals.scss'
import '../styles/header.scss'
import '../styles/main.scss'
import '../styles/flag.scss'
import '../styles/glow.scss'


const monserrat = Montserrat({subsets: ['latin'], display: 'swap'})

const App = ({ Component, pageProps }: AppProps) => {
  
  return (
    <>
      <main className={monserrat.className}>
        <Component {...pageProps} />
      </main>
    </>
    
    )
}

export default App