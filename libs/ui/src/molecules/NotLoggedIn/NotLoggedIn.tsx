import '@rainbow-me/rainbowkit/styles.css';

import {
    ConnectButton,
    getDefaultWallets,
    RainbowKitProvider,
    darkTheme
  } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { optimism } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
  
  const { chains, provider } = configureChains(
    [optimism],
    [
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
  });
  
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  })
const NotLoggedIn = () => {

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
        <div className="h-96 mx-auto bg-gray-900 py-32">
            <div className="mx-auto bg-gray-900 text-center space-y-4">
                <h1 className="text-white  text-2xl md:text-3xl lg:text-4xl font-bold">
                    Connect your wallet
                </h1>
                <p className="font-light text-white">Please connect your wallet to view this page</p>
                <div className="py-8 justify-center flex">
                    <ConnectButton
                        label="Connect wallet"
                    />
                </div>
            </div>
        </div>
        </RainbowKitProvider>
    </WagmiConfig>
    )
}

export default NotLoggedIn;