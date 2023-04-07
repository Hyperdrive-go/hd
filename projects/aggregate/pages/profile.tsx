import Head from "next/head";

import { Profile } from "@/components/Profile/Profile";
import Molecules from "@libs/ui/src/molecules";
import {
  useAccount
} from 'wagmi'
import useSWR from "swr";
import { fetchProfile } from "@libs/api/src/profile"

export default function HomePage() {
  const account = useAccount()

  const { data, error, isValidating } = useSWR(account.address, fetchProfile);
  const loading = !data && !error && isValidating;

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Molecules.Navbar />
        {loading ? (
          <Molecules.Loader />
        ) : !data ? (
          <Molecules.NotLoggedIn />
        ) : <Profile
              profile={data}
            />
        }
      <Molecules.Footer />
    </>
  );
}
