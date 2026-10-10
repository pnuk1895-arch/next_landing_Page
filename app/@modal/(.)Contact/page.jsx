"use client"

import { ContactCard } from '../../../component/LandingPageComponents/Contact'
import Page from '../../page'
import { X } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function Contact() {

  const router = useRouter()

  return (
    <>
      <Page />

      <div className="fixed inset-0 z-999 flex min-h-screen w-full items-center justify-center bg-black/30 backdrop-blur-md">
        <div className="relative mx-auto w-full max-w-lg px-4">

          {/* Arrow button */}
          <button
            onClick={() => router.back()}
            aria-label="Close contact overlay"
            className="absolute right-8 top-3 z-10 flex size-10 items-center justify-center rounded-full border border-white/20 bg-[#071426]/40 text-white shadow-lg transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
          >
            <X size={20} />
          </button>

          <ContactCard />
        </div>
      </div>
    </>
  )
}
