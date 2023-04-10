import Head from "next/head";
import { Collection } from "@/components/Collection/Collection";
import Molecules from "@libs/ui/src/molecules";

import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next'

import useSWR from "swr";
import { fetchCollection } from "@libs/api/src/collection"

type Props = InferGetStaticPropsType<typeof getStaticProps>

const CollectionPage: NextPage<Props> = ({ collection }) => {

  const { data, error, isValidating } = useSWR(collection, fetchCollection);
  const loading = !data && !error && isValidating;

  return (
    <>
      <Head>
        <title>Collection</title>
      </Head>
      <Molecules.Navbar />
        {loading ? (
          <Molecules.Loader />
        ) : !data ? (
          <Molecules.NotLoggedIn />
        ) : <Collection
              collection={data}
            />
        }
      <Molecules.Footer />
    </>
  );
}

export default CollectionPage

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<{
  collection: string
}> = async ({ params }) => {

  const collection = params?.collection?.toString()

  return {
    props: {
      collection
    },
  }
}

