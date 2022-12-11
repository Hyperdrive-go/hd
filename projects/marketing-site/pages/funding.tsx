import {
  BlueSplash,
  Footer,
  Layout,
  ProposalL2,
  RedSplash,
  SimpleNavbar,
} from "@/components/index";
import commonLang from "@/lang/common.json";
import { useRouter } from 'next/router';

const LandingPage = () => {
  const { locale } = useRouter();

  return (
    <Layout>
      <div className="isolate dark:bg-black bg-white">
        <BlueSplash />
        <SimpleNavbar />
        <RedSplash height="sm" />
      </div>
      <main>
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl dark:text-white text-black">
                {commonLang.funding_page.filter(j => j.locale === locale)[0]["funding_title"]}
              </h1>
              <p className="mt-6 text-lg leading-8 dark:text-gray-200 text-gray-700 sm:text-center">
                {commonLang.funding_page.filter(j => j.locale === locale)[0]["funding_desc"]}
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <ProposalL2 />
        </div>
      </main>
      <Footer />
    </Layout>
  );
};

export default LandingPage;
