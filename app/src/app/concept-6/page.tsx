"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  Eye,
  ScanLine,
  ClipboardList,
  MessageCircleQuestion,
  Microscope,
  Clock3,
  Wallet,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { ScrollReveal, ScrollRevealGroup, RevealItem } from "@/components/ScrollReveal";
import { HeroVideo } from "@/components/HeroVideo";
import { Parallax } from "@/components/Parallax";
import { ShimmerButton } from "@/components/ShimmerButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CountUp } from "@/components/CountUp";
import { FloatingStatCard } from "@/components/FloatingStatCard";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { STOCK_PHOTOS, unsplashUrl } from "@/lib/stock-photos";
import { withBasePath } from "@/lib/utils";

const WHY_US = [
  {
    icon: Microscope,
    title: "Modern equipment",
    body: "Digital sensors and HD imaging across every one of our 10 Maryland locations.",
  },
  {
    icon: Clock3,
    title: "Unhurried visits",
    body: "Real time set aside for your questions — no rushing through the appointment.",
  },
  {
    icon: Wallet,
    title: "Transparent pricing",
    body: "You'll know your costs before anything is scheduled. No surprise bills.",
  },
  {
    icon: ShieldCheck,
    title: "Most insurance accepted",
    body: "Bring your card and our team verifies your benefits on the spot.",
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

const TEAM = [
  { name: "Dr. Rebecca Lin", role: "Lead Dentist", photo: STOCK_PHOTOS.meddocxPortraitOne },
  { name: "Miguel Santos", role: "Dental Hygienist", photo: STOCK_PHOTOS.meddocxPortraitTwo },
  { name: "Dr. Isaiah Cole", role: "Associate Dentist", photo: STOCK_PHOTOS.clinicianPortrait },
  { name: "Hannah Weiss", role: "Patient Coordinator", photo: STOCK_PHOTOS.warmPortrait },
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

const TIPS = [
  {
    title: "Why digital X-rays matter",
    body: "Up to 80% less radiation than film, with results you review together on screen.",
  },
  {
    title: "What a treatment plan includes",
    body: "Priced options in plain language — nothing scheduled without your say-so.",
  },
  {
    title: "Getting the most from your visit",
    body: "Bring your insurance card and a list of questions — we set time aside for them.",
  },
];

const FAQS = [
  { question: "Is this really free?", answer: "Yes — the comprehensive exam, digital X-rays, and treatment plan are all complimentary with no obligation to schedule further treatment." },
  { question: "Do you accept my insurance?", answer: "We work with most major dental insurance plans. Bring your insurance card and our team will help verify your benefits." },
  { question: "What should I bring?", answer: "A photo ID and insurance card if you have one. Prior X-rays are helpful but not required." },
  { question: "How long does the visit take?", answer: "Most first visits take about 45–60 minutes, including your exam, X-rays, and plan review." },
  { question: "Is this only for new patients?", answer: "Not at all — available for new patients and returning patients due for routine care." },
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

export default function Concept6() {
  return (
    <div className="meddocx min-h-screen">
      <Header
        className="bg-white/90 backdrop-blur-sm"
        logoChipClassName="bg-[#011139]"
        ctaClassName="bg-[#0145f0] text-white"
        ctaLabel="Book Free Exam"
      />

      <main>
        {/* ---------------- Hero: distinctive 3-column layout ---------------- */}
        <section
          className="relative flex min-h-[calc(100vh-68px)] flex-col justify-center overflow-hidden px-5 pb-10 pt-14 sm:px-8 lg:pt-20"
          style={{
            background: "radial-gradient(circle at center, #ffffff 33%, #e8eeff 100%)",
          }}
        >
          <div className="relative mx-auto flex w-full max-w-[1380px] flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-10">
            {/* Left column — text/content (~0.9fr) */}
            <ScrollReveal
              direction="left"
              className="flex flex-1 flex-col justify-center gap-6 pb-0 lg:basis-[32%] lg:gap-[26px] lg:pb-20"
            >
              <p className="md-eyebrow">All smiles, no stress</p>
              <h1 className="md-h1">
                <HeadlineWords text="Free Dental Exam & X-Ray" />
              </h1>
              <p className="md-body max-w-md text-[#011139]/70">
                A comprehensive look at your oral health — reviewed with you on screen, and
                explained in plain language.
              </p>
              <div>
                <a href="#lead-form">
                  <ShimmerButton className="bg-[#0145f0] text-white">
                    Book My Free Exam &amp; X-Ray
                  </ShimmerButton>
                </a>
              </div>
            </ScrollReveal>

            {/* Center column — hero video (~0.9fr) */}
            <ScrollReveal
              direction="scale"
              delay={0.15}
              className="relative flex-1 lg:basis-[32%]"
            >
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[28px] shadow-2xl lg:aspect-auto lg:h-full lg:max-w-none lg:min-h-[520px]">
                <HeroVideo
                  src={withBasePath("/bannerVideo.mp4")}
                  focus="center"
                  overlayClassName="bg-[#0145f0]/10 mix-blend-multiply"
                  className="rounded-[28px]"
                />
              </div>
            </ScrollReveal>

            {/* Right column — supporting stat / trust card (~0.8fr), space-between */}
            <div className="flex flex-1 flex-col justify-between gap-6 pb-0 lg:basis-[28%] lg:gap-6 lg:pb-[50px] lg:pt-6">
              <FloatingStatCard className="w-full max-w-none bg-white shadow-xl">
                <div className="mb-3 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#0145f0] text-[#0145f0]" />
                  ))}
                </div>
                <p className="text-sm font-semibold leading-snug text-[#011139]">
                  &ldquo;Never feel rushed or like just another appointment.&rdquo;
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-wide text-[#011139]/50">
                  Nancy Foster, patient
                </p>
              </FloatingStatCard>

              <ScrollReveal
                direction="right"
                delay={0.25}
                className="rounded-2xl border border-[#0145f0]/15 bg-white p-6 shadow-lg"
              >
                <p className="md-eyebrow mb-2">Today&apos;s visit</p>
                <div className="flex items-baseline gap-2">
                  <CountUp
                    value={250}
                    prefix="$"
                    duration={1.4}
                    className="text-4xl font-bold leading-none text-[#0145f0]"
                  />
                  <span className="text-sm font-semibold text-[#011139]/60">value — free</span>
                </div>
                <ul className="mt-4 flex flex-col gap-2">
                  {["Comprehensive exam", "Digital HD X-rays", "Treatment plan + Q&A"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm font-semibold text-[#011139]/80">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0145f0]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>

          {/* Full-width trust strip below the 3-column row */}
          <ScrollReveal
            delay={0.2}
            className="relative mx-auto mt-12 flex w-full max-w-[1380px] flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-[#0145f0]/10 pt-8 text-center lg:mt-16"
          >
            <span className="inline-flex items-baseline gap-2">
              <CountUp value={10} suffix="+" duration={1.6} className="text-2xl font-bold text-[#0145f0]" />
              <span className="md-body-semibold">Maryland locations</span>
            </span>
            <span className="md-body-semibold inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#0145f0]" />
              $250 value, free
            </span>
            <span className="md-body-semibold inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#0145f0]" />
              ~60 seconds to book
            </span>
          </ScrollReveal>
        </section>

        {/* ---------------- About ---------------- */}
        <section className="bg-[#f5f7fc] px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <ScrollReveal direction="left">
                <p className="md-eyebrow mb-4">About Smile Loft</p>
                <h2 className="md-h2">A dental practice built around you, not the clock</h2>
                <p className="md-body mt-5 max-w-lg text-[#011139]/70">
                  Across 10 Maryland locations, Smile Loft Dental pairs modern digital imaging
                  with a genuinely unhurried visit. Every appointment starts with a real
                  conversation — we listen first, examine thoroughly, and walk you through
                  exactly what we&apos;re seeing, on screen, before anything is ever scheduled.
                </p>
                <p className="md-body mt-4 max-w-lg text-[#011139]/60">
                  No pressure, no surprise bills — just a clear plan you can think over on your
                  own timeline.
                </p>
                <div className="mt-7">
                  <a href="#lead-form">
                    <ShimmerButton className="bg-[#0145f0] text-white">
                      Book My Free Exam &amp; X-Ray
                    </ShimmerButton>
                  </a>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="scale" delay={0.1} className="relative aspect-[5/4] overflow-hidden rounded-2xl shadow-xl">
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

        {/* ---------------- Why Choose Us ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 max-w-[600px]">
              <p className="md-eyebrow mb-3">Why Smile Loft</p>
              <h2 className="md-h2">What sets your visit apart</h2>
            </ScrollReveal>
            <ScrollRevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_US.map((w) => (
                <RevealItem key={w.title}>
                  <div className="h-full rounded-2xl border border-[#0145f0]/10 bg-white p-7 shadow-sm">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0145f0]/10 text-[#0145f0]">
                      <w.icon className="h-5 w-5" />
                    </div>
                    <h3 className="md-h5 text-lg">{w.title}</h3>
                    <p className="md-body mt-2 text-[#011139]/65">{w.body}</p>
                  </div>
                </RevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ---------------- Services ---------------- */}
        <section className="bg-[#f5f7fc] px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-[560px]">
                <p className="md-eyebrow mb-3">What&apos;s included</p>
                <h2 className="md-h2">Your free visit, in detail</h2>
              </div>
              <a
                href="#lead-form"
                className="inline-flex shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#0145f0] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#0145f0] transition-colors hover:bg-[#0145f0] hover:text-white"
              >
                Book Free Exam
              </a>
            </ScrollReveal>
            <ScrollRevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((s) => (
                <RevealItem key={s.title}>
                  <div className="h-full rounded-2xl bg-white p-7 shadow-sm">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0145f0]/10 text-[#0145f0]">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="md-h5 text-lg">{s.title}</h3>
                    <p className="md-body mt-2 text-[#011139]/65">{s.body}</p>
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
              <p className="md-eyebrow mb-3">Meet the team</p>
              <h2 className="md-h2">The people behind your care</h2>
            </ScrollReveal>
            <ScrollRevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM.map((member, i) => (
                <RevealItem key={member.name}>
                  <div className="overflow-hidden rounded-2xl border border-[#0145f0]/10 bg-white shadow-sm">
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
                      <h3 className="md-h5 text-base">{member.name}</h3>
                      <p className="md-body mt-0.5 text-sm text-[#011139]/60">{member.role}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ---------------- Testimonials ---------------- */}
        <section className="bg-[#f5f7fc] px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 max-w-[560px]">
              <p className="md-eyebrow mb-3">Patient stories</p>
              <h2 className="md-h2">What patients tell us</h2>
            </ScrollReveal>
            <ScrollRevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <RevealItem key={t.name}>
                  <div className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm">
                    <div className="mb-3 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#0145f0] text-[#0145f0]" />
                      ))}
                    </div>
                    <p className="md-body flex-1 text-[#011139]/80">&ldquo;{t.quote}&rdquo;</p>
                    <div className="mt-6 border-t border-[#0145f0]/10 pt-4">
                      <p className="md-h5 text-base">{t.name}</p>
                      <p className="md-body mt-0.5 text-sm text-[#011139]/55">{t.role}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ---------------- Dental tips (lightweight blog teaser) ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 max-w-[600px]">
              <p className="md-eyebrow mb-3">Dental tips</p>
              <h2 className="md-h2">A little patient education, free of charge</h2>
            </ScrollReveal>
            <ScrollRevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {TIPS.map((tip) => (
                <RevealItem key={tip.title}>
                  <div className="h-full rounded-2xl border border-[#0145f0]/10 bg-[#f5f7fc] p-6">
                    <h3 className="md-h5 text-base">{tip.title}</h3>
                    <p className="md-body mt-2 text-sm text-[#011139]/65">{tip.body}</p>
                  </div>
                </RevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section className="bg-[#f5f7fc] px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[760px]">
            <ScrollReveal className="mb-10 text-center">
              <p className="md-eyebrow mb-3">Questions</p>
              <h2 className="md-h2">Frequently asked questions</h2>
            </ScrollReveal>
            <ScrollReveal>
              <FaqAccordion
                items={FAQS}
                triggerClassName="text-[#011139] hover:text-[#0145f0]"
                className="[&_[data-slot=accordion-item]]:border-[#0145f0]/15"
              />
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Contact / CTA ---------------- */}
        <section id="lead-form" className="relative overflow-hidden px-6 py-[88px] pb-28 sm:px-8 md:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #0145f0, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-[720px]">
            <ScrollReveal className="mb-10 text-center">
              <p className="md-eyebrow mb-3">Get started</p>
              <h2 className="md-h2">Book My Free Exam &amp; X-Ray</h2>
              <p className="md-body mx-auto mt-4 max-w-md text-[#011139]/60">
                No cost, no obligation — new and returning patients welcome across all 10
                Maryland locations.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="scale" delay={0.1} className="rounded-3xl border border-[#0145f0]/15 bg-white p-6 shadow-2xl sm:p-9">
              <LeadForm accentClassName="bg-[#0145f0] text-white" successIconClassName="text-[#0145f0]" />
            </ScrollReveal>
            <ScrollReveal delay={0.15} className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-sm font-semibold text-[#011139]/60">
              {["10 Maryland locations", "No cost, no obligation", "New & returning patients welcome", "Most insurance accepted"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#0145f0]" />
                  {t}
                </span>
              ))}
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer className="bg-white text-[#011139]/60" />
      <StickyCtaBar className="bg-[#0145f0]" />
    </div>
  );
}
