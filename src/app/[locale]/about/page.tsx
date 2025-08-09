"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Award, Users, Building, Target, Handshake, Lightbulb } from "lucide-react";

// استيراد الصور
import aboutHero from "../../../../public/20220601210329649.jpg";
import teamPhoto from "../../../../public/20220601210329649.jpg";
import constructionSite from "../../../../public/20220601210329649.jpg";
import visionImage from"../../../../public/20220601210329649.jpg"
import valuesImage from "../../../../public/20220601210329649.jpg";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-quart',
      once: true,
      offset: 100
    });
  }, []);
  return (
    <h1 className="text-2xl flex items-center justify-center h-screen">جاري العمل عليها وستظهر قريبا ....</h1>
  )

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <Image
          src={aboutHero}
          alt="فريق إيكال"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="relative container mx-auto px-4 text-white z-10">
          <div className="max-w-2xl" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              قصة <span className="text-primary">إيكال</span> ومسيرتنا
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              منذ 2016 ونحن نبني معاً مستقبل المملكة
            </p>
          </div>
        </div>
      </section>

      {/* Message from CEO */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-up">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-80 lg:h-full">
                <Image
                  src={teamPhoto}
                  alt="المدير العام"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Users className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    كلمة المدير العام
                  </h2>
                </div>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="italic text-lg">
                    &quot;السلام عليكم ورحمة الله وبركاته&quot;
                  </p>
                  <p>
                    يسعدني أن أرحب بكم في هذا الكتيب الذي يسلط الضوء على مسيرة شركتنا وإنجازاتنا في مجال المقاولات. منذ تأسيسها، إيكال تسعى دائماً لتقديم أفضل الخدمات التي تلبي توقعات عملائنا.
                  </p>
                  <p>
                    نعيش في عالم يتسم بالتطور السريع، ونؤمن بأهمية الابتكار والتطوير المستمر. التزامنا ليس فقط بتنفيذ المشاريع بأعلى معايير الجودة، ولكن أيضاً بالاستثمار في الأفراد والتكنولوجيا.
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="font-medium">عايض القحطاني</p>
                    <p className="text-primary">المدير العام - شركة إيكال المحدودة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl" data-aos="fade-right">
              <Image
                src={constructionSite}
                alt="تاريخ الشركة"
                fill
                className="object-cover"
              />
            </div>
            <div data-aos="fade-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Building className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  تاريخ الشركة ونشأتها
                </h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  في قلب مدينة ينبع، وتحديداً في عام 2016، رأت شركتنا النور كنتيجة لرؤية طموحة وحلم كبير بأن نكون جزءاً حيوياً من نهضة المملكة الهندسية.
                </p>
                <p>
                  بدأنا مع فريق محدود لكن بأفكار واضحة وهدف معين: تقديم خدمات مقاولات على مستوى عالٍ من الجودة. بمرور الوقت، توسعنا وزاد فريقنا، لكن التزامنا بالجودة ظل ثابتاً.
                </p>
                <p>
                  اليوم، نفخر بأننا لم نكن مجرد شركة مقاولات، بل شركاء في رفعة وتقدم المملكة، مساهمين في تحقيق رؤية 2030.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-up">
              <div className="relative h-60">
                <Image
                  src={visionImage}
                  alt="رؤية الشركة"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">رؤيتنا</h3>
                </div>
                <p className="text-gray-600">
                  أن نكون الرائدين في مجال التجارة والمقاولات، بتقديم حلول تكنولوجية حديثة تضمن الجودة والثبات في كل مشروع على مستوى المملكة.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-up" data-aos-delay="200">
              <div className="relative h-60">
                <Image
                  src={valuesImage}
                  alt="رسالة الشركة"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">رسالتنا</h3>
                </div>
                <p className="text-gray-600">
                  تلبية احتياجات عملائنا بكل ثقة وضمان الرضا عن النتائج من خلال خدمات صادقة والتزام كامل تجاه متطلباتهم.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">قيمنا الأساسية</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              المبادئ التي نؤمن بها ونسير عليها في كل مشروع
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Handshake className="w-8 h-8" />,
                title: "الموثوقية",
                description: "نحن نفي بوعودنا ونحترم التزاماتنا تجاه العملاء"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "الجودة",
                description: "لا نقبل إلا الأفضل في كل ما نقدمه من خدمات"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "العمل الجماعي",
                description: "تعاون فريقنا هو سر نجاح كل مشروع"
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}