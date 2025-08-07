"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Sectiontitle from "@/components/Sectiontitle";
import { FaCalendarAlt, FaMoneyBillWave } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import image1 from "../.././../../public/projects/The-Costal-Development-Cultural-Village-scaled-1-1024x488.jpg";
import image3 from "../.././../../public/projects/Picture9.jpg";
import image4 from "../.././../../public/projects/2I4A0043-copy-2-scaled1-1.jpg";
import image2 from "../.././../../public/projects/images.jpg";
import Link from "@/components/link/Link";
import { useParams } from "next/navigation";
import { Pages } from "@/components/constants/enum";

const projects = [
  {
    title: "مشروع أمال 1",
    client: "شركة SSEM",
    description:
      "تركيب كابلات تحت الأرض بفولتية 115 ك.ف من محطة الجلاويلي إلى محطة أمال 13.8/115 ك.ف",
    value: "5,000,000 ر.س",
    endDate: "حتى الآن",
    image: image1,
  },
  {
    title: "مشروع سيهات",
    client: "شركة SSEM",
    description:
      "تركيب كابلات تحت الأرض 115 ك.ف إلى محطة المحمدية (السابق سيهات 3) 13.8/115 ك.ف",
    value: "12,000,000 ر.س",
    endDate: "2021",
    image: image3,
  },
  {
    title: "مركز بيانات STC الدمام",
    client: "شركة بيتا",
    description: "توريد وتركيب الأسفلت والإنترلوك والكربستون",
    value: "1,500,000 ر.س",
    endDate: "حتى الآن",
    image: image2,
  },
  {
    title: "تحسين نوعية المياه – الدمام",
    client: "الخريف لتقنيات المياه والطاقة",
    description:
      "تركيب مواسير مياه قطر 1000 مم وعمق من 3 إلى 3.5 م وتنفيذ حجرات القيادة وغرف التفتيش",
    value: "12,000,000 ر.س",
    endDate: "حتى الآن",
    image: image4,
  },
];

export default function ProjectsPreviewSection() {
  const { locale } = useParams();
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quad",
    });
  }, []);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden" dir="rtl">
      {/* عناصر زخرفية */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl"></div>

      <div className="container px-4 mx-auto">
        <Sectiontitle
          title="إنجازاتنا"
          description="نماذج مميزة من مشاريعنا التي نفخر بتنفيذها"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-offset="100"
            >
              <Card className="rounded-2xl !p-0 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full border-0">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <CardContent className="p-6 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                        {project.title}
                      </CardTitle>
                      <p className="text-base text-gray-600 font-medium">
                        {project.client}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed border-t pt-4">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <FaMoneyBillWave className="text-primary text-xl" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">القيمة</p>
                        <p className="font-bold text-lg">{project.value}</p>
                      </div>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <FaCalendarAlt className="text-primary text-xl" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">تاريخ الانتهاء</p>
                        <p className="font-bold text-lg">{project.endDate}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Link
            href={`/${locale}/${Pages.PROJECTS}`}
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            اكتشف جميع مشاريعنا
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
