"use client";

import Image from "next/image";
import {
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Eye,
  MessageCircleQuestion,
  ScanLine,
  ClipboardList,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { LeadForm } from "@/components/LeadForm";
import { ScrollReveal, ScrollRevealGroup, RevealItem } from "@/components/ScrollReveal";
import { Marquee } from "@/components/Marquee";
import { BorderBeam } from "@/components/BorderBeam";
import { ShimmerButton } from "@/components/ShimmerButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CountUp } from "@/components/CountUp";
import { FlipRevealCard } from "@/components/FlipRevealCard";
import { ServicesTabs } from "@/components/ServicesTabs";
import { TestimonialGrid } from "@/components/TestimonialGrid";
import { LOCATIONS } from "@/lib/locations";
import { HeroVideo } from "@/components/HeroVideo";
import { Parallax, useHeroParallax } from "@/components/Parallax";
import { motion } from "framer-motion";
import { STOCK_PHOTOS, unsplashUrl } from "@/lib/stock-photos";
import { withBasePath } from "@/lib/utils";


const HERO_SERVICES = [
  "Comprehensive exam",
  "Digital HD X-rays",
  "Personalized treatment plan",
  "Dedicated Q&A",
];

const FLIP_CARDS = [
  {
    step: "01",
    icon: Eye,
    problemTitle: "Hidden decay",
    problemBody: "Small problems often go unnoticed until they become bigger, costlier ones.",
    solutionTitle: "Caught early, on screen",
    solutionBody: "Digital X-rays reveal decay while it's still simple to treat — reviewed with you, together.",
    photoId: STOCK_PHOTOS.xrayReview.id,
    photoAlt: STOCK_PHOTOS.xrayReview.alt,
  },
  {
    step: "02",
    icon: MessageCircleQuestion,
    problemTitle: "Not sure what's wrong",
    problemBody: "Dental jargon and vague explanations leave you guessing about your own mouth.",
    solutionTitle: "A clear, personal plan",
    solutionBody: "Plain-language findings and a written plan with priced options — no pressure, no jargon.",
    photoId: STOCK_PHOTOS.handsWithModel.id,
    photoAlt: STOCK_PHOTOS.handsWithModel.alt,
  },
  {
    step: "03",
    icon: ShieldCheck,
    problemTitle: "Anxious about the dentist",
    problemBody: "Rushed visits and unfamiliar faces make routine care feel stressful.",
    solutionTitle: "Unhurried, explained clearly",
    solutionBody: "Time set aside for your questions, in a calm room, with a team that explains as they go.",
    photoId: STOCK_PHOTOS.patientRelaxed.id,
    photoAlt: STOCK_PHOTOS.patientRelaxed.alt,
  },
  {
    step: "04",
    icon: ScanLine,
    problemTitle: "Old, unclear X-rays",
    problemBody: "Faded film images make it hard to see — or trust — what's actually going on.",
    solutionTitle: "High-resolution digital imaging",
    solutionBody: "Sharp digital sensors with up to 80% less radiation than traditional film X-rays.",
    photoId: STOCK_PHOTOS.emptyOperatory.id,
    photoAlt: STOCK_PHOTOS.emptyOperatory.alt,
  },
  {
    step: "05",
    icon: ClipboardList,
    problemTitle: "No time to sit and ask",
    problemBody: "Quick in-and-out visits rarely leave room for the questions that matter to you.",
    solutionTitle: "Dedicated Q&A, every visit",
    solutionBody: "Your first visit includes real time for questions about your results and your options.",
    photoId: STOCK_PHOTOS.friendlyCheckup.id,
    photoAlt: STOCK_PHOTOS.friendlyCheckup.alt,
  },
];

const SERVICE_TABS = [
  { num: "01", title: "Comprehensive exam", body: "A full evaluation of your teeth, gums, and bite from a licensed dentist — a $250 value, complimentary today. This is the foundation every treatment plan is built on." },
  { num: "02", title: "Digital HD X-rays", body: "High-resolution digital sensors capture clear images with up to 80% less radiation than traditional film — results appear on screen within seconds." },
  { num: "03", title: "Treatment plan", body: "Clear next steps and priced options, written in plain language. No pressure to decide anything on the spot." },
  { num: "04", title: "Dedicated Q&A", body: "Time set aside specifically for your questions — about your results, your options, or anything dental-related." },
  { num: "05", title: "Insurance check", body: "Bring your card and our team will verify your benefits on the spot, so you know your costs before anything is scheduled." },
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

const FAQS = [
  { question: "Is this really free?", answer: "Yes — the comprehensive exam, digital X-rays, and treatment plan are all complimentary with no obligation to schedule further treatment." },
  { question: "Do you accept my insurance?", answer: "We work with most major dental insurance plans. Bring your insurance card and our team will help verify your benefits." },
  { question: "What should I bring?", answer: "A photo ID and insurance card if you have one. Prior X-rays are helpful but not required." },
  { question: "How long does the visit take?", answer: "Most first visits take about 45–60 minutes, including your exam, X-rays, and plan review." },
  { question: "Is this only for new patients?", answer: "Not at all — available for new patients and returning patients due for routine care." },
];

const BENTO_GRID = [
  { photo: STOCK_PHOTOS.modernSuite, title: "Modern, light-filled suites", body: "Comfortable treatment rooms across all 10 Maryland locations.", span: "sm:col-span-2 sm:row-span-2" },
  { photo: STOCK_PHOTOS.xrayReview, title: "Reviewed together", body: "See exactly what your dentist sees, on screen.", span: "" },
  { photo: STOCK_PHOTOS.receptionWelcome, title: "Warm welcome", body: "A friendly front desk from the moment you arrive.", span: "" },
  { photo: STOCK_PHOTOS.procedureClose, title: "Careful, unhurried care", body: "Time for your questions at every step.", span: "sm:col-span-2" },
  { photo: STOCK_PHOTOS.brightSmile, title: "Real results", body: "Clear plans that get you to a healthier smile.", span: "" },
  { photo: STOCK_PHOTOS.clinicianPortrait, title: "Licensed clinicians", body: "Experienced dentists across every office.", span: "" },
];

export default function Concept2() {
  const [heroRef, heroMotion] = useHeroParallax(70);

  return (
    <div className="salonix min-h-screen">
      <Header
        className="bg-[#f6efe5]/90 backdrop-blur-sm"
        logoChipClassName="bg-[#48120e]"
        ctaClassName="bg-[#8a7a63] text-white"
        ctaLabel="Book Free Exam"
      />

      <main>
        {/* ---------------- Hero ---------------- */}
        <section
          ref={heroRef}
          className="relative flex min-h-[calc(100vh-68px)] flex-col justify-center overflow-hidden px-6 py-14 sm:px-8"
        >
          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 lg:flex-row lg:items-stretch lg:justify-between lg:gap-8">
            {/* Left: info block + service list, stacked with space-between */}
            <motion.div
              style={heroMotion}
              className="flex max-w-[500px] flex-col justify-between gap-10 lg:py-6"
            >
              <ScrollReveal className="flex flex-col gap-[22px]">
                <p className="sx-eyebrow text-left">All smiles, no stress</p>
                <h1 className="sx-h1">
                  Free Dental
                  <br />
                  Exam &amp; <span className="whitespace-nowrap">X-Ray</span>
                </h1>
                <p className="sx-body max-w-[420px] text-[#48120e]/75">
                  A comprehensive look at your oral health — reviewed with you on screen, and
                  explained in plain language.
                </p>
                <div>
                  <ShimmerButton
                    onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
                    className="bg-[#8a7a63] text-white"
                  >
                    Book My Free Exam &amp; X-Ray
                  </ShimmerButton>
                </div>
              </ScrollReveal>

              {/* Service list card */}
              <ScrollReveal delay={0.15} className="max-w-[350px] rounded-2xl border border-[#48120e]/10 bg-white p-6 shadow-sm">
                <p className="sx-label text-[#48120e]/50">What&apos;s included</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {HERO_SERVICES.map((s) => (
                    <li key={s} className="flex items-center gap-3 text-sm font-semibold">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8a7a63]" />
                      {s}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </motion.div>

            {/* Right: full-bleed image gallery */}
            <Parallax
              yRange={[-24, 24]}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-xl sm:aspect-[6/5] lg:aspect-auto lg:min-h-[600px] lg:w-[52%]"
            >
              <HeroVideo
                src={withBasePath("/bannerVideo.mp4")}
                focus="right center"
                overlayClassName="bg-gradient-to-t from-[#48120e]/45 via-transparent to-transparent"
                className="rounded-3xl"
              />
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-white">
                <span className="sx-label text-white/85">10 MD Locations</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  <Sparkles className="h-4 w-4" />
                </span>
              </div>
            </Parallax>
          </div>
        </section>

        {/* ---------------- Marquee ---------------- */}
        <div className="border-y border-[#48120e]/10 bg-white/60 py-5">
          <Marquee
            items={[...LOCATIONS]}
            itemClassName="sx-label text-[#48120e]"
            renderItem={(item) => (
              <>
                <MapPin className="h-4 w-4 text-[#8a7a63]" />
                {item}
              </>
            )}
          />
        </div>

        {/* ---------------- Lead form ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1fr_minmax(0,520px)]">
              <div className="relative hidden min-h-[420px] overflow-hidden rounded-3xl shadow-lg lg:block">
                <Image
                  src={unsplashUrl(STOCK_PHOTOS.emptyOperatory.id, 900)}
                  alt={STOCK_PHOTOS.emptyOperatory.alt}
                  fill
                  sizes="45vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#48120e]/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <p className="sx-label text-white/80">10 Maryland locations</p>
                  <p className="mt-2 max-w-sm text-lg font-bold">
                    Modern, light-filled treatment rooms — pick whichever office is closest to you.
                  </p>
                </div>
              </div>
              <ScrollReveal id="lead-form" className="rounded-3xl border border-[#48120e]/10 bg-white p-6 shadow-lg sm:p-9">
                <LeadForm accentClassName="bg-[#8a7a63] text-white" successIconClassName="text-[#8a7a63]" />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ---------------- Problem + Solution flip cards ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-12 text-center">
              <p className="sx-eyebrow">Common concerns</p>
              <h2 className="sx-h5 mx-auto mt-3 max-w-[640px]">Tap a card to see how we handle it</h2>
            </ScrollReveal>
            <ScrollRevealGroup className="flex flex-wrap justify-center gap-5">
              {FLIP_CARDS.map((card) => (
                <RevealItem key={card.step} className="flex justify-center">
                  <FlipRevealCard {...card} />
                </RevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ---------------- Bento image grid ("why choose us") ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <ScrollReveal className="max-w-[550px]">
                <p className="sx-eyebrow">Why Smile Loft</p>
                <h2 className="sx-h5 text-left">A closer look at your care</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <a
                  href="#lead-form"
                  className="inline-flex shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#8a7a63] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#8a7a63] transition-colors hover:bg-[#8a7a63] hover:text-white"
                >
                  Book Free Exam
                </a>
              </ScrollReveal>
            </div>
            <ScrollRevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[220px] lg:min-h-[915px]">
              {BENTO_GRID.map((cell) => (
                <RevealItem key={cell.title} className={cell.span}>
                  <div className="group relative h-full min-h-[240px] overflow-hidden rounded-2xl">
                    <Image
                      src={unsplashUrl(cell.photo.id, 900)}
                      alt={cell.photo.alt}
                      fill
                      sizes="(min-width: 640px) 40vw, 100vw"
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#48120e]/85 via-[#48120e]/20 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-[26px] text-white">
                      <h3 className="text-lg font-bold uppercase tracking-tight">{cell.title}</h3>
                      <p className="sx-body-sm mt-2 text-white/85">{cell.body}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ---------------- Services tabs ---------------- */}
        <section className="bg-white/60 px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 max-w-[550px]">
              <p className="sx-eyebrow">Your visit, in detail</p>
              <h2 className="sx-h5 text-left">Five things your free visit covers</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ServicesTabs items={SERVICE_TABS} />
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Count-up stat ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal>
              <BorderBeam color="#8a7a63" className="rounded-3xl">
                <div className="flex flex-col items-center gap-4 rounded-3xl border border-[#48120e]/10 bg-white p-10 text-center shadow-sm sm:flex-row sm:justify-between sm:text-left">
                  <div>
                    <p className="sx-eyebrow">Growing across Maryland</p>
                    <h3 className="sx-h6 mt-2">Locations near you, and growing</h3>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <CountUp
                      from={4}
                      value={10}
                      suffix="+"
                      duration={1.6}
                      className="text-[56px] font-bold leading-none text-[#8a7a63]"
                    />
                    <span className="sx-label text-[#48120e]/60">MD locations</span>
                  </div>
                </div>
              </BorderBeam>
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Testimonials ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 text-center">
              <p className="sx-eyebrow">Patient stories</p>
              <h2 className="sx-h5 mx-auto mt-3 max-w-[640px]">What patients tell us</h2>
            </ScrollReveal>
            <TestimonialGrid items={TESTIMONIALS} />
          </div>
        </section>

        {/* ---------------- Value card ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[680px]">
            <ScrollReveal>
              <div className="rounded-3xl border border-[#48120e]/10 bg-white p-8 text-center shadow-lg sm:p-12">
                <p className="sx-eyebrow">Today&apos;s visit</p>
                <div className="mt-3 text-4xl font-bold uppercase tracking-tight sm:text-5xl">
                  $250 value — free
                </div>
                <ul className="mx-auto mt-8 flex max-w-sm flex-col gap-3 text-left">
                  {["Comprehensive exam", "Digital HD X-rays", "Personalized treatment plan + Q&A"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#8a7a63]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex justify-center">
                  <ShimmerButton
                    onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
                    className="bg-[#8a7a63] text-white"
                  >
                    Book My Free Exam &amp; X-Ray
                  </ShimmerButton>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Trust strip ---------------- */}
        <section className="px-6 py-14 sm:px-8">
          <ScrollReveal className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-sm font-semibold text-[#48120e]/80">
            {["10 Maryland locations", "No cost, no obligation", "New & returning patients welcome", "Most insurance accepted"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#8a7a63]" />
                {t}
              </span>
            ))}
          </ScrollReveal>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[720px]">
            <ScrollReveal className="mb-10 text-center">
              <p className="sx-eyebrow">Questions</p>
              <h2 className="sx-h5 mx-auto mt-3">Frequently asked questions</h2>
            </ScrollReveal>
            <ScrollReveal>
              <FaqAccordion
                items={FAQS}
                triggerClassName="text-[#48120e]"
              />
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Final CTA ---------------- */}
        <section className="px-6 pb-24 sm:px-8">
          <ScrollReveal className="mx-auto max-w-[720px] rounded-3xl bg-[#48120e] p-10 text-center text-[#f6efe5]">
            <Eye className="mx-auto mb-4 h-8 w-8 opacity-80" />
            <h2 className="sx-h5 text-[#f6efe5]">Ready to get a clearer picture of your smile?</h2>
            <p className="sx-body mx-auto mt-3 max-w-md text-[#f6efe5]/80">
              Book your free exam and X-ray today — no cost, no obligation.
            </p>
            <div className="mt-7 flex justify-center">
              <ShimmerButton className="bg-[#f6efe5] text-[#48120e]" onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}>
                Book My Free Exam &amp; X-Ray
              </ShimmerButton>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
      <StickyCtaBar className="bg-[#8a7a63]" />
    </div>
  );
}
