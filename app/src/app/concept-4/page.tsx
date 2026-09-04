"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  MapPin,
  CheckCircle2,
  Eye,
  MessageCircleQuestion,
  ScanLine,
  ClipboardList,
  Sparkles,
  Star,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { LeadForm } from "@/components/LeadForm";
import { ScrollReveal, ScrollRevealGroup, RevealItem } from "@/components/ScrollReveal";
import { Marquee } from "@/components/Marquee";
import { Parallax } from "@/components/Parallax";
import { HeroVideo } from "@/components/HeroVideo";
import { ShimmerButton } from "@/components/ShimmerButton";
import { BorderBeam } from "@/components/BorderBeam";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CountUp } from "@/components/CountUp";
import { GiantWatermark } from "@/components/GiantWatermark";
import { FloatingStatCard } from "@/components/FloatingStatCard";
import { LOCATIONS } from "@/lib/locations";
import { STOCK_PHOTOS, unsplashUrl } from "@/lib/stock-photos";
import { cn, withBasePath } from "@/lib/utils";

const HERO_SERVICES = [
  "Comprehensive exam",
  "Digital HD X-rays",
  "Personalized treatment plan",
  "Dedicated Q&A",
];

const APPROACH_TABS = [
  {
    label: "Our Approach",
    title: "Care that starts with listening",
    body: "Every visit begins with a real conversation, not a script. We take the time to understand your concerns before we ever pick up an instrument — then walk you through exactly what we're seeing, on screen, in plain language.",
    photo: STOCK_PHOTOS.teamReviewing,
  },
  {
    label: "Our Promise",
    title: "No pressure, no surprises",
    body: "You'll always know your costs before anything is scheduled, and you're never pushed into treatment on the spot. A written plan with priced options — yours to think over, on your own timeline.",
    photo: STOCK_PHOTOS.patientRelaxed,
  },
];

const SERVICES = [
  {
    icon: Eye,
    title: "Comprehensive exam",
    body: "A full evaluation of your teeth, gums, and bite from a licensed dentist — a $250 value, complimentary today.",
  },
  {
    icon: ScanLine,
    title: "Digital HD X-rays",
    body: "High-resolution imaging with up to 80% less radiation than traditional film — results appear on screen in seconds.",
  },
  {
    icon: ClipboardList,
    title: "Treatment planning",
    body: "Clear next steps and priced options, written in plain language. No pressure to decide anything on the spot.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Dedicated Q&A",
    body: "Time set aside specifically for your questions — about your results, your options, or anything dental-related.",
  },
];

const WHY_US = [
  { title: "Modern equipment", body: "Digital sensors and HD imaging across every one of our 10 Maryland locations." },
  { title: "Unhurried visits", body: "Real time set aside for your questions — no rushing through the appointment." },
  { title: "Transparent pricing", body: "You'll know your costs before anything is scheduled. No surprise bills." },
  { title: "Most insurance accepted", body: "Bring your card and our team verifies your benefits on the spot." },
];

const TESTIMONIALS = [
  {
    name: "Nancy Foster",
    role: "Patient",
    quote:
      "I have been coming to this office for many years, and always find them welcoming. The staff takes time to explain everything clearly, and I never feel rushed or like just another appointment on the schedule.",
  },
  {
    name: "Daniel Ruiz",
    role: "Patient",
    quote:
      "The free exam and X-ray visit was easy to book and the whole team walked me through everything on screen. No pressure, no surprise costs — just a clear plan.",
  },
  {
    name: "Priya Nair",
    role: "Returning patient",
    quote:
      "I switched locations when I moved and it felt like the same practice — same friendly explanations, same careful attention. Booking online took less than a minute.",
  },
];

const GALLERY = [
  STOCK_PHOTOS.modernSuite,
  STOCK_PHOTOS.xrayReview,
  STOCK_PHOTOS.galleryConsult,
  STOCK_PHOTOS.procedureClose,
  STOCK_PHOTOS.galleryEquipment,
  STOCK_PHOTOS.galleryDetail,
];

const TEAM = [
  { name: "Dr. Alan Reyes", role: "Lead Dentist", photo: STOCK_PHOTOS.clinicianPortrait },
  { name: "Marisol Vega", role: "Dental Hygienist", photo: STOCK_PHOTOS.teamPortraitOne },
  { name: "Dr. Priya Shah", role: "Associate Dentist", photo: STOCK_PHOTOS.warmPortrait },
  { name: "Jordan Blake", role: "Patient Coordinator", photo: STOCK_PHOTOS.teamPortraitTwo },
];

const FAQS = [
  { question: "Is this really free?", answer: "Yes — the comprehensive exam, digital X-rays, and treatment plan are all complimentary with no obligation to schedule further treatment." },
  { question: "Do you accept my insurance?", answer: "We work with most major dental insurance plans. Bring your insurance card and our team will help verify your benefits." },
  { question: "What should I bring?", answer: "A photo ID and insurance card if you have one. Prior X-rays are helpful but not required." },
  { question: "How long does the visit take?", answer: "Most first visits take about 45–60 minutes, including your exam, X-rays, and plan review." },
  { question: "Is this only for new patients?", answer: "Not at all — available for new patients and returning patients due for routine care." },
];

function ApproachTabs() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = APPROACH_TABS[active];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <Parallax
        yRange={[-24, 24]}
        className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl lg:order-1 lg:aspect-auto lg:min-h-[420px]"
      >
        <motion.div
          key={current.photo.id}
          initial={reduce ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <Image
            src={unsplashUrl(current.photo.id, 900)}
            alt={current.photo.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </Parallax>

      <div className="order-1 flex flex-col gap-4 lg:order-2">
        <div role="tablist" aria-label="About Smile Loft Dental" className="flex gap-2">
          {APPROACH_TABS.map((tab, i) => {
            const isActive = i === active;
            return (
              <button
                key={tab.label}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`approach-panel-${i}`}
                id={`approach-tab-${i}`}
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors",
                  isActive
                    ? "bg-[#211d1d] text-white"
                    : "bg-transparent text-[#211d1d]/50 hover:text-[#211d1d]"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <motion.div
          key={current.label}
          id={`approach-panel-${active}`}
          role="tabpanel"
          aria-labelledby={`approach-tab-${active}`}
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-white p-7 shadow-sm sm:p-9"
        >
          <h3 className="pf-h2 text-[28px] sm:text-[32px]">{current.title}</h3>
          <p className="pf-body mt-4 text-[#211d1d]/75">{current.body}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default function Concept4() {
  return (
    <div className="plumfix min-h-screen">
      <Header
        className="bg-[#211d1d]/90 backdrop-blur-sm"
        logoChipClassName="bg-white"
        ctaClassName="bg-[#f7413e] text-white"
        ctaLabel="Book Free Exam"
      />

      <main>
        {/* ---------------- Hero ---------------- */}
        <section className="relative flex min-h-[calc(100vh-68px)] flex-col justify-end overflow-hidden bg-[#211d1d] px-[30px] py-16">
          {/* Giant faint background wordmark */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <GiantWatermark className="translate-y-[6%]">SMILE LOFT</GiantWatermark>
          </div>

          {/* Red decorative circle */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 top-16 h-[280px] w-[280px] rounded-full opacity-50 sm:h-[380px] sm:w-[380px] lg:h-[475px] lg:w-[475px]"
            style={{ background: "radial-gradient(circle at 35% 30%, #f7413e, #b6201d 80%)" }}
          />

          <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            {/* Title wrapper */}
            <ScrollReveal direction="none" className="flex max-w-[560px] flex-col gap-[48px]">
              <div className="flex flex-col gap-[22px]">
                <p className="pf-label uppercase tracking-[0.15em] text-[#f7413e]">All smiles, no stress</p>
                <h1 className="pf-h1">
                  Free Dental
                  <br />
                  Exam &amp; X-Ray
                </h1>
                <p className="pf-body max-w-[420px] text-white/70">
                  A comprehensive look at your oral health — reviewed with you on screen, and
                  explained in plain language.
                </p>
                <div>
                  <ShimmerButton
                    onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
                    className="bg-[#f7413e] text-white"
                  >
                    Book My Free Exam &amp; X-Ray
                  </ShimmerButton>
                </div>
              </div>

              <ul className="flex flex-col gap-3">
                {HERO_SERVICES.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm font-semibold text-white/85">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#f7413e]" />
                    {s}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Hero video + floating card */}
            <ScrollReveal direction="scale" delay={0.15} className="relative w-full lg:w-[48%]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl sm:aspect-[6/5] lg:aspect-auto lg:min-h-[620px]">
                <HeroVideo
                  src={withBasePath("/bannerVideo.mp4")}
                  focus="right center"
                  overlayClassName="bg-[#f7413e]/25 mix-blend-multiply"
                  className="rounded-3xl"
                />
              </div>

              <FloatingStatCard className="absolute -bottom-8 -left-6 sm:-left-10">
                <div className="mb-3 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#f7413e] text-[#f7413e]" />
                  ))}
                </div>
                <p className="text-sm font-semibold leading-snug text-[#211d1d]">
                  &ldquo;Never feel rushed or like just another appointment.&rdquo;
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-wide text-[#211d1d]/50">
                  Nancy Foster, patient
                </p>
              </FloatingStatCard>
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Brand / location marquee ---------------- */}
        <div className="border-y border-[#211d1d]/10 bg-white py-5">
          <Marquee
            items={[...LOCATIONS]}
            itemClassName="pf-label text-[#211d1d]"
            renderItem={(item) => (
              <>
                <MapPin className="h-4 w-4 text-[#f7413e]" />
                {item}
              </>
            )}
          />
        </div>

        {/* ---------------- About / Approach tabs ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 max-w-[600px]">
              <p className="pf-label mb-3 uppercase tracking-[0.15em] text-[#f7413e]">About Smile Loft</p>
              <h2 className="pf-h2">A dental practice built around you</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ApproachTabs />
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Lead form CTA section ---------------- */}
        <section id="lead-form" className="bg-[#211d1d] px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 max-w-[600px]">
              <p className="pf-label mb-3 uppercase tracking-[0.15em] text-[#f7413e]">Get started</p>
              <h2 className="pf-h2 text-white">Book My Free Exam &amp; X-Ray</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1fr_minmax(0,520px)]">
              <div className="relative hidden min-h-[420px] overflow-hidden rounded-3xl shadow-lg lg:block">
                <Image
                  src={unsplashUrl(STOCK_PHOTOS.emptyOperatory.id, 900)}
                  alt={STOCK_PHOTOS.emptyOperatory.alt}
                  fill
                  sizes="45vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <p className="pf-label uppercase tracking-[0.15em] text-white/80">10 Maryland locations</p>
                  <p className="mt-2 max-w-sm text-lg font-bold">
                    Modern, light-filled treatment rooms — pick whichever office is closest to you.
                  </p>
                </div>
              </div>
              <ScrollReveal className="rounded-3xl bg-[#f5f1ec] p-6 shadow-lg sm:p-9">
                <LeadForm accentClassName="bg-[#f7413e] text-white" successIconClassName="text-[#f7413e]" />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ---------------- Services ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-[560px]">
                <p className="pf-label mb-3 uppercase tracking-[0.15em] text-[#f7413e]">What&apos;s included</p>
                <h2 className="pf-h2">Your free visit, in detail</h2>
              </div>
              <a
                href="#lead-form"
                className="inline-flex shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#211d1d] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#211d1d] transition-colors hover:bg-[#211d1d] hover:text-white"
              >
                Book Free Exam
              </a>
            </ScrollReveal>
            <ScrollRevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((s) => (
                <RevealItem key={s.title}>
                  <div className="h-full rounded-2xl bg-white p-7 shadow-sm">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#f7413e]/10 text-[#f7413e]">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                    <p className="pf-body mt-2 text-[#211d1d]/70">{s.body}</p>
                  </div>
                </RevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ---------------- Why choose us + stat ---------------- */}
        <section className="bg-white px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 max-w-[600px]">
              <p className="pf-label mb-3 uppercase tracking-[0.15em] text-[#f7413e]">Why Smile Loft</p>
              <h2 className="pf-h2">What sets your visit apart</h2>
            </ScrollReveal>
            <ScrollRevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {WHY_US.map((w) => (
                <RevealItem key={w.title}>
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-[#211d1d]/10 p-6">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f7413e]" />
                    <div>
                      <h3 className="text-base font-bold">{w.title}</h3>
                      <p className="pf-body mt-1 text-[#211d1d]/65">{w.body}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </ScrollRevealGroup>

            <ScrollReveal delay={0.1} className="mt-8">
              <div className="flex flex-col items-center gap-4 rounded-3xl bg-[#211d1d] p-10 text-center text-white sm:flex-row sm:justify-between sm:text-left">
                <div>
                  <p className="pf-label uppercase tracking-[0.15em] text-[#f7413e]">Growing across Maryland</p>
                  <h3 className="pf-h2 mt-2 text-white text-[28px] sm:text-[32px]">Locations near you, and growing</h3>
                </div>
                <div className="flex items-baseline gap-2">
                  <CountUp
                    from={4}
                    value={10}
                    suffix="+"
                    duration={1.6}
                    className="text-[56px] font-bold leading-none text-[#f7413e]"
                  />
                  <span className="pf-label uppercase tracking-[0.1em] text-white/60">MD locations</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Testimonials ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 max-w-[560px]">
              <p className="pf-label mb-3 uppercase tracking-[0.15em] text-[#f7413e]">Patient stories</p>
              <h2 className="pf-h2">What patients tell us</h2>
            </ScrollReveal>
            <ScrollRevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <RevealItem key={t.name}>
                  <div className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm">
                    <span className="pf-label text-[#f7413e]">
                      {String(i + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
                    </span>
                    <p className="pf-body mt-5 flex-1 text-[#211d1d]/85">&ldquo;{t.quote}&rdquo;</p>
                    <div className="mt-6 border-t border-[#211d1d]/10 pt-4">
                      <p className="text-base font-bold">{t.name}</p>
                      <p className="pf-body mt-0.5 text-sm text-[#211d1d]/60">{t.role}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ---------------- Gallery ---------------- */}
        <section className="bg-[#211d1d] px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 max-w-[600px]">
              <p className="pf-label mb-3 uppercase tracking-[0.15em] text-[#f7413e]">Gallery</p>
              <h2 className="pf-h2 text-white">A closer look at our offices</h2>
            </ScrollReveal>
            <ScrollRevealGroup className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {GALLERY.map((photo) => (
                <RevealItem key={photo.id} direction="scale">
                  <div className="group relative aspect-square overflow-hidden rounded-xl">
                    <Image
                      src={unsplashUrl(photo.id, 700)}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 640px) 33vw, 50vw"
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </RevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ---------------- Team ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 max-w-[600px]">
              <p className="pf-label mb-3 uppercase tracking-[0.15em] text-[#f7413e]">Meet the team</p>
              <h2 className="pf-h2">The people behind your care</h2>
            </ScrollReveal>
            <ScrollRevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM.map((member, i) => (
                <RevealItem key={member.name}>
                  <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
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
                      <h3 className="text-base font-bold">{member.name}</h3>
                      <p className="pf-body mt-0.5 text-sm text-[#211d1d]/60">{member.role}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ---------------- Value card ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[560px]">
            <ScrollReveal>
              <BorderBeam color="#f7413e" className="rounded-3xl">
                <div className="rounded-3xl border border-white/10 bg-[#211d1d] p-6 text-white shadow-lg sm:p-8">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="pf-label uppercase tracking-[0.15em] text-[#f7413e]">Today&apos;s visit</p>
                    <span className="pf-h2 text-[28px] text-white sm:text-[32px]">$250 free</span>
                  </div>
                  <ul className="mt-5 flex flex-col gap-2.5 border-t border-white/10 pt-5">
                    {["Comprehensive exam", "Digital HD X-rays", "Personalized treatment plan + Q&A"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm font-semibold">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#f7413e]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ShimmerButton
                    onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
                    className="mt-6 w-full bg-[#f7413e] text-white"
                  >
                    Book My Free Exam &amp; X-Ray
                  </ShimmerButton>
                </div>
              </BorderBeam>
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Trust strip ---------------- */}
        <section className="px-6 py-14 sm:px-8">
          <ScrollReveal className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-sm font-semibold text-[#211d1d]/75">
            {["10 Maryland locations", "No cost, no obligation", "New & returning patients welcome", "Most insurance accepted"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#f7413e]" />
                {t}
              </span>
            ))}
          </ScrollReveal>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section className="bg-white px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[720px]">
            <ScrollReveal className="mb-10">
              <p className="pf-label mb-3 uppercase tracking-[0.15em] text-[#f7413e]">Questions</p>
              <h2 className="pf-h2">Frequently asked questions</h2>
            </ScrollReveal>
            <ScrollReveal>
              <FaqAccordion items={FAQS} triggerClassName="text-[#211d1d]" />
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Final CTA ---------------- */}
        <section className="relative overflow-hidden bg-[#211d1d] px-6 py-[88px] sm:px-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -right-32 h-[320px] w-[320px] rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, #f7413e, transparent 75%)" }}
          />
          <ScrollReveal className="relative mx-auto max-w-[720px] text-center text-white">
            <Sparkles className="mx-auto mb-4 h-8 w-8 text-[#f7413e]" />
            <h2 className="pf-h2 text-center text-white">Ready for a clearer picture of your smile?</h2>
            <p className="pf-body mx-auto mt-3 max-w-md text-white/70">
              Book your free exam and X-ray today — no cost, no obligation.
            </p>
            <div className="mt-7 flex justify-center">
              <ShimmerButton
                className="bg-[#f7413e] text-white"
                onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book My Free Exam &amp; X-Ray
              </ShimmerButton>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer className="bg-white text-[#211d1d]/70" />
      <StickyCtaBar className="bg-[#f7413e]" />
    </div>
  );
}
