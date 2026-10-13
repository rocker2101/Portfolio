import React from 'react';
import SiteHeader from '@/components/site-header';
import HeroSection from '@/components/hero-section';
import TechStackSlider from '@/components/tech-stack-slider';
import SelectedWork from '@/components/selected-work';
import ServicesSection from '@/components/services-section';
import ProcessSection from '@/components/process-section';
import WhyRoxelence from '@/components/why-roxelence';
import ContactSection from '@/components/contact-section';
import SiteFooter from '@/components/site-footer';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <TechStackSlider />
        <SelectedWork />
        <ServicesSection />
        <ProcessSection />
        <WhyRoxelence />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
