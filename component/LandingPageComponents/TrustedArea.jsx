
"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Autoplay,
    EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import {
    ArrowRight,
    Building2,
    Palmtree,
    ShoppingCart,
    GraduationCap,
    HeartPulse,
    BriefcaseBusiness,
    Users,
    Cog,
} from "lucide-react";

const industries = [
    {
        title: "Real Estate & Property",
        image: "/images/Industries/real-estate.webp",
        icon: Building2,
        href: "images/Industries/real-estate",
    },
    {
        title: "Hospitality & Tourism",
        image: "/images/Industries/hospitality.webp",
        icon: Palmtree,
        href: "images/industries/hospitality",
    },
    {
        title: "Retail & E-commerce",
        image: "/images/Industries/retail.webp",
        icon: ShoppingCart,
        href: "images/industries/retail",
    },
    {
        title: "Education & Training",
        image: "/images/Industries/education.webp",
        icon: GraduationCap,
        href: "images/industries/education",
    },
    {
        title: "Healthcare & Medical Clinics",
        image: "/images/Industries/healthcare.webp",
        icon: HeartPulse,
        href: "images/industries/healthcare",
    },
    {
        title: "Business & Corporate Sectors",
        image: "/images/Industries/corporate.webp",
        icon: BriefcaseBusiness,
        href: "images/industries/corporate",
    },
    {
        title: "NGO & Trust Organizations",
        image: "/images/Industries/ngo.webp",
        icon: Users,
        href: "images/industries/ngo",
    },
    {
        title: "Construction & Engineering",
        image: "/images/Industries/construction.webp",
        icon: Cog,
        href: "/industries/construction",
    },
];



function IndustryCard({ industry }) {
    const Icon = industry.icon;

    return (
        <Link
            href={industry.href}
            className="group relative block aspect-3/4 overflow-hidden rounded-xl border border-cyan-400/30 bg-slate-950 shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_16px_40px_rgba(6,182,212,0.2)] sm:aspect-4/3 lg:aspect-3/4"
        >
            <Image
                src={industry.image}
                alt={industry.title}
                fill
                sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 27vw, (min-width: 640px) 45vw, 96px"
                className="object-fill object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Dark image overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-slate-950/5 transition-colors duration-500 group-hover:from-slate-950 group-hover:via-slate-950/35" />

            {/* Subtle cyan lighting */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Card content */}
            <div className="absolute inset-x-0 bottom-0 flex items-end gap-2 bg-linear-to-t from-slate-950/95 via-slate-950/70 to-transparent p-3 pt-10 sm:gap-3 sm:p-4 sm:pt-12">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/40 bg-slate-950/70 text-cyan-400 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-300 group-hover:bg-cyan-400 group-hover:text-slate-950 sm:size-10">
                    <Icon className="size-5" strokeWidth={2} />
                </div>

                <h3 className="min-w-0 flex-1 text-xs font-bold leading-5 text-white transition-colors duration-300 group-hover:text-cyan-200 sm:text-sm">
                    {industry.title}
                </h3>

                <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/70 bg-slate-950/50 text-cyan-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-cyan-300 group-hover:bg-cyan-400 group-hover:text-slate-950 sm:size-8">
                    <ArrowRight className="size-4" strokeWidth={2.5} />
                </span>
            </div>

            {/* Fine inner border */}
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:ring-cyan-300/50" />
        </Link>
    );
}

export default function IndustriesSection() {
    return (
        <section
            id="industries"
            className="relative isolate border-y border-white/15 bg-slate-950 py-14 text-white sm:py-16 lg:py-20"
        >


            {/* Background effects */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden ">
                <div className="absolute left-1/4 top-0 size-72 rounded-full bg-cyan-500/5 blur-3xl sm:size-96" />

                <div className="absolute bottom-0 right-0 size-72 rounded-full bg-blue-500/5 blur-3xl sm:size-96" />

                <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-cyan-950/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-blue-950/20 to-transparent" />

                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/30 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-300/30 to-transparent" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-16">
                {/* Section heading */}
                <header className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12">
                    <div className="mb-3 flex items-center justify-center gap-2">
                        <span className="h-px w-7 bg-cyan-400/70" />

                        <span className="text-[9px] font-bold tracking-[0.25em] text-cyan-400 sm:text-[10px] sm:tracking-[0.3em]">
                            INDUSTRIES WE WORK WITH
                        </span>

                        <span className="h-px w-7 bg-cyan-400/70" />
                    </div>

                    <h2 className="text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                        Empowering Businesses{" "}
                        <span className="bg-linear-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Across the UAE
                        </span>
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-white/55 sm:mt-4 sm:text-sm sm:leading-6">
                        Tailored digital strategies for ambitious businesses in every industry.
                    </p>
                </header>

                {/* =====================================================
            DESKTOP + LAPTOP 3D SWIPER
        ====================================================== */}
                <div className="relative overflow-hidden hidden px-2 py-4 lg:block xl:px-4">
                    {/* Previous arrow */}
                    <button
                        type="button"
                        aria-label="Previous industries"
                        className="industries-prev absolute! left-10! top-1/2 z-20 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/60 bg-slate-950/90 text-cyan-400 shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950 xl:left-2"
                    >
                        <ArrowRight className="size-5 rotate-180" />
                    </button>

                    {/* Swiper */}


                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        effect="coverflow"
                        centeredSlides
                        slidesPerView={3.5}
                        spaceBetween={16}
                        loop
                        loopAdditionalSlides={4}
                        speed={1000}
                        grabCursor
                        watchSlidesProgress
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            prevEl: ".industries-prev",
                            nextEl: ".industries-next",
                        }}
                        pagination={{
                            el: ".industries-pagination",
                            clickable: true,
                        }}

                        coverflowEffect={{
                            rotate: 8,
                            stretch: 0,
                            depth: 140,
                            modifier: 1.3,
                            slideShadows: false,
                        }}
                        breakpoints={{
                            1024: {
                                slidesPerView: 3.2,
                                spaceBetween: 18,
                                coverflowEffect: {
                                    rotate: -7,
                                    stretch: 0,
                                    depth: 110,
                                    modifier: 1.2,
                                    slideShadows: false,
                                },
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                                coverflowEffect: {
                                    rotate: -8,
                                    stretch: 0,
                                    depth: 140,
                                    modifier: 1.3,
                                    slideShadows: false,
                                },
                            },
                            1536: {
                                slidesPerView: 3.5,
                                spaceBetween: 22,
                                coverflowEffect: {
                                    rotate: -8,
                                    stretch: 0,
                                    depth: 160,
                                    modifier: 1.3,
                                    slideShadows: false,
                                },
                            },
                        }}
                    className="industries-swiper overflow-visible! py-8! hidden lg:block "
                    >
                    {[...industries, ...industries].map((industry, index) => (
                        <SwiperSlide key={`${industry.title}-${index}`} className="h-auto!">
                            <IndustryCard industry={industry} />
                        </SwiperSlide>
                    ))}
                </Swiper>



                {/* Next arrow */}
                <button
                    type="button"
                    aria-label="Next industries"
                    className="industries-next absolute right-10! top-1/2 z-20 flex size-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-cyan-400/60 bg-slate-950/90 text-cyan-400 shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950 xl:right-2"
                >
                    <ArrowRight className="size-5" />
                </button>

                {/* Pagination dots */}
                <div className="industries-pagination mt-4 flex items-center justify-center gap-2" />
            </div>

            {/* =====================================================
            TABLET GRID
        ====================================================== */}
            <div className="hidden grid-cols-2 gap-4 sm:grid lg:hidden">
                {industries.map((industry) => (
                    <IndustryCard key={industry.title} industry={industry} />
                ))}
            </div>

            {/* =====================================================
            MOBILE ROWS
        ====================================================== */}
            <div className="grid gap-2.5 sm:hidden">
                {industries.map((industry) => {
                    const Icon = industry.icon;

                    return (
                        <Link
                            key={industry.title}
                            href={industry.href}
                            className="group flex items-center gap-3 rounded-lg border border-cyan-400/25 bg-slate-950/80 p-2 transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-400/5"
                        >
                            <div className="relative aspect-4/3 w-24 shrink-0 overflow-hidden rounded-md">
                                <Image
                                    src={industry.image}
                                    alt={industry.title}
                                    fill
                                    sizes="96px"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-cyan-400/25 bg-cyan-400/10 text-cyan-400">
                                <Icon className="size-4" strokeWidth={2} />
                            </div>

                            <span className="min-w-0 flex-1 text-[11px] font-semibold leading-4 text-white transition-colors group-hover:text-cyan-300">
                                {industry.title}
                            </span>

                            <ArrowRight className="mr-1 size-4 shrink-0 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    );
                })}
            </div>
        </div>

            {/* Swiper pagination styling */ }
    <style jsx global>{`
        .industries-swiper .swiper-slide {
          transition:
            opacity 500ms ease,
            filter 500ms ease;
        }

        .industries-swiper .swiper-slide:not(.swiper-slide-active) {
          filter: brightness(0.75);
        }

        .industries-swiper .swiper-slide-active {
          filter: brightness(1);
        }

        .industries-pagination .swiper-pagination-bullet {
          width: 28px;
          height: 7px;
          display: inline-block;
          border-radius: 9999px;
          background: #164e63;
          opacity: 1;
          cursor: pointer;
          transition: all 300ms ease;
        }

        .industries-pagination .swiper-pagination-bullet-active {
          width: 36px;
          background: #22d3ee;
          box-shadow: 0 0 12px rgb(34 211 238 / 25%);
        }

        .industries-prev.swiper-button-disabled,
        .industries-next.swiper-button-disabled {
          opacity: 0.4;
          pointer-events: none;
        }
      `}</style>
        </section >
    );
}
