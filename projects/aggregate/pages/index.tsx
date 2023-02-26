import Head from "next/head";
import { Home } from "@/components/Home/Home";

import Molecules from "@libs/ui/src/molecules";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <Molecules.Navbar />
      
        <Home/>
      <Molecules.Footer />
    </>
  );
}
