import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon, ShoppingCartIcon } from "@heroicons/react/20/solid";

import { Bars3Icon, BellIcon, XMarkIcon, WalletIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";

const logo = require('../../assets/images/logo.png');

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

const labelWallet:any = <div className="flex"><WalletIcon className="block h-4 w-4 md:h-5 md:w-5 mr-1" aria-hidden="true" />
                          <span className="md:mt-1">Connect Wallet</span> </div>;

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

const DarkNavbar = () => {
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
                      <Image
                        className="h-6 md:h-8 w-auto"
                        src={logo}
                        alt="Your Company"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 justify-center px-2 lg:ml-6 hidden md:block">
                    <div className="w-full max-w-lg sm:max-w-xs">
                      <label htmlFor="search" className="sr-only">
                        Search name, id
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <MagnifyingGlassIcon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full rounded-full border border-white bg-transparent
                          py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 focus:border-white 
                          sm:text-sm"
                          placeholder="Search name, id ..."
                          type="search"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex md:hidden space-x-3">
                    {/* Mobile menu button */}
                    <MagnifyingGlassIcon
                        className="h-6 w-6 text-gray-300 "
                        aria-hidden="true"
                      />
                    <ShoppingCartIcon
                        className="h-6 w-6 text-gray-300"
                        aria-hidden="true"
                      />
                    
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
                        <div className="md:mr-2 lg:ml-6">
                          <div className="flex">
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
                          </div>
                        </div>
                        
                      <ConnectButton
                        label={labelWallet}
                        showBalance={false}
                        accountStatus={{
                          smallScreen: 'avatar', 
                          largeScreen: 'full'
                        }}
                      />
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

export default DarkNavbar;
