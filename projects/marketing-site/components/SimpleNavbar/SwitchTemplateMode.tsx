import { Menu } from '@headlessui/react'
import { SunIcon } from '@heroicons/react/20/solid'
import { MoonIcon } from '@heroicons/react/20/solid'

import React, { useState } from 'react';


export default function SwitchTemplateMode() {
  const [dark, setDark] = useState(true);

  return (
    <Menu as="div" className="relative inline-block text-left mr-2">
      <button className="inline-flex w-full justify-center bg-dark px-4 py-2 text-sm font-medium 
        text-white shadow-sm hover:bg-gray-800" 
        onClick={() => setDark(!dark)} >
        {dark ?
            <MoonIcon className="h-6 w-6" aria-hidden="true" /> :
            <SunIcon className="h-6 w-6" aria-hidden="true" /> 
        }
      </button>

      
    </Menu>
    );
}