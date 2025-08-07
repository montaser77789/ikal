// app/projects/page.tsx
"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { FaCalendarAlt, FaMoneyBillWave, FaPhone, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import heroBg from "../../../../public/high-angle-measuring-tools-desk-still-life.jpg";
import image1 from "../.././../../public/projects/The-Costal-Development-Cultural-Village-scaled-1-1024x488.jpg";
import image3 from "../.././../../public/projects/Picture9.jpg";
import image4 from "../.././../../public/projects/2I4A0043-copy-2-scaled1-1.jpg";
import image2 from "../.././../../public/projects/images.jpg";
import CallToAction from "@/components/CallToAction";

const projectsData = [
   {
    id : 1,
    title: "مشروع أمال 1",
    client: "شركة SSEM",
    description:
      "تركيب كابلات تحت الأرض بفولتية 115 ك.ف من محطة الجلاويلي إلى محطة أمال 13.8/115 ك.ف",
    value: "5,000,000 ر.س",
    endDate: "حتى الآن",
    image: image1,
  },
  {
    id : 2,
    title: "مشروع سيهات",
    client: "شركة SSEM",
    description:
      "تركيب كابلات تحت الأرض 115 ك.ف إلى محطة المحمدية (السابق سيهات 3) 13.8/115 ك.ف",
    value: "12,000,000 ر.س",
    endDate: "2021",
    image: image3,
  },
  {
    id : 3,
    title: "مركز بيانات STC الدمام",
    client: "شركة بيتا",
    description: "توريد وتركيب الأسفلت والإنترلوك والكربستون",
    value: "1,500,000 ر.س",
    endDate: "حتى الآن",
    image: image2,
  },
  {
    id : 4,
    title: "تحسين نوعية المياه – الدمام",
    client: "الخريف لتقنيات المياه والطاقة",
    description:
      "تركيب مواسير مياه قطر 1000 مم وعمق من 3 إلى 3.5 م وتنفيذ حجرات القيادة وغرف التفتيش",
    value: "12,000,000 ر.س",
    endDate: "حتى الآن",
    image: image4,
  },
];

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-quad'
    });
  }, []);

  return (
    <div className="bg-gray-50" dir="rtl">
      {/* سكشن الهيرو */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image
          src={heroBg}
          alt="مشاريعنا"
          fill
          className="object-cover"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            مشاريعنا
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            نقدم حلولاً هندسية متكاملة تجمع بين الإبداع والدقة لتحقيق رؤيتك
          </p>
        </div>
      </section>

      {/* سكشن عرض المشاريع */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            أحدث <span className="text-primary">المشاريع</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full !p-0">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {project.title}
                    </CardTitle>

                  </div>
                  
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <FaMoneyBillWave className="text-primary" />
                      <span>{project.value}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-primary" />
                      <span>{project.endDate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* سكشن التواصل */}
          <CallToAction />
    </div>
  );
}