import React from 'react';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { BsShieldCheck } from 'react-icons/bs';
import { FaCheckCircle, FaFingerprint } from 'react-icons/fa';

const FeatureImgContentOne = ({t}) => {
  return (
    <>
      <section className="why-choose-us ptb-120">
        <div className="container">
          <div className="row justify-content-lg-between align-items-center">
            <div className="col-lg-5 col-12">
              <div className="why-choose-content">
                <div className="icon-box rounded-custom bg-primary shadow-sm d-inline-block">
                  <span className="fas text-white">
                    <BsShieldCheck />
                  </span>
                </div>
                <h2>{t("home:AdvanceFeatures")}</h2>
                <p>
                  {t("home:AdvanceFeaturesDesc")}
                </p>
                <ul className="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    {t("home:MailIntegrationF")}
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    {t("home:SmsIntergrationF")}
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    {t("home:StatsF")}
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    {t("home:FastSupportF")}
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    {t("home:EndYearCloseF")}
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    {t("home:WebsiteF")}
                  </li>
                </ul>
                <a
                  href="about-us.html"
                  className="read-more-link text-decoration-none"
                >
                   {t("home:KnowMoreAboutUs")}{' '}
                  <span className="far ms-2 mb-1">
                    <FiArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                <Image
                  width={636}
                  height={464}
                  layout="responsive"
                  src="/screen/widget-11.png"
                  className="img-fluid"
                  alt="feature-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default FeatureImgContentOne;

/**

<section className="image-feature pt-60 pb-120">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 col-12 order-lg-1">
              <div className="feature-img-content">
                <div className="icon-box rounded-custom bg-dark shadow-sm d-inline-block">
                  <span className="fal text-white">
                    <FaFingerprint />
                  </span>
                </div>
                <h2>Match Everything to Brand and Style</h2>
                <p>
                  Intrinsicly pontificate reliable metrics with enabled.
                  Holisticly maintain clicks-and-mortar manufactured products
                  empower viral customer service through resource deliverables.
                </p>
                <p>
                  Customer service through resource pontificate reliable metrics
                  with enabled expedite resource maximizing information maintain
                  manufactured products.
                </p>

                <a
                  href="about-us.html"
                  className="read-more-link text-decoration-none d-block mt-4"
                >
                  Know More About Us{' '}
                  <span className="far ms-2 mb-1">
                    <FiArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12 order-lg-0">
              <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                <Image
                  width={636}
                  height={492}
                  layout="responsive"
                  src="/screen/widget-12.png"
                  className="img-fluid"
                  alt="feature-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

       * 
 */