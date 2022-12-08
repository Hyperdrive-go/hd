import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { GlobeAltIcon } from '@heroicons/react/20/solid'

import Image from "next/image"


export default function SwitchLanguage() {
  return (
    <Menu as="div" className="relative inline-block text-left mr-2">
      <div>
        <Menu.Button className="inline-flex w-full justify-center bg-dark px-4 py-2 text-sm font-medium 
        text-white shadow-sm hover:bg-gray-800">
            <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
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
        <Menu.Items className="absolute z-10 mt-2 w-32 rounded-md bg-slate-900 shadow-lg ring-1
         ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
                <a href="#" className="flex items-center py-2 px-4 text-sm font-medium text-white
                 shadow-sm ">
                  English
                </a>
            </Menu.Item>
            <Menu.Item>
                <a href="#" className="flex items-center py-2 px-4 text-sm font-medium text-white
                 shadow-sm ">
                  Thai
                </a>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    );
}