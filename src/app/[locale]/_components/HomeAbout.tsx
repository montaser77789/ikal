// app/components/HomeAbout.tsx
"use client";

import React from "react";
import Image from "next/image";
import { FaMedal, FaClock, FaLightbulb, FaArrowLeft } from "react-icons/fa";
import image from "../../../../public/20220601210329649.jpg";
import Link from "@/components/link/Link";

export default function HomeAbout() {
  return (
    <section className="relative bg-[#F5F5F5]   py-10 overflow-hidden">
      <div className="relative z-10 container ">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-primary relative inline-block after:block after:w-16 after:h-[3px] after:bg-[#e8c9a7] after:absolute after:-bottom-3 after:right-0">
              من نحن
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-[#2C3E50]">
              مجموعة{" "}
              <strong className="text-primary"> &quot;إيكال &quot; </strong>{" "}
              تأسست عام 2016 في مدينة ينبع، وتخصصت في تقديم حلول متكاملة في مجال
              المقاولات العامة. نلتزم بأعلى معايير الجودة والسلامة لتحقيق تطلعات
              عملائنا.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex-1 min-w-[150px] text-center bg-white p-4 rounded-xl shadow-md border border-primary/20 transition-transform hover:-translate-y-1 hover:border-primary">
                <FaMedal className="text-primary text-2xl mb-2 mx-auto" />
                <h4 className="text-[#2C3E50] text-sm font-semibold">
                  جودة عالية
                </h4>
              </div>
              <div className="flex-1 min-w-[150px] text-center bg-white p-4 rounded-xl shadow-md border border-primary/20 transition-transform hover:-translate-y-1 hover:border-primary">
                <FaClock className="text-primary text-2xl mb-2 mx-auto" />
                <h4 className="text-[#2C3E50] text-sm font-semibold">
                  الالتزام بالمواعيد
                </h4>
              </div>
              <div className="flex-1 min-w-[150px] text-center bg-white p-4 rounded-xl shadow-md border border-primary/20 transition-transform hover:-translate-y-1 hover:border-primary">
                <FaLightbulb className="text-primary text-2xl mb-2 mx-auto" />
                <h4 className="text-[#2C3E50] text-sm font-semibold">
                  حلول مبتكرة
                </h4>
              </div>
            </div>

            <p className="text-base md:text-lg leading-relaxed text-[#2C3E50]">
              نساهم في تحقيق رؤية المملكة 2030 من خلال مشاريع تنموية تعتمد على
              الكفاءات المحلية والتقنيات الحديثة.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-4 bg-primary hover:bg-white text-white hover:text-primary border-2 border-primary px-6 py-3 rounded-full font-bold transition duration-300 shadow-md hover:shadow-lg"
            >
              تعرف أكثر عنا <FaArrowLeft />
            </Link>
          </div>

          {/* Image */}
          <div className="flex-1 w-full rounded-xl overflow-hidden border-8 border-white shadow-lg">
            <Image
              src={image}
              alt="شركة إيكال للمقاولات"
              width={700}
              height={700}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
