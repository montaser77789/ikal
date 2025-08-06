"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { Languages } from "../constants/enum";
import { Button } from "../ui/button";

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
        className="text-primary bg-white"
        onClick={() =>
          switchLanguage(
            locale === Languages.ARABIC ? Languages.ENGLISH : Languages.ARABIC
          )
        }
        aria-label="Toggle language"
      >
        {locale === Languages.ARABIC ? "English" : "العربيه"}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
