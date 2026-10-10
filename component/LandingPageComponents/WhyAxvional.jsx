"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    Users,
    TrendingUp,
    Star,
    Headphones,
    Zap,
} from "lucide-react";

const benefits = [
    "Premium UI/UX Designs",
    "Google SEO Friendly Structure",
    "Super Fast Loading Speed",
    "Mobile, Tablet and Desktop Responsive",
];

const impactStats = [
    {
        icon: Users,
        value: "150+",
        label: "Projects Delivered",
    },
    {
        icon: TrendingUp,
        value: "320%",
        label: "Average Lead Growth",
    },
    {
        icon: Star,
        value: "95%",
        label: "Client Satisfaction",
    },
    {
        icon: Headphones,
        value: "24/7",
        label: "Support & Assistance",
    },
];

export default function WhyAxvionalSection() {
    return (
        <section
            id="About"
            className="relative isolate overflow-hidden bg-slate-950 py-12 text-white sm:py-16 lg:py-8"
        >

            {/* Full-section background image */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <Image
                    src="/images/WhyAxvionalImage/bgImg.webp"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover object-center invisible lg:visible "
                />

                {/* Light darkening: keep the image clearly visible */}
                <div className="absolute inset-0 bg-slate-950/35" />

                {/* Darker left side for readable content */}
                <div className="absolute inset-0 bg-linear-to-r from-slate-950/70 via-slate-950/30 to-slate-950/50" />

                {/* Blend smoothly into the Services section above */}
                <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-slate-950/70 to-transparent" />

                {/* Blend into the next section below */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-slate-950/80 to-transparent" />

                {/* Subtle cyan ambient lighting */}
                <div className="absolute inset-0 bg-linear-to-br from-cyan-950/15 via-transparent to-blue-950/20" />
            </div>



            <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-16 lg:px-20 xl:px-10 ">

                {/* Main layout */}
                <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-12 lg:gap-6 xl:gap-8">

                    {/* Image */}
                    <div className="group relative lg:col-span-5">
                        <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900 shadow-2xl shadow-black/30 sm:aspect-video lg:aspect-4/5 xl:aspect-5/4">

                            <Image
                                src="/images/WhyAxvionalImage/leftImage.webp"
                                alt="Business professionals discussing growth strategies in a modern Dubai office"
                                fill
                                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 42vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Image overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-slate-950/10" />

                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />

                            {/* Image caption */}
                            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/60 px-3 py-2 text-[9px] font-semibold tracking-wider text-white/90 backdrop-blur-xl sm:text-xs">
                                    <span className="size-1.5 animate-pulse rounded-full bg-cyan-400" />
                                    BUILT FOR BUSINESS GROWTH
                                </span>
                            </div>

                            {/* Floating growth card */}
                            <div className=" hidden min-[480px]:block absolute bottom-4 right-4 rounded-xl border border-cyan-400/30 bg-white/95 p-3 text-slate-950 shadow-xl shadow-black/20 backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-1 sm:bottom-6 sm:right-6 sm:p-4">

                                <div className="mb-2 flex items-center justify-between gap-6">
                                    <span className="text-[8px] font-bold tracking-widest text-slate-500 sm:text-[9px]">
                                        HIGHER CONVERSION
                                    </span>

                                    <TrendingUp className="size-4 text-cyan-600" />
                                </div>

                                <p className="text-3xl font-black tracking-tight sm:text-3xl">
                                    +320%
                                </p>

                                <p className="mt-1 max-w-32 text-[9px] leading-4 text-slate-600 sm:text-[10px]">
                                    With strategic marketing
                                </p>
                            </div>
                        </div>

                        {/* Image glow */}
                        <div className="pointer-events-none absolute -bottom-3 left-8 right-8 -z-10 h-10 rounded-full bg-cyan-400/10 blur-2xl" />
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-4">

                        {/* Eyebrow */}
                        <div className="mb-3 flex items-center gap-2">
                            <span className="h-px w-6 bg-cyan-400 sm:w-8" />

                            <p className="text-[9px] font-bold tracking-[0.25em] text-cyan-400 sm:text-[10px] sm:tracking-[0.3em]">
                                WHY AXVIONAL DIGITAL
                            </p>
                        </div>

                        {/* Heading */}
                        <h2 className="max-w-lg text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-3xl xl:text-4xl">
                            More Leads.
                            <br />
                            More Clients.
                            <br />
                            <span className="bg-linear-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                More Growth.
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mt-4 max-w-xl text-xs leading-6 text-white/55 sm:text-sm sm:leading-7">
                            We combine creative marketing strategies with advanced web
                            solutions to deliver measurable results for businesses in the UAE.
                        </p>

                        {/* Benefits */}
                        <ul className="mt-5 space-y-3 sm:mt-6">
                            {benefits.map((benefit) => (
                                <li
                                    key={benefit}
                                    className="group/item flex items-start gap-3 text-[11px] font-medium text-white/70 transition-colors duration-300 hover:text-white sm:text-xs"
                                >
                                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400 transition-all duration-300 group-hover/item:bg-cyan-400 group-hover/item:text-slate-950">
                                        <CheckCircle2 className="size-3.5" />
                                    </span>

                                    <span className="pt-0.5">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA
                        <div className="mt-7">
                            <Link
                                href="/about"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[10px] font-bold text-slate-950 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-cyan-400/20 sm:text-xs"
                            >
                                Learn More

                                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div> */}
                    </div>

                    {/* Our Impact */}
                    <div className="lg:col-span-3">

                        <div className="relative overflow-hidden rounded-2xl border border-cyan-400/25 bg-linear-to-b from-slate-900/95 to-slate-950/95 p-4 shadow-xl shadow-black/20 backdrop-blur-xl transition-colors duration-500 hover:border-cyan-300/40 sm:p-5 lg:p-4 xl:p-5">

                            {/* Card glow */}
                            <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-cyan-400/10 blur-3xl" />

                            {/* Header */}
                            <div className="relative mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                                <div>
                                    <p className="text-[9px] font-bold tracking-[0.22em] text-cyan-400">
                                        OUR IMPACT
                                    </p>

                                    <p className="mt-1 text-[10px] text-white/40">
                                        Results that matter
                                    </p>
                                </div>

                                <div className="flex size-8 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                                    <Zap className="size-4" />
                                </div>
                            </div>

                            {/* Impact stats */}
                            <div className="relative grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-2.5">

                                {impactStats.map((stat) => {
                                    const Icon = stat.icon;

                                    return (
                                        <div
                                            key={stat.label}
                                            className="group/stat flex items-center gap-2.5 rounded-xl border border-transparent p-2 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/5 sm:gap-3 sm:p-3 lg:p-2 xl:p-3"
                                        >
                                            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 transition-all duration-300 group-hover/stat:border-cyan-400/50 group-hover/stat:bg-cyan-400/15">
                                                <Icon className="size-4" strokeWidth={2} />
                                            </div>

                                            <div className="min-w-0">
                                                <p className="text-lg font-black leading-none tracking-tight text-white sm:text-xl">
                                                    {stat.value}
                                                </p>

                                                <p className="mt-1 text-[8px] leading-4 text-white/45 sm:text-[9px]">
                                                    {stat.label}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Bottom accent */}
                            <div className="mt-4 h-px bg-linear-to-r from-transparent via-cyan-400/40 to-transparent" />

                            <p className="mt-3 text-center text-[9px] font-medium tracking-wide text-white/40">
                                Your growth is our priority.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

