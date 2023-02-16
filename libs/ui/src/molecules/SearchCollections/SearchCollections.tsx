import React, {
    Dispatch,
    FC,
    SetStateAction,
    useCallback,
    useRef,
    useState,
  } from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Downshift from 'downshift'
import { useRouter } from 'next/router'
import Image from "next/image";
import banner1 from "../../assets/images/sample/banner1.png"
import banner2 from "../../assets/images/sample/banner2.png"
import banner3 from "../../assets/images/sample/banner3.png"
import banner4 from "../../assets/images/sample/banner4.png"

const collections = [
  {
    name: "Catgod 1",
    imageUrl: banner1
  },
  {
    name: "Catgod 2",
    imageUrl: banner2
  },
  {
    name: "Catgod 3",
    imageUrl: banner3
  },
  {
    name: "Catgod 4",
    imageUrl: banner4
  }
]

type Props = {
    isMobile?: boolean
    setOpen?: Dispatch<SetStateAction<boolean>>
  }

const SearchCollections: FC<Props> = ({
    isMobile,
    setOpen
  }) => {
    const router = useRouter()
    const [focused, setFocused] = useState<boolean>(false)

    return (
    <Downshift>
        {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        highlightedIndex,
        inputValue,
        reset
      }) => (
        <div
          className="relative"
        >
          
        <div className="w-full max-w-lg"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}>
             {!isMobile ? 
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
                    {...getInputProps()}
                />
            </div>
            : 
            <MagnifyingGlassIcon
                className="h-6 w-6 text-gray-300 "
                aria-hidden="true"
              />
            }
            {focused && (
                <div
                  className={`divide-y-[1px] divide-[#D1D5DB] overflow-hidden  border-[#D1D5DB] bg-white dark:divide-neutral-600 dark:border-neutral-600  ${
                    isMobile
                      ? 'top-[72px] border-y dark:bg-black'
                      : 'absolute top-[50px] z-10 lg:w-10/12 w-full rounded-[8px] border dark:bg-neutral-900'
                  }`}
                  {...getMenuProps()}
                >
                  {collections
                  .slice(0, 6)
                  .map((collection, index) => (
                    <a
                      {...getItemProps({
                        key: collection?.name,
                        index,
                        item: collection,
                      })}
                      onClick={() => {
                        reset()
                        setFocused(false)
                        setOpen && setOpen(false)
                      }}
                      className={`flex items-center py-2 lg:py-3 px-4 hover:bg-[#F3F4F6] dark:hover:bg-neutral-800  ${
                        highlightedIndex === index
                          ? 'bg-[#F3F4F6] dark:bg-neutral-600'
                          : ''
                      }`}
                    >
                      <Image
                        src={
                          collection?.imageUrl ??
                          'https://via.placeholder.com/30'
                        }
                        alt={`${collection?.name}'s logo.`}
                        className="h-8 w-8 lg:h-9 lg:w-9 shrink-0 overflow-hidden rounded-full"
                      />
                      <span className="ml-2 overflow-hidden text-ellipsis dark:text-white">
                        {collection?.name}
                      </span>
                    </a>
                  ))}
                </div>
              )}
          </div> 
        </div>
      )}
    </Downshift>
    )
}

export default SearchCollections