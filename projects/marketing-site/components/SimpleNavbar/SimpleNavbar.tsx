import Image from "next/image";

import { Dialog, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/20/solid";

import logoSVG from "@/images/hd_logo_small.svg";
import { useState, Fragment } from "react";
import SwitchLanguage from "./SwitchLanguage";
import ThemeToggler from "./ThemeToggler";
import clsx from "clsx";
import Link from "next/link";
import NavigationMain from "@/libs/interface/navigation";
import MobileNavbar from "./MobileNavbar";
import { useTranslation } from 'next-i18next'

const navigation = [
  { name: "vision", href: "/" },
  { name: "team", href: "/team" },
  { name: "funding", href: "/funding" },
];

const SimpleNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="px-6 pt-6 lg:px-8">
      <div>
        <nav
          className="flex h-9 items-center justify-between"
          aria-label="Global"
        >
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Hyperdrive</span>
              <Image
                className="h-8"
                src={logoSVG}
                height={32}
                width={32}
                alt="Hyperdrive logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                className="h-6 w-6 dark:text-white text-black"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="font-semibold dark:text-gray-100 text-black 
                dark:hover:text-gray-100 hover:text-gray-500"
                >
                  <span>
                    {
                      t("marketing:menu.0." + item.name as keyof NavigationMain )
                    }
                  </span>
                </Link>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-4 flex-shrink-0 px-3 py-1.5">
              <div>
                <Menu.Button
                  className="flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 
                focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <UserCircleIcon className="h-8 w-8" aria-hidden="true" />
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
                <Menu.Items
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md dark:bg-slate-800
                bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <SwitchLanguage/>
                  <ThemeToggler/>
                  <hr className="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={clsx(
                          active
                            ? "dark:bg-slate-500 bg-gray-100 w-full cursor-pointer"
                            : "",
                          "px-4 py-2 text-sm dark:text-white text-gray-700 inline-flex"
                        )}
                      >
                        <ArrowRightOnRectangleIcon
                          className="h-6 w-6 mr-2"
                          aria-hidden="true"
                        />
                        {t("marketing:menu.0.sign_out")}
                      </div>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto dark:bg-black bg-white px-6 py-6 lg:hidden">
            <div className="flex h-9 items-center justify-between">
              <div className="flex">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <Image
                    className="h-8"
                    src={logoSVG}
                    height={32}
                    width={32}
                    alt=""
                  />
                </a>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 dark:text-gray-100 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <MobileNavbar/>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  );
};

export default SimpleNavbar;
