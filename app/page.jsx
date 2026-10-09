import Header from '../component/CommonComponent/Header'
import Footer from '../component/CommonComponent/Footer'
import About from '../component/LandingPageComponents/About'
import HeroSection from '../component/LandingPageComponents/HeroSection'
import ServicesSection from '../component/LandingPageComponents/ServicesComponent'
import Packages from '../component/LandingPageComponents/WebsiteDevelopmentPackage'
import WhyAxvionalSection from '../component/LandingPageComponents/WhyAxvional'
import IndustriesSection from '../component/LandingPageComponents/TrustedArea'
import ClientTestimonials from '../component/LandingPageComponents/feedback'


export default function Page() {
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
      </main>
      <Footer/>
    </>
  )
}

