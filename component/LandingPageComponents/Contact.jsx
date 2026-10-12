"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Users,
  Zap,
  ShieldCheck,
  Send,
  UserRound,
  Mail,
  Building2,
  Phone,
  Code2,
  MessageSquare,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import "@/styles/contact.css";

/**
 * Adds scroll-triggered reveal animations to marked elements.
 * Each element animates once, then remains visible.
 */
function useContactScrollReveal(sectionRef) {
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll("[data-scroll-reveal]");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (
      reducedMotion.matches ||
      !("IntersectionObserver" in window)
    ) {
      targets.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    section.dataset.revealReady = "true";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    targets.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      delete section.dataset.revealReady;
    };
  }, [sectionRef]);
}

/* =====================================================
   CONTACT CARD
   Consultation form
===================================================== */

export function ContactCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "Website Development",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus("idle");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");

    try {
      /*
       * Demo only: no data is sent to a server.
       * Connect your backend here before using this form in production.
       */
      await new Promise((resolve) => setTimeout(resolve, 400));
      setStatus("demo");
    } catch {
      setStatus("error");
    }
  }

  const fields = [
    {
      name: "name",
      placeholder: "Full Name",
      icon: UserRound,
      type: "text",
      autoComplete: "name",
    },
    {
      name: "email",
      placeholder: "Business Email",
      icon: Mail,
      type: "email",
      autoComplete: "email",
    },
    {
      name: "company",
      placeholder: "Company Name",
      icon: Building2,
      type: "text",
      autoComplete: "organization",
    },
    {
      name: "phone",
      placeholder: "Phone Number",
      icon: Phone,
      type: "tel",
      autoComplete: "tel",
    },
  ];

  return (
    <div className="contact-card relative isolate w-full min-w-0 rounded-3xl border border-cyan-400/60 bg-slate-950/90 p-5 text-white shadow-2xl shadow-blue-950/40 sm:p-7 lg:p-8">
      {/* Animated background lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-3xl">
        <div className="contact-glow absolute -right-20 -top-20 size-64 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="contact-glow contact-glow-delay absolute -bottom-24 -left-20 size-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-cyan-950/30 to-transparent" />
      </div>

      {/* Heading */}
      <div className="mb-6 flex items-start justify-between gap-4 sm:mb-7">
        <div className="min-w-0">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-widest text-cyan-400 sm:text-sm">
            Get a free
          </p>

          <h2 className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">
            Marketing Consultation
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-6 text-slate-300">
            Tell us about your business and our team will reach out
            with a customized growth plan.
          </p>
        </div>

        <div className="contact-send-icon mt-10 hidden size-16 shrink-0 items-center justify-center rounded-full border border-blue-500/70 bg-blue-950/60 text-cyan-400 shadow-lg shadow-blue-500/20 sm:flex">
          <Send className="size-7" />
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {fields.map((field) => {
            const Icon = field.icon;

            return (
              <div
                key={field.name}
                className="contact-field relative min-w-0 rounded-xl border border-sky-900/80 bg-slate-950/60"
              >
                <Icon className="pointer-events-none absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-slate-300 transition-colors duration-300" />

                <input
                  className="w-full min-w-0 bg-transparent py-3 pl-11 pr-3 text-sm text-white outline-none placeholder:text-slate-400"
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  aria-label={field.placeholder}
                  autoComplete={field.autoComplete}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                />
              </div>
            );
          })}
        </div>

        {/* Service selector */}
        <div className="contact-field relative min-w-0 rounded-xl border border-sky-900/80 bg-slate-950/60">
          <Code2 className="pointer-events-none absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-slate-300 transition-colors duration-300" />

          <select
            name="service"
            aria-label="Select a service"
            value={formData.service}
            onChange={handleChange}
            className="w-full min-w-0 appearance-none bg-transparent py-3 pl-11 pr-10 text-sm text-white outline-none"
          >
            <option className="bg-slate-950" value="Website Development">
              Website Development
            </option>
            <option className="bg-slate-950" value="Performance Marketing">
              Performance Marketing
            </option>
            <option className="bg-slate-950" value="SEO">
              Search Engine Optimization
            </option>
            <option className="bg-slate-950" value="Social Media Marketing">
              Social Media Marketing
            </option>
            <option className="bg-slate-950" value="Branding">
              Branding &amp; Creative
            </option>
          </select>

          <ArrowRight className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 rotate-90 text-slate-300" />
        </div>

        {/* Message */}
        <div className="contact-field relative min-w-0 rounded-xl border border-sky-900/80 bg-slate-950/60">
          <MessageSquare className="pointer-events-none absolute left-3.5 top-4 size-5 text-slate-300 transition-colors duration-300" />

          <textarea
            name="message"
            rows={3}
            placeholder="Tell us about your business goals..."
            aria-label="Business goals"
            value={formData.message}
            onChange={handleChange}
            className="w-full min-w-0 resize-y bg-transparent py-3 pl-11 pr-3 text-sm leading-6 text-white outline-none placeholder:text-slate-400"
            required
          />
        </div>

        {/* CTA */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="contact-submit group flex w-full min-w-0 items-center justify-center gap-3 rounded-xl bg-linear-to-r from-cyan-400 via-blue-600 to-violet-600 px-4 py-4 text-center text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-blue-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-wait disabled:opacity-70 sm:text-sm"
        >
          <span>
            {status === "submitting"
              ? "Please Wait..."
              : "Get Free Marketing Consultation"}
          </span>

          <ArrowRight className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        {/* Form feedback */}
        {status === "demo" && (
          <p role="status" className="flex gap-2 text-sm text-cyan-300">
            <CheckCircle2 className="size-5 shrink-0" />
            Demo interaction complete. Connect your API to submit the form.
          </p>
        )}

        {status === "success" && (
          <p role="status" className="flex gap-2 text-sm text-cyan-300">
            <CheckCircle2 className="size-5 shrink-0" />
            Thank you! Your consultation request has been received.
          </p>
        )}

        {status === "error" && (
          <p role="alert" className="text-sm text-red-300">
            Something went wrong. Please try again.
          </p>
        )}

        {/* Trust indicators */}
        <div className="grid grid-cols-3 divide-x divide-sky-900/70 pt-2">
          <div className="flex items-center justify-center gap-1.5 px-1 py-1 sm:gap-2">
            <ShieldCheck className="size-4 shrink-0 text-cyan-400 sm:size-5" />
            <span className="text-center text-xs leading-4 text-slate-300">
              Confidential
            </span>
          </div>

          <div className="flex items-center justify-center gap-1.5 px-1 py-1 sm:gap-2">
            <ShieldCheck className="size-4 shrink-0 text-cyan-400 sm:size-5" />
            <span className="text-center text-xs leading-4 text-slate-300">
              No Spam
            </span>
          </div>

          <div className="flex items-center justify-center gap-1.5 px-1 py-1 sm:gap-2">
            <Users className="size-4 shrink-0 text-cyan-400 sm:size-5" />
            <span className="text-center text-xs leading-4 text-slate-300">
              Expert Support
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

/* =====================================================
   CONTACT SECTION
   Left content + ContactCard
===================================================== */

export function ContactSection() {
  const sectionRef = useRef(null);
  useContactScrollReveal(sectionRef);

  const benefits = [
    { title: "Results", subtitle: "Driven", icon: BarChart3 },
    { title: "Expert", subtitle: "Team", icon: Users },
    { title: "Quick", subtitle: "Support", icon: Zap },
    { title: "Business", subtitle: "Growth", icon: ShieldCheck },
  ];

  const contactDetails = [
    {
      label: "Business Email",
      value: "info@axvionel.com",
      icon: Mail,
      href: "mailto:info@axvionel.com",
    },
    {
      label: "Phone Number",
      value: "+91 9319309719",
      icon: Phone,
      href: "tel:+919319309719",
    },
    {
      label: "Location",
      value: "Delhi NCR, India",
      icon: MapPin,
      href: null,
    },
  ];

  return (
    <section
     
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-slate-950 py-12 text-white sm:py-16 lg:py-20"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="contact-glow absolute -left-40 top-1/4 size-96 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="contact-glow contact-glow-delay absolute -right-32 top-0 size-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="contact-glow absolute bottom-0 left-1/3 size-96 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-blue-950/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-blue-950/30 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-300/15 to-transparent" />
      </div>

      {/* Decorative dots */}
      <div className="pointer-events-none absolute left-5 top-16 hidden grid-cols-6 gap-4 opacity-50 sm:grid lg:left-8">
        {Array.from({ length: 24 }, (_, index) => (
          <span key={index} className="size-1.5 rounded-full bg-blue-500" />
        ))}
      </div>

      <div className="pointer-events-none absolute bottom-12 right-5 hidden grid-cols-6 gap-4 opacity-40 sm:grid lg:right-8">
        {Array.from({ length: 24 }, (_, index) => (
          <span key={index} className="size-1.5 rounded-full bg-cyan-400" />
        ))}
      </div>

      {/* Main layout */}
      <div className="mx-auto grid w-full max-w-7xl min-w-0 grid-cols-1 items-center gap-10 px-6 sm:px-10 md:px-16 lg:grid-cols-2 lg:gap-10 lg:px-20 xl:gap-14 xl:px-10">
        {/* Left content */}
        <div
          data-scroll-reveal
          className="contact-scroll-reveal contact-slide-left min-w-0"
        >
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-500/50 bg-blue-950/50 px-4 py-2 shadow-lg shadow-blue-500/10 transition duration-300 hover:border-cyan-400/70 hover:shadow-cyan-500/10">
            <span className="size-2.5 rounded-full bg-linear-to-r from-cyan-400 to-blue-600 shadow-lg shadow-cyan-400/50" />
            <span className="text-xs font-extrabold tracking-widest text-white sm:text-sm">
              GET IN TOUCH
            </span>
          </div>

          {/* Main heading */}
          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-6xl">
            Let’s Grow Your{" "}
            <span className="block bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Business in UAE
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Fill out the form and our experts will contact you with
            the best digital marketing and website development
            solutions for your business goals.
          </p>

          {/* Benefits */}
          <div className="mt-8 grid grid-cols-4 divide-x divide-sky-900/70">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  data-scroll-reveal
                  style={{ "--reveal-delay": `${index * 90}ms` }}
                  className="contact-scroll-reveal contact-rise flex min-w-0 flex-col items-center px-1 text-center sm:px-3"
                >
                  <div className="contact-icon mb-3 flex size-11 items-center justify-center rounded-xl border border-blue-500/50 bg-linear-to-br from-blue-950 to-slate-950 text-cyan-400 shadow-lg shadow-blue-500/10 sm:size-14">
                    <Icon className="size-5 sm:size-7" />
                  </div>

                  <span className="text-xs font-bold leading-5 text-white sm:text-sm">
                    {benefit.title}
                  </span>

                  <span className="text-xs leading-5 text-slate-300 sm:text-sm">
                    {benefit.subtitle}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Contact details */}
          <div className="mt-8 grid min-w-0 grid-cols-1 gap-4 rounded-2xl border border-sky-800/70 bg-slate-950/60 p-4 shadow-xl shadow-blue-950/20 sm:grid-cols-3 sm:gap-0 sm:p-3">
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon;

              const content = (
                <>
                  <div className="contact-icon flex size-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/50 bg-linear-to-br from-blue-950 to-slate-950 text-cyan-400 shadow-lg shadow-blue-500/10 sm:size-11">
                    <Icon className="size-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                      {detail.label}
                    </p>
                    <p className="mt-2 wrap-break-word text-sm font-medium text-white">
                      {detail.value}
                    </p>
                  </div>
                </>
              );

              return (
                <div
                  key={detail.label}
                  data-scroll-reveal
                  style={{ "--reveal-delay": `${index * 90}ms` }}
                  className={`contact-scroll-reveal contact-rise flex min-w-0 items-center gap-3 ${index === 0
                      ? "sm:pr-3"
                      : "sm:border-l sm:border-sky-900/70 sm:pl-3"
                    }`}
                >
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="flex min-w-0 items-center gap-3 rounded-lg outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-cyan-400 lg:flex-col lg:items-start xl:flex-row xl:items-center"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex min-w-0 items-center gap-3 lg:flex-col lg:items-start xl:flex-row xl:items-center">
                      {content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right side: reusable form */}
        <div
          id="contact"
          data-scroll-reveal
          className="contact-scroll-reveal contact-flip min-w-0"
        >
          <ContactCard />
        </div>
      </div>
    </section>
  );
}
