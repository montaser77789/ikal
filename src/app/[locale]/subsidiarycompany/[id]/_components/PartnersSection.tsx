"use client";
import Image from "next/image";
import logo1 from "../../../../../../public/Our paterns/artex.png";
import logo2 from "../../../../../../public/Our paterns/artex.png";
import logo4 from "../../../../../../public/Our paterns/artex.png";
import logo5 from "../../../../../../public/Our paterns/artex.png";
import logo8 from "../../../../../../public/Our paterns/artex.png";
import logo9 from "../../../../../../public/Our paterns/artex.png";
import logo10 from "../../../../../../public/Our paterns/artex.png";
import logo11 from "../../../../../../public/Our paterns/artex.png";
import logo12 from "../../../../../../public/Our paterns/artex.png";
import logo13 from "../../../../../../public/Our paterns/artex.png";
import logo14 from "../../../../../../public/Our paterns/artex.png";
import logo15 from "../../../../../../public/Our paterns/artex.png";
import { Locale } from "@/i18n.config";
import Sectiontitle from "@/components/Sectiontitle";

const PartnersSection = ({ locale }: { locale: Locale }) => {
  const PartnersLogos = [
    logo1,
    logo2,
    logo4,
    logo5,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
  ];

  return (
    <section
      dir="ltr"
      className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
    >
      <div className="container relative z-10">
        <Sectiontitle
          title="عملائنا المميزون"
          description="نحن نشارك مع العلامات التجارية الأفضل لتقديم نتائج استثنائية"
        />

        {/* Logo marquee container */}
        <div className="relative">
          {/* First marquee row */}
          <div className="flex mb-8">
            <div className="animate-marquee flex space-x-8 pr-8">
              {PartnersLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center p-1 transition-all duration-300 hover:grayscale-0 grayscale"
                  style={{ width: "160px", height: "160px" }}
                >
                  <Image
                    src={logo}
                    alt="Partner Logo"
                    width={120}
                    height={120}
                    className="w-[140px] h-[140px] object-contain"
                  />
                </div>
              ))}
            </div>
            <div
              className="animate-marquee flex space-x-8 pr-8"
              aria-hidden="true"
            >
              {PartnersLogos.map((logo, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex-shrink-0 flex items-center justify-center p-1 grayscale"
                  style={{ width: "160px", height: "160px" }}
                >
                  <Image
                    src={logo}
                    alt="Partner Logo"
                    width={120}
                    height={120}
                    className="w-[120px] h-[120px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
