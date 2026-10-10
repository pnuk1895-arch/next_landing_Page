"use client";

import Image from 'next/image'
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";
import { ArrowRight, Cpu } from "lucide-react"
import { useState } from 'react';
import { Icon as ICON } from '@iconify/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const links = [
  ["Home", '/HeroSection'],
  ["Services", '/OurServices'],
  ["Case Studies", '/CaseStudies'],
  ["Packages", '/Package'],
  ["About", '/About']
]

const icons = [
  ['eva:linkedin-outline','https://www.linkedin.com/company/axvionel-digital-private-limited'], ['basil:facebook-outline','https://www.facebook.com/axvioneldigital'], ['ant-design:instagram-outlined','https://www.instagram.com/axvioneldigital/'], ['bxl:telegram','https://t.me/axvionel?text=Hi%20I%20want%20website%20and%20digital%20marketing']
]

export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [Dropdown, setDropdown] = useState(false)
  const router = useRouter()

  function OpenMenu() {
    setDropdown(true)
  }

  function CloseMenu() {
    setDropdown(false)
  }

  useEffect(() => {
    if (Dropdown) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [Dropdown])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function ClickSection(path) {

    document.body.classList.remove('overflow-hidden')

    setDropdown(false)

    window.location.href = path
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 ease-out ${isScrolled
        ? "py-0"
        : "px-3 py-2 sm:px-5 md:px-8 lg:px-10"
        }`} 
    >
      {/* =====================================================
        FULL WIDTH HEADER
    ====================================================== */}

      <div
        className={`w-full border-b transition-all duration-500 ease-out ${isScrolled
          ? "border-white/10 bg-slate-950/75 shadow-2xl shadow-black/20 backdrop-blur-2xl"
          : "border-transparent bg-transparent"
          }`}
      >

        {/* Top light line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/50 to-transparent" />

        <div
          className={`mx-auto flex h-16 items-center transition-all duration-500 ease-out ${isScrolled
            ? "w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-10"
            : "w-full max-w-7xl px-3 sm:px-5 md:px-8 lg:px-10"
            }`}
        >

          {/* =================================================
            LOGO
        ================================================== */}

          <div className="flex min-w-0 flex-1 items-center">

            <Link
              href="https://www.axvionel.com"
              className="group flex shrink-0 items-center gap-2"
            >

              <Image
                src="/images/Logo.webp"
                alt="Axvional logo"
                width={300}
                height={200}
                priority
                className="h-10 w-11 object-contain transition-transform duration-500 group-hover:scale-105 sm:h-12 sm:w-14"
              />

              <div className="relative hidden leading-none sm:block">

                <p className="text-sm font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
                  Axvional Digital
                </p>

                <p className="mt-1 text-[8px] font-bold tracking-[0.2em] text-white/40">
                  PRIVATE LIMITED
                </p>

                <Cpu className="absolute -right-4 -top-1 size-3 text-white/30 transition-all duration-500 group-hover:rotate-180 group-hover:text-cyan-400" />

              </div>

            </Link>

          </div>


          {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

          <div className="hidden flex-1 lg:block">

            <nav className="flex items-center justify-center gap-6 xl:gap-9">

              {links.map(([link, path], index) => (

                <a
                  key={`${link}-${index}`}
                  href={path}
                  className="group relative whitespace-nowrap py-2 text-xs font-medium text-white/75 transition-all duration-300 hover:text-white xl:text-sm"
                >

                  {link}

                  {/* underline */}
                  <span className="absolute inset-x-0 bottom-0 mx-auto h-px w-0 bg-linear-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />

                  {/* glow */}
                  <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-cyan-400 blur-sm transition-all duration-300 group-hover:w-full" />

                </a>

              ))}

            </nav>

          </div>


          {/* =================================================
            DESKTOP CTA
        ================================================== */}

          <div className="hidden flex-1 justify-end md:flex mr-14 lg:mr-0!">

            <button
              type="button"
              onClick={() => router.push('Contact')}
              className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-yellow-300 via-yellow-400 to-amber-400 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-lg shadow-yellow-400/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-yellow-400/20 xl:px-5"
            >

              {/* shine */}
              <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative whitespace-nowrap">
                Get a Free Quote
              </span>

              <ArrowRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-1" />

            </button>

          </div>


          {/* =================================================
            MOBILE / TABLET MENU BUTTON
        ================================================== */}

          <div className="flex justify-end lg:hidden">

            <button
              type="button"
              onClick={OpenMenu}
              aria-label="Open navigation menu"
              className="group flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 sm:size-11"
            >

              <MdOutlineMenu className="size-6 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-300" />

            </button>

          </div>

        </div>

      </div>


      {/* =====================================================
        MOBILE SIDE MENU
    ====================================================== */}

      {Dropdown && (

        <div className="fixed inset-0 z-50 lg:hidden">

          {/* =================================================
            BLURRED MIRROR BACKDROP
        ================================================== */}

          <div
            className="absolute inset-0 bg-slate-950/55 backdrop-blur-xl menu-backdrop"
            onClick={CloseMenu}
          >

            {/* cyan glow */}
            <div className="absolute left-0 top-1/4 size-64 rounded-full bg-cyan-400/10 blur-3xl" />

            {/* blue glow */}
            <div className="absolute bottom-1/4 right-0 size-64 rounded-full bg-blue-500/10 blur-3xl" />

          </div>


          {/* =================================================
            SIDE DRAWER
        ================================================== */}

          <div className="menu-drawer absolute right-0 top-0 flex h-full w-72 max-w-[88vw] flex-col overflow-hidden border-l border-white/15 bg-slate-950/80 shadow-2xl shadow-black/50 backdrop-blur-2xl sm:w-80 md:w-96">

            {/* Top glow */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-cyan-400/10 to-transparent" />


            {/* =================================================
              DRAWER HEADER
          ================================================== */}

            <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-5">

              <Link
                href="/"
                onClick={CloseMenu}
                className="group flex items-center gap-2"
              >

                <Image
                  src="/images/Logo.webp"
                  alt="Axvional Digital"
                  width={52}
                  height={50}
                  priority
                  className="h-10 w-11 object-contain transition-transform duration-500 group-hover:scale-105"
                />

                <div className="leading-none">

                  <p className="text-sm font-bold text-white transition-colors group-hover:text-cyan-300">
                    Axvional Digital
                  </p>

                  <p className="mt-1 text-[7px] font-bold tracking-[0.2em] text-white/40">
                    PRIVATE LIMITED
                  </p>

                </div>

              </Link>


              {/* Close */}
              <button
                type="button"
                onClick={CloseMenu}
                aria-label="Close navigation menu"
                className="group flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-red-400/30 hover:bg-red-400/10 hover:text-white"
              >

                <ICON
                  icon="akar-icons:cross"
                  className="size-5 transition-transform duration-300 group-hover:rotate-90"
                />

              </button>

            </div>


            {/* =================================================
              NAVIGATION
          ================================================== */}

            <div className="relative flex-1 overflow-y-auto px-4 py-5">

              <p className="mb-3 px-2 text-[9px] font-semibold tracking-[0.2em] text-cyan-400/70">
                NAVIGATION
              </p>


              <nav className="space-y-1">

                {links.map(([Link, path], index) => (

                  <div
                    key={index}
                    onClick={() => ClickSection(path)}
                    className="group flex cursor-pointer items-center justify-between rounded-xl border border-transparent px-3 py-3 transition-all duration-300 hover:border-white/10 hover:bg-white/5"
                  >

                    <a
                      href={path}
                      className="text-sm font-medium text-white/75 transition-colors duration-300 group-hover:text-white sm:text-base"
                    >
                      {Link}
                    </a>


                    <div className="flex size-7 items-center justify-center rounded-lg bg-white/5 text-white/40 transition-all duration-300 group-hover:bg-cyan-400/10 group-hover:text-cyan-400">

                      <ICON
                        icon="hugeicons:greater-than"
                        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      />

                    </div>

                  </div>

                ))}

              </nav>


              {/* =================================================
                CTA
            ================================================== */}

              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-linear-to-br from-cyan-400/10 via-blue-500/5 to-transparent p-4">

                <p className="text-xs font-semibold text-white">
                  Ready to grow your business?
                </p>

                <p className="mt-1 text-[10px] leading-5 text-white/45">
                  Talk to our team and get a tailored growth strategy.
                </p>

                <a
                  href="/contact"
                  onClick={CloseMenu}
                  className="group mt-4 flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-yellow-300 to-amber-400 px-4 py-3 text-xs font-bold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-400/20"
                >

                  Get a Free Strategy Call

                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />

                </a>

              </div>

            </div>


            {/* =================================================
              SOCIAL
          ================================================== */}

            <div className="relative border-t border-white/10 px-5 py-4">

              <p className="text-[9px] font-semibold tracking-[0.2em] text-white/40">
                FOLLOW US
              </p>

              <div className="mt-3 flex gap-2">

                {icons.map(([icon, path], index) => (

                  <Link
                    key={index}
                    href={path}
                    target='_blank'
                    className="group flex size-9 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/10"
                  >

                    <ICON
                      icon={icon}
                      className="size-4 text-white/50 transition-colors duration-300 group-hover:text-cyan-300"
                    />

                  </Link>

                ))}

              </div>

            </div>

          </div>

        </div>

      )}

    </header>
  )

}