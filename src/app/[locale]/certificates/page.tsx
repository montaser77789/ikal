"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Info, Check, FileText, Shield, ClipboardList, Users, FileBadge, Award } from "lucide-react";
import certificate1 from "../../../../public/certificates/Screenshot 2025-08-08 031138.png";
import certificate2 from "../../../../public/certificates/Screenshot 2025-08-08 031155.png";
import certificate3 from "../../../../public/certificates/Screenshot 2025-08-08 031208.png";
import certificate4 from "../../../../public/certificates/Screenshot 2025-08-08 031222.png";
import bannerImage from "../../../../public/certificates/engineer-construction-site.jpg"; // صورة البانر الجديدة

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";

const certificates = [
  {
    id: 1,
    title: "شهادة الاشتراك",
    image: certificate1,
    description: "شهادة معتمدة تثبت اشتراك الشركة في المنظومة التجارية",
  },
  {
    id: 2,
    title: "شهادة التأمينات الاجتماعية",
    image: certificate2,
    description: "وثيقة رسمية تثبت التزام الشركة بنظام التأمينات الاجتماعية",
  },
  {
    id: 3,
    title: "شهادة السجل التجاري",
    image: certificate3,
    description: "وثيقة تسجيل الشركة رسمياً في السجل التجاري السعودي",
  },
  {
    id: 4,
    title: "شهادة السعودة",
    image: certificate4,
    description: "شهادة تثبت التزام الشركة بنسب التوطين المطلوبة",
  },
];

export default function CertificatesGallery() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out-quart",
      once: true,
    });
  }, []);

  type SwiperHTMLElement = HTMLElement & {
    swiper?: { slideTo: (index: number) => void };
  };

  return (
    <div className="bg-white">
      {/* Hero Banner Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={bannerImage}
            alt="شهادات شركة إيكال"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center text-white z-10" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            الشهادات والاعتمادات
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            وثائق رسمية تثبت مصداقية مجموعة إيكال وتميزها في السوق
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container ">
          {/* Modern Swiper Gallery */}
          <div
            className="relative bg-white rounded-2xl shadow-xl overflow-hidden h-screen"
            data-aos="fade-up"
          >
            <Swiper
              modules={[Navigation, Pagination, Zoom]}
              navigation={{
                prevEl: ".cert-prev",
                nextEl: ".cert-next",
              }}
              pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className}">${certificates[index].title}</span>`;
                },
              }}
              zoom={true}
              className="certificates-swiper h-screen mt-12"
            >
              {certificates.map((cert) => (
                <SwiperSlide key={cert.id} className="relative">
                  <div className="swiper-zoom-container h-screen">
                    <div className="relative h-full w-full">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        quality={100}
                        priority={cert.id === 1}
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold">{cert.title}</h3>
                        <p className="text-sm opacity-80">{cert.description}</p>
                      </div>
                      <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                        <Info className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <button className="cert-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all">
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button className="cert-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all">
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>

          {/* Thumbnail Grid */}
          <div
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3"
            data-aos="fade-up"
          >
            {certificates.map((cert) => (
              <button
                key={cert.id}
                className="relative group overflow-hidden rounded-lg border border-gray-200 hover:border-primary transition-all h-24"
                onClick={() => {
                  const swiperElement = document.querySelector(
                    ".certificates-swiper"
                  ) as SwiperHTMLElement | null;
                  swiperElement?.swiper?.slideTo(cert.id - 1);
                }}
              >
                <div className="absolute inset-0 bg-gray-100">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm font-medium px-2 text-center">
                    {cert.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Certificate Details */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100" data-aos="fade-up">
            <div className="grid md:grid-cols-2 divide-x divide-gray-100">
              <div className="p-8 md:p-10 bg-gradient-to-br from-gray-50 to-white">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      أهمية <span className="text-primary">الشهادات</span>
                    </h2>
                    <p className="text-gray-500 mt-1">لماذا تعتبر هذه الشهادات أساسية لأعمالنا؟</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "ضمان الجودة والالتزام بالمعايير الدولية",
                    "تعزيز الثقة مع العملاء والشركاء الاستراتيجيين",
                    "متطلبات قانونية معتمدة من جهات المملكة الرسمية",
                    "دليل على الاحترافية والموثوقية في السوق",
                    "تميز تنافسي في مجال الإنشاءات والمقاولات",
                    "التزام بمعايير السلامة والاستدامة"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <FileBadge className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">تفاصيل الشهادات</h3>
                    <p className="text-gray-500 mt-1">الوثائق الرسمية المعتمدة لشركة إيكال</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {certificates.map((cert) => (
                    <div 
                      key={cert.id} 
                      className="p-4 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                          {cert.id === 1 && <FileText className="w-5 h-5" />}
                          {cert.id === 2 && <Shield className="w-5 h-5" />}
                          {cert.id === 3 && <ClipboardList className="w-5 h-5" />}
                          {cert.id === 4 && <Users className="w-5 h-5" />}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                            {cert.title}
                            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">معتمد</span>
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">{cert.description}</p>
                          <div className="mt-2 flex items-center gap-2">
                            <span className="text-xs text-gray-500">تاريخ الإصدار: 01/01/2023</span>
                            <span className="text-xs text-gray-500">•</span>
                            <span className="text-xs text-gray-500">ساري حتى: 01/01/2025</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Swiper CSS */}
      <style jsx global>{`
        .certificates-swiper {
          --swiper-navigation-color: #3b82f6;
          --swiper-pagination-color: #3b82f6;
          --swiper-pagination-bullet-inactive-color: #999;
          --swiper-pagination-bullet-inactive-opacity: 1;
          --swiper-pagination-bullet-size: 12px;
          --swiper-pagination-bullet-horizontal-gap: 8px;
        }
        .certificates-swiper .swiper-pagination-bullet {
          width: auto;
          height: auto;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 14px;
          background: rgba(255,255,255,0.2);
          color: #fff;
          opacity: 1;
        }
        .certificates-swiper .swiper-pagination-bullet-active {
          background: #3b82f6;
          color: white;
        }
      `}</style>
    </div>
  );
}