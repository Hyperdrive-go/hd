import Head from "next/head";

import { Profile } from "@/components/Profile/Profile";
import Molecules from "@libs/ui/src/molecules";
import {
  useAccount
} from 'wagmi'

export default function HomePage() {
  const account = useAccount()

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Molecules.Navbar />
        {!account.isConnected ? (
          <Molecules.NotLoggedIn />
        ) : <Profile/>
        }
      <Molecules.Footer />
    </>
  );
}
