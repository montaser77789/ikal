// components/home/FAQSection.tsx
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Sectiontitle from "@/components/Sectiontitle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "@/components/link/Link";
import { useParams } from "next/navigation";
import { Pages } from "@/components/constants/enum";

const faqs = [
  {
    question: "ما هي مجالات العمل التي تغطيها شركة إيكال؟",
    answer:
      "نحن متخصصون في مشاريع البنية التحتية، الإنشاءات السكنية والتجارية، المشاريع الصناعية، وأعمال التطوير العمراني. لدينا فريق من الخبراء في كل مجال لضمان تنفيذ مشاريعنا بأعلى معايير الجودة.",
  },
  {
    question: "هل تقدمون استشارات قبل تنفيذ المشروع؟",
    answer:
      "نعم، نقدم حزمة متكاملة من الخدمات الاستشارية تشمل: دراسات الجدوى الفنية والمالية، التصميم الهندسي المتكامل، خطط التنفيذ التفصيلية، وتحليل المخاطر المحتملة.",
  },
  {
    question: "ما هي التقنيات الحديثة التي تستخدمونها في المشاريع؟",
    answer:
      "نستخدم أحدث التقنيات في مجالنا مثل: نمذجة معلومات البناء (BIM)، مواد البناء المستدامة، أنظمة الذكاء الاصطناعي في التخطيط، وأدوات إدارة المشاريع المتطورة لضمان الدقة والكفاءة.",
  },
  {
    question: "ما هي ضمانات الجودة التي تقدمونها؟",
    answer:
      "نلتزم بمعايير الجودة العالمية (ISO 9001) ونقدم: ضمان على المواد المستخدمة، ضمان على الأعمال المنفذة، تقارير جودة دورية، وتقييمات ما بعد التنفيذ.",
  },
  {
    question: "كيف تتعاملون مع المشاريع الكبيرة والمعقدة؟",
    answer:
      "نتبع منهجية علمية في إدارة المشاريع الكبيرة تشمل: تقسيم المشروع إلى مراحل، تعيين مدير مشروع مخصص، اجتماعات تنسيق أسبوعية، واستخدام أنظمة تتبع متقدمة.",
  },
  {
    question: "ما هي مدة تنفيذ المشاريع النموذجية لديكم؟",
    answer:
      "تختلف المدة حسب حجم ونوع المشروع، ولكننا نلتزم بجدول زمني دقيق ونقدم: تقارير تقدم أسبوعية، نظام إنذار مبكر لأي تأخيرات محتملة، وخطة طوارئ للتعامل مع أي طارئ.",
  },
  {
    question: "هل لديكم مشاريع خارج المنطقة؟",
    answer:
      "نعم، لدينا خبرة في تنفيذ مشاريع في مختلف مناطق المملكة العربية السعودية، كما نقوم بمشاريع في بعض الدول المجاورة. نضمن نفس معايير الجودة والكفاءة في جميع مواقعنا.",
  },
  {
    question: "كيف يمكنني متابعة تقدم المشروع؟",
    answer:
      "نوفر نظام متابعة إلكتروني يمكنك من: مشاهدة التقدم اليومي، استلام تقارير مصورة، التواصل المباشر مع فريق المشروع، وحضور اجتماعات المتابعة عن بعد.",
  },
  {
    question: "ما هي سياستكم في التعامل مع التغييرات أثناء التنفيذ؟",
    answer:
      "لدينا نظام مرن لإدارة التغييرات يشمل: تقييم فوري للتأثير، تقديم بدائل مقترحة، تعديل الجدول الزمني عند الضرورة، وموافقة العميل على أي تغييرات قبل التنفيذ.",
  },
  {
    question: "هل تقدمون خدمات الصيانة بعد التسليم؟",
    answer:
      "نقدم حزم صيانة شاملة تشمل: صيانة دورية، خدمة طوارئ على مدار الساعة، تقارير حالة المباني، وخطط صيانة استباقية لمنع المشاكل قبل حدوثها.",
  },
];

export default function FAQSection() {
  const { locale } = useParams();
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="py-20 bg-[f5f5f5]" dir="rtl">
      <div className="container px-4 mx-auto">
        <Sectiontitle
          title="الأسئلة الشائعة"
          description="إجابات واضحة على استفساراتكم الأكثر تكراراً"
        />

        <div className="mt-16 max-w-4xl mx-auto" data-aos="fade-up">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, i) => (
              <AccordionItem
                value={`faq-${i}`}
                key={i}
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 100}
              >
                <div className="rounded-xl overflow-hidden border-2 border-gray-200 hover:border-primary transition-all">
                  <AccordionTrigger className="text-right px-8 py-6 hover:bg-primary/5 bg-white group">
                    <span className="flex-1 text-right text-xl md:text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                    <svg
                      className="h-6 w-6 shrink-0 text-primary transition-transform duration-200"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M14 12L10 8L6 12"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 py-6 text-lg md:text-xl text-gray-700 bg-gray-50 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-lg text-gray-600 mb-6">
            لم تجد إجابة لسؤالك؟ فريق الدعم لدينا جاهز لمساعدتك
          </p>
          <Link
            href={`/${locale}/${Pages.CONTACT}`}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
          >
            تواصل معنا
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
