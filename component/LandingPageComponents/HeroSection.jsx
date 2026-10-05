"use client";

import heroImage from '@/assets/HeroImage/heroImage.webp'
import Image from 'next/image'
import { Icon } from "@iconify/react"
import { ArrowRight } from "lucide-react"
import Link  from "next/link"


export default function HeroSection() {
  return (
    <section id="HeroSection" className="relative w-full h-150 bg-black overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 z-0 h-auto w-full">
        <Image
          src={heroImage}
          alt="UAE Town"
          preload
          className="w-full h-150 object-fill object-top" />
        <div className=" absolute inset-0 bg-[linear-gradient(to_right,#061735_0%,transparent_85%),linear-gradient(to_bottom,#061735_0%,transparent_85%)]" />
        <div />
      </div>
      <div className="w-full max-w-354 mx-auto">
        <div className="relative z-3 top-24 left-8 mr-18 sm:left-10 md:left-12 lg:left-14 xl lg:top-30 ">
          <div className="grid grid-cols-1 grid-rows-[max_content, max_content] lg:grid-cols-2 lg:grid-rows-1 ">
            {/* top content/left content  */}
            <div className="flex flex-col gap-1" >
              <p className="text-white/50 text-sm font-medium md:tracking-wider lg:text-base ">PERFORMANCE MARKETING FOR UAE BUSINESSES</p>
              <h2 className="text-white/80 text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl ">More Customers.<br /><span className="text-[#FFC83D]" >Higher Revenue.</span><br />In the UAE.</h2>
              <p className="text-white/78 font-medium leading-5 md:tracking-wider lg:mt-4 lg:leading-6 lg:text-xl max-w-lg ">Data-driven advertising that turns  clicks <span className="whitespace-nowrap"> into real business growth.</span></p>
            </div>
            {/* bottom content/right content  */}
            <div className="flex flex-col gap-2 mt-4 max-w-84 lg:gap-6 lg:w-56 lg:-rotate-z-8 lg:ml-18 xl:w-70 ">
              {/* first  */}
              <div className="flex items-center justify-center bg-[#f4f8fc]/70 rounded-lg gap-2 py-3 xl:gap-4 ">
                <Icon
                  icon='streamline-plump:graph-bar-increase-solid'
                  className="w-6 h-6 lg:w-10 lg:h-10 xl:h-12 xl:w-12 text-[#0B1736]"
                />
                <div className="flex items-center gap-2 lg:flex-col lg:gap-0!">
                  <p className="text-lg font-bold text-[#0B1736] xl:text-2xl ">+320%</p>
                  <p className="text-sm font-semibold text-[#0B1736]/90 xl:text-base ">Qualified Leads</p>
                </div>
                <Icon
                  icon='akar-icons:arrow-up-right'
                  className="text-lg text-red-700 w-6 h-6 xl:w-9 xl:h-9 "
                />
              </div>
              {/* second  */}
              <div className="flex items-center justify-center bg-[#f4f8fc]/70 rounded-lg gap-2 py-3 xl:gap-4 ">
                <Icon
                  icon='ri:megaphone-fill'
                  className="w-6 h-6 lg:w-10 lg:h-10 xl:h-12 xl:w-12 text-[#0B1736]"
                />
                <div className="flex items-center gap-2 lg:flex-col lg:gap-0!">
                  <p className="text-lg font-bold text-[#0B1736] xl:text-2xl">4.8x</p>
                  <p className="text-sm font-medium text-[#0B1736]/90 xl:text-base ">Return on Ad Spend</p>
                </div>
                <Icon
                  icon='akar-icons:arrow-up-right'
                  className="text-lg text-red-700 w-6 h-6 xl:w-9 xl:h-9"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-4 lg:mt-4 ">
            <Link href="/" className="bg-[#FFC83D] w-full flex max-w-84 rounded-full mt-4 justify-center items-center gap-2 min-h-10 lg:w-fit lg:px-8 lg:h-14 ">
              <p className="text-sm font-semibold lg:text-lg lg:font-bold " > Get Free Strategy Call </p>
              <ArrowRight className='w-5 h-5 lg:w-7 lg:h-7 ' />
            </Link>
            <Link href='/' className="flex w-full max-w-84 rounded-full mt-4 bg-[#0B1736]/70 border border-white/76 justify-center items-center gap-2 min-h-10 lg:w-fit lg:px-8 lg:h-14 ">
              <Icon
                icon="boxicons:play-circle-filled"
                className="text-white/80 w-6 h-6  lg:w-8 lg:h-8 "
              />
              <p className="text-white/76 font-medium lg:text-lg ">See Results</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
