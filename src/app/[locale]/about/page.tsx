"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import {
  Award,
  Users,
  Target,
  Handshake,
  Lightbulb,
  Check,

} from "lucide-react";

// استيراد الصور
import aboutHero from "../../../../public/about/lamp-design-with-fantasy-futuristic-style_23-2151101631.jpg";
import teamPhoto from "../../../../public/20220601210329649.jpg";
import constructionSite from "../../../../public/about/front-view-public-transport-arrangement (1).jpg";
import visionImage from "../../../../public/about/The-Official-Vision-2030-Logo-Set-Against-the-Riyadh-Night-View-Credits-American-Telephysicians.png";
import valuesImage from "../../../../public/about/urban-double-exposure-collage-concept.jpg";
import OurPartners from "../_components/OurPartners";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out-quart",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[300px] flex items-center">
        <Image
          src={aboutHero}
          alt="فريق إيكال"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="relative container text-white z-10">
          <div className="max-w-2xl m-auto text-center" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight">
              قصة <span className="text-primary">إيكال</span> ومسيرتنا
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              منذ 2016 ونحن نبني معاً مستقبل المملكة
            </p>
          </div>
        </div>
      </section>

      {/* Message from CEO */}
      {/* Modern CEO Message Section */}
      <section className="relative py-8 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-3" data-aos="fade-up">
            <span className="inline-block px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 tracking-wide">
              رسالة القيادة
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              كلمة <span className="text-primary">المدير العام</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              لمحة من فكر قيادتنا ورؤيتنا للمستقبل
            </p>
          </div>

          <div
            className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl"
            data-aos="fade-up"
          >
            <div className="grid lg:grid-cols-3">
              {/* CEO Photo - Modern Frame */}
              <div className="relative h-96 lg:h-auto group overflow-hidden">
                <Image
                  src={teamPhoto}
                  alt="المدير العام"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Decorative frame effect */}
                <div className="absolute inset-0 border-8 border-white opacity-20 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      عايض القحطاني
                    </h3>
                    <p className="text-gray-200">المدير العام</p>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="p-8 md:p-12 lg:col-span-2">
                <div className="flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-8 text-primary opacity-20">
                    <svg
                      className="w-16 h-16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Message Text */}
                  <div className="flex-grow space-y-6 text-gray-700 leading-relaxed text-lg">
                    <p className="italic text-xl font-medium text-gray-900">
                      &quot;السلام عليكم ورحمة الله وبركاته&quot;
                    </p>
                    <p>
                      يسعدني أن أرحب بكم في هذا الكتيب الذي يسلط الضوء على مسيرة
                      شركتنا وإنجازاتنا في مجال المقاولات. منذ تأسيسها، إيكال
                      تسعى دائماً لتقديم أفضل الخدمات التي تلبي توقعات عملائنا.
                    </p>
                    <p>
                      نعيش في عالم يتسم بالتطور السريع، ونؤمن بأهمية الابتكار
                      والتطوير المستمر. التزامنا ليس فقط بتنفيذ المشاريع بأعلى
                      معايير الجودة، ولكن أيضاً بالاستثمار في الأفراد
                      والتكنولوجيا.
                    </p>
                  </div>

                  {/* Signature */}
                  <div className="pt-8 mt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        عايض القحطاني
                      </p>
                      <p className="text-primary font-medium mt-2">
                        المدير العام - مجموعه إيكال المحدودة
                      </p>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurPartners />
      {/* Modern History Section */}
      <section className="relative py-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              جذورنا ومسيرتنا
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              قصة تأسيس <span className="text-primary">شركتنا</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Timeline */}
            <div className="relative" data-aos="fade-right">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-200"></div>

              {/* Timeline items */}
              <div className="space-y-10">
                {/* Item 1 */}
                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="text-xl font-bold">2016</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      التأسيس في الدمام
                    </h3>
                    <p className="text-gray-600">
                      بدأت رحلتنا بفريق صغير يحمل رؤية كبيرة لرفع معايير الجودة
                      في قطاع المقاولات.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white">
                    <span className="text-xl font-bold">2018</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      التوسع الأول
                    </h3>
                    <p className="text-gray-600">
                      ضاعفنا حجم فريقنا ووسعنا نطاق عملنا ليشمل مشاريع أكبر
                      وأكثر تعقيدًا.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="text-xl font-bold">2030</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      الشراكة في رؤية 2030
                    </h3>
                    <p className="text-gray-600">
                      أصبحنا شركاء فاعلين في تحقيق رؤية المملكة الطموحة من خلال
                      مشاريع نوعية.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image and description */}
            <div data-aos="fade-left">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src={constructionSite}
                  alt="تاريخ الشركة"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      من البداية إلى القمة
                    </h3>
                    <p className="text-gray-200 mb-6">
                      مسيرة من العمل الجاد والالتزام بالجودة قادتنا لأن نكون من
                      أبرز شركات المقاولات في المنطقة.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Vision & Mission Section */}
      <section className="relative py-8 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>

        <div className="container  relative z-10">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="group relative h-full" data-aos="fade-up">
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500"></div>
              <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-primary/20 transition-all duration-500">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={visionImage}
                    alt="رؤية الشركة"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary rounded-lg">
                        <Target className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl font-bold">رؤيتنا</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl font-bold text-gray-200 mt-2">
                      01
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      أن نكون الرائدين في مجال التجارة والمقاولات، بتقديم حلول
                      تكنولوجية حديثة تضمن الجودة والثبات في كل مشروع على مستوى
                      المملكة والعالم العربي.
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <ul className="space-y-3">
                      {[
                        "الريادة التقنية",
                        "التطوير المستمر",
                        "التوسع الإقليمي",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div
              className="group relative h-full"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500"></div>
              <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-primary/20 transition-all duration-500">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={valuesImage}
                    alt="رسالة الشركة"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary rounded-lg">
                        <Lightbulb className="w-5 h-5" />
                      </div>
                      <h3 className="text-2xl font-bold">رسالتنا</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl font-bold text-gray-200 mt-2">
                      02
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      تلبية احتياجات عملائنا بكل ثقة وضمان الرضا التام من خلال
                      حلول مبتكرة وخدمات استثنائية تعكس التزامنا الكامل بتحقيق
                      توقعاتهم.
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <ul className="space-y-3">
                      {[
                        "رضا العملاء",
                        "الحلول المبتكرة",
                        "الالتزام بالجودة",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements Animation */}
          <style jsx global>{`
            @keyframes float {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-15px);
              }
            }
            .group:hover .floating-element {
              animation: float 3s ease-in-out infinite;
            }
          `}</style>
        </div>
      </section>

      {/* Modern Values Section */}
      <section className="py-8 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-primary">قيمنا</span> الأساسية
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              الأسس التي نبني عليها كل إنجاز
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>

            {[
              {
                icon: <Handshake className="w-8 h-8" />,
                title: "الموثوقية",
                description: "نلتزم بوعودنا ونحترم التزاماتنا تجاه العملاء",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "الجودة",
                description: "معايير دقيقة لا تقبل المساومة في كل تفصيل",
                color: "bg-emerald-100 text-emerald-600",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "العمل الجماعي",
                description: "شراكة حقيقية تخلق نتائج استثنائية",
                color: "bg-amber-100 text-amber-600",
              },
            ].map((value, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="relative group"
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group-hover:shadow-lg transition-all duration-500 z-10">
                  {/* Animated Background */}
                  <div
                    className={`absolute inset-0 ${value.color.replace(
                      "bg-",
                      "bg-opacity-0 group-hover:bg-opacity-10"
                    )} transition-all duration-500`}
                  ></div>

                  <div className="relative p-8 z-10 m-auto text-center">
                    {/* Icon with modern style */}
                    <div
                      className={`w-16 h-16 ${value.color} m-auto rounded-2xl flex items-center justify-center mb-6 transform group-hover:-translate-y-1 transition-transform duration-300`}
                    >
                      {value.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>

                    {/* Animated Border */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Floating Dots Decoration */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center z-0">
                  <div className="w-2 h-2 rounded-full bg-primary/80"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center z-0">
                  <div className="w-2 h-2 rounded-full bg-primary/80"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Animation */}
          <style jsx global>{`
            @keyframes float {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }
            .group:hover .floating-icon {
              animation: float 3s ease-in-out infinite;
            }
          `}</style>
        </div>
      </section>
    </div>
  );
}
