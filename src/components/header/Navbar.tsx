// components/Navbar.tsx
"use client";
import React, { useEffect, useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import LanguageSwitcher from "./language-switcher";
import Link from "../link/Link";
import { Translations } from "../types/Translationx";
import { Locale } from "@/i18n.config";

const Navbar = ({
  translations,
  locale,
}: {
  translations: Translations;
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    {
      id: 1,
      title: translations.navbar.home,
      href: `/${locale}`,
    },
    {
      id: 2,
      title: translations.navbar.about,
      href: `/${locale}/about`,
    },
    {
      id: 3,
      title: translations.navbar.services,
      href: `/${locale}/services`,
    },
    {
      id: 4,
      title: translations.navbar.projects,
      href: `/${locale}/projects`,
    },
    // {
    //   id: 5,
    //   title: translations.navbar.tech,
    //   href: `/${locale}/tech`,
    // },
    // {
    //   id: 6,
    //   title: translations.navbar.team,
    //   href: `/${locale}/team`,
    // },
    // {
    //   id: 7,
    //   title: translations.navbar.safety,
    //   href: `/${locale}/safety`,
    // },
    {
      id: 8,
      title: translations.navbar.certificates,
      href: `/${locale}/certificates`,
    },
    {
      id: 9,
      title: translations.navbar.contact,
      href: `/${locale}/contact`,
    },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex gap-1">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-full  text-lg
                    transition-all duration-300 flex items-center text-white hover:bg-white/20  
                 `}
              >
                {link.title}
                {/* {["خدماتنا", "مشاريعنا", "Services", "Projects"].includes(
                  link.title
                ) && <FaChevronDown className="mr-1 text-xs" />} */}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className={`p-2 rounded-full bg-primary text-white `}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-lg overflow-hidden">
          <ul className="px-4 py-3 space-y-2 ">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 rounded-lg transition-all text-gray-700 hover:bg-primary hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="block md:hidden px-4 ">
            <LanguageSwitcher />
          </div>
          <div className="px-4 py-3 bg-[#c49a6c]/10 text-[#c49a6c] text-center text-sm">
            © {new Date().getFullYear()} جميع الحقوق محفوظة
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
