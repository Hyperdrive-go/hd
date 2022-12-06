import {
  BlueSplash,
  Layout,
  ProposalL2,
  RedSplash,
  SimpleNavbar,
} from "@/components/index";

const LandingPage = () => {
  return (
    <Layout>
      <div className="isolate bg-black">
        <BlueSplash />
        <SimpleNavbar />
        <RedSplash height="sm" />
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                L2DAO Proposal
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-center">
                To kick things off our first proposal is being submitted for
                review today, Dec 6.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <ProposalL2 />
        </div>
      </main>
    </Layout>
  );
};

export default LandingPage;
