import {
  MainHeroSection,
  Layout,
  FeaturesList,
  Footer,
} from "@/components/index";
// import hyperdriveHero from "@/images/large-logo2.png";
import hyperdriveHeroAlt from "@/images/logo-very-large.png";
import Image from "next/image";
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
      <main>
        <MainHeroSection translate={t}/>
        <div className="max-w-7xl mx-auto relative h-[230px] sm:h-[320px] md:h-[420px] lg:h-[600px] xl:h-[920px] my-4 md:my-12 xl:my-24">
          <Image
            src={hyperdriveHeroAlt}
            className="rounded-lg object-contain object-fit"
            alt=""
            priority
            fill
          />
        </div>
        <FeaturesList translate={t}/>
        <Footer translate={t}/>
      </main>
    </Layout>
  );
};

export default LandingPage;
