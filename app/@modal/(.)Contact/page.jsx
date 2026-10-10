import { ContactCard } from '../../../component/LandingPageComponents/Contact'

export default function Contact() {
  return (
    <div className="absolute inset-0 z-50 flex h-screen w-full items-center justify-center bg-black/30 backdrop-blur-md">
      <div className="mx-auto w-full max-w-lg px-4">
        <ContactCard />
      </div>
    </div>
  )
}
