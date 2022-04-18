import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import NewsLetter from '@components/cta/NewsLetter';
import LatestBlog from '@components/blogs/LatestBlog';
import PageHeader from '@components/common/PageHeader';
import SupportOne from '@components/support/SupportOne';
import BlogSingleFeature from '@components/blogs/BlogSingleFeature';
import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'

const getStaticProps = makeStaticProps(['navbar', 'common', 'home'])
export { getStaticPaths, getStaticProps }

const BlogSingle = () => {

  const { t } = useTranslation();

  return (
    <Layout title="Blog Single" desc="This is blog single page">
      <Navbar classOption="navbar-light" t={t} />
      <PageHeader title="Why customer retention is the ultimate growth strategy" />
      <BlogSingleFeature />
      <NewsLetter />
      <LatestBlog />
      <SupportOne className t={t} />
      <Footer footerLight />
    </Layout>
  );
};

export default BlogSingle;
