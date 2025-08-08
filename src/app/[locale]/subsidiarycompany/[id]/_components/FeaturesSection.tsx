// components/WhyUsSection.tsx
"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import image from "../../../../../../public/why us/shanghai-aerial-sunset.jpg";
import { Locale } from "@/i18n.config";

import { FaCogs, FaComments, FaFileAlt, FaMagic, FaRocket, FaUmbrella } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";


export default function FeaturesSection({ locale }: { locale: Locale }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

const features = {
  ar: [
    {
      icon: <FaUmbrella />,
      title: "عقارات تناسب جميع الاحتياجات",
      desc: "نوفر مجموعة واسعة من العقارات السكنية والتجارية لتلبية احتياجات جميع العملاء.",
    },
    {
      icon: <FaCode />,
      title: "تصميمات عصرية للمشاريع",
      desc: "نقدم مخططات وتصاميم مبتكرة تلبي أعلى معايير الجودة والجمال.",
    },
    {
      icon: <FaFlask />,
      title: "دراسة السوق بعناية",
      desc: "نعتمد على تحليل دقيق للسوق لتقديم أفضل الفرص الاستثمارية لعملائنا.",
    },
    {
      icon: <FaRocket/>,
      title: "مشاريع عقارية مستقبلية",
      desc: "نعمل على تطوير مشاريع تلبي احتياجات المستقبل برؤية مبتكرة.",
    },
    {
      icon: <FaCogs />,
      title: "إجراءات سلسة وآمنة",
      desc: "نسهّل عملية البيع والشراء مع ضمان الشفافية والموثوقية.",
    },
    {
      icon: <FaFileAlt />,
      title: "تقارير عقارية دقيقة",
      desc: "نوفر تقارير مفصلة عن العقارات لمساعدتك في اتخاذ القرار المناسب.",
    },
    {
      icon: <FaComments />,
      title: "خدمة عملاء متميزة",
      desc: "فريق دعم متعاون للرد على استفساراتكم وتلبية طلباتكم بسرعة.",
    },
    {
      icon: <FaMagic />,
      title: "تجربة مستخدم مريحة",
      desc: "موقعنا وخدماتنا مصممة لتسهيل عملية البحث والاختيار.",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "مواقع استراتيجية",
      desc: "نوفر عقارات في أفضل المواقع لضمان أعلى قيمة استثمارية.",
    },
    {
      icon: <FaHandshake />,
      title: "شراكات موثوقة",
      desc: "نتعاون مع مطورين وشركات عقارية لضمان أفضل الصفقات لعملائنا.",
    },
  ],
  en: [
    {
      icon: <FaUmbrella />,
      title: "Properties for All Needs",
      desc: "We offer a wide range of residential and commercial properties to meet all client needs.",
    },
    {
      icon: <FaCode />,
      title: "Modern Project Designs",
      desc: "We deliver innovative layouts that meet the highest quality and aesthetic standards.",
    },
    {
      icon: <FaFlask />,
      title: "Thorough Market Analysis",
      desc: "We rely on precise market studies to offer the best investment opportunities.",
    },
    {
      icon: <FaRocket />,
      title: "Future-Oriented Projects",
      desc: "We develop real estate projects designed to meet future needs with innovation.",
    },
    {
      icon: <FaCogs />,
      title: "Smooth & Secure Processes",
      desc: "We make buying and selling easy while ensuring transparency and trust.",
    },
    {
      icon: <FaFileAlt />,
      title: "Accurate Real Estate Reports",
      desc: "We provide detailed property reports to help you make the right decisions.",
    },
    {
      icon: <FaComments />,
      title: "Excellent Customer Service",
      desc: "Our support team is ready to answer your questions and fulfill your requests promptly.",
    },
    {
      icon: <FaMagic />,
      title: "User-Friendly Experience",
      desc: "Our platform and services are designed to make searching and selecting easy.",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Strategic Locations",
      desc: "We offer properties in prime locations to ensure maximum investment value.",
    },
    {
      icon: <FaHandshake />,
      title: "Trusted Partnerships",
      desc: "We collaborate with developers and real estate companies to secure the best deals.",
    },
  ],
};

  const lang = locale;
  const title = lang === "ar" ? "ما يميزنا" : "Why Choose Us";
  const subtitle =
    lang === "ar"
      ? "نقدم خدمات ومنتجات صُممت خصيصاً لإثراء عملك بالخبرة المناسبة والتكنولوجيا الجديرة بالإعتماد عليها."
      : "We provide services and products tailored to enrich your business with the right expertise and reliable technology.";

  return (
    <section
      className="relative bg-cover bg-center text-white py-8"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      {/* Overlay layer */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4">
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">{title}</h2>
          <p className="text-lg text-white/90">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features[lang].map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center text-xl">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-white/90 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
