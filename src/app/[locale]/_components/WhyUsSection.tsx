"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaAward, 
  FaUsersCog, 
  FaHeart,
  FaArrowLeft
} from "react-icons/fa";
import { 
  GiModernCity,
} from "react-icons/gi";

// صور الخلفيات
import experienceBg from "../../../../public/why us/abu-dhabi-seascape-with-skyscrapers.jpg";
import qualityBg from "../../../../public/why us/aerial-view-dubai-city-from-top-tower.jpg";
import teamBg from "../../../../public/why us/beautiful-london-streets-cityscape.jpg";
import satisfactionBg from "../../../../public/why us/shanghai-aerial-sunset.jpg";
import Sectiontitle from "@/components/Sectiontitle";

export default function WhyUsSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const features = [
    {
      title: "خبرة واسعة",
      description: "أكثر من 15 عاماً من النجاح في تنفيذ المشاريع الكبرى في مجالات البنية التحتية، المجمعات السكنية، المراكز التجارية والمنشآت الصناعية.",
      icon: <GiModernCity className="w-full h-full" />,
      bgImage: experienceBg,
      link: "/about#experience"
    },
    {
      title: "جودة وتنفيذ دقيق",
      description: "نلتزم بأعلى معايير الجودة العالمية باستخدام أحدث التقنيات ومواد البناء المعتمدة مع فريق مراقبة جودة متخصص.",
      icon: <FaAward className="w-full h-full" />,
      bgImage: qualityBg,
      link: "/quality"
    },
    {
      title: "فريق متخصص",
      description: "طاقم عمل من المهندسين والخبراء ذوي الكفاءة العالية مع تدريب مستمر لضمان أحدث الأساليب الهندسية.",
      icon: <FaUsersCog className="w-full h-full" />,
      bgImage: teamBg,
      link: "/team"
    },
    {
      title: "رضا العملاء",
      description: "شراكات طويلة الأمد مع كبرى الشركات والعملاء الأفراد بناءً على الثقة والشفافية والنتائج الملموسة.",
      icon: <FaHeart className="w-full h-full" />,
      bgImage: satisfactionBg,
      link: "/clients"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden ">
      {/* عناصر زخرفية */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <Sectiontitle
          title="لماذا تختار إيكال؟"
          description="نقدم حلولاً هندسية متكاملة تجمع بين الإبداع والدقة لتحقيق رؤيتك"
        />
        
        {/* بطاقات المميزات */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-96"
              data-aos="fade-up"
              data-aos-delay={150 * (index + 1)}
            >
              {/* صورة الخلفية */}
              <div className="absolute inset-0">
                <Image
                  src={feature.bgImage}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              </div>

              {/* المحتوى - يعمل على جميع الأجهزة */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-primary transition-all duration-300 md:group-hover:bg-primary">
                  <div className="text-2xl text-white">
                    {feature.icon}
                  </div>
                </div>

                <div className="transform translate-y-0 md:translate-y-10 md:group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-200 mb-4">
                    {feature.description}
                  </p>
                  <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-300 flex items-center gap-2 text-sm font-medium">
                    <span>المزيد من التفاصيل</span>
                    <FaArrowLeft className="text-xs" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ستايل مخصص لتحسين العرض على الموبايل */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .h-96 {
            height: auto;
            min-height: 320px;
          }
        }
      `}</style>
    </section>
  );
}