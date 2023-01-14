import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

import React from "react";
import { useRouter } from "next/router";
import commonLang from "@/lang/common.json";
import Link from "next/link";
import NavigationMain from "@/libs/interface/navigation";

const navigation = {
  main: [
    { name: "vision", href: "/" },
    { name: "team", href: "/team" },
    { name: "funding", href: "/funding" },
  ],
  social: [
    {
      name: "Discord",
      href: "https://discord.gg/hyperdrive",
      icon: (props: any) => <FontAwesomeIcon icon={faDiscord} {...props} />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/HyperdriveL2",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const { locale } = useRouter();

  return (
    <footer className="dark:bg-gray-900 bg-gray-200">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                href={item.href}
                className="text-base dark:text-gray-400 dark:hover:text-gray-50 
              text-gray-700 hover:text-gray-500"
              >
                {
                  commonLang.menu.filter((j) => j.locale === locale)[0][
                    item.name as keyof NavigationMain
                  ]
                }
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="dark:text-gray-300 dark:hover:text-gray-50 text-gray-900 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base dark:text-gray-400 text-gray-700">
          &copy; 2022 Hyperdrive. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
