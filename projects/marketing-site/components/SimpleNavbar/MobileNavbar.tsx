import { Switch, Menu, Transition } from "@headlessui/react";
import {
  MoonIcon,
  ArrowRightOnRectangleIcon,
  GlobeAltIcon,
  ChevronRightIcon,
  CheckIcon,
  UserGroupIcon,
  PresentationChartBarIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";
import React, { useState, Fragment } from "react";
import commonLang from "@/lang/common.json";
import { useRouter } from "next/router";
import NavigationMain from "@/libs/interface/navigation";
import Link from "next/link";

const navigation = [
  { name: "vision", href: "/", icon: BriefcaseIcon },
  { name: "team", href: "/team", icon: UserGroupIcon },
  { name: "funding", href: "/funding", icon: PresentationChartBarIcon },
];

export default function MobileNavbar() {
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(theme === "dark" ? true : false);

  const { locale, locales, asPath } = useRouter();

  return (
    <div className="space-y-2 py-6 text-sm">
      {navigation.map((item) => (
        <div key={item.name}>
          <Link
            href={item.href}
            className="-mx-3 rounded-lg py-1 px-3 font-semibold
                    leading-7 dark:text-gray-100 text-black inline-flex"
          >
            <item.icon className="h-6 w-6 mr-2" />
            {
              commonLang.menu.filter((j) => j.locale === locale)[0][
                item.name as keyof NavigationMain
              ]
            }
          </Link>
        </div>
      ))}
      <hr className="h-0 my-2 border border-solid border-t-0 dark:border-white border-gray-700 opacity-30" />
      {/* Switch Language */}
      <div className="py-2 dark:text-white text-black inline-flex font-semibold">
        <GlobeAltIcon className="h-6 w-6 mr-2" aria-hidden="true" />
        {commonLang.menu.filter((j) => j.locale === locale)[0]["language"]}
        <Menu as="div">
          <Menu.Button className="absolute right-0 mr-4 inline-flex">
            {locale?.substring(0, 2)}{" "}
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
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
            <Menu.Items
              className="absolute left-0 z-50 w-full origin-top-right rounded-md 
                dark:bg-slate-800 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
                inset-0 overflow-y-auto"
            >
              {locales?.map((l, i) => {
                return (
                  <Menu.Item key={l}>
                    {({ close }) => (
                      <div className="px-4 py-2 dark:text-white text-gray-700">
                        <Link
                          href={asPath}
                          locale={l}
                          className="inline-flex w-full"
                          onClick={close}
                        >
                          {
                            commonLang.language.filter(
                              (j) => j.locale === locale
                            )[i]["name"]
                          }
                          {l === locale ? (
                            <CheckIcon
                              className="h-5 w-5 absolute right-0 mr-4"
                              aria-hidden="true"
                            />
                          ) : (
                            ""
                          )}
                        </Link>
                      </div>
                    )}
                  </Menu.Item>
                );
              })}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      {/* Theme Toggler */}
      <div className="py-2 dark:text-gray-100 text-black font-semibold ">
        <div className="inline-flex">
          <MoonIcon className="h-6 w-6 mr-2" aria-hidden="true" />
          {commonLang.menu.filter((j) => j.locale === locale)[0]["dark_mode"]}
          <div className="absolute right-0 mr-4 inline-flex">
            <Switch
              checked={enabled}
              onChange={() => {
                setEnabled(!enabled);
                setTheme(theme === "light" ? "dark" : "light");
              }}
              className={`${
                enabled ? "bg-blue-600" : "bg-gray-200"
              }  inline-flex h-6 w-11 items-center rounded-full mr-2`}
            >
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white `}
              />
            </Switch>
          </div>
        </div>
      </div>
      <Link
        href="#"
        className="rounded-lg font-semibold 
            leading-7 dark:text-gray-100 text-black inline-flex"
      >
        <ArrowRightOnRectangleIcon
          className="h-6 w-6 mr-2"
          aria-hidden="true"
        />
        {commonLang.menu.filter((j) => j.locale === locale)[0]["sign_out"]}
      </Link>
    </div>
  );
}
