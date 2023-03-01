import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";

import { Bars3Icon, XMarkIcon, WalletIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import SearchCollections from "../SearchCollections/SearchCollections";
import CartMenu from "../CartMenu/CartMenu";

const logo = require('../../assets/images/logo.png');

import '@rainbow-me/rainbowkit/styles.css';
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { optimism, optimismGoerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import ConnectWallet from "../../components/ConnectWallet";

const labelWallet:any = <div className="flex"><WalletIcon className="block h-4 w-4 md:h-5 md:w-5 mr-1" aria-hidden="true" />
                          <span className="md:mt-1">Connect Wallet</span> </div>;


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

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Team",
    href: "/team",
  },
  {
    title: "Partners",
    href: "/partners",
  },
];

const Navbar = () => {
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
        <Disclosure as="nav" className="bg-topnavBgDark">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                <div className="relative flex h-20 items-center justify-between">
                  <div className="flex items-center px-2 lg:px-0">
                    <div className="flex-shrink-0">
                      <a href="/">
                        <Image
                          className="h-6 md:h-8 w-auto"
                          src={logo}
                          alt="Hyperdrive"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-1 justify-center px-2 lg:ml-6 hidden md:block">
                    <SearchCollections
                    isMobile={false}
                    />
                  </div>
                  <div className="md:hidden ml-auto flex gap-x-3">
                    {/* Mobile menu button */}
                    <SearchCollections
                      isMobile={true}
                    />
                    <ShoppingCartIcon
                        className="h-6 w-6 text-gray-300"
                        aria-hidden="true"
                      />
                    
                    <CartMenu/>
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md  text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="text-xs md:text-md lg:ml-4  hidden md:block">
                    <div className="flex items-center">
                        <div className="lg:ml-6 lg:px-6">
                          <div className="flex lg:space-x-4">
                            <a
                              href="#"
                              className="rounded-md bg-gray-900 px-3 py-2 text-sm font-bold text-red-500 hover:bg-gray-700 hover:text-white"
                            >
                              Explore
                            </a>
                            <a
                              href="#"
                              className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                            >
                              Stats
                            </a>
                            <CartMenu/>
                          </div>
                        </div>
                      <ConnectWallet/>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Navbar;