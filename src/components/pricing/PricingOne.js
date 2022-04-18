import React from 'react';
import Image from 'next/image';
import Link from '../../components/Link';
import { BsCalendar2Check, BsCalendarX, BsCreditCard } from 'react-icons/bs';

import Circle from '../common/Circle';

const PricingOne = ({ header, t }) => {
  const pricingData = [
    {
      title: t('home:Bronze'),
      price: '$0',
      time: '/month',
      bgColor: 'bg-white',
      textColor: 'text-primary',
      btnColor: 'btn-outline-primary',
      shape: 'left--40 bottom--40',
      listItem: [
        {
          li: "2 " + t('home:Buildings'),
        },
        {
          li: "10 " + t('home:Lockers'),
        },
        {
          li: t('home:MailIntegrationF'),
        },
        {
          li: t('home:EndYearCloseF'),
        },
        {
          li: t('home:StatsF'),
        },
        {
          li: t("home:WebsiteF"),
        },
        {
          li: "1 GB ",
        },
      ],
    },
  
    {
      title: t('home:Gold'),
      price: '$45',
      time: '/month',
      bgColor: 'bg-gradient',
      textColor: 'text-warning',
      btnColor: 'btn-primary',
  
      listItem: [
        {
          li: "5 " + t('home:Buildings'),
        },
        {
          li: "50 " + t('home:Lockers'),
        },
        {
          li: t('home:SmsIntergrationF'),
        },
        {
          li: t('home:MailIntegrationF'),
        },
        {
          li: t('home:EndYearCloseF'),
        },
        {
          li: t('home:StatsF'),
        },
        {
          li: t("home:WebsiteF"),
        },
        {
          li: "5 GB ",
        },
      ],
    },
  
    {
      title: t('home:Platinum'),
      price: '$95',
      time: '/month',
      bgColor: 'bg-white',
      textColor: 'text-primary',
      btnColor: 'btn-outline-primary',
      shape: 'right--40 top--40',
      listItem: [
        {
          li: "15 " + t('home:Buildings'),
        },
        {
          li: "200 " + t('home:Lockers'),
        },
        {
          li: t('home:SmsIntergrationF'),
        },
        {
          li: t('home:MailIntegrationF'),
        },
        {
          li: t('home:EndYearCloseF'),
        },
        {
          li: t('home:StatsF'),
        },
        {
          li: t("home:WebsiteF"),
        },
        {
          li: t("home:FastSupportF"),
        },
        {
          li: "15 GB ",
        },
      ],
    },
  ];
  return (
    <section className="pricing-section pt-60 pb-120  position-relative z-2">
      <div className="container">
        {header && (
          <div>
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="section-heading text-center">
                  <h4 className="h5 text-primary">{t("home:Pricing")}</h4>
                  <h2>{t("home:PricingTitle")}</h2>
                  <p>
                    {t("home:PricingDesc")}{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mb-5">
              <div className="col-lg-3">
                <div className="media d-flex align-items-center py-2 p-sm-2">
                  <div className="icon-box mb-0 bg-primary-soft rounded-circle d-block me-3">
                    <span className="fal text-primary text-center">
                      <BsCreditCard />
                    </span>
                  </div>
                  <div className="media-body fw-medium h6 mb-0">
                    {t("home:NoCreditCard")}
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="media d-flex align-items-center py-2 p-sm-2">
                  <div className="icon-box mb-0 bg-success-soft rounded-circle d-block me-3">
                    <span className="fal text-success">
                      <BsCalendar2Check />
                    </span>
                  </div>
                  <div className="media-body fw-medium h6 mb-0">
                    {t("home:FreeTrial")}
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="media d-flex align-items-center py-2 p-sm-2">
                  <div className="icon-box mb-0 bg-danger-soft rounded-circle d-block me-3">
                    <span className="fal text-danger">
                      <BsCalendarX />
                    </span>
                  </div>
                  <div className="media-body fw-medium h6 mb-0">
                   {t("home:CancelAnyTime")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          {pricingData.map((pricing, i) => (
            <div key={i + 1} className="col-lg-4 col-md-6">
              <div
                className={`position-relative single-pricing-wrap rounded-custom ${pricing.bgColor} custom-shadow p-5 mb-4 mb-lg-0`}
              >
                <div className="pricing-header mb-32">
                  <h3 className={`package-name ${pricing.textColor} d-block`}>
                    {' '}
                    {pricing.title}{' '}
                  </h3>
                  <h4 className="display-6 fw-semi-bold">
                    {pricing.price}
                    <span>{pricing.time} </span>
                  </h4>
                </div>
                <div className="pricing-info mb-4">
                  <ul className="pricing-feature-list list-unstyled">
                    {pricing.listItem.map((list, i) => (
                      <li key={i + 1}>
                        <Circle textColor={pricing.textColor} />
                        {list.li}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/request-demo">
                  <a className={`btn ${pricing.btnColor} mt-2`}>{t("home:StartNow")}</a>
                </Link>

                {pricing.shape && (
                  <div
                    className={`dot-shape-bg position-absolute z--1 ${pricing.shape}`}
                  >
                    <Image
                      width={258}
                      height={258}
                      src="/shape/dot-big-square.svg"
                      alt="shape"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingOne;
