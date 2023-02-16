import { FC } from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const Search: FC = () => {
    return (
        <div className="w-full max-w-lg sm:max-w-xs">
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
    )
}

export default Search