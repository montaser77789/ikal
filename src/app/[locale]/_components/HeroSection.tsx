// app/components/HeroSlider.tsx
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import image1 from "../../../../public/hero section/93952dc9cc684e057292c349c21618c5cfc4e9fb.jpg";
import image2 from "../../../../public/hero section//observation-urban-building-business-steel.jpg";
import image3 from "../../../../public/hero section/workers-examining-work.jpg";
import Image from "next/image";
import Link from "@/components/link/Link";
import { buttonVariants } from "@/components/ui/button";

const slides = [
  {
    title: "إيكال للمقاولات",
    subtitle:
      "منذ تأسيسها، تسعى شركة إيكال لتقديم أفضل الخدمات والحلول في مجال المقاولات، برؤية تركز على الابتكار والجودة.",
    image: image2,
    primaryLink: "#contact",
    primaryText: "تواصل معنا",
    secondaryLink: "#about",
    secondaryText: "عن الشركة",
  },
  {
    title: "نتميز بالجودة والدقة",
    subtitle:
      "نلتزم بتنفيذ المشاريع بأعلى معايير الجودة والدقة، مستثمرين في الأفراد والتكنولوجيا لنضمن تقديم الأفضل دائمًا.",
    image: image1,
    primaryLink: "#services",
    primaryText: "خدماتنا",
    secondaryLink: "#certificates",
    secondaryText: "شهاداتنا",
  },
  {
    title: "الابتكار هو طريقنا",
    subtitle:
      "نستخدم أحدث الحلول التكنولوجية والتصميمات ثلاثية الأبعاد والبناء الذكي لنحقق الكفاءة والاستدامة في مشاريعنا.",
    image: image3,
    primaryLink: "#tech",
    primaryText: "ابتكاراتنا",
    secondaryLink: "#projects",
    secondaryText: "مشاريعنا",
  },
];

export default function HeroSection() {
  return (
    <div className="hero-slider relative h-screen overflow-hidden" dir="rtl">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={2}
        slidesPerView={"auto"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="h-[650px] md:h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              priority
              src={slide.image}
              alt={slide.title}
              className="slide-image absolute w-full h-full object-cover top-0 left-0"
            />
            <div className="slide-overlay absolute w-full h-full bg-black/55 z-10" />
            <div className=" relative z-20 h-full flex flex-col justify-center items-center px-[10%] text-white  mx-auto">
              <h2 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px]  font-bold mb-6 text-primary drop-shadow-md transition-all ">
                {slide.title}
              </h2>
              <p className="text-[18px] md:text-[30px] lg:text-[40px]   max-w-4xl text-center leading-loose mb-10 transition-all">
                {slide.subtitle}
              </p>
              <div className="slide-buttons flex gap-6 transition-all">
                <Link
                  href={slide.primaryLink}
                  className={`  !text-xl  !py-5 !px-7  ${buttonVariants({
                    variant: "default",
                  })}`}
                >
                  {slide.primaryText}
                </Link>
                <Link
                  href={slide.secondaryLink}
                  className={` !text-xl  !py-5 !px-7   ${buttonVariants({
                    variant: "outline",
                  })}`}
                >
                  {slide.secondaryText}
                </Link>
              </div>
            </div>
            <div className="swiper-button-prev !top-auto  after:!text-white after:!text-2xl"></div>
            <div className="swiper-button-next !top-auto  after:!text-white after:!text-2xl"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
