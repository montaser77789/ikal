import { StaticImageData } from "next/image";
import image1 from "../../public/services/aerial-view-traffic-massive-highway-intersection (1).jpg";

export const allCategories = [
  {
    slug: "infrastructure",
    name: "البنية التحتية",
    description:
      "نقدم حلولًا شاملة ومتقدمة في مجال البنية التحتية تشمل تطوير وتنفيذ شبكات الطرق، الجسور، شبكات الصرف الصحي، وخطوط الكهرباء والاتصالات، مع الالتزام بأعلى معايير الجودة والسلامة.",
    image: image1 as StaticImageData,
    services: [
      {
        title: "تطوير الطرق السريعة",
        description:
          "نقوم بتصميم وتنفيذ الطرق السريعة باستخدام أحدث المعدات الهندسية والمواد عالية الجودة، بما يضمن سهولة الحركة المرورية وكفاءة النقل في مختلف المناطق.",
        image: image1 as StaticImageData,
      },
      {
        title: "مشاريع الجسور",
        description:
          "تنفيذ مشاريع جسور حديثة ومتكاملة، تراعي أعلى معايير الأمان والمرونة، وتُبنى بتقنيات متقدمة لضمان التحمل والاستدامة في مختلف الظروف البيئية.",
        image: image1 as StaticImageData,
      },
    ],
  },
];

