"use client";

import Header from "../common/Header";
import Footer from "../common/Footer";
import CookieConsent from "../common/CookieConsent";
import ScrollToTopButton from "../common/ScrollToTopButton";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <CookieConsent />
      <ScrollToTopButton />
    </>
  );
};

export default MainLayout;
