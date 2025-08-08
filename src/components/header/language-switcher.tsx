"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { Languages } from "../constants/enum";
import { Button } from "../ui/button";
import { Globe } from "lucide-react"; // أيقونة الكرة الأرضية

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams();

  const switchLanguage = (newLocale: string) => {
    const path =
      pathname?.replace(`/${locale}`, `/${newLocale}`) ?? `/${newLocale}`;
    router.push(path);
  };

  return (
    <div className="flex">
      <Button
        variant="ghost"
        className="flex items-center gap-2 text-xl text-primary md:text-white hover:text-white transition-colors duration-300 
        hover:!bg-transparent" 
        onClick={() =>
          switchLanguage(
            locale === Languages.ARABIC ? Languages.ENGLISH : Languages.ARABIC
          )
        }
        aria-label="Toggle language"
      >
        <Globe className="!w-7 !h-7 " size={32} /> 
        <span>{locale === Languages.ARABIC ? "English" : "العربية"}</span>
      </Button>
    </div>
  );
};

export default LanguageSwitcher;