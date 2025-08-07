"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  FaQuoteRight,
  FaBuilding,
  FaHome,
  FaIndustry,
  FaCity,
  FaHardHat,
  FaChartLine,
} from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import Sectiontitle from "@/components/Sectiontitle";

const testimonials = [
  {
    name: "شركة الراية للمقاولات",
    feedback:
      "نفخر بالتعامل مع شركة إيكال. يتمتع فريقهم بمستوى عالٍ من الاحترافية والتنظيم. المشروع تم تنفيذه بجودة عالية، وفق الجدول الزمني، وبميزانية مضبوطة. نتطلع إلى التعاون معهم مجددًا.",
    icon: <FaBuilding className="text-3xl text-primary" />,
    category: "مقاولات عامة",
  },
  {
    name: "مجموعة النخبة العقارية",
    feedback:
      "إيكال من أفضل الشركات التي تعاملنا معها في مجال الإنشاءات. لديهم خبرة واضحة في إدارة المشاريع، وسهولة في التواصل، ومرونة كبيرة في التعامل مع المتغيرات أثناء التنفيذ.",
    icon: <FaHome className="text-3xl text-primary" />,
    category: "تطوير عقاري",
  },
  {
    name: "مؤسسة الأفق الصناعي",
    feedback:
      "تعاملنا مع إيكال في بناء منشأة صناعية متطورة، وكانت النتيجة فوق التوقعات. التزامهم بالمعايير الهندسية واهتمامهم بالتفاصيل جعل المشروع نموذجًا يُحتذى به.",
    icon: <FaIndustry className="text-3xl text-primary" />,
    category: "إنشاءات صناعية",
  },
  {
    name: "شركة دروب للتطوير العقاري",
    feedback:
      "قمنا بتنفيذ عدة مشاريع سكنية مع إيكال. نُقدر عالياً دقتهم في العمل، وسرعة الاستجابة، وجودة التنفيذ التي تعكس فهمهم العميق للمجال العقاري.",
    icon: <FaCity className="text-3xl text-primary" />,
    category: "مجمعات سكنية",
  },
  {
    name: "شركة الهدى للأنظمة الذكية",
    feedback:
      "أعجبنا كثيرًا بانضباط فريق إيكال وقدرتهم على التعامل مع مشاريع البنية التحتية المعقدة. تعامل مهني واضح ورؤية استراتيجية في كل مرحلة من مراحل المشروع.",
    icon: <FaHardHat className="text-3xl text-primary" />,
    category: "بنية تحتية",
  },
  {
    name: "مجموعة الفتح للاستثمار",
    feedback:
      "تجربتنا مع إيكال كانت مثالية من كافة النواحي. تم تنفيذ مشروعنا التجاري في الوقت المحدد، بجودة ممتازة، وبتنسيق متكامل بين جميع الأطراف. نوصي بهم بشدة.",
    icon: <GiCommercialAirplane className="text-3xl text-primary" />,
    category: "مراكز تجارية",
  },
];

export default function TestimonialsSlider() {
  return (
    <section
      className="bg-gradient-to-b from-white to-gray-50 py-8 relative overflow-hidden"
      dir="rtl"
    >
      {/* عناصر زخرفية */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <Sectiontitle
          title="شهادات شركائنا"
          description="تعرف على ما يقوله عملاؤنا عن تجربة العمل معنا وجودة تنفيذ المشاريع"
        />

        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet bg-gray-300 opacity-100",
            bulletActiveClass: "swiper-pagination-bullet-active bg-primary",
          }}
          spaceBetween={30}
          slidesPerView={1}
          loop
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mt-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col transition-all hover:shadow-xl">
                <div className="mb-6 flex justify-between items-start">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    {testimonial.icon}
                  </div>
                  <FaQuoteRight className="text-primary/20 text-4xl" />
                </div>

                <div className="flex-grow">
                  <p className="text-gray-600 leading-loose text-lg mb-6">
                    &quot;{testimonial.feedback}&quot;
                  </p>
                </div>

                <div className="mt-auto">
                  <h4 className="text-xl font-semibold text-gray-800 mb-1">
                    {testimonial.name}
                  </h4>
                  <span className="text-primary text-sm font-medium">
                    {testimonial.category}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
