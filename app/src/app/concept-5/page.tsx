"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { ScrollReveal, ScrollRevealGroup, RevealItem } from "@/components/ScrollReveal";
import { HeroVideo } from "@/components/HeroVideo";
import { Parallax } from "@/components/Parallax";
import { ShimmerButton } from "@/components/ShimmerButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ServiceAccordion, type ServiceAccordionItem } from "@/components/ServiceAccordion";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { STOCK_PHOTOS, unsplashUrl } from "@/lib/stock-photos";

const SERVICE_ACCORDION_ITEMS: ServiceAccordionItem[] = [
  {
    serviceTitle: "Comprehensive exam",
    price: "$250 value — free",
    shortDescription:
      "A full evaluation of your teeth, gums, and bite from a licensed dentist, reviewed with you in plain language.",
  },
  {
    serviceTitle: "Digital HD X-rays",
    price: "Free",
    shortDescription:
      "High-resolution imaging with up to 80% less radiation than traditional film — results appear on screen in seconds.",
  },
  {
    serviceTitle: "Personalized treatment plan",
    price: "Free",
    shortDescription:
      "Clear next steps and priced options, written in plain language. No pressure to decide anything on the spot.",
  },
  {
    serviceTitle: "Dedicated Q&A",
    price: "Free",
    shortDescription:
      "Time set aside specifically for your questions — about your results, your options, or anything dental-related.",
  },
];

const SERVICE_CARDS = [
  {
    title: "New patients",
    body: "First visit to Smile Loft? Your free exam and X-rays give us — and you — a full picture from day one.",
    photo: STOCK_PHOTOS.friendlyCheckup,
  },
  {
    title: "Returning patients",
    body: "Due for routine care? The same complimentary exam and X-ray visit is available any time you're due.",
    photo: STOCK_PHOTOS.patientRelaxed,
  },
];

const FAQS = [
  { question: "Is this really free?", answer: "Yes — the comprehensive exam, digital X-rays, and treatment plan are all complimentary with no obligation to schedule further treatment." },
  { question: "Do you accept my insurance?", answer: "We work with most major dental insurance plans. Bring your insurance card and our team will help verify your benefits." },
  { question: "What should I bring?", answer: "A photo ID and insurance card if you have one. Prior X-rays are helpful but not required." },
  { question: "How long does the visit take?", answer: "Most first visits take about 45–60 minutes, including your exam, X-rays, and plan review." },
  { question: "Is this only for new patients?", answer: "Not at all — available for new patients and returning patients due for routine care." },
];

const CREW = [
  { name: "Dr. Marcus Whitfield", jobTitle: "Lead Dentist", photo: STOCK_PHOTOS.crewPortraitOne },
  { name: "Elena Castillo", jobTitle: "Dental Hygienist", photo: STOCK_PHOTOS.crewPortraitTwo },
  { name: "Dr. Sana Farooqi", jobTitle: "Associate Dentist", photo: STOCK_PHOTOS.clinicianPortrait },
  { name: "Owen Michaels", jobTitle: "Patient Coordinator", photo: STOCK_PHOTOS.warmPortrait },
];

const TESTIMONIALS = [
  {
    name: "Nancy Foster",
    quote:
      "I have been coming to this office for many years, and always find them welcoming. The staff takes time to explain everything clearly, and I never feel rushed or like just another appointment on the schedule.",
    photo: STOCK_PHOTOS.teamReviewing,
  },
  {
    name: "Daniel Ruiz",
    quote:
      "The free exam and X-ray visit was easy to book and the whole team walked me through everything on screen. No pressure, no surprise costs — just a clear plan.",
    photo: STOCK_PHOTOS.handsWithModel,
  },
  {
    name: "Priya Nair",
    quote:
      "I switched locations when I moved and it felt like the same practice — same friendly explanations, same careful attention. Booking online took less than a minute.",
    photo: STOCK_PHOTOS.receptionWelcome,
  },
];

function HeadlineWords({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <span key={i} className="inline-block whitespace-pre">
          <motion.span
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: reduce ? 0 : i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            {w === "X-Ray" ? <span className="whitespace-nowrap">{w}</span> : w}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

export default function Concept5() {
  return (
    <div className="silenus min-h-screen">
      <Header
        className="bg-[#141414]/90 backdrop-blur-sm"
        logoChipClassName="bg-white"
        ctaClassName="bg-[#bb9d81] text-[#141414]"
        ctaLabel="Book Free Exam"
      />

      <main>
        {/* ---------------- Hero ---------------- */}
        <section className="relative flex h-[calc(100vh-68px)] min-h-[640px] flex-col justify-end overflow-hidden px-5 pb-10 pt-[100px] sm:px-8 sm:pb-10 sm:pt-[140px] lg:px-10">
          <HeroVideo
            src="/bannerVideo.mp4"
            overlayClassName="bg-[#141414]/35 bg-gradient-to-b from-transparent via-transparent to-[#141414]"
          />
          {/* extra readability gradient concentrated in the bottom band where text sits */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[320px] bg-gradient-to-b from-transparent to-[#141414]"
          />

          <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-col items-end gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            {/* Left block — headline, right-aligned text within a left column */}
            <div className="w-full max-w-[560px] lg:max-w-[440px]">
              <h1 className="sl-h72">
                <HeadlineWords text="Free Dental Exam & X-Ray" />
              </h1>
            </div>

            {/* Right block — supporting subtext, right-justified */}
            <ScrollReveal direction="up" delay={0.25} className="w-full max-w-[560px] text-right lg:max-w-[60%]">
              <p className="sl-p28">
                A comprehensive look at your oral health — reviewed with you on screen, and
                explained in plain language.
              </p>
              <div className="mt-6 flex justify-end">
                <a href="#lead-form">
                  <ShimmerButton className="bg-[#bb9d81] text-[#141414]">
                    Book My Free Exam &amp; X-Ray
                  </ShimmerButton>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- About us ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <ScrollReveal direction="left">
                <p className="sl-h18 mb-4 uppercase tracking-[0.1em]">About Smile Loft</p>
                <h2 className="sl-h24 !text-left text-[28px] sm:text-[34px]">
                  A dental practice built around you, not the clock
                </h2>
                <p className="sl-p18 mt-5 max-w-lg text-[#dedede]/85">
                  Across 10 Maryland locations, Smile Loft Dental pairs modern digital
                  imaging with a genuinely unhurried visit. Every appointment starts with a
                  real conversation — we listen first, examine thoroughly, and walk you
                  through exactly what we&apos;re seeing, on screen, before anything is ever
                  scheduled.
                </p>
                <p className="sl-p18 mt-4 max-w-lg text-[#dedede]/70">
                  No pressure, no surprise bills — just a clear plan you can think over on
                  your own timeline.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="scale" delay={0.1} className="relative aspect-[5/4] overflow-hidden rounded-2xl">
                <Parallax yRange={[-20, 20]} className="absolute inset-0">
                  <Image
                    src={unsplashUrl(STOCK_PHOTOS.emptyOperatory.id, 900)}
                    alt={STOCK_PHOTOS.emptyOperatory.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </Parallax>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ---------------- Services (accordion) ---------------- */}
        <section id="services" className="bg-white/[0.02] px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[880px]">
            <ScrollReveal className="mb-10 text-center">
              <p className="sl-h18 mb-3 uppercase tracking-[0.1em]">What&apos;s included</p>
              <h2 className="sl-h64">Your free visit, in detail</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ServiceAccordion items={SERVICE_ACCORDION_ITEMS} defaultOpenIndex={0} />
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Services (static cards) ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 max-w-[600px]">
              <p className="sl-h18 mb-3 uppercase tracking-[0.1em]">Who it&apos;s for</p>
              <h2 className="sl-h24 !text-left text-[28px] sm:text-[34px]">Every visit welcome</h2>
            </ScrollReveal>
            <ScrollRevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {SERVICE_CARDS.map((card) => (
                <RevealItem key={card.title} direction="scale">
                  <div className="group relative h-full min-h-[320px] overflow-hidden rounded-2xl">
                    <Image
                      src={unsplashUrl(card.photo.id, 900)}
                      alt={card.photo.alt}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      style={{ objectFit: "cover" }}
                      className="brightness-[0.6] transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-8">
                      <h3 className="sl-h24 !text-left">{card.title}</h3>
                      <p className="sl-p18 mt-2 max-w-sm">{card.body}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ---------------- Crew ---------------- */}
        <section className="bg-white/[0.02] px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 text-center">
              <p className="sl-h18 mb-3 uppercase tracking-[0.1em]">Meet the crew</p>
              <h2 className="sl-h64">The people behind your care</h2>
            </ScrollReveal>
            <ScrollRevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CREW.map((member, i) => (
                <RevealItem key={member.name}>
                  <div className="overflow-hidden rounded-2xl bg-white/5">
                    <Parallax
                      yRange={i % 2 === 0 ? [-16, 16] : [16, -16]}
                      className="relative aspect-[4/5] w-full"
                    >
                      <Image
                        src={unsplashUrl(member.photo.id, 600)}
                        alt={member.photo.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        style={{ objectFit: "cover" }}
                      />
                    </Parallax>
                    <div className="p-5">
                      <h3 className="sl-h24 !text-left text-lg">{member.name}</h3>
                      <p className="sl-p16 mt-1">{member.jobTitle}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ---------------- Testimonials ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 text-center">
              <p className="sl-h18 mb-3 uppercase tracking-[0.1em]">Patient stories</p>
              <h2 className="sl-h64">What patients tell us</h2>
            </ScrollReveal>
            <ScrollRevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <RevealItem key={t.name}>
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white/5">
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src={unsplashUrl(t.photo.id, 700)}
                        alt={t.photo.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        style={{ objectFit: "cover" }}
                        className="brightness-[0.75]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#bb9d81] text-[#bb9d81]" />
                        ))}
                      </div>
                      <p className="sl-p18 flex-1 text-[#dedede]/85">&ldquo;{t.quote}&rdquo;</p>
                      <p className="sl-h18 mt-4 text-base">{t.name}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section className="bg-white/[0.02] px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[760px]">
            <ScrollReveal className="mb-10 text-center">
              <p className="sl-h18 mb-3 uppercase tracking-[0.1em]">Questions</p>
              <h2 className="sl-h64">Frequently asked questions</h2>
            </ScrollReveal>
            <ScrollReveal>
              <FaqAccordion
                items={FAQS}
                triggerClassName="text-[#dedede] hover:text-[#bb9d81]"
                className="[&_[data-slot=accordion-item]]:border-[#bb9d81]/15"
              />
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Contact / CTA ---------------- */}
        <section id="lead-form" className="relative overflow-hidden px-6 py-[88px] pb-28 sm:px-8 md:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #bb9d81, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-[720px]">
            <ScrollReveal className="mb-10 text-center">
              <p className="sl-h18 mb-3 uppercase tracking-[0.1em]">Get started</p>
              <h2 className="sl-h64">Book My Free Exam &amp; X-Ray</h2>
              <p className="sl-p18 mx-auto mt-4 max-w-md text-[#dedede]/70">
                No cost, no obligation — new and returning patients welcome across all 10
                Maryland locations.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="scale" delay={0.1} className="rounded-3xl border border-[#bb9d81]/20 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-9">
              <LeadForm accentClassName="bg-[#bb9d81] text-[#141414]" successIconClassName="text-[#bb9d81]" />
            </ScrollReveal>
            <ScrollReveal delay={0.15} className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-sm font-semibold text-[#dedede]/70">
              {["10 Maryland locations", "No cost, no obligation", "New & returning patients welcome", "Most insurance accepted"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#bb9d81]" />
                  {t}
                </span>
              ))}
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer className="text-[#dedede]/50" />
      <StickyCtaBar className="bg-[#bb9d81] text-[#141414]" />
    </div>
  );
}
