// components/ServiceCard.tsx
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import Link from "@/components/link/Link";
import { useParams } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";

interface Props {
  title: string;
  description: string;
  image: string | StaticImageData;
  id?: number;
}

export default function ServiceCard({
  title,
  description,
  image,
  id,
}: Props) {
  const { locale } = useParams();

  return (
    <div className="h-full">
      <Card
        className={`rounded-3xl !p-0 overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col `}
      >
        <div className="relative h-[200px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />

        </div>

        <CardHeader className="!pb-0">
          <CardTitle className="text-gray-800 text-2xl font-bold">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col justify-between flex-grow pt-0">
          <p className="text-gray-600 leading-relaxed text-xl  mb-2">
            {description}
          </p>

          <div className="mt-auto  pb-4">
            <Button
              asChild
              variant="link"
              className="p-0 text-primary hover:text-primary/80"
            >
              <Link
                href={`/${locale}/services/${id}`}
                className="flex items-center gap-2 justify-center "
              >
                <span>استكشف المزيد</span>
               <FaArrowRightLong className={`text-primary ${locale === "ar" ? "rotate-180" : ""}`} />

              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
