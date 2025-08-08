"use client";
import Image, { StaticImageData } from "next/image";
export default function ServiceCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: StaticImageData;
}) {
  return (
    <div className="flex flex-col justify-center items-center text-center rounded-2xl p-4 sm:p-2 relative mb-26">
      <div className="w-full h-60 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-2xl w-full h-full object-cover"
        />
      </div>


      {/* صندوق المحتوى */}
      <div className="bg-primary text-white w-[90%]  shadow-lg rounded-2xl py-2 min-h-[100px] mb-5 absolute bottom-[-160px] px-2">
        <h2 className="text-md text-white md:text-xl font-bold mt-2 ">{title}</h2>
        <p className="text-md md:text-sm  leading-relaxed  text-white font-semibold pb-3 ">{description}</p>
      </div>
    </div>
  );
}
