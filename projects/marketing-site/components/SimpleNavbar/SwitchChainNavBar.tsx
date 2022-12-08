import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

import Image from "next/image"

import OptimismLogo from "@/images/brand/optimism.svg"; 
import ArbitrumLogo from "@/images/brand/arbitrum.svg"; 


export default function SwitchChainNavBar() {
  return (
    <Menu as="div" className="relative inline-block text-left mr-2">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-dark px-4 py-2 text-sm font-medium 
        text-white shadow-sm hover:bg-gray-800">
          <Image src={OptimismLogo} 
                 className="mx-auto w-6 h-6 mr-2"
                 alt=""
          />
          Optimism
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-2 w-full rounded-md bg-slate-900 shadow-lg ring-1
         ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
                <a href="#" className="flex items-center py-2 px-4 text-sm font-medium text-white
                 shadow-sm mr-5 -ml-3 ">
                  <Image src={ArbitrumLogo} 
                    className="mx-auto"
                    alt=""
                  />
                  Arbitrum
                </a>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}