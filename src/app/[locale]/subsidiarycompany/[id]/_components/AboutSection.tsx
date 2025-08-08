"use client";

import React from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import { Globe, HardHat } from "lucide-react";
import aboutImage from "../../../../../../public/why us/abu-dhabi-seascape-with-skyscrapers.jpg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-white  overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-100 to-transparent " />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8" data-aos="fade-left">
            {/* Section Header */}
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-primary font-medium">
                <HardHat className="w-5 h-5" />
                <span>من نحن</span>
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
                <span className="block mb-2">شركة Artex للمقاولات</span>
                <span className="text-lg md:text-xl font-normal text-gray-600 ">
                  بناء الثقة عبر التميز في التنفيذ
                </span>
              </h2>
            </div>

            {/* About Text */}
            <div className="space-y-6 text-gray-600  leading-relaxed">
              <p>
                تأسست شركة Artex عام 2003 كشركة رائدة في مجال المقاولات العامة
                والتطوير العقاري، وقد نمت لتكون أحد أهم الأسماء الموثوقة في قطاع
                الإنشاءات على مستوى المنطقة. نقدم حلولاً متكاملة تشمل التصميم،
                الإنشاء، التطوير، والإدارة للمشاريع السكنية والتجارية والصناعية،
                مع التزامنا الدائم بأعلى معايير الجودة والسلامة.
              </p>

              <div className="bg-gray-50  p-6 rounded-xl border border-gray-200 ">
                <h3 className="font-bold text-lg text-gray-900 d mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  رؤيتنا
                </h3>
                <p>
                  أن نكون الشركة الرائدة في تحويل الرؤى العمرانية إلى واقع ملموس
                  يعكس الجمال والوظائفية والاستدامة، مع الحفاظ على قيمنا
                  الأساسية في النزاهة والابتكار والتميز.
                </p>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="relative h-full" data-aos="fade-right">
            <div className="relative  w-full h-full rounded-2xl overflow-hidden shadow-xl border-8 border-white ">
              <Image
                src={aboutImage}
                alt="فريق عمل Artex"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                quality={90}
              />
            </div>

            {/* Experience Badge */}
            <div
              className="absolute -bottom-8 -right-8 bg-primary text-white p-6 rounded-2xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="text-center">
                <span className="block text-4xl font-bold">20+</span>
                <span className="block text-sm font-medium">سنة من الخبرة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
