"use client";

import NavbarComponent from "../components/navbar";
import HeroSection from "../components/herosection";
import MenuSection from "../components/menusection";
import AboutSection from "../components/aboutsection";
import ContactSection from "../components/contactsection";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <NavbarComponent />

      <main>
        <HeroSection />
        <MenuSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
