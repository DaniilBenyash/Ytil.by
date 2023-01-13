import { Montserrat } from '@next/font/google'
import '../styles/globals.scss'
import '../styles/header.scss'
import type { AppProps } from 'next/app'

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