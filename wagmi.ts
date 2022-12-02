import { WagmiConfig } from 'wagmi'


import { alchemyRpcUrls } from 'wagmi'

// alchemyRpcUrls.mainnet
// alchemyRpcUrls.arbitrum
// alchemyRpcUrls.optimism

import { chain } from 'wagmi'

const defaultL2Chains = [chain.mainnet, chain.optimism, chain.arbitrumOne]


import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createClient } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'

const { chains, provider } = configureChains(
 [chain.mainnet, chain.optimism, chain.arbitrumOne],
 [alchemyProvider({ apiKey: 'z6Mck0HkCHdzCyl3zsCUy3jibAibNTZ7' })],
)

        apiKey: 'z6Mck0HkCHdzCyl3zsCUy3jibAibNTZ7',
        priority: 0,
      }),
      publicProvider({priority: 1}),
   ],
)

const { connectors } = getDefaultWallets({
  appName: 'Hyperdrive',
  chains, 'chain.optimism':'chain.arbitrum':'chain.mainnet'
})

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

export { chains }