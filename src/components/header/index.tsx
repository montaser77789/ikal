// components/Header.tsx
"use client";
import logo from "../../../public/favicon.png";
import Image from "next/image";
import Navbar from "./Navbar";
import LanguageSwitcher from "./language-switcher";

import { useEffect, useState } from "react";
import { Locale } from "@/i18n.config";
import { Translations } from "../types/Translationx";

const Header = ({
  translation,
  locale,
}: {
  translation: Translations;
  locale: Locale;
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed w-full z-50 rtl transition-all duration-300 ${
        scrolled
          ? "bg-primary shadow-lg py-2"
          : "bg-gradient-to-b from-black/10 to-transparent py-4"
      }`}
    >

      <div className="container  flex justify-between items-center py-3">
        {/* Logo */}
        <div className="flex items-center">
          <div className="p-1 rounded-full">
            <div className="">
              <Image
                src={logo}
                alt="Logo"
                width={130}
                height={130}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <Navbar locale={locale} translations={translation} />
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
