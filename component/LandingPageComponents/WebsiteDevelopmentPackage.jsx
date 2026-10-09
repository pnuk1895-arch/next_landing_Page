import Link from "next/link";
import {
    Check,
    Globe2,
    ShoppingCart,
    LayoutDashboard,
    Code2,
    ArrowRight,
    Sparkles,
} from "lucide-react";

const packages = [
    {
        icon: Globe2,
        title: "Landing Page",
        price: "AED 568",
        description:
            "Single-page layouts best suited for social media ads and lead generation.",
        features: [
            "Premium Design",
            "Fully Mobile Responsive",
            "Fast Contact Forms",
            "WhatsApp Button Integration",
            "Super Fast Speed Setup",
        ],
    },
    {
        icon: Code2,
        title: "Business Website",
        price: "AED 1707",
        description:
            "Multi-page brand websites for companies and professional service businesses.",
        popular: true,
        features: [
            "Multi-Page Setup",
            "Premium UI/UX Graphics",
            "Google SEO Friendly Layout",
            "Secure Admin Panel Access",
            "High Speed Performance",
            "Business Lead Systems",
        ],
    },
    {
        icon: ShoppingCart,
        title: "Ecommerce Store",
        price: "AED 105K+",
        description:
            "Complete digital shop where you can sell your products online across the country.",
        features: [
            "Online Payment Gateway",
            "Product & Stock Control",
            "Easy Cart & Checkout Flow",
            "Full Management Dashboard",
            "Mobile Optimized Store",
            "Clean SEO Product Tags",
        ],
    },
    {
        icon: LayoutDashboard,
        title: "Custom Portal",
        price: "Custom",
        description:
            "SaaS software dashboards, complex APIs, and setups tailored to your custom requirements.",
        features: [
            "Exclusive Custom Blueprint",
            "Advanced Process Controls",
            "High Scalable Architecture",
            "Third Party API Sync",
            "Automated Admin Flows",
            "Complete System Coding",
        ],
    },
];

export default function Packages() {
    return (
        <section className="relative overflow-hidden bg-slate-950 text-white py-14 ">
            {/* Ambient Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/4 top-0 size-64 rounded-full bg-cyan-500/5 blur-3xl sm:size-80" />
                <div className="absolute bottom-0 right-1/4 size-64 rounded-full bg-blue-500/5 blur-3xl sm:size-80" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 sm:px-10 md:px-16 lg:px-20 xl:px-10 ">

                {/* =====================================================
                                        SECTION HEADER
                    ====================================================== */}
                <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 lg:mb-14">

                    {/* Label */}
                    <div className="mb-3 flex items-center justify-center gap-2">
                        <span className="h-px w-7 bg-cyan-400/60" />

                        <span className="text-[9px] font-bold tracking-[0.28em] text-cyan-400 sm:text-[10px]">
                            BUDGET ALLOCATION
                        </span>

                        <span className="h-px w-7 bg-cyan-400/60" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                        Website Development{" "}
                        <span className="bg-linear-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Packages
                        </span>
                    </h2>

                    {/* Subheading */}
                    <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-white/40 sm:mt-4 sm:text-xs sm:tracking-[0.2em]">
                        Flexible plans for businesses in the UAE
                    </p>
                </div>

                {/* =====================================================
            PACKAGE GRID
        ====================================================== */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    {packages.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <article
                                key={item.title}
                                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl p-px transition-all duration-500 hover:-translate-y-2 ${item.popular
                                    ? "bg-linear-to-b from-cyan-300 via-cyan-500/60 to-blue-600/30 shadow-lg shadow-cyan-500/10"
                                    : "bg-linear-to-b from-cyan-400/40 via-blue-500/20 to-cyan-400/10"
                                    }`}
                            >
                                {/* Card */}
                                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-slate-950/95 p-5 sm:p-6">

                                    {/* Hover Glow */}
                                    <div className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-cyan-400/5 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/15" />

                                    {/* Popular Badge */}
                                    {item.popular && (
                                        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-2 py-1">
                                            <Sparkles className="size-2.5 text-yellow-300" />

                                            <span className="text-[7px] font-black tracking-wider text-yellow-300 sm:text-[8px]">
                                                POPULAR CHOICE
                                            </span>
                                        </div>
                                    )}

                                    {/* Icon */}
                                    <div className="relative mb-5 flex size-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-300/60 group-hover:bg-cyan-400/15 group-hover:shadow-lg group-hover:shadow-cyan-400/10">
                                        <Icon
                                            className="size-5"
                                            strokeWidth={2}
                                        />
                                    </div>

                                    {/* Package Name */}
                                    <h3 className="relative text-base font-bold text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-lg">
                                        {item.title}
                                    </h3>

                                    {/* Price */}
                                    <div className="relative mt-3">
                                        <span
                                            className={`font-black tracking-tight ${item.price === "Custom"
                                                ? "text-2xl"
                                                : "text-3xl sm:text-4xl"
                                                }`}
                                        >
                                            {item.price}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="relative mt-3 min-h-12 text-[10px] leading-5 text-white/50 sm:text-[11px]">
                                        {item.description}
                                    </p>

                                    {/* Divider */}
                                    <div className="my-5 h-px bg-linear-to-r from-transparent via-cyan-400/20 to-transparent" />

                                    {/* Features */}
                                    <ul className="relative space-y-2.5">
                                        {item.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-2 text-[10px] leading-4 text-white/65 transition-colors duration-300 group-hover:text-white/80 sm:text-[11px]"
                                            >
                                                <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                                                    <Check
                                                        className="size-2.5"
                                                        strokeWidth={3}
                                                    />
                                                </span>

                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Get Quote */}
                                    <div className="mt-auto pt-6">
                                        <Link
                                            href="/contact"
                                            className="group/button inline-flex w-full items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2.5 text-[10px] font-bold text-cyan-300 transition-all duration-300 hover:border-cyan-300/70 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-lg hover:shadow-cyan-400/20 sm:text-xs"
                                        >
                                            Get Quote

                                            <ArrowRight
                                                className="size-3.5 transition-transform duration-300 group-hover/button:translate-x-1"
                                                strokeWidth={2.5}
                                            />
                                        </Link>
                                    </div>

                                    {/* Bottom Glow */}
                                    <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 scale-x-0 bg-linear-to-r from-transparent via-cyan-400 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* =====================================================
            TRUST STRIP
        ====================================================== */}
                <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:mt-10 sm:flex-row sm:gap-6">
                    <div className="flex items-center gap-2 text-white/50">
                        <Check className="size-3.5 text-cyan-400" />

                        <span className="text-[9px] font-medium sm:text-[10px]">
                            Google Ranking Ready
                        </span>
                    </div>

                    <span className="hidden h-3 w-px bg-white/10 sm:block" />

                    <div className="flex items-center gap-2 text-white/50">
                        <Check className="size-3.5 text-cyan-400" />

                        <span className="text-[9px] font-medium sm:text-[10px]">
                            Excellent Project Support
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}