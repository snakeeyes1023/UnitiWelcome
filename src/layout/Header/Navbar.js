import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from '../../components/Link';
import { HiMenu, HiOutlineX } from 'react-icons/hi';

import OffCanvasMenu from './OffCanvasMenu';
import { navHome, navCompanyLinks, navCompanyPage } from '../../utils/data';
import dynamic from 'next/dynamic';

const Navbar = ({ navDark, t }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector('.main-header');
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className={`main-header ${navDark ? 'position-absolute' : ''} w-100 `}
    >
      <nav
        className={`navbar navbar-expand-xl ${
          navDark ? 'navbar-dark' : 'navbar-light'
        } sticky-header ${scroll > headerTop ? 'affix' : ''}`}
      >
        <div className="container d-flex align-items-center justify-content-lg-between position-relative">
          <Link href="/">
            <a className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
              {scroll > headerTop || !navDark ? (
                <Image
                  width={113}
                  height={36}
                  src="/logo-dark.png"
                  alt="logo"
                  className="img-fluid logo-color"
                />
              ) : (
                <Image
                  width={113}
                  height={36}
                  src="/logo-white.png"
                  alt="logo"
                  className="img-fluid logo-white"
                />
              )}
            </a>
          </Link>
          <a
            className="navbar-toggler position-absolute right-0 border-0"
            href="#offcanvasWithBackdrop"
            role="button"
          >
            <span
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
            >
              <HiMenu />
            </span>
          </a>
          <div className="clearfix"></div>
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="nav col-12 col-md-auto justify-content-center main-menu">
              <li>
                <Link href="/">
                  <a className="nav-link">{t("navbar:home")}</a>
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <a className="nav-link">{t("navbar:about")}</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="nav-link">{t("navbar:service")}</a>
                </Link>
              </li>

              <li>
                <Link href="/pricing">
                  <a className="nav-link">{t("navbar:pricing")}</a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("navbar:company")}
                </a>
                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                  <div className="dropdown-grid rounded-custom width-full">
                    <div className="dropdown-grid-item">
                      <h6 className="drop-heading">Useful Links</h6>
                      {navCompanyLinks.map((navLink, i) => (
                        <div key={i + 1}>
                          <Link href={navLink.href}>
                            <a className="dropdown-link px-0">
                              <i className="me-1">{navLink.icon}</i>
                              <span className="drop-title mb-0">{navLink.title} </span>
                            </a>
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="dropdown-grid-item radius-right-side bg-light">
                      <h6 className="drop-heading">Utility Pages</h6>
                      {navCompanyPage.map((navPage, i) => (
                        <div key={i + 1}>
                          <Link href={navPage.href}>
                            <a className="dropdown-link">
                              <i className="me-1">{navPage.icon}</i>
                              <span className="drop-title mb-0">{navPage.title} </span>
                            </a>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
            <Link href="/login">
              <a className="btn btn-link text-decoration-none me-2">{t("navbar:register")}</a>
            </Link>
            <Link href="/request-demo">
              <a className="btn btn-primary">{t("navbar:mydashboard")}</a>
            </Link>
          </div>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasWithBackdrop"
          >
            <div className="offcanvas-header d-flex align-items-center mt-4">
              <Link href="/">
                <a className="d-flex align-items-center mb-md-0 text-decoration-none">
                  <Image
                    width={121}
                    height={36}
                    src="/logo-color.png"
                    alt="logo"
                    className="img-fluid ps-2"
                  />
                </a>
              </Link>
              <button
                type="button"
                className="close-btn text-danger"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <HiOutlineX />
              </button>
            </div>

            <OffCanvasMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Navbar), {ssr : false});
