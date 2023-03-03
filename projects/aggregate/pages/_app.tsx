import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'

import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import NextApp from 'next/app'
import { FC, useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { optimism, optimismGoerli } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

import type { AppContext, AppProps } from 'next/app'
const { chains, provider } = configureChains(
  [optimism, optimismGoerli],
  [publicProvider()],
)

const { connectors } = getDefaultWallets({
  appName: 'Hyperdrive NFT marketplace',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

function AppWrapper(props: AppProps) {
  return <App {...props} />
}

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const gtmId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  useEffect(() => {
    if (gtmId) TagManager.initialize({ gtmId })
  }, [gtmId])

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: '#DB3732',
          accentColorForeground: 'white',
          borderRadius: 'large',
          fontStack: 'system',
        })}
        showRecentTransactions={true}
      >
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

// implement AppWrapper to fix bug "wagmi client" and "hydration" in nextjs13
AppWrapper.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await NextApp.getInitialProps(appContext)
  return { ...appProps }
}

export default AppWrapper
