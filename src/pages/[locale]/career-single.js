import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import JobDetails from '@components/career/JobDetails';
import RelatedJob from '@components/career/RelatedJob';
import SupportOne from '@components/support/SupportOne';
import CareerSingleHeader from '@components/career/CareerSingleHeader';
import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'

const getStaticProps = makeStaticProps(['navbar', 'common', 'home'])
export { getStaticPaths, getStaticProps }
const CareerSingle = () => {

  const { t } = useTranslation();

  return (
    <Layout title="Career Single" desc="This is career single page">
      <Navbar classOption="navbar-light" t={t}/>
      <CareerSingleHeader />
      <JobDetails />
      <RelatedJob />
      <SupportOne className t={t}/>
      <Footer footerLight />
    </Layout>
  );
};

export default CareerSingle;
