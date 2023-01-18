import {
  BlueSplash,
  Contributors,
  Footer,
  Layout,
  RedSplash,
  SimpleNavbar,
} from "@/components/index";
import CoreTeam from "@/components/Team/CoreTeam";
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
        <RedSplash height="lg" />
      </div>
      <main>
        <div className="rounded-lg mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
          <CoreTeam translate={t}/>
        </div>
        <div className="rounded-lg mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
          <Contributors translate={t}/>
        </div>
      </main>
      <Footer translate={t}/>
    </Layout>
  );
};

export default LandingPage;
