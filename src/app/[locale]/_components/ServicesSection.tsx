import ServiceCard from "./ServiceCard";
import image1 from "../../../../public/services/aerial-view-traffic-massive-highway-intersection (1).jpg";
import image2 from "../../../../public/services/analog-landscape-city-with-buildings.jpg";
import image3 from "../../../../public/services/futuristic-landscape-dubai (1).jpg";
import Sectiontitle from "@/components/Sectiontitle";

const services = [
  {
    id: 1,
    title: "البنية التحتية",
    description:
      "نقدّم خدمات متكاملة في مجال البنية التحتية تشمل تصميم وتطوير وتنفيذ شبكات الطرق والجسور والصرف الصحي، بالإضافة إلى شبكات الكهرباء والاتصالات. نركز على تنفيذ المشاريع بأعلى معايير الجودة والاعتماد على أحدث التقنيات لضمان الكفاءة والاستدامة.",
    image: image1,
  },
  {
    id: 2,
    title: "المشروعات السكنية",
    description:
      "نقوم ببناء الفلل الفاخرة، وتطوير المجمعات السكنية المتكاملة والشقق المتعددة الطوابق، مع مراعاة أدق التفاصيل في التصميم والتنفيذ. نحرص على توفير بيئة سكنية عصرية وآمنة تلبي تطلعات العملاء من حيث الراحة والجودة.",
    image: image2,
  },
  {
    id: 3,
    title: "المشروعات التجارية",
    description:
      "نمتلك خبرة واسعة في إنشاء وتطوير المجمعات التجارية والمكاتب الإدارية، بالإضافة إلى بناء المستودعات والمصانع. نضمن حلولاً متكاملة تلبي احتياجات القطاعات التجارية والصناعية، مع الالتزام بالدقة في المواعيد والكفاءة في التنفيذ.",
    image: image3,
  },
  {
    id: 1,
    title: "البنية التحتية",
    description:
      "نقدّم خدمات متكاملة في مجال البنية التحتية تشمل تصميم وتطوير وتنفيذ شبكات الطرق والجسور والصرف الصحي، بالإضافة إلى شبكات الكهرباء والاتصالات. نركز على تنفيذ المشاريع بأعلى معايير الجودة والاعتماد على أحدث التقنيات لضمان الكفاءة والاستدامة.",
    image: image1,
  },
  {
    id: 2,
    title: "المشروعات السكنية",
    description:
      "نقوم ببناء الفلل الفاخرة، وتطوير المجمعات السكنية المتكاملة والشقق المتعددة الطوابق، مع مراعاة أدق التفاصيل في التصميم والتنفيذ. نحرص على توفير بيئة سكنية عصرية وآمنة تلبي تطلعات العملاء من حيث الراحة والجودة.",
    image: image2,
  },
  {
    id: 3,
    title: "المشروعات التجارية",
    description:
      "نمتلك خبرة واسعة في إنشاء وتطوير المجمعات التجارية والمكاتب الإدارية، بالإضافة إلى بناء المستودعات والمصانع. نضمن حلولاً متكاملة تلبي احتياجات القطاعات التجارية والصناعية، مع الالتزام بالدقة في المواعيد والكفاءة في التنفيذ.",
    image: image3,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      dir="rtl"
    >
      <div className="container ">
        <Sectiontitle
          title="عالم خدماتنا في ارتكس"
          description="اكتشف حلولنا المبتكرة التي تتجاوز التوقعات وتحقق احتياجاتك"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div key={index}>
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
