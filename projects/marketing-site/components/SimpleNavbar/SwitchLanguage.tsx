import { GlobeAltIcon, ChevronRightIcon, CheckIcon } from '@heroicons/react/20/solid'
import clsx from "clsx";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";


export default function SwitchLanguage() {
  return (
    <Menu.Item>
      {({ active }) => (
      <div
        className={clsx(
          active ? "dark:bg-slate-500 bg-gray-100 w-full cursor-pointer" : "",
          "block px-4 py-2 text-sm dark:text-white text-gray-700 inline-flex"
        )}
      >
        <GlobeAltIcon className="h-6 w-6 mr-2" aria-hidden="true" />
        Language
        <Menu as="div" >
            <Menu.Button className="absolute right-0 mr-4 inline-flex">
              en <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 z-50 -mt-3 w-48 origin-top-right rounded-md 
              dark:bg-slate-800 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={clsx(
                        active ? "dark:bg-slate-500 bg-gray-100 w-48 cursor-pointer" : "",
                        "px-4 py-2 text-sm dark:text-white text-gray-700 inline-flex "
                      )}
                    >
                      English <CheckIcon className="h-5 w-5 absolute right-0 mr-4" aria-hidden="true" />
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={clsx(
                        active ? "dark:bg-slate-500 bg-gray-100 w-48 cursor-pointer" : "",
                        "px-4 py-2 text-sm dark:text-white text-gray-700"
                      )}
                    >
                      Vietnamese
                    </div>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
      </div>
      )}
      </Menu.Item>
  );
}