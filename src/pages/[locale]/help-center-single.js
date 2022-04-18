import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import HelpCenterSingleDetails from '@components/help-center/HelpCenterSingleDetails';
import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'

const getStaticProps = makeStaticProps(['navbar', 'common'])
export { getStaticPaths, getStaticProps }


const HelpCenterSingle = () => {

  const { t } = useTranslation();

  return (
    <Layout title="Help Center Single" desc="This is help center single">
      <Navbar t={t}/>
      <HelpCenterSingleDetails />
      <Footer />
    </Layout>
  );
};

export default HelpCenterSingle;
