import React from 'react';
import Image from 'next/image';
import { FaBezierCurve } from 'react-icons/fa';
import { FiTruck } from 'react-icons/fi';
import { RiNodeTree } from 'react-icons/ri';
import { GrResources } from 'react-icons/gr';

const WorkProcessOne = ({t}) => {
  return (
    <section className="work-process ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-heading text-center">
              <h4 className="h5 text-primary">{t("home:Process")}</h4>
              <h2>{t("home:ProcessTitle")}</h2>
              <p>
                {t("home:ProcessDesc")}           
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 col-md-12 order-1 order-lg-0">
            <div className="img-wrap">
              <Image
                width={526}
                height={621}
                src="/office-img-1.jpg"
                alt="work process"
                className="img-fluid rounded-custom"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-0 order-lg-1">
            <ul className="work-process-list list-unstyled">
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    <RiNodeTree />
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">{t("home:Step")} 1</span>
                  <h3 className="h5 mb-2">{t("home:Step1")}</h3>
                  <p>
                  {t("home:Step1Desc")}
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-3x">
                    {' '}
                    <FaBezierCurve />
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">{t("home:Step")} 2</span>
                  <h3 className="h5 mb-2">{t("home:Step2")}</h3>
                  <p>
                  {t("home:Step2Desc")}
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    <GrResources />
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">{t("home:Step")} 3</span>
                  <h3 className="h5 mb-2">{t("home:Step3")}</h3>
                  <p>
                    {t("home:Step3Desc")}
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4 mb-lg-0">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    {' '}
                    <FiTruck />
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">{t("home:Step")} 4</span>
                  <h3 className="h5 mb-2">{t("home:Step4")}</h3>
                  <p>
                    {t("home:Step4Desc")}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessOne;
