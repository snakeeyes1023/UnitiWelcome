import React from 'react';

import Layout from '@layout/Layout';
import Navbar from '@layout/Header/Navbar';
import FooterShort from '@layout/Footer/FooterShort';
import SingleServiceRegister from '@components/services/SingleServiceRegister';
import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'

const getStaticProps = makeStaticProps(['navbar', 'common', 'home'])
export { getStaticPaths, getStaticProps }

const RequestDemo = () => {

  const { t } = useTranslation();


  return (
    <Layout title="Request Demo" desc="This is request demo page">
      <Navbar navDark t={t}/>
      <section className="bg-dark ptb-120">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <SingleServiceRegister />
          </div>
        </div>
      </section>

      <FooterShort />
    </Layout>
  );
};

export default RequestDemo;
