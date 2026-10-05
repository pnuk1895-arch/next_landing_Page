"use client";

import Image from 'next/image'
import { Icon } from "@iconify/react";
import Service from '@/assets/ServicesImage/Services_Image.webp'

const services = [
    {
        Icon: "devicon:google",
        IconName: "Google Ads",
        content: "High-intent customers for your business.",
    },
    {
        Icon: "logos:meta-icon",
        IconName: "Meta Ads",
        content: "Reach & convert the right audience.",
    },
    {
        Icon: "thesvg-color:instagram",
        IconName: "Social Media Ads",
        content: "Build brand and drive more sales.",
    },
    {
        Icon: "glyphs-poly:signal-4",
        IconName: "Conversion Optimization",
        content: "Turn more clicks into customers.",
    },
];

export default function ServicesComponent() {
    return (
        <section
        id="OurServices"
            className="
                w-full
                mt-6
                bg-linear-to-b
                from-[#F3F7FD] from-0%
                via-white via-50%
                to-[#F3F7FD] to-100
            "
        >
            <div
                className="
                mx-auto
                w-full
                max-w-380

                px-8
                sm:px-10
                md:px-12
                lg:px-14
                xl:px-0
                "
            >
                <div
                    className="
                    flex
                    flex-col

                    xl:flex-row
                    xl:items-stretch
                "
                >
                    {/* ================= LEFT CONTENT ================= */}

                    <div
                        className="
                        w-full

                        py-8
                        sm:py-10
                        md:py-12

                        xl:w-1/2
                        xl:pl-16
                        2xl:pl-20

                        z-10
                        
                        "
                    >
                        {/* Small heading */}

                        <h4
                            className="
                            text-xs
                            sm:text-sm

                            font-bold
                            tracking-[0.15em]
                            text-[#52627A]
                        "
                        >
                            OUR SERVICES
                        </h4>

                        {/* Main heading */}

                        <h2
                            className="
                            mt-2
                            mb-6

                            text-3xl
                            sm:text-4xl
                            md:text-5xl

                            font-black
                            font-custom
                            leading-[0.95]
                            tracking-tight

                            text-[#0B1736]
                        "
                        >
                            Performance Marketing
                            <br />

                            That{" "}
                            <span className="text-[#FFC83D]">
                                Delivers Results
                            </span>
                        </h2>

                        {/* ================= SERVICE CARDS ================= */}

                        <div
                            className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            lg:grid-cols-4

                            gap-4

                            xl:pr-4
                        "
                        >
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="
                                    w-full

                                    rounded-2xl
                                    bg-white

                                    px-4
                                    py-4

                                    shadow-[0_8px_30px_rgba(15,35,70,0.10)]

                                    transition-all
                                    duration-300

                                    hover:-translate-y-1
                                    hover:shadow-[0_12px_35px_rgba(15,35,70,0.15)]

                                    lg:min-h-37.5
                                "
                                >
                                    <Icon
                                        icon={service.Icon}
                                        className="
                                        h-9
                                        w-9
                                        sm:h-10
                                        sm:w-10
                                        mb-3
                                        "
                                    />

                                    <h2
                                        className="
                                        text-sm
                                        sm:text-[15px]

                                        font-bold
                                        leading-tight

                                        text-[#061B3A]
                                        "
                                    >
                                        {service.IconName}
                                    </h2>

                                    <p
                                        className="
                                            mt-2

                                            text-xs
                                            sm:text-sm

                                            font-medium
                                            leading-4

                                            text-[#0B2A52]
                                            "
                                    >
                                        {service.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ================= RIGHT IMAGE ================= */}

                    <div
                        className="
                        hidden

                        xl:block
                        xl:w-1/2

                        relative
                        overflow-hidden
                        "
                    >
                        <Image
                            src={Service}
                            alt="Dubai skyline"
                            className="
                            h-full
                            min-h-100
                            w-full

                            object-cover
                            object-right

                            rounded-l-2xl
                        "
                        />

                        {/* Image fade */}

                        <div
                            className="
                                absolute
                                inset-y-0
                                left-0

                                w-[35%]

                                bg-linear-to-r
                                from-[#F3F7FD]
                                via-[#F3F7FD]/60
                                to-transparent

                                pointer-events-none
                            "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}