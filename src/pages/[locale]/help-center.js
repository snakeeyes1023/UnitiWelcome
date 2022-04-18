import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import HelpCenterDetails from '@components/help-center/HelpCenterDetails';
import HelpCenterHeader from '@components/help-center/HelpCenterHeader';
import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'

const getStaticProps = makeStaticProps(['navbar', 'common'])
export { getStaticPaths, getStaticProps }

const HelpCenter = () => {
  const { t } = useTranslation();

  return (
    <Layout title="Help Center" desc="This is help center page">
      <Navbar t={t}/>
      <HelpCenterHeader />
      <HelpCenterDetails />
      <Footer />
    </Layout>
  );
};

export default HelpCenter;
