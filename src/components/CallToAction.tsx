"use client";

import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#f7f7f7] to-gray-100">
      <div className="container text-center max-w-4xl">
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 leading-relaxed">
          هل لديك مشروع وتبحث عن شريك موثوق؟
        </h3>
        <p className="text-gray-600 text-lg mb-8 leading-loose">
          في شركة إيكال للمقاولات، نمتلك الخبرة والقدرات لتنفيذ مشاريعك بأعلى معايير الجودة والدقة.
          تواصل معنا اليوم ودعنا نساعدك في تحويل فكرتك إلى واقع ملموس.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-10 rounded-full transition duration-300 shadow-md"
        >
          اتصل بنا الآن
        </Link>
      </div>
    </section>
  );
}
