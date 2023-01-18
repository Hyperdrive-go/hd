import {
  BlueSplash,
  Footer,
  Layout,
  ProposalGitcoin,
  RedSplash,
  SimpleNavbar,
} from "@/components/index";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({locale}:any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['marketing']))
    }
  }
}

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="isolate dark:bg-black bg-white">
        <BlueSplash />
        <SimpleNavbar translate={t}/>
        <RedSplash height="sm" />
      </div>
      <main>
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl dark:text-white text-black">
                {t("marketing:funding_page.0.funding_title")}
              </h1>
              <p className="mt-6 text-lg leading-8 dark:text-gray-200 text-gray-700 sm:text-center">
                {t("marketing:funding_page.0.funding_desc")}
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <ProposalGitcoin translate={t}/>
        </div>
      </main>
      <Footer translate={t}/>
    </Layout>
  );
};

export default LandingPage;
