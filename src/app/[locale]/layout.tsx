import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import "./globals.css";
import { Directions, Languages } from "@/components/constants/enum";
import getTrans from "@/lib/translation";
import { Locale } from "@/i18n.config";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  variable: "--font-alexandria",
  display: "swap",
});
export const metadata: Metadata = {
  title: "ايكال | IKAL",
  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;
  const isArabic = locale === Languages.ARABIC;
  const translations = await getTrans(locale);
  return (
    <html lang={locale} dir={isArabic ? Directions.RTL : Directions.LTR}>
      <body className={`${alexandria.variable} antialiased`}>
        <NextAuthSessionProvider>
          <Header locale={locale} translation={translations} />
          {children}
          <Footer />
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
