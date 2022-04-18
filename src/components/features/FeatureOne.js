import React from 'react';
import Link from '../../components/Link';
import Image from 'next/image';

import SectionTitle from '../common/SectionTitle';
import { RiStackLine } from 'react-icons/ri';
import { BsCodeSlash, BsShieldCheck } from 'react-icons/bs';

const FeatureOne = ({t}) => {
  return (
    <>
      <section className="feature-promo ptb-120 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <SectionTitle
                title={t("home:AllYouNeed")}
                description={t("home:AllYouNeedDesc")}
                centerAlign
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-promo p-lg-5 p-3 text-center mt-4">
                <div className="feature-icon icon-center pb-5 rounded-custom bg-primary">
                  <RiStackLine className="text-white fa-2x" />
                </div>
                <div className="feature-info-wrap">
                  <h3 className="h5">{t("home:Perf")}</h3>
                  <p>
                    {t("home:PerfDesc")}{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-promo p-lg-5 p-3 text-center mt-4">
                <div className="feature-icon icon-center pb-5 rounded-custom bg-danger">
                  <BsShieldCheck className="fa-2x text-white" />
                </div>
                <div className="feature-info-wrap">
                  <h3 className="h5">{t("home:Secure")}</h3>
                  <p>
                  {t("home:SecureDesc")}{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-promo p-lg-5 p-3 text-center mt-4">
                <div className="feature-icon icon-center pb-5 rounded-custom bg-dark">
                  <BsCodeSlash className="fa-2x text-white" />
                </div>
                <div className="feature-info-wrap">
                  <h3 className="h5">{t("home:AllTimeDev")}</h3>
                  <p>
                    {t("home:AllTimeDevDesc")}{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-60">
            <div className="col-lg-6 mt-4">
              <div className="position-relative d-flex flex-column h-100 flex-wrap bg-danger-soft p-5 rounded-custom">
                <div className="cta-left-info mb-2">
                  <h5>{t("home:FinishedMissing")}</h5>
                  <p>
                  {t("home:FinishedMissingDesc")}{' '}
                  </p>
                </div>
                <div className="action-btns mt-auto">
                  <Link href="/request-demo">
                    <a className="btn btn-outline-primary btn-sm">
                        {t("home:StartNowFree")}
                    </a>
                  </Link>
                </div>
                <div className="cta-img position-absolute right-0 bottom-0" >
                  <Image
                    width={223}
                    height={223}
                    src="/cta-img-1.png"
                    alt="cta"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="position-relative d-flex flex-column h-100 flex-wrap bg-primary-soft p-5 rounded-custom">
                <div className="cta-left-info mb-2">
                  <h5>{t("home:SmsIntegration")}</h5>
                  <p>
                  {t("home:SmsIntegrationDesc")}{' '}
                  </p>
                </div>
                <div className="action-btns mt-auto">
                  <Link href="/request-for-demo">
                    <a className="btn btn-outline-primary btn-sm">
                      {t("home:StartNowFree")}
                    </a>
                  </Link>
                </div>
                <div className="cta-img position-absolute right-0 bottom-0">
                  <Image
                    width={223}
                    height={223}
                    layout="responsive"
                    src="/cta-img-2.png"
                    alt="cta img"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureOne;
