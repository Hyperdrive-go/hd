import Head from "next/head";

import { Profile } from "@/components/Profile/Profile";
import Molecules from "@libs/ui/src/molecules";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next'

import useSWR from "swr";
import { fetchProfile } from "@libs/api/src/profile"

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Address: NextPage<Props> = ({ address }) => {

  const { data, error, isValidating } = useSWR(address, fetchProfile);
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

export default Address

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<{
  address: string | undefined
}> = async ({ params }) => {

  const address = params?.address?.toString()

  return {
    props: {
      address
    },
  }
}
