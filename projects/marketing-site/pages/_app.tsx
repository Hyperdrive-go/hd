import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { appWithTranslation } from 'next-i18next'
import Script from 'next/script'

function App({ Component, pageProps }: AppProps) {
  const gtmId = process.env.GA_MEASUREMENT_ID

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gtmId}');
        `}
      </Script>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
