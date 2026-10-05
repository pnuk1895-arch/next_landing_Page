import Header from '../component/CommonComponent/Header'
import Footer from '../component/CommonComponent/Footer'
import About from '../component/LandingPageComponents/About'
import HeroSection from '../component/LandingPageComponents/HeroSection'
import TrustedGroupSection from '../component/LandingPageComponents/TrustedGroupSection'
import ServicesComponent from '../component/LandingPageComponents/ServicesComponent'
import CaseStudies from '../component/LandingPageComponents/ProvenImpact'

export default function Page() {
  return (
    <>
      <Header />
      <main className="w-full">
        <HeroSection />
        <TrustedGroupSection />
        <ServicesComponent />
        <CaseStudies />
        <About />
      </main>
      <Footer />
    </>
  )
}

