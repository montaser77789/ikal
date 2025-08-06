// app/services/[category]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { allCategories } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CallToAction from "@/components/CallToAction";

export default async function ServiceCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  console.log(category);

  const categoryData = allCategories.find(
    (cat) => cat.slug === "infrastructure"
  );

  if (!categoryData) return notFound();
  return (
    <div dir="rtl" className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] max-h-[800px] bg-black">
        <Image
          src={categoryData.image}
          alt={categoryData.name}
          fill
          className="object-cover opacity-70"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center items-start px-[10%] text-white container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">
              {categoryData.name}
            </h1>
            <p className="text-xl max-w-2xl leading-relaxed">
              {categoryData.description}
            </p>
          </div>
        </div>
      </section>

      {/* الخدمات الفرعية */}
      <section className="py-20 bg-white">
        <div className="container ">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              خدمات <span className="text-primary">{categoryData.name}</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categoryData.services.map((service, i) => (
              <Card
                key={i}
                className="rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border-0 overflow-hidden group"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <CardHeader className="pb-0">
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
