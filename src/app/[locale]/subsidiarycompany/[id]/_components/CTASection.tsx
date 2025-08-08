"use client";

import React from "react";
import "aos/dist/aos.css";
import Link from "next/link";
import { Phone, ArrowLeft, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="relative py-20  overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      <div className="relative container ">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            مستعدون لبدء مشروعك القادم؟
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            تواصل مع فريقنا اليوم للحصول على استشارة مجانية وتقديم عرض سعر مخصص
            لمتطلباتك
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link href="https://artex.com" target="_blank">
              <Button className="rounded-full px-8 py-6 text-lg ">
                <ArrowLeft className="w-5 h-5 ml-2" />
                زور موقعنا الإلكتروني
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-lg"
              >
                <MessageSquare className="w-5 h-5 ml-2" />
                تواصل مع الفريق
              </Button>
            </Link>
          </div>

          {/* Phone CTA */}
          <div
            className="mt-12 flex items-center justify-center gap-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-gray-600 text-sm">للحصول على استشارة فورية</p>
              <a
                href="tel:+966123456789"
                className=" font-bold text-xl text-primary transition-colors"
              >
                +966 12 345 6789
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
