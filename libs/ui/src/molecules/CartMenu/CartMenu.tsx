import * as Popover from '@radix-ui/react-popover'
import { FC } from 'react'
import Image from "next/image";
import { FaShoppingCart, FaTimes, FaAngleUp } from 'react-icons/fa'
import ethereumLogo from "../../assets/images/ethereum-eth-logo.png"
import banner1 from "../../assets/images/sample/banner1.png"
import banner2 from "../../assets/images/sample/banner2.png"
import banner3 from "../../assets/images/sample/banner3.png"
import banner4 from "../../assets/images/sample/banner4.png"

const cartItems = [
  {
    name: "NFT ID#",
    ethPrice: "1.2",
    usdPrice: "1800",
    imageUrl: banner1
  },
  {
    name: "NFT ID#",
    ethPrice: "1.2",
    usdPrice: "1800",
    imageUrl: banner2
  },
  {
    name: "NFT ID#",
    ethPrice: "1.2",
    usdPrice: "1800",
    imageUrl: banner3
  },
  {
    name: "NFT ID#",
    ethPrice: "1.2",
    usdPrice: "1800",
    imageUrl: banner4
  }
]

const CartMenu: FC = () => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <div className="relative z-10 grid h-8 w-8 items-center justify-center rounded-full">
          <FaShoppingCart className="h-[18px] w-[18px] text-white" />
        </div>
      </Popover.Trigger>
      <Popover.Content sideOffset={22}
        className="PopoverContent z-[10000000] w-[367px] rounded-xl md:rounded-2xl bg-gray-800 shadow-lg dark:border dark:border-neutral-700 dark:bg-neutral-900"
        >
        <div className="mb-4 divide-y divide-gray-700">
            <div className="flex justify-between p-4">
              <div className="flex">
                <h3 className="text-white font-bold text-base">Your cart</h3>
              </div>
              <div className="flex">
                <Popover.Close className="PopoverClose" aria-label="Close">
                  <FaTimes className="h-[16px] w-[16px] text-gray-500" aria-label="Close"/>
                </Popover.Close>
              </div>
            </div>

            <div className="p-4">
              <div className="flex justify-between mb-4">
                <div className="flex">
                  <h3 className="text-white">4 items</h3>
                </div>
                <div className="flex">
                  <p className="text-red-600">Clear items</p>
                </div>
              </div>
              {cartItems.map((cartItem, id) => (
                <div className="py-1.5" key={id}>
                  <div className="p-2 bg-gray-700 rounded-lg flex ">
                    <div className="flex flex-1 space-x-2">
                      <Image 
                          src={cartItem.imageUrl}
                          alt="background"
                          className="w-12 h-12 rounded-lg"
                        />
                      <div className="relative">
                        <p className="text-white font-bold mb-2 text-sm">{cartItem.name}</p>
                        <Image
                          className="h-4 w-4 inline"
                          src={ethereumLogo}
                          alt=""
                          priority
                        />
                        <p className="text-white inline mt-2">{cartItem.ethPrice}</p>
                      </div>
                    </div>
                    <div className="flex flex-col-reverse">
                      <p className="text-gray-500 font-bold">{cartItem.usdPrice} USD</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between p-4 text-sm">
              <div className="flex">
                <h3 className="text-white font-bold">Total</h3>
              </div>
              <div className="">
                <p className="text-white font-bold inline">4.8 ETH </p>
                  <Image
                    className="h-4 w-4 inline"
                    src={ethereumLogo}
                    alt=""
                    priority
                  />
                <p className="text-gray-500 mt-2 text-end">$7200</p>
              </div>
            </div>

            <div className="flex justify-between p-4">
              <div className="flex">
                <h3 className="text-white">Send to a different wallet</h3>
              </div>
              <div className="flex">
                <FaAngleUp className="h-[15px] w-[15px] text-white" />
              </div>
            </div>

            <div className="p-4">
              <button type="button" className="text-white bg-red-500
                  font-medium rounded-lg text-md lg:text-lg px-6 py-3 py-2 w-full text-center">Purchase</button>
            </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  )
}
export default CartMenu
