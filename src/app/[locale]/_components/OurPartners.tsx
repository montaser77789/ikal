"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Globe, ArrowRight } from "lucide-react";
import patern1 from  "../../../../public/Our paterns/Ikal-Group.png";
import patern2 from "../../../../public/Our paterns/Ikal-Group.png";
import patern3 from "../../../../public/Our paterns/artex.png";
import patern4 from "../../../../public/Our paterns/مدماك-الخليج-العقارية.png";
import Link from "@/components/link/Link";

const companies = [
  {
    id: 1,
    name: "ايكال المتحدة للمقاولات",
    image: patern2,
    slug: "rg",
    description: "الحلول الهندسية المتكاملة",
  },
  {
    id: 2,
    name: "ايكال للخدمات اللوجستية",
    image: patern1,
    slug: "ikal-engineering",
    description: "التميز في التنفيذ",
  },
  {
    id: 3,
    name: "مدماك الخليج",
    image: patern4,
    slug: "ikal-trading",
    description: "التوريدات والخدمات التجارية",
  },
  {
    id: 4,
    name: "ارتكس للاستشارات الهندسية",
    image: patern3,
    slug: "artex",
    description: "المقاولات والإنشاءات",
  },
];

const OurPartners = () => {
  const { locale } = useParams();

  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: "ease-in-out-quart",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <section className="py-8 bg-gray-50 ">
      <div className="container ">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            <Globe className="w-5 h-5" />
            <span>مجموعة إيكال</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900  mb-4">
            كيانات متخصصة برؤية موحدة
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 ">
            تضم مجموعة إيكال نخبة من الشركات المتخصصة التي تعمل بتكامل واحترافية
            لتقديم خدمات هندسية، صناعية وتجارية متنوعة تحت مظلة واحدة.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {companies.map((company) => (
            <div
              key={company.id}
              data-aos="fade-up"
              data-aos-delay={company.id * 100}
              className="group"
            >
              <Link
                href={`/${locale}/subsidiarycompany/${company.slug}`}
                className="block h-full"
              >
                <div className="h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200  hover:shadow-xl transition-all duration-300">
                  {/* Company Logo */}
                  <div className="relative min-h-40 bg-gray-100 flex items-center justify-center ">
                    <Image
                      src={company.image}
                      alt={company.name}
                  
                      className="object-contain w-auto transition-transform duration-500 group-hover:scale-105 group-hover:rotate-0"
                    />
                  </div>

                  {/* Company Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900  mb-2">
                      {company.name}
                    </h3>
                    <p className="text-gray-600  mb-4">{company.description}</p>
                    <div className="flex items-center text-primary font-medium">
                      <span>المزيد عن الشركة</span>
                      <ArrowRight
                        className={`w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1 ${
                          locale === "ar" ? "ml-2 rotate-180" : "mr-2"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <a
            href={`/${locale}/about`}
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            تعرف أكثر على مجموعة إيكال
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
