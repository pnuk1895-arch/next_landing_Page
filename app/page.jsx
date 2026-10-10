"use client"

import Header from '../component/CommonComponent/Header'
import Footer from '../component/CommonComponent/Footer'
import HeroSection from '../component/LandingPageComponents/HeroSection'
import ServicesSection from '../component/LandingPageComponents/ServicesComponent'
import Packages from '../component/LandingPageComponents/WebsiteDevelopmentPackage'
import WhyAxvionalSection from '../component/LandingPageComponents/WhyAxvional'
import IndustriesSection from '../component/LandingPageComponents/TrustedArea'
import ClientTestimonials from '../component/LandingPageComponents/feedback'
import { ContactSection } from '../component/LandingPageComponents/Contact'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function Page() {

  const pathName = usePathname();

  useEffect(()=>{
     
    if(pathName === "/Contact")
    {
      document.body.classList.add("overflow-hidden")
    }else {
      document.body.classList.remove("overflow-hidden")
    }

  },[pathName])


  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyAxvionalSection />
        <IndustriesSection />
        <Packages />
        <ClientTestimonials />
        <ContactSection/>
      </main>
      <Footer/>
    </>
  )
}

