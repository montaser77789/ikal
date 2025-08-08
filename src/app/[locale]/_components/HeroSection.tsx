"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import image1 from "../../../../public/hero section/93952dc9cc684e057292c349c21618c5cfc4e9fb.jpg";
import image2 from "../../../../public/hero section/observation-urban-building-business-steel.jpg";
import image3 from "../../../../public/hero section/monochrome-scene-depicting-life-workers-construction-industry-site.jpg";

import Image from "next/image";
import Link from "@/components/link/Link";
import { buttonVariants } from "@/components/ui/button";

const slides = [image1, image2, image3];

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden" >
      {/* Swiper background images */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 3000, // زدت المدة بين الشرائح
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true // تأثير تدرج متقاطع
        }}
        speed={1500} // زدت مدة الانتقال بين الشرائح
        loop
        className="absolute top-0 left-0 w-full h-full z-0"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <Image
                src={image}
                alt={`Slide ${index}`}
                fill
                className="object-cover transition-all duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-black/50 z-10" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fixed text overlay */}
      <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 h-full flex flex-col justify-center items-center text-white text-center px-6 md:px-[10%]">
        <h2 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] font-bold mb-6 drop-shadow-md text-primary animate-fadeIn">
          مجموعه إيكال
        </h2>
        <p className="text-[18px] md:text-[30px] lg:text-[40px] max-w-4xl leading-relaxed mb-10 animate-fadeIn delay-200">
          منذ تأسيسها، تسعى شركة إيكال لتقديم أفضل الخدمات والحلول في مجال
          المقاولات، برؤية تركز على الابتكار والجودة.
        </p>
        <div className="flex gap-6 animate-fadeIn delay-300">
          <Link
            href="#contact"
            className={`!text-xl !py-5 !px-10 ${buttonVariants({
              variant: "default",
            })}`}
          >
            تواصل معنا
          </Link>
          <Link
            href="#about"
            className={`!text-xl !py-5 !px-10 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            عن الشركة
          </Link>
        </div>
      </div>
    </div>
  );
}