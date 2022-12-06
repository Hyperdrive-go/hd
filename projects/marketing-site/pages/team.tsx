import {
  BlueSplash,
  Layout,
  RedSplash,
  SimpleNavbar,
} from "@/components/index";
import CoreTeam from "@/components/Team/CoreTeam";

const LandingPage = () => {
  return (
    <Layout>
      <div className="isolate bg-black">
        <BlueSplash />
        <SimpleNavbar />
        <RedSplash height="sm" />
      </div>
      <main>
        <div className="rounded-lg mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
          <CoreTeam />
        </div>
      </main>
    </Layout>
  );
};

export default LandingPage;
