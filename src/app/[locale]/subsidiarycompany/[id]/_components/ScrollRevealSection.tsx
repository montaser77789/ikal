"use client";
import { useEffect } from "react";
import AOS from "aos";
import image from "../../../../../../public/why us/aerial-view-dubai-city-from-top-tower.jpg";
import { Building2 } from "lucide-react";

export default function ScrollRevealSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out-quart",
    });
  }, []);

  return (
    <section
      className="relative h-auto min-h-[500px] md:h-[200px] flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      {/* طبقة التعتيم مع تدرج لوني */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

      {/* المحتوى */}
      <div className="relative container ">
        <div className="w-full m-auto flex flex-col items-center justify-center">
          {/* النص الرئيسي */}
          <div data-aos="fade-right" className="text-white text-center ">
            <div className="inline-flex items-center justify-center m-auto gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
              <Building2 className="w-5 h-5" />
              <span>تشكيل المدن</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-primary">رؤيتنا</span> في تشكيل أفق المدن
            </h2>

            <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              نطور حلولاً عقارية مبتكرة تجمع بين الجمال المعماري والكفاءة
              الوظيفية، لخلق مساحات معيشية وعملية تلبي تطلعات عملائنا في السوق
              العقاري المتميز.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
