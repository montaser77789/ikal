// components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { usePathname } from "next/navigation";
import logo from "../../../public/favicon.png"

export default function Footer() {
  const pathname = usePathname();

  // إخفاء الفوتر في بعض الصفحات إذا لزم الأمر
  if (pathname === "/admin" || pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <footer className="bg-primary text-white pt-16 pb-8" dir="rtl">
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* معلومات الشركة */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image 
                src={logo}
                alt="شعار إيكال" 
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white leading-relaxed">
              مجموعة إيكال للمقاولات العامة - تقدم حلولاً متكاملة في مجال الإنشاءات والبنية التحتية بجودة عالية واحترافية.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-white transition">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-white hover:text-white transition">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-white hover:text-white transition">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="text-white hover:text-white transition">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white hover:text-white transition">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-white transition">
                  عن مجموعة
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-white transition">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white hover:text-white transition">
                  مشاريعنا
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-white transition">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* خدماتنا */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">خدماتنا</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/infrastructure" className="text-white hover:text-white transition">
                  البنية التحتية
                </Link>
              </li>
              <li>
                <Link href="/services/residential" className="text-white hover:text-white transition">
                  المشاريع السكنية
                </Link>
              </li>
              <li>
                <Link href="/services/commercial" className="text-white hover:text-white transition">
                  المشاريع التجارية
                </Link>
              </li>
              <li>
                <Link href="/services/industrial" className="text-white hover:text-white transition">
                  المشاريع الصناعية
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-white hover:text-white transition">
                  الصيانة والتشغيل
                </Link>
              </li>
            </ul>
          </div>

          {/* معلومات التواصل */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold mb-6 text-white">تواصل معنا</h3>
            <div className="flex items-start gap-4">
              <FaPhone className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-white">الهاتف</p>
                <a href="tel:+966123456789" className="hover:text-white transition">+966 12 345 6789</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-white">البريد الإلكتروني</p>
                <a href="mailto:info@ikal.com" className="hover:text-white transition">info@ikal.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-white">العنوان</p>
                <p>المملكة العربية السعودية، الرياض، شارع الملك فهد</p>
              </div>
            </div>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} شركة إيكال للمقاولات. جميع الحقوق محفوظة.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <Link href="/privacy" className="hover:text-white transition">
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}