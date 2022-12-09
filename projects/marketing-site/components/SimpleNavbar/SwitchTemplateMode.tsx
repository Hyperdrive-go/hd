import { Menu, Switch } from '@headlessui/react'
import { MoonIcon } from '@heroicons/react/20/solid'
import clsx from "clsx";

import React, { useState } from 'react';


export default function SwitchTemplateMode() {
  const [enabled, setEnabled] = useState(false)

  return (
      <Menu.Item>
        {({ active }) => (
          <div
            className={clsx(
              active ? "bg-gray-100 w-full cursor-pointer" : "",
              "px-4 py-2 text-sm text-gray-700 inline-flex"
            )}
          >
            <MoonIcon className="h-6 w-6 mr-2" aria-hidden="true" />
            Dark Mode
            <div className="absolute right-0 mr-4 inline-flex">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? 'bg-blue-600' : 'bg-gray-200'
                }  inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    enabled ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white `}
                />
              </Switch>
            </div>
          </div>
        )}
      </Menu.Item>
    );
}