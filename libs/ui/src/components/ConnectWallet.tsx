import { FC } from 'react'
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
} from 'wagmi'
import Link from 'next/link'
import { HiOutlineLogout } from 'react-icons/hi'
import ConnectWalletButton from './ConnectWalletButton'
import {  WalletIcon } from "@heroicons/react/24/outline";
import Avatar from './Avatar'
import * as Popover from '@radix-ui/react-popover'

const ConnectWallet: FC = () => {
  const account = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ address: account?.address })
  const { connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const wallet = connectors[0]
  
  if (!account.isConnected)
    return (
      <ConnectWalletButton>
        <div className="flex text-white bg-red-500 p-2 rounded-xl space-x-1">
            <WalletIcon className="block h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
              <span className="pt-0.5">Connect Wallet</span> 
        </div>
      </ConnectWalletButton>
    )

  return (
    <Popover.Root>
      <Popover.Trigger className="btn-primary-outline ml-auto rounded-full border-transparent p-0 normal-case dark:border-neutral-600 dark:bg-neutral-900 dark:ring-primary-900 dark:focus:ring-4">
        <Avatar address={account.address} avatar={ensAvatar} size={40} />
      </Popover.Trigger>

      <Popover.Content align="end" sideOffset={6}>
        <div
          className="w-48 space-y-1 bg-gray-800 px-1.5 py-2 shadow-md radix-side-bottom:animate-slide-down dark:bg-neutral-900 md:w-56 rounded"
        >
          <Link href="/profile" legacyBehavior={true}>
            <a className="group flex w-full cursor-pointer items-center justify-between rounded px-4 py-3 text-white text-sm font-bold hover:bg-neutral-900">
              Profile
            </a>
          </Link>
          <button
              key={wallet.id}
              onClick={() => {
                disconnect()
              }}
              className="group flex w-full cursor-pointer items-center justify-between gap-3 rounded px-4 py-3 outline-none 
              transition hover:bg-neutral-900
              text-white text-sm font-bold"
            >
              <span>Disconnect</span>
              <HiOutlineLogout className="h-6 w-7" />
            </button>
        </div>
      </Popover.Content>
    </Popover.Root>
  )
}

export default ConnectWallet

type Props = {
  address: string
}

