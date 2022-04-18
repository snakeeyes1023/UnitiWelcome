import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import PageHeader from '@components/common/PageHeader';
import SingleServicePromo from '@components/services/SingleServicePromo';
import SingleServiceRegister from '@components/services/SingleServiceRegister';
import SingleServiceFeature from '@components/services/SingleServiceFeature';
import SingleServiceFeatureTwo from '@components/services/SingleServiceFeatureTwo';

import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'

const getStaticProps = makeStaticProps(['navbar', 'common', 'home'])
export { getStaticPaths, getStaticProps }


const SingleService = () => {

  const { t } = useTranslation();

  return (
    <Layout title="Services" desc="This is services single page">
      <Navbar t={t}/>
      <PageHeader
        title="Quality Software Services"
        desc="Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise."
      />
      <SingleServiceFeature />
      <SingleServiceFeatureTwo />
      <SingleServicePromo />
      <SingleServiceRegister />
      <Footer footerLight />
    </Layout>
  );
};

export default SingleService;
