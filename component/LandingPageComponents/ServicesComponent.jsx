"use client";

import {
    ArrowRight,
    BriefcaseBusiness,
    Layers3,
    ShoppingCart,
    Code2,
} from "lucide-react";

const services = [
    {
        icon: BriefcaseBusiness,
        title: "Business Website",
        description:
            "Professional websites built to establish trust and generate qualified leads.",
        features: [
            "Corporate Websites",
            "Company Profile",
            "Service Based Websites",
            "Lead Generation Focused",
        ],
    },
    {
        icon: Layers3,
        title: "Landing Pages",
        description:
            "High-converting landing pages designed around your marketing campaigns.",
        features: [
            "Google & Facebook Ads",
            "Campaign Specific Pages",
            "Fast Loading",
            "Conversion Focused",
        ],
    },
    {
        icon: ShoppingCart,
        title: "eCommerce Store",
        description:
            "Scalable online stores designed to turn visitors into customers.",
        features: [
            "Product Selling Websites",
            "Secure Payment Gateway",
            "Easy Cart & Checkout",
            "Inventory Management",
        ],
    },
    {
        icon: Code2,
        title: "Custom Web App",
        description:
            "Powerful web applications built around your unique business requirements.",
        features: [
            "SaaS Platforms",
            "Custom Portals",
            "Third Party API Integration",
            "Scalable Architecture",
        ],
    },
];

export default function ServicesSection() {
    return (
        <section
            id="Services"
            className="relative overflow-hidden bg-slate-950 pb-16 pt-8 text-white sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12"
        >

            {/* =====================================================
          BACKGROUND AMBIENCE
      ====================================================== */}

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 top-1/3 size-64 rounded-full bg-blue-500/5 blur-3xl sm:size-80" />

                <div className="absolute bottom-0 right-0 size-64 rounded-full bg-cyan-500/5 blur-3xl sm:size-80" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-16 lg:px-20 xl:px-10">

                {/* =====================================================
            SECTION HEADER
        ====================================================== */}

                <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10 lg:mb-12">

                    {/* Label */}
                    <div className="mb-3 flex items-center justify-center gap-2">

                        <span className="h-px w-6 bg-cyan-400/60 sm:w-8" />

                        <span className="text-[9px] font-bold tracking-[0.25em] text-cyan-400 sm:text-[10px] sm:tracking-[0.3em]">
                            OUR SERVICES
                        </span>

                        <span className="h-px w-6 bg-cyan-400/60 sm:w-8" />

                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">

                        Solutions for{" "}

                        <span className="bg-linear-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Modern Businesses
                        </span>

                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-3 max-w-xl text-[10px] leading-5 text-white/50 sm:mt-4 sm:text-xs sm:leading-6 lg:text-sm">
                        From high-converting websites to data-driven digital marketing,
                        we provide complete solutions to help your UAE business grow.
                    </p>

                </div>

                {/* =====================================================
            SERVICES GRID
        ====================================================== */}

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">

                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.title}
                                className="group relative overflow-hidden rounded-xl bg-linear-to-b from-cyan-400/40 via-cyan-400/10 to-blue-500/20 p-px transition-all duration-500 hover:-translate-y-1 hover:from-cyan-300/70 hover:to-cyan-400/30"
                            >

                                {/* =================================================
                    CARD
                ================================================== */}

                                <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-slate-950/95 p-4 sm:p-5">

                                    {/* Card ambient glow */}
                                    <div className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full bg-cyan-400/5 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/15" />

                                    {/* Top animated line */}
                                    <div className="absolute inset-x-0 top-0 h-px origin-center scale-x-0 bg-linear-to-r from-transparent via-cyan-400 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                                    {/* =================================================
                      ICON + NUMBER
                  ================================================== */}

                                    <div className="relative mb-4 flex items-center justify-between">

                                        <div className="flex size-9 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 shadow-lg shadow-cyan-400/5 transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-300/60 group-hover:bg-cyan-400/15 group-hover:shadow-cyan-400/10">

                                            <Icon
                                                className="size-4"
                                                strokeWidth={2}
                                            />

                                        </div>

                                        <span className="text-[9px] font-bold tracking-[0.2em] text-white/15 transition-colors duration-300 group-hover:text-cyan-400/50">
                                            0{index + 1}
                                        </span>

                                    </div>

                                    {/* =================================================
                      TITLE
                  ================================================== */}

                                    <h3 className="relative text-sm font-bold text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-base">
                                        {service.title}
                                    </h3>

                                    {/* =================================================
                      DESCRIPTION
                  ================================================== */}

                                    <p className="relative mt-2 text-[10px] leading-5 text-white/45 sm:text-[11px]">
                                        {service.description}
                                    </p>

                                    {/* =================================================
                      DIVIDER
                  ================================================== */}

                                    <div className="my-4 h-px bg-linear-to-r from-transparent via-cyan-400/20 to-transparent" />

                                    {/* =================================================
                      FEATURES
                  ================================================== */}

                                    <ul className="relative space-y-2">

                                        {service.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-2 text-[9px] font-medium leading-4 text-white/60 transition-colors duration-300 group-hover:text-white/80 sm:text-[10px]"
                                            >

                                                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50 transition-transform duration-300 group-hover:scale-125" />

                                                <span>{feature}</span>

                                            </li>
                                        ))}

                                    </ul>

                                    {/* =================================================
                      LEARN MORE
                  ================================================== */}

                                    <div className="relative mt-auto pt-5">

                                        <a
                                            href="#contact"
                                            className="inline-flex items-center gap-1.5 text-[9px] font-bold text-cyan-400 transition-all duration-300 hover:gap-2.5 hover:text-cyan-300 sm:text-[10px]"
                                        >
                                            Learn More

                                            <ArrowRight
                                                className="size-3"
                                                strokeWidth={2.5}
                                            />
                                        </a>

                                    </div>

                                    {/* =================================================
                      BOTTOM GLOW
                  ================================================== */}

                                    <div className="absolute inset-x-4 bottom-0 h-px origin-center scale-x-0 bg-linear-to-r from-transparent via-cyan-400/70 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                                </div>

                            </article>
                        );
                    })}

                </div>

                {/* =====================================================
            BOTTOM SECTION GLOW
        ====================================================== */}

                <div className="pointer-events-none mx-auto mt-10 h-px max-w-5xl bg-linear-to-r from-transparent via-cyan-400/10 to-transparent sm:mt-12" />

            </div>
        </section>
    );
}