import type { AppContext, AppProps } from 'next/app'
import { default as NextApp } from 'next/app'
import { FC } from 'react'

import { WagmiConfig, createClient, configureChains } from 'wagmi'
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import { optimism, optimismGoerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public';

import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';

const { chains, provider } = configureChains(
  [optimism, optimismGoerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Hyperdrive NFT marketplace',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})



function AppWrapper(props: AppProps) {
  return (
      <App {...props} />
  )
}

const App: FC<AppProps> = ({
    Component,
    pageProps
  }) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme(
        {
          accentColor: '#DB3732',
          accentColorForeground: 'white',
          borderRadius: 'large',
          fontStack: 'system'
        }
      )} showRecentTransactions={true}>
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
