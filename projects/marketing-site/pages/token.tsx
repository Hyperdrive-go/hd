import {
  BlueSplash,
  Footer,
  Layout,
  RedSplash,
  SimpleNavbar,
} from "@/components/index";

const LandingPage = () => {
  return (
    <Layout>
      <div className="isolate dark:bg-black bg-white">
        <BlueSplash />
        <SimpleNavbar />
        <RedSplash height="lg" />
      </div>
      <main>
        <div className="px-6 lg:px-8">
          <div className="mx-auto h-screen max-w-3xl flex flex-col justify-center items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                Token
              </h1>
              <p className="mt-6 text-lg leading-8 dark:text-gray-200 text-gray-700 sm:text-center">
                UNDER CONSTRUCTION
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
};

export default LandingPage;
