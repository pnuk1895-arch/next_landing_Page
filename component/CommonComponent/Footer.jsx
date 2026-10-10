import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

const icons = [
  ['eva:linkedin-outline','https://www.linkedin.com/company/axvionel-digital-private-limited'],
  ['basil:facebook-outline','https://www.facebook.com/axvioneldigital'],
  ['ant-design:instagram-outlined','https://www.instagram.com/axvioneldigital/'],
  ['bxl:telegram','https://t.me/axvionel?text=Hi%20I%20want%20website%20and%20digital%20marketing']
]

const Nav = [
  ["ABOUT AXVIONALDIGITAL PRIVATE LIMITED",'https://www.axvionel.com/about'],
  ["SEO SERVICES",'https://www.axvionel.com/seo-packages'],
  ["DIGITAL MARKETING",'https://www.axvionel.com/services'],
  ["CONTACT",""],
];

const specializations = [
  "TECHNICAL",
  "GOOGLE ADS",
  "WEB DEVELOPMENT",
  "VIRTUAL ASSISTANCE",
];

const contact = [
  {
    name: "PRIMARY EMAIL",
    icon: "carbon:email",
    content: "info@axvioonal.com",
    path: "mailto:axvional@gmail.com",
  },
  {
    name: "PHONE",
    icon: "akar-icons:phone",
    content: "+91 93193 09719",
    path: "tel:+91 93193 09719",
  },
  {
    name: "OFFICE ADDRESS",
    icon: "akar-icons:location",
    content: "D-79,D-Block,Sector-2,Noida,Utter Pradesh 201301",
    path: "",
  },
];

export default function Footer() {
  return (
    <footer className="relative isolate w-full overflow-hidden border-t border-cyan-400/20 bg-linear-to-b from-slate-950 via-[#06172d] to-[#020b18] px-8 py-16 text-white sm:px-10 md:px-16 lg:px-20 ">
      {/* Background lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" >
        <div className="absolute -left-32 top-0 size-96 rounded-full bg-cyan-500/10 blur-3xl mix-blend-screen" />

        <div className="absolute right-0 top-0 size-80 rounded-full bg-blue-600/10 blur-3xl mix-blend-screen" />

        <div className="absolute bottom-0 left-1/3 h-48 w-2/3 rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/60 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-blue-400/20 to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-298 grid-rows-[max-content_max-content_max-content_max-content] gap-8 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 lg:gap-8">
        {/* Logo */}
        <div className="font-custom">
          <Image
            src="/images/Logo.webp"
            alt="Axvional Digital logo"
            width={300}
            height={200}
            className="ml-4 h-26 w-26 transition-transform duration-500 hover:scale-105"
          />

          <h3 className="my-5 scale-y-90 text-sm font-bold text-white">
            Axvional Digital Private Limited
          </h3>

          <p className="text-xs leading-6 text-slate-300/70">
            Axvional Digital Private Limited is a performance-driven digital
            marketing company in delhi NCR offering SEO, Google Ads, Meta Ads,
            and website development services to help businesses generate
            high-quality leads and scale faster.
          </p>

          {/* Social icons */}
          <div className="my-6 flex gap-3">
            {icons.map(([icon, path ], index) => (
              <Link
                href={path}
                key={index}
                target="_blank"
                className="group rounded-xl border border-cyan-300/20 bg-linear-to-br from-white/10 to-white/2 p-2 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <Icon
                  icon={icon}
                  className="h-5 w-5 text-slate-300/80 transition-colors duration-300 group-hover:text-cyan-300"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="self-start">
          <h2 className="scale-y-90 text-sm font-bold tracking-widest text-white">
            NAVIGATION
          </h2>

          <div className="mt-7 flex flex-col gap-3">
            {Nav.map(([N, path], index) => (
              <Link
                href={path}
                key={index}
                className="w-fit scale-y-95 text-xs font-bold tracking-wider text-slate-300/70 transition-all duration-300 hover:translate-x-1 hover:text-cyan-300"
              >
                {N}
              </Link>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className="my-4">
          <h2 className="scale-y-90 text-sm font-bold tracking-widest text-white">
            SPECIALIZATIONS
          </h2>

          <div className="mt-7 flex flex-col gap-3">
            {specializations.map((N, index) => (
              <Link
                href="/"
                key={index}
                className="w-fit scale-y-95 text-xs font-bold tracking-wider text-slate-300/70 transition-all duration-300 hover:translate-x-1 hover:text-cyan-300"
              >
                {N}
              </Link>
            ))}
          </div>
        </div>

        {/* Global outreach */}
        <div>
          <h2 className="scale-y-90 text-sm font-bold tracking-widest text-white">
            GLOBAL OUTREACH
          </h2>

          <div className="my-7 flex flex-col gap-6">
            {contact.map((detail, index) => (
              <div key={index}>
                <p className="mb-1 w-fit scale-y-95 text-sm font-bold text-slate-400">
                  {detail.name}
                </p>

                <div className="flex items-center gap-2 text-white">
                  <Icon
                    icon={detail.icon}
                    className="h-5 w-6 shrink-0 text-cyan-400/80 transition-colors duration-300"
                  />

                  <Link
                    href={detail.path}
                    className="bg-linear-to-b w-fit from-white via-slate-200 to-slate-400 bg-clip-text text-sm font-bold italic text-transparent transition-all duration-300 hover:from-cyan-300 hover:via-cyan-200 hover:to-blue-400"
                  >
                    {detail.content}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
