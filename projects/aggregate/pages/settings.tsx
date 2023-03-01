import Head from "next/head";
import { Settings } from "@/components/Settings/Settings";

import Molecules from "@libs/ui/src/molecules";

export default function SettingsPage() {
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <Molecules.Navbar />
        <Settings/>
      <Molecules.Footer />
    </>
  );
}
