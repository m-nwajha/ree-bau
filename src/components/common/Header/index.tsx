"use client";

import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "../../ui/Logo";
import { navbarRoutes } from "@/constants/navbar-routes";
import { contactInfo, socialLinks } from "@/constants/contact-info";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import type { NavRoute } from "@/@types/navigation";
import "./style.css";
const Header = () => {
  const pathname = usePathname();
  const activeClass = (href: string) =>
    href === pathname ? "menu-item-active" : "";

  const [themeUI, setThemeUI] = useLocalStorage("theme_ui", false);
  const [desktopMenu, setDesktopMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clickedDesktopMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setDesktopMenu(!desktopMenu);
    document
      .getElementsByClassName("desktop-menu")[0]
      ?.classList.toggle("open");
  };

  const clickedMobileMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenu(!mobileMenu);
    document.getElementsByClassName("mobile-menu")[0]?.classList.toggle("open");
  };

  const clickedThemeUI = () => {
    setThemeUI(!themeUI);

    const lightmodeToggle =
      document.querySelector<HTMLImageElement>("#theme-icon");
    if (!lightmodeToggle) return;

    if (themeUI) {
      document.body.classList.remove("light-d");
      lightmodeToggle.src = "/images/sun.png";
    } else {
      document.body.classList.add("light-d");
      lightmodeToggle.src = "/images/moon.png";
    }
  };

  useEffect(() => {
    const lightmodeToggle =
      document.querySelector<HTMLImageElement>("#theme-icon");
    if (!lightmodeToggle) return;

    if (themeUI) {
      document.body.classList.add("light-d");
      lightmodeToggle.src = "/images/moon.png";
    } else {
      document.body.classList.remove("light-d");
      lightmodeToggle.src = "/images/sun.png";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="header-style-one">
      <div className="container">
        <div className="row">
          <div
            className={`desktop-nav${isSticky ? " is-sticky" : ""}`}
            id="stickyHeader"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex-all justify-content-between">
                    <div className="header-logo">
                      <Logo />
                    </div>
                    <div className="nav-bar">
                      <ul>
                        {navbarRoutes.map((route: NavRoute) =>
                          route.subRoutes ? (
                            <li
                              key={route.title}
                              className="menu-item-has-children"
                            >
                              <Link href={route.href}>{route.title}</Link>
                              <ul className="sub-menu">
                                {route.subRoutes.map((subRoute) => (
                                  <Fragment key={subRoute.title}>
                                    <li>
                                      <Link href={subRoute.href}>
                                        {subRoute.title}
                                      </Link>
                                    </li>
                                  </Fragment>
                                ))}
                              </ul>
                            </li>
                          ) : (
                            <li
                              key={route.title}
                              className={activeClass(route.href)}
                            >
                              <Link href={route.href}>{route.title}</Link>
                            </li>
                          ),
                        )}
                      </ul>

                      <div className="extras">
                        <div className="theme-color">
                          <img
                            src="/images/sun.png"
                            alt="theme color"
                            id="theme-icon"
                            onClick={clickedThemeUI}
                          />
                        </div>
                        <a
                          href="#"
                          id="mobile-menu"
                          className={
                            mobileMenu ? "menu-start open" : "menu-start"
                          }
                          onClick={clickedMobileMenu}
                        >
                          <svg id="ham-menu" viewBox="0 0 100 100">
                            <path
                              className="line line1"
                              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                            />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path
                              className="line line3"
                              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                            />
                          </svg>
                        </a>
                        <a
                          href="#"
                          id="desktop-menu"
                          className={
                            desktopMenu ? "menu-start open" : "menu-start"
                          }
                          onClick={clickedDesktopMenu}
                        >
                          <svg id="ham-menue" viewBox="0 0 100 100">
                            <path
                              className="line line1"
                              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                            />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path
                              className="line line3"
                              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                            />
                          </svg>
                        </a>

                        <a href={contactInfo.phoneHref} className="theme-btn">
                          {contactInfo.phone}
                          <i>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="62"
                              viewBox="0 0 40 62"
                            >
                              <path
                                d="M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z"
                                transform="translate(1 1)"
                              />
                              <path
                                d="M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z"
                                transform="translate(14 48)"
                              />
                            </svg>
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {isSticky && (
              <div
                className="scroll-progress-bar"
                style={{ width: `${scrollProgress}%` }}
              />
            )}
          </div>

          <div className="mobile-nav mobile-menu" id="mobile-nav">
            <div className="res-log">
              <Logo />
            </div>

            <ul>
              {navbarRoutes.map((route) =>
                route.subRoutes ? (
                  <li key={route.title} className="menu-item-has-children">
                    <Link href={route.href}>{route.title}</Link>
                    <ul className="sub-menu">
                      {route.subRoutes.map((subRoute) => (
                        <li key={subRoute.title}>
                          <Link href={subRoute.href}>{subRoute.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={route.title} className={activeClass(route.href)}>
                    <Link href={route.href}>{route.title}</Link>
                  </li>
                ),
              )}
            </ul>

            <a href="#" id="res-cross" onClick={clickedMobileMenu}></a>
          </div>

          <div className="mobile-nav desktop-menu">
            <h2>Bauliche Exzellenz</h2>
            <p className="des" style={{ color: "white" }}>
              REEBAU ist ein zuverlässiges Bau- und Trockenbauunternehmen mit
              Fokus auf Qualität, Professionalität und präzise handwerkliche
              Umsetzung.
            </p>

            <h3>Kontakt</h3>
            <p className="num" style={{ color: "white" }}>
              {contactInfo.phone}
            </p>
            <p className="adrs" style={{ color: "white" }}>
              {contactInfo.address.street}, {contactInfo.address.zip}{" "}
              {contactInfo.address.city}, {contactInfo.address.state}
            </p>

            <div className="social-medias">
              {socialLinks.map((item) => (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  key={item.title}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
