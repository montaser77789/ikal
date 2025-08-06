import patern1 from "../../../../public/Our paterns/Screenshot_2025-08-06_162401-removebg-preview.png";
import patern2 from "../../../../public/Our paterns/Screenshot_2025-08-07_023248-removebg-preview.png";
import patern3 from "../../../../public/Our paterns/artex.png";
import patern4 from "../../../../public/Our paterns/Screenshot_2025-08-07_023608-removebg-preview.png";
import Image from "next/image";
import Sectiontitle from "@/components/Sectiontitle";

const OurPartners = () => {
  return (
    <section className="section-gap container">
      <div className="max-w-5xl mx-auto">
        {" "}
        <Sectiontitle
          title="مجموعة إيكال... كيانات متخصصة برؤية موحدة"
          description="تضم مجموعة إيكال نخبة من الشركات المتخصصة التي تعمل بتكامل واحترافية لتقديم خدمات هندسية، صناعية وتجارية متنوعة تحت مظلة واحدة. نسعى من خلال شركاتنا الفرعية إلى تقديم حلول شاملة تخدم مختلف القطاعات وتحقق رؤية موحدة للتميز."
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        <Image src={patern4} alt="meic group" width={300} height={300} />
        <Image src={patern1} alt="meic group" width={300} height={300} />
        <Image src={patern2} alt="meic group" width={300} height={300} />
        <Image src={patern3} alt="meic group" width={300} height={300} />
      </div>
    </section>
  );
};

export default OurPartners;
