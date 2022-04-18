import React from 'react';
import Link from '../../components/Link';
import { FaRegCheckCircle } from 'react-icons/fa';

import VideoModal from '../common/VideoModal';

const SupportOne = ({ className, t }) => {
  return (
    <section
      className={`${
        className
          ? 'cta-subscribe bg-dark ptb-120 position-relative overflow-hidden'
          : 'cta-subscribe pt-60 pb-120'
      }`}
    >
      <div className="container">
        <div
          className={`${
            className
              ? ''
              : 'bg-gradient ptb-120 px-4 position-relative overflow-hidden rounded-custom'
          }`}
        >
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8">
              <div className="subscribe-info-wrap text-center position-relative z-2">
                <div className="section-heading">
                  <h4 className="h5 text-warning">
                    {t("home:LetsTry")}
                  </h4>
                  <h2>{t("home:LetsTryTitle")}</h2>
                  <p>
                    {t("home:LetsTryDesc")}
                  </p>
                </div>
                <div className="form-block-banner mw-60 m-auto mt-5">
                  <Link href="/contact-us">
                    <a className="btn btn-primary">{t("home:ContactWithUs")}</a>
                  </Link>

                  <VideoModal className="true" />
                </div>
                <ul className="nav justify-content-center subscribe-feature-list mt-4">
                  <li className="nav-item">
                    <span>
                      <FaRegCheckCircle className="far me-2 text-primary" />
                      {t("home:Free60Days")}
                    </span>
                  </li>
                  <li className="nav-item">
                    <span>
                      <FaRegCheckCircle className="far me-2 text-primary" />
                      {t("home:NoCreditCard")}
                    </span>
                  </li>
                  <li className="nav-item">
                    <span>
                      <FaRegCheckCircle className="far me-2 text-primary" />
                      {t("home:Support247")}
                    </span>
                  </li>
                  <li className="nav-item">
                    <span>
                      <FaRegCheckCircle className="far me-2 text-primary" />
                      {t("home:CancelAnyTime")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div>
          <div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5"></div>
        </div>
      </div>
    </section>
  );
};

export default SupportOne;
