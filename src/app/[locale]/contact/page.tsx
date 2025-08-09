"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
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
          <p>المدينة: بقيق</p>
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
            نحن هنا لمساعدتك في أي استفسار أو طلب
          </p>
        </div>
      </section>

            {/* Form + Map */}
      <section className="py-20 ">
        <div className="container grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div
            className="bg-white rounded-3xl shadow-xl p-8 md:p-10"
            data-aos="fade-right"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              أرسل رسالة
            </h2>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.1868735000006!2d46.67278231500049!3d24.83145598407084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3e9b4b92a9f%3A0xe8a3a5c5d9a3f1d5!2sRiyadh!5e0!3m2!1sen!2ssa!4v1620000000000!5m2!1sen!2ssa"
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

      {/* Contact Info Cards */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {item.title}
              </h3>
              <div className="text-gray-600 text-sm leading-relaxed">
                {item.details}
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}
