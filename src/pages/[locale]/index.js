import Layout from '@layout/Layout';
import FaqOne from '@components/faq/FaqOne';
import Navbar from '@layout/Header/Navbar';
import Footer from '@layout/Footer/Footer';
import PricingOne from '@components/pricing/PricingOne';
import FeatureOne from '@components/features/FeatureOne';
import SupportOne from '@components/support/SupportOne';
import IntegrationOne from '@components/integration/IntegrationOne';
import TestimonialOne from '@components/testimonial/TestimonialOne';
import WorkProcessOne from '@components/workprocess/WorkProcessOne';
import HeroSectionOne from '@components/hero-section/HeroSectionOne';
import FeatureImgContentOne from '@components/feature-img-content/FeatureImgContentOne';
import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'

const getStaticProps = makeStaticProps(['home', 'navbar', 'common'])
export { getStaticPaths, getStaticProps }


export default function Home() {
  
  const { t } = useTranslation();

  return (
    <Layout>
      <Navbar navDark t={t}/>
      <HeroSectionOne t={t}/>
      <FeatureOne />
      <FeatureImgContentOne />
      <TestimonialOne darkBg />
      <WorkProcessOne />
      <PricingOne header="true" />
      <FaqOne />
      <IntegrationOne />
      <SupportOne />
      <Footer footerGradient />
    </Layout>
  );
}