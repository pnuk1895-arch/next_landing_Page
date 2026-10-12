import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import {

  Play,

  BarChart3,

  BriefcaseBusiness,

  Headphones,

  Star,

} from "lucide-react";



export default function HeroSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (

    <section
      ref={sectionRef}
      id="HeroSection"
      className="relative isolate overflow-hidden bg-slate-950 text-white"
    >



      {/* =====================================================

            BACKGROUND

        ====================================================== */}



      <div className="absolute inset-0 -z-20">



        <Image

          src="/images/hero.webp"

          alt="Dubai skyline"

          fill

          priority

          sizes="100vw"

          className="object-fill object-top  "

        />



      </div>





      {/* Light overall overlay */}



      <div className="absolute inset-0 -z-10 bg-slate-950/10" />





      {/* Left content gradient */}



      <div className="absolute inset-y-0 left-0 -z-10 w-full bg-linear-to-r from-slate-950/85 via-slate-950/40 to-transparent sm:w-4/5 lg:w-3/5" />





      {/* Bottom fade */}



      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-slate-950 via-slate-950/80 to-transparent sm:h-40" />





      {/* =====================================================

            HERO CONTAINER

        ====================================================== */}



      <div className="relative mx-auto max-w-7xl px-6 pt-16 sm:px-10 md:px-16 lg:px-20 xl:px-10 ">





        {/* ===================================================

              MAIN HERO AREA

          ==================================================== */}



        <div className="relative">





          {/* =================================================

                LEFT CONTENT

            ================================================== */}



          <div className="relative z-30 max-w-3xl pt-8 sm:pt-10 lg:w-3/5 lg:pt-14">



            {/* Badge */}

            <div data-reveal-id="hero-badge" style={{ transitionDelay: "80ms" }} className={`mb-5 inline-flex items-center rounded-full border border-cyan-300/30 bg-slate-950/20 px-3 py-1.5 backdrop-blur-md sm:mb-6 sm:px-4 sm:py-2 transition-all duration-700 ease-out motion-reduce:transition-none ${isVisible ? "translate-x-0 translate-y-0 opacity-100" : "translate-y-5 opacity-0 lg:-translate-x-8 lg:translate-y-0"}`}>

              <span className="mr-2 size-1.5 animate-pulse rounded-full bg-cyan-400" />



              <span className="text-[9px] font-semibold tracking-[0.15em] text-cyan-100 sm:text-xs sm:tracking-[0.2em]">

                YOUR GROWTH PARTNER IN THE UAE

              </span>

            </div>





            {/* Heading */}

            <h1 data-reveal-id="hero-heading" style={{ transitionDelay: "180ms" }} className={`max-w-3xl text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-700 ease-out motion-reduce:transition-none ${isVisible ? "translate-x-0 translate-y-0 opacity-100" : "translate-y-7 opacity-0 lg:-translate-x-10 lg:translate-y-0"}`}>

              Digital Marketing

              <br />

              That{" "}

              <span className="text-cyan-400">

                Brings

              </span>

              <br />

              <span className="bg-linear-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">

                Real Results

              </span>

            </h1>





            {/* Description */}

            <p data-reveal-id="hero-description" style={{ transitionDelay: "300ms" }} className={`mt-5 max-w-xl text-xs leading-6 text-white/75 sm:mt-6 sm:text-sm sm:leading-7 lg:text-base transition-all duration-700 ease-out motion-reduce:transition-none ${isVisible ? "translate-x-0 translate-y-0 opacity-100" : "translate-y-6 opacity-0 lg:-translate-x-8 lg:translate-y-0"}`}>

              Data-driven marketing and website development solutions to help

              UAE businesses generate leads, increase revenue and build a

              stronger brand.

            </p>





            {/* Buttons */}

            <div data-reveal-id="hero-cta" style={{ transitionDelay: "420ms" }} className={`relative z-30 mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row transition-all duration-700 ease-out motion-reduce:transition-none ${isVisible ? "translate-x-0 translate-y-0 opacity-100" : "translate-y-5 opacity-0 lg:translate-y-7"}`}>



              {/* Primary */}

              <a

                href="#contact"

                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-linear-to-r from-cyan-400 to-blue-500 px-5 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/30 sm:w-auto sm:px-7 sm:text-sm"

              >

                {/* Shine */}

                <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 group-hover:translate-x-full" />



                {/* Content */}

                <span className="relative flex items-center gap-2 whitespace-nowrap">

                  Get Free Strategy Call



                  <span className="transition-transform duration-300 group-hover:translate-x-1">

                    →

                  </span>

                </span>

              </a>



            </div>





          </div>



          {/* =================================================

                BUSINESS GROWTH CARD



                IMPORTANT:

                This is independent from hero content.

            ================================================== */}



          <div data-reveal-id="hero-growth-desktop" style={{ transitionDelay: "320ms" }} className={`absolute right-0 top-30 z-20 hidden lg:block lg:top-24 transition-all duration-700 ease-out motion-reduce:transition-none ${isVisible ? "translate-x-0 translate-y-0 opacity-100" : "translate-x-10 translate-y-3 opacity-0"}`}>



            <div className="group w-64 animate-float rounded-3xl border border-cyan-300/30 bg-slate-950/35 p-5 shadow-2xl shadow-black/30 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-slate-950/45 sm:w-72">



              {/* Header */}



              <div className="mb-5 flex items-center justify-between">



                <div className="flex items-center gap-2">



                  <span className="size-2 animate-pulse rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/70" />



                  <span className="text-[10px] font-bold tracking-[0.18em] text-cyan-200">

                    BUSINESS GROWTH

                  </span>



                </div>



                <span className="text-base text-cyan-400">

                  ↗

                </span>



              </div>





              {/* Content */}



              <div className="flex items-end justify-between gap-4">



                <div>



                  <p className="text-4xl font-black tracking-tight sm:text-5xl">

                    +320%

                  </p>



                  <p className="mt-3 max-w-48 text-xs leading-5 text-white/60">

                    Average increase in leads for our UAE clients

                  </p>



                </div>





                {/* Chart */}



                <div className="flex h-12 items-end gap-1">



                  <span className="h-4 w-1.5 rounded-full bg-cyan-400/30" />

                  <span className="h-6 w-1.5 rounded-full bg-cyan-400/50" />

                  <span className="h-8 w-1.5 rounded-full bg-cyan-400/70" />

                  <span className="h-11 w-1.5 rounded-full bg-cyan-400" />



                </div>



              </div>





              {/* Progress */}



              <div className="mt-6 border-t border-white/10 pt-4">



                <div className="flex items-center justify-between">



                  <span className="text-xs text-white/40">

                    Data-driven growth

                  </span>



                  <span className="text-xs font-semibold text-cyan-400">

                    +80%

                  </span>



                </div>



                <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">



                  <div className="h-full w-4/5 animate-progress rounded-full bg-linear-to-r from-cyan-400 to-blue-500" />



                </div>



              </div>



            </div>



          </div>



        </div>











        {/* =================================================

                BUSINESS GROWTH - SMALL MOBILE



                Independent from text and buttons.

            ================================================== */}



        <div data-reveal-id="hero-growth-mobile" style={{ transitionDelay: "320ms" }} className={`lg:hidden py-6 transition-all duration-700 ease-out motion-reduce:transition-none ${isVisible ? "translate-x-0 translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>

          <div className=" w-70 rounded-2xl border border-cyan-300/30 bg-slate-950/40 p-4 shadow-2xl shadow-black/30 backdrop-blur-md ">



            <div className="mb-3 flex items-center justify-between">



              <div className="flex items-center gap-2">



                <span className="size-1.5 animate-pulse rounded-full bg-cyan-400" />



                <span className="text-[8px] font-bold tracking-[0.15em] text-cyan-200">

                  BUSINESS GROWTH

                </span>



              </div>



              <span className="text-sm text-cyan-400">

                ↗

              </span>



            </div>





            <div className="flex items-end justify-between gap-3">



              <div>



                <p className="text-3xl font-black">

                  +320%

                </p>



                <p className="mt-1 max-w-36 text-[9px] leading-4 text-white/55">

                  Average increase in leads for our UAE clients

                </p>



              </div>





              <div className="flex h-8 items-end gap-1">



                <span className="h-2 w-1 rounded-full bg-cyan-400/30" />

                <span className="h-4 w-1 rounded-full bg-cyan-400/50" />

                <span className="h-6 w-1 rounded-full bg-cyan-400/70" />

                <span className="h-8 w-1 rounded-full bg-cyan-400" />



              </div>



            </div>



          </div>

        </div>





        {/* =================================================

              STATS

          ================================================== */}



        <div data-reveal-id="hero-stats" style={{ transitionDelay: "500ms" }} className={`relative z-30 pb-6 sm:pb-8 lg:pb-10 lg:mt-6 transition-all duration-700 ease-out motion-reduce:transition-none ${isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>



          {/* Gradient Border */}

          <div className="rounded-2xl bg-linear-to-r from-cyan-400/70 via-blue-500/20 to-cyan-400/70 p-px shadow-[0_0_30px_rgba(34,211,238,0.08)]">



            <div className="grid grid-cols-2 overflow-hidden rounded-2xl bg-slate-950/80 backdrop-blur-xl sm:grid-cols-4">



              {/* 320% */}

              <div data-reveal-id="hero-stat-1" style={{ transitionDelay: "560ms" }} className={`group relative flex items-center gap-3 px-4 py-4 transition-all duration-700 ease-out hover:bg-cyan-400/5 sm:px-5 lg:px-6 motion-reduce:transition-none ${isVisible ? "translate-x-0 translate-y-0 opacity-100" : "translate-y-4 opacity-0 lg:translate-y-3"}`}>



                {/* Icon */}

                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.12)] transition-all duration-300 group-hover:border-cyan-300/60 group-hover:bg-cyan-400/15 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]">

                  <BarChart3

                    className="size-5"

                    strokeWidth={2.5}

                  />

                </div>



                {/* Content */}

                <div>

                  <p className="text-lg font-black leading-none tracking-tight text-white sm:text-2xl">

                    320%

                  </p>



                  <p className="mt-1 text-[8px] font-medium leading-tight text-white/50 sm:text-[10px]">

                    Average Lead Growth

                  </p>

                </div>



                {/* Divider */}

                <span className="absolute right-0 top-1/2 hidden h-10 -translate-y-1/2 bg-linear-to-b from-transparent via-cyan-400/30 to-transparent sm:block sm:w-px" />



                {/* Mobile horizontal divider */}

                <span className="absolute bottom-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-cyan-400/20 to-transparent sm:hidden" />

              </div>





              {/* 150+ */}

              <div data-reveal-id="hero-stat-2" style={{ transitionDelay: "640ms" }} className={`group relative flex items-center gap-3 px-4 py-4 transition-all duration-700 ease-out hover:bg-cyan-400/5 sm:px-5 lg:px-6 motion-reduce:transition-none ${isVisible ? "translate-x-0 translate-y-0 opacity-100" : "translate-y-4 opacity-0 lg:translate-y-3"}`}>



                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.12)] transition-all duration-300 group-hover:border-cyan-300/60 group-hover:bg-cyan-400/15 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]">

                  <BriefcaseBusiness

                    className="size-5"

                    strokeWidth={2.5}

                  />

                </div>



                <div>

                  <p className="text-lg font-black leading-none tracking-tight text-white sm:text-2xl">

                    150+

                  </p>



                  <p className="mt-1 text-[8px] font-medium leading-tight text-white/50 sm:text-[10px]">

                    Projects Delivered

                  </p>

                </div>



                <span className="absolute right-0 top-1/2 hidden h-10 -translate-y-1/2 bg-linear-to-b from-transparent via-cyan-400/30 to-transparent sm:block sm:w-px" />



                <span className="absolute bottom-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-cyan-400/20 to-transparent sm:hidden" />

              </div>





              {/* 24/7 */}

              <div data-reveal-id="hero-stat-3" style={{ transitionDelay: "720ms" }} className={`group relative flex items-center gap-3 px-4 py-4 transition-all duration-700 ease-out hover:bg-cyan-400/5 sm:px-5 lg:px-6 motion-reduce:transition-none ${isVisible ? "translate-x-0 translate-y-0 opacity-100" : "translate-y-4 opacity-0 lg:translate-y-3"}`}>



                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.12)] transition-all duration-300 group-hover:border-cyan-300/60 group-hover:bg-cyan-400/15 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]">

                  <Headphones

                    className="size-5"

                    strokeWidth={2.5}

                  />

                </div>



                <div>

                  <p className="text-lg font-black leading-none tracking-tight text-white sm:text-2xl">

                    24/7

                  </p>



                  <p className="mt-1 text-[8px] font-medium leading-tight text-white/50 sm:text-[10px]">

                    Support & Assistance

                  </p>

                </div>



                <span className="absolute right-0 top-1/2 hidden h-10 -translate-y-1/2 bg-linear-to-b from-transparent via-cyan-400/30 to-transparent sm:block sm:w-px" />



                <span className="absolute bottom-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-cyan-400/20 to-transparent sm:hidden" />

              </div>





              {/* 95% */}

              <div data-reveal-id="hero-stat-4" style={{ transitionDelay: "800ms" }} className={`group relative flex items-center gap-3 px-4 py-4 transition-all duration-700 ease-out hover:bg-cyan-400/5 sm:px-5 lg:px-6 motion-reduce:transition-none ${isVisible ? "translate-x-0 translate-y-0 opacity-100" : "translate-y-4 opacity-0 lg:translate-y-3"}`}>



                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.12)] transition-all duration-300 group-hover:border-cyan-300/60 group-hover:bg-cyan-400/15 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]">

                  <Star

                    className="size-5 fill-cyan-400/20"

                    strokeWidth={2.5}

                  />

                </div>



                <div>

                  <p className="text-lg font-black leading-none tracking-tight text-white sm:text-2xl">

                    95%

                  </p>



                  <p className="mt-1 text-[8px] font-medium leading-tight text-white/50 sm:text-[10px]">

                    Client Satisfaction

                  </p>

                </div>



              </div>



            </div>

          </div>



        </div>



      </div>

    </section>

  );

}