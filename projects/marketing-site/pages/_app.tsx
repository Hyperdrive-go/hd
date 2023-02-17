import '../styles/globals.css'

import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  const gtmId = process.env.GA_MEASUREMENT_ID

  useEffect(() => {
    if (gtmId) TagManager.initialize({ gtmId })
  }, [gtmId])

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
