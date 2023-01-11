import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
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

const labelWallet:any = <div className="flex"><WalletIcon className="block h-5 w-5 mr-1" aria-hidden="true" /><span>Connect Wallet</span> </div>;

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
        <Disclosure as="nav" className="bg-neutral-900">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                <div className="relative flex h-20 items-center justify-between">
                  <div className="flex items-center px-2 lg:px-0">
                    <div className="flex-shrink-0">
                      <Image
                        className="hidden h-8 w-auto lg:block"
                        src={logo}
                        alt="Your Company"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 justify-center px-2 lg:ml-6">
                    <div className="w-full max-w-lg lg:max-w-xs">
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
                  <div className="flex lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="hidden lg:ml-4 lg:block">
                    <div className="flex items-center">
                        <div className="hidden lg:mr-6 lg:ml-6 lg:block">
                          <div className="flex space-x-4">
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
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                  >
                    Dashboard
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Team
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Projects
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Calendar
                  </Disclosure.Button>
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <ConnectButton/>
                  </div>
                  <div className="flex items-center pt-4 px-5">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-10 w-10 rounded-full"
                        height={36}
                        width={36}
                        src=""
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-white">
                        Tom Cook
                      </div>
                      <div className="text-sm font-medium text-gray-400">
                        tom@example.com
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      Your Profile
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      Settings
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      Sign out
                    </Disclosure.Button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default DarkNavbar;
