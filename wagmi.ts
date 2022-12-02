import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'

const { chains, provider } = configureChains(
 [chain.mainnet, chain.optimism, chain.arbitrum],
 [alchemyProvider({ apiKey: 'RbvJ2z-poT2yB-cpZ9xUMaauzUeTQVf5' })],
)


const { webSocketProvider } = configureChains(
  [chain.mainnet, chain.optimism, chain.arbitrum],
    [
      alchemyProvider({
        apiKey: 'RbvJ2z-poT2yB-cpZ9xUMaauzUeTQVf5',
        priority: 0,
      }),
      publicProvider({priority: 1}),
   ],
)

const { connectors } = getDefaultWallets({
  appName: 'Hyperdrive',
  chains,
})

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

export { chains }