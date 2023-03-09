import Head from "next/head";
import { Collection } from "@/components/Collection/Collection";
import Molecules from "@libs/ui/src/molecules";

export default function CollectionPage() {
  return (
    <>
      <Head>
        <title>Collection</title>
      </Head>
      <Molecules.Navbar />
        {/* <Collection/> */}
        <Molecules.NotFound />
      <Molecules.Footer />
    </>
  );
}
