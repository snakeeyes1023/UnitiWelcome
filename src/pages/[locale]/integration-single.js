import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import SupportOne from '@components/support/SupportOne';
import PageHeader from '@components/common/PageHeader';
import IntegrationDetails from '@components/integration/IntegrationDetails';
import RelatedIntegration from '@components/integration/RelatedIntegration';
import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'

const getStaticProps = makeStaticProps(['navbar', 'common', 'home'])
export { getStaticPaths, getStaticProps }

const IntegrationSingle = () => {

  const { t } = useTranslation();

  return (
    <Layout title="Integration Single" desc="This is integration single page">
      <Navbar t={t}/>
      <PageHeader
        title="Connect with Google"
        desc="Objectively fabricate strategic products for high-impact materials."
        integration
      />
      <IntegrationDetails />
      <RelatedIntegration />
      <SupportOne className t={t}/>
      <Footer footerLight />
    </Layout>
  );
};

export default IntegrationSingle;
