"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";
import contactImage from "../../../../public/contact/elegant-man-talking-phone-low-angle-shot (1).jpg";
import Image from "next/image";

export default function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out-quart",
      once: true,
    });
  }, []);

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "الهاتف",
      details: (
        <a
          href="tel:+966133302922"
          className="hover:text-primary transition-colors"
        >
          +966-13-330-2922
        </a>
      ),
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "البريد الإلكتروني",
      details: (
        <a
          href="mailto:info@ikal.sa"
          className="hover:text-primary transition-colors"
        >
          info@ikal.sa
        </a>
      ),
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "المقر الرئيسي",
      details: (
        <>
          <p>المملكة العربية السعودية</p>
          <p>المدينة: الدمام</p>
          <p>صندوق البريد: 4912</p>
          <p>الرمز البريدي: 33261</p>
        </>
      ),
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "ساعات العمل",
      details: "الأحد - الخميس: 8 صباحاً - 5 مساءً",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={contactImage}
            alt="اتصل بشركة إيكال"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div
          className="relative container text-center text-white z-10"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">تواصل معنا</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            نحن نقدم حلولاً هندسية متكاملة تجمع بين الإبداع والدقة لتحقيق رؤيتك
          </p>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-8 ">
        <div className="container grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div
            className="bg-white rounded-3xl shadow-xl p-8 md:p-10"
            data-aos="fade-right"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              لديك سؤال، اقتراح أو شكوى ؟
            </h2>
            <p className="text-gray-600 mb-8">
              يرجى ملء النموذج أدناه وسنقوم بالرد عليك في أقرب وقت ممكن.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  الموضوع
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  الرسالة
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                إرسال الرسالة
              </button>
            </form>
          </div>

          {/* Map */}
          <div
            className="rounded-3xl overflow-hidden shadow-xl"
            data-aos="fade-left"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27321.298837988943!2d30.65112675!3d31.133005599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f65b0d3ffa59bb%3A0x492dc14ca6f9c613!2z2K_Ys9mI2YLYjCDZg9mB2LEg2KXYqNix2KfZh9mK2YXYjCDZgtiz2YUg2K_Ys9mI2YLYjCDZhdit2KfZgdi42Kkg2YPZgdixINin2YTYtNmK2K4!5e0!3m2!1sar!2seg!4v1754767298097!5m2!1sar!2seg"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen
              loading="lazy"
              title="موقع شركة إيكال على الخريطة"
            ></iframe>

      
          </div>
        </div>
      </section>

      {/* Modern Contact Info Section */}
      <section className="relative py-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="container  relative z-10">
          {/* Section header */}
          <div className="text-center mb-10" data-aos="fade-up">
            <span className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 tracking-wider">
              تواصل معنا
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              طرق <span className="text-primary">التواصل</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نحن هنا لمساعدتك في أي استفسار أو طلب
            </p>
          </div>

          {/* Contact cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Card background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Decorative accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>

                {/* Card content */}
                <div className="relative p-8 text-center h-full flex flex-col items-center">
                  {/* Icon with modern background */}
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary flex items-center justify-center transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                    {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  {/* Details with hover effect */}
                  <div className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
                    {typeof item.details === "string" ? (
                      <p>{item.details}</p>
                    ) : (
                      item.details
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
