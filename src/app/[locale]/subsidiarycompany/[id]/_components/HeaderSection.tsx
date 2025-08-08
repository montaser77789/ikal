"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import logo from "../../../../../../public/Our paterns/artex.png";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out-quart",
      once: true,
      mirror: false,
      offset: 120,
    });
  }, []);
  return (
    <section className="relative min-h-auto md:min-h-screen flex items-center overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="مشروع بناء Artex"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority // إضافة priority للتحميل السريع
          quality={100} // جودة أعلى للصورة
          className="z-10 opacity-90 transition-opacity duration-500 hover:opacity-100"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 via-black/50 to-black/80 z-20" />
      </div>
      {/* Main Content Container */}
      <div className="relative z-30 w-full h-full flex flex-col lg:flex-row items-center justify-center px-8 md:px-16 py-16 lg:py-0">
        {/* Left Side - Logo & Construction Elements (Hidden on mobile) */}
        <div className="lg:w-1/3 w-full h-64 lg:h-full flex items-center justify-center order-2 lg:order-2 mb-8 lg:mb-0">
          <div
            className="relative w-full h-full"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            {/* Construction Elements - Hidden on mobile */}

            {/* Logo Container - Visible on all screens */}
            <div className="absolute inset-0 top-0 flex items-center justify-center">
              <div className="relative p-4 w-full ">
                <div className="absolute inset-0 border-2 border-primary opacity-70 rounded-lg transform scale-105"></div>
                <div className="relative bg-primary p-4 rounded-lg backdrop-blur-sm">
                  <Image
                    src={logo}
                    alt="Artex Logo"
                    width={500}
                    height={500}
                    className="transition-all duration-500 hover:scale-105 hover:brightness-110 mx-auto rounded-lg"
                  />
                  <p className="text-center mt-2 text-white font-bold text-sm">
                    شركة مقاولات متخصصة منذ 20 سنة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="lg:w-2/3 w-full order-1 lg:order-1">
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-snug mb-6 drop-shadow-lg">
              <span className="block mb-2 animate-fadeIn">شركه ارتكس</span>
              <span className="text-primary bg-clip-text bg-gradient-to-r from-primary to-secondary">
                بخبرة تزيد عن 20 عامًا
              </span>
            </h1>
            <p
              className="text-lg md:text-xl mb-8 leading-relaxed text-gray-300 "
              data-aos="fade-up"
              data-aos-delay="500"
            >
              نقدم حلولاً متكاملة في مجال المقاولات والإنشاءات، نبتكر وننفذ
              بمعايير الجودة العالمية لضمان رضا عملائنا وتحقيق رؤيتهم.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <Link href="#contact">
                <Button
                  className="w-full rounded-full px-8 py-6 text-lg transition-all 
  hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                >
                  تصفح موقعنا الالكتروني
                </Button>
              </Link>
              <Link href="#projects">
                <Button
                  variant="outline"
                  className="w-full rounded-full px-8 py-6 text-lg hover:shadow-lg hover:shadow-primary/30"
                >
                  عرض المشاريع
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Animations */}
      <style jsx global>{`
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float 8s ease-in-out infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
}
