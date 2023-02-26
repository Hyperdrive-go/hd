import Head from "next/head";
import { useEffect, useState } from "react";

import { Profile } from "@/components/Profile/Profile";
import Molecules from "@libs/ui/src/molecules";


export default function HomePage() {
  
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Molecules.Navbar />
      <Profile/>
        {/* {!!account.isConnected ? (
          <>
            <Profile/>
          </>
        ) : account.address ? (
          <Molecules.Loader />
        ) : (
          <Molecules.NotLoggedIn />
        )} */}

      <Molecules.Footer />
    </>
  );
}
