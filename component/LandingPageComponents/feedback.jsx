
"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
    {
        name: "Rahul Mehta",
        role: "Real Estate Business",
        image: "https://img.magnific.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80",
        quote:
            "Excellent team and great support. Our website and ad campaigns brought amazing results.",
    },
    {
        name: "Simran Kaur",
        role: "E-commerce Business",
        image: "https://img.magnific.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80",
        quote:
            "Professional, responsive and result-driven. Highly recommended for digital marketing in the UAE.",
    },
    {
        name: "Amit Sharma",
        role: "Service Business",
        image: "https://img.magnific.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80",
        quote:
            "They delivered exactly what we needed and helped us generate quality leads.",
    },
];

export default function ClientTestimonials() {
    const cardRefs = useRef([]);
    const [visibleCards, setVisibleCards] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mobileQuery = window.matchMedia("(max-width: 639px)");
        const reducedMotionQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        const updateScreenSize = () => {
            setIsMobile(mobileQuery.matches);
        };

        updateScreenSize();
        mobileQuery.addEventListener("change", updateScreenSize);

        // Avoid animations for users who prefer reduced motion.
        if (reducedMotionQuery.matches) {
            setVisibleCards(testimonials.map((_, index) => index));

            return () => {
                mobileQuery.removeEventListener("change", updateScreenSize);
            };
        }

        // Fallback for browsers without IntersectionObserver.
        if (!("IntersectionObserver" in window)) {
            setVisibleCards(testimonials.map((_, index) => index));

            return () => {
                mobileQuery.removeEventListener("change", updateScreenSize);
            };
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const index = Number(entry.target.dataset.index);

                    setVisibleCards((previous) =>
                        previous.includes(index)
                            ? previous
                            : [...previous, index]
                    );

                    // Animate each card only once.
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -35px 0px",
            }
        );

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            observer.disconnect();
            mobileQuery.removeEventListener("change", updateScreenSize);
        };
    }, []);

    return (
        <section
            id="testimonials"
            className="relative isolate overflow-hidden border-y border-slate-200 bg-linear-to-b from-white via-slate-50 to-white py-14 text-slate-900 sm:py-16 lg:py-20"
        >
            {/* Soft background lighting */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -left-24 top-0 size-72 rounded-full bg-cyan-100/60 blur-3xl mix-blend-multiply sm:size-96" />

                <div className="absolute -right-24 bottom-0 size-72 rounded-full bg-blue-100/50 blur-3xl mix-blend-multiply sm:size-96" />

                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/70 to-transparent" />
            </div>

            <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-16 lg:px-20 xl:px-10">
                {/* Section heading */}
                <header className="mx-auto mb-8 max-w-2xl text-center sm:mb-10 lg:mb-12">
                    <div className="mb-3 flex items-center justify-center gap-2">
                        <span className="h-px w-8 bg-cyan-500" />

                        <span className="text-[10px] font-bold tracking-[0.25em] text-cyan-700 sm:text-xs sm:tracking-[0.3em]">
                            CLIENT TESTIMONIALS
                        </span>

                        <span className="h-px w-8 bg-cyan-500" />
                    </div>

                    <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                        What Our{" "}
                        <span className="bg-linear-to-r from-cyan-600 via-blue-600 to-sky-500 bg-clip-text text-transparent">
                            Clients Say
                        </span>
                    </h2>

                    <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-600 sm:text-base">
                        Real results, trusted partnerships, and success stories from
                        businesses growing with Axvional Digital.
                    </p>
                </header>

                {/* Testimonial cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                    {testimonials.map((testimonial, index) => {
                        const isVisible = visibleCards.includes(index);

                        return (
                            <div
                                key={testimonial.name}
                                ref={(element) => {
                                    cardRefs.current[index] = element;
                                }}
                                data-index={index}
                                className="min-w-0"
                                style={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible
                                        ? "perspective(1000px) rotateX(0deg) translateY(0px)"
                                        : isMobile
                                          ? "perspective(1000px) rotateX(0deg) translateY(28px)"
                                          : "perspective(1000px) rotateX(14deg) translateY(35px)",
                                    transformOrigin: "top center",
                                    backfaceVisibility: "hidden",
                                    transitionProperty: "opacity, transform",
                                    transitionDuration: isMobile
                                        ? "550ms"
                                        : "850ms",
                                    transitionTimingFunction:
                                        "cubic-bezier(0.22, 1, 0.36, 1)",
                                    transitionDelay: isVisible
                                        ? `${index * (isMobile ? 80 : 140)}ms`
                                        : "0ms",
                                }}
                            >
                                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-sm shadow-slate-900/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-950/10 sm:p-6">
                                    {/* Top accent */}
                                    <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-300 transition-transform duration-500 group-hover:scale-x-100" />

                                    <div className="mb-5 flex items-center justify-between">
                                        {/* Gold rating */}
                                        <div
                                            className="flex items-center gap-1"
                                            aria-label="5 out of 5 stars"
                                        >
                                            {Array.from({ length: 5 }).map(
                                                (_, starIndex) => (
                                                    <Star
                                                        key={starIndex}
                                                        className="size-4 fill-amber-400 text-amber-400 transition-transform duration-300 group-hover:scale-110"
                                                    />
                                                )
                                            )}
                                        </div>

                                        <Quote className="size-7 fill-cyan-50 text-cyan-500/70 transition-colors duration-300 group-hover:text-cyan-600" />
                                    </div>

                                    {/* Testimonial text */}
                                    <blockquote className="flex-1 text-sm leading-6 text-slate-600 sm:text-[15px]">
                                        “{testimonial.quote}”
                                    </blockquote>

                                    {/* Client details */}
                                    <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                                        <div className="relative size-12 shrink-0 overflow-hidden rounded-full border-2 border-white bg-linear-to-br from-cyan-100 to-blue-100 shadow-md ring-1 ring-slate-200 transition-all duration-300 group-hover:ring-cyan-300">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                sizes="48px"
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className="truncate text-sm font-bold text-slate-900 transition-colors duration-300 group-hover:text-cyan-700 sm:text-base">
                                                {testimonial.name}
                                            </h3>

                                            <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                                                {testimonial.role}
                                            </p>
                                        </div>

                                        <div className="ml-auto size-2 shrink-0 rounded-full bg-emerald-400 ring-4 ring-emerald-50" />
                                    </div>
                                </article>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
