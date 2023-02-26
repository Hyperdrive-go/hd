import Head from "next/head";
import { Detail } from "@/components/Detail/Detail";

import Molecules from "@libs/ui/src/molecules";

export default function DetailPage() {
  return (
    <>
      <Head>
        <title>Detail</title>
      </Head>
      <Molecules.Navbar />
        <Detail/>
      <Molecules.Footer />
    </>
  );
}
