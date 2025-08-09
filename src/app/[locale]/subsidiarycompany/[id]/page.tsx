import React from 'react'
import HeaderSection from './_components/HeaderSection'
import AboutSection from './_components/AboutSection'
import ServicesSection from '../../_components/ServicesSection'
import FeaturesSection from './_components/FeaturesSection'
import ProjectsPreviewSection from '../../_components/ProjectsPreviewSection'
import CTASection from './_components/CTASection'
import PartnersSection from './_components/PartnersSection'
import { getCurrentLocale } from '@/lib/getCurrentLocale'
import ScrollRevealSection from './_components/ScrollRevealSection'

export default async function page() {
    const locale = await getCurrentLocale();
  return (
    <div>
      <HeaderSection />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection  locale={locale}/>
      <ProjectsPreviewSection />
      <ScrollRevealSection />
      <PartnersSection locale={locale} />
      <CTASection />
    </div>
  )
}
