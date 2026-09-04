"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { LeadForm } from "@/components/LeadForm";
import { ScrollReveal, ScrollRevealGroup, RevealItem } from "@/components/ScrollReveal";
import { Marquee } from "@/components/Marquee";
import { ShimmerButton } from "@/components/ShimmerButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CountUp } from "@/components/CountUp";
import { ServicesTabs, type ServiceTabItem } from "@/components/ServicesTabs";
import { HeroVideo } from "@/components/HeroVideo";
import { Parallax } from "@/components/Parallax";
import { GiantSpanText } from "@/components/GiantSpanText";
import { LOCATIONS } from "@/lib/locations";
import { STOCK_PHOTOS, unsplashUrl } from "@/lib/stock-photos";
import { withBasePath } from "@/lib/utils";

const SERVICE_TABS: ServiceTabItem[] = [
  {
    num: "01",
    title: "Comprehensive exam",
    body: "A full evaluation of your teeth, gums, and bite from a licensed dentist — a $250 value, complimentary today. This is the foundation every treatment plan is built on.",
  },
  {
    num: "02",
    title: "Digital HD X-rays",
    body: "High-resolution digital sensors capture clear images with up to 80% less radiation than traditional film — results appear on screen within seconds.",
  },
  {
    num: "03",
    title: "Treatment planning",
    body: "Clear next steps and priced options, written in plain language. No pressure to decide anything on the spot.",
  },
  {
    num: "04",
    title: "Dedicated Q&A",
    body: "Time set aside specifically for your questions — about your results, your options, or anything dental-related.",
  },
];

const SERVICE_TAGS: Record<string, string[]> = {
  "01": ["Exam", "Gums & bite", "$250 value"],
  "02": ["Imaging", "Low radiation", "Instant results"],
  "03": ["Planning", "Plain language", "No pressure"],
  "04": ["Support", "On-site", "No rush"],
};

const CASE_STUDIES = [
  {
    title: "A routine visit, finally unrushed",
    body: "A returning patient came in for a check-up and left with a full digital X-ray review, explained clearly, with time for every question.",
    photo: STOCK_PHOTOS.friendlyCheckup,
  },
  {
    title: "Catching it early, on screen",
    body: "Digital imaging flagged an area worth watching well before it became noticeable — reviewed together, with a simple plan to monitor it.",
    photo: STOCK_PHOTOS.xrayReview,
  },
  {
    title: "New to the area, welcomed quickly",
    body: "A new patient booked online in under a minute and was seen the same week, with records transferred ahead of the visit.",
    photo: STOCK_PHOTOS.patientRelaxed,
  },
];

const TEAM = [
  { name: "Dr. Naomi Ashford", role: "Lead Dentist", photo: STOCK_PHOTOS.clinicianPortrait },
  { name: "Theo Brannigan", role: "Dental Hygienist", photo: STOCK_PHOTOS.teamPortraitOne },
  { name: "Dr. Camille Odom", role: "Associate Dentist", photo: STOCK_PHOTOS.warmPortrait },
  { name: "Renata Solis", role: "Patient Coordinator", photo: STOCK_PHOTOS.teamPortraitTwo },
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

function FloatingHeroImage() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={
        reduce
          ? { duration: 0 }
          : { type: "spring", stiffness: 500, damping: 100, mass: 7, delay: 0.2 }
      }
      className="relative aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[28px] shadow-2xl lg:aspect-[3/4] lg:max-w-[380px]"
    >
      <Image
        src={unsplashUrl(STOCK_PHOTOS.xrayReview.id, 900)}
        alt={STOCK_PHOTOS.xrayReview.alt}
        fill
        sizes="(min-width: 1024px) 30vw, 80vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
        <div className="mb-1.5 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-[#09735c] text-[#09735c]" />
          ))}
        </div>
        <p className="text-sm font-semibold leading-snug text-[#0f1e4c]">
          &ldquo;Reviewed with you, on screen — explained in plain language.&rdquo;
        </p>
      </div>
    </motion.div>
  );
}

export default function Concept7() {
  return (
    <div className="medilea min-h-screen">
      <Header
        className="bg-white/90 backdrop-blur-sm"
        logoChipClassName="bg-[#0f1e4c]"
        ctaClassName="bg-[#09735c] text-white"
        ctaLabel="Book Free Exam"
      />

      <main>
        {/* ---------------- Hero ---------------- */}
        <section className="relative flex min-h-[calc(100vh-68px)] flex-col justify-center overflow-hidden px-5 py-14 sm:px-8 lg:min-h-0 lg:justify-start lg:pb-24 lg:pt-16">
          {/* Giant background text */}
          <div aria-hidden className="pointer-events-none absolute inset-0 flex flex-col justify-between overflow-hidden py-6">
            <GiantSpanText variant="160" className="translate-x-[4%]">
              Smile Loft
            </GiantSpanText>
            <GiantSpanText variant="120">Dental</GiantSpanText>
          </div>

          <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-20">
            {/* Image & Title wrapper row */}
            <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
              <div className="w-full max-w-[620px]">
                <h1 className="ml-h1">
                  Free{" "}
                  <span className="ml-italic ml-span-60 inline-block align-baseline">Gentle</span>{" "}
                  Dental Exam &amp; <span className="whitespace-nowrap">X-Ray</span>
                </h1>
              </div>
              <FloatingHeroImage />
            </div>

            {/* Title & Short Description block */}
            <ScrollReveal direction="up" delay={0.1} className="max-w-[484px]">
              <p className="ml-body-upper text-[#09735c]">All smiles, no stress</p>
              <h2 className="ml-h4 mt-3">
                A comprehensive look at your oral health
              </h2>
              <p className="ml-body mt-4">
                A comprehensive look at your oral health — reviewed with you on
                screen, and explained in plain language.
              </p>
              <div className="mt-7">
                <a href="#lead-form">
                  <ShimmerButton className="bg-[#09735c] text-white">
                    Book My Free Exam &amp; X-Ray
                  </ShimmerButton>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Location marquee ---------------- */}
        <div className="border-y border-[#d6d6d6] bg-[#f1f7f3] py-5">
          <Marquee
            items={[...LOCATIONS]}
            itemClassName="ml-body-upper text-[#0f1e4c]"
            renderItem={(item) => (
              <>
                <MapPin className="h-4 w-4 text-[#09735c]" />
                {item}
              </>
            )}
          />
        </div>

        {/* ---------------- About ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <ScrollReveal direction="left">
                <p className="ml-body-upper text-[#09735c]">About Smile Loft</p>
                <h2 className="ml-h2-playfair mt-3">
                  A practice built <span className="not-italic ml-h2">around you</span>
                </h2>
                <p className="ml-body mt-5 max-w-lg">
                  Across 10 Maryland locations, Smile Loft Dental pairs modern
                  digital imaging with a genuinely unhurried visit. Every
                  appointment starts with a real conversation — we listen
                  first, examine thoroughly, and walk you through exactly
                  what we&apos;re seeing, on screen, before anything is ever
                  scheduled.
                </p>
                <p className="ml-body mt-4 max-w-lg">
                  No pressure, no surprise bills — just a clear plan you can
                  think over on your own timeline.
                </p>
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

        {/* ---------------- Services (interactive tabs) ---------------- */}
        <section className="bg-[#f1f7f3] px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 max-w-[600px]">
              <p className="ml-body-upper text-[#09735c]">What&apos;s included</p>
              <h2 className="ml-h2 mt-3">Your free visit, in detail</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ServicesTabs
                items={SERVICE_TABS}
                activeBgClassName="bg-[#09735c]"
                activeTextClassName="text-white"
                inactiveTextClassName="text-[#0f1e4c]"
                inactiveBorderClassName="border-[#0f1e4c]/12 hover:border-[#09735c]/40"
                numberClassName="text-[#09735c]/60"
                numberActiveClassName="text-white/70"
                panelBorderClassName="border-[#0f1e4c]/10"
                eyebrowClassName="text-xs font-bold uppercase tracking-[0.1em] text-[#09735c]"
                titleClassName="ml-h6 mt-3"
                bodyClassName="ml-body mt-4 text-[#0f1e4c]/75"
              />
            </ScrollReveal>
            <div className="mt-6 flex flex-wrap gap-2">
              {SERVICE_TAGS["01"].map((tag) => (
                <span key={tag} className="rounded-full border border-[#09735c]/25 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#09735c]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Lead form ---------------- */}
        <section id="lead-form" className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1fr_minmax(0,520px)]">
              <div className="relative hidden min-h-[420px] overflow-hidden rounded-3xl shadow-lg lg:block">
                <Image
                  src={unsplashUrl(STOCK_PHOTOS.modernSuite.id, 900)}
                  alt={STOCK_PHOTOS.modernSuite.alt}
                  fill
                  sizes="45vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e4c]/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <p className="ml-body-upper text-white/85">10 Maryland locations</p>
                  <p className="mt-2 max-w-sm text-lg font-medium">
                    Modern, light-filled treatment rooms — pick whichever
                    office is closest to you.
                  </p>
                </div>
              </div>
              <ScrollReveal className="rounded-3xl border border-[#d6d6d6] bg-white p-6 shadow-lg sm:p-9">
                <LeadForm accentClassName="bg-[#09735c] text-white" successIconClassName="text-[#09735c]" />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ---------------- Case Studies ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 max-w-[600px]">
              <p className="ml-body-upper text-[#09735c]">Patient stories</p>
              <h2 className="ml-h2 mt-3">Before &amp; after care</h2>
            </ScrollReveal>
            <ScrollRevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {CASE_STUDIES.map((c) => (
                <RevealItem key={c.title}>
                  <div className="h-full overflow-hidden rounded-2xl border border-[#d6d6d6] bg-white shadow-sm">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={unsplashUrl(c.photo.id, 700)}
                        alt={c.photo.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="ml-h6">{c.title}</h3>
                      <p className="ml-body mt-2 text-sm">{c.body}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ---------------- Video section ---------------- */}
        <section className="bg-[#0f1e4c] px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 max-w-[600px] text-white">
              <p className="ml-body-upper text-[#5fd6b9]">See it in action</p>
              <h2 className="ml-h2 mt-3 text-white">A calm, modern visit</h2>
            </ScrollReveal>
            <Parallax yRange={[-16, 16]} className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-2xl">
              <HeroVideo
                src={withBasePath("/bannerVideo.mp4")}
                overlayClassName="bg-[#0f1e4c]/20"
                className="rounded-3xl"
              />
              <div className="absolute inset-x-6 bottom-6 z-10 flex flex-col gap-1 rounded-xl bg-white/95 p-5 shadow-lg backdrop-blur-sm sm:inset-x-auto sm:right-6 sm:max-w-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-[#09735c]">Inside our offices</p>
                <p className="text-sm font-semibold text-[#0f1e4c]">
                  Take a look inside a Smile Loft treatment room — modern
                  equipment, unhurried visits.
                </p>
              </div>
            </Parallax>
          </div>
        </section>

        {/* ---------------- Tagline ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <ScrollReveal className="mx-auto max-w-[900px] text-center">
            <p className="ml-span-90 ml-italic text-[#0f1e4c]">
              Great care shouldn&apos;t feel rushed
            </p>
          </ScrollReveal>
        </section>

        {/* ---------------- Team ---------------- */}
        <section className="bg-[#f1f7f3] px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 max-w-[600px]">
              <p className="ml-body-upper text-[#09735c]">Meet the team</p>
              <h2 className="ml-h2 mt-3">The people behind your care</h2>
            </ScrollReveal>
            <ScrollRevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM.map((member, i) => (
                <RevealItem key={member.name}>
                  <div className="overflow-hidden rounded-2xl border border-[#d6d6d6] bg-white shadow-sm">
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
                      <h3 className="ml-h6 text-base">{member.name}</h3>
                      <p className="ml-body mt-0.5 text-sm">{member.role}</p>
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
            <ScrollReveal className="mb-10 max-w-[560px]">
              <p className="ml-body-upper text-[#09735c]">What patients say</p>
              <h2 className="ml-h2 mt-3">Real words from real visits</h2>
            </ScrollReveal>
            <ScrollRevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <RevealItem key={t.name}>
                  <div className="flex h-full flex-col rounded-2xl border border-[#d6d6d6] bg-white p-7 shadow-sm">
                    <div className="mb-3 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#09735c] text-[#09735c]" />
                      ))}
                    </div>
                    <p className="ml-body flex-1">&ldquo;{t.quote}&rdquo;</p>
                    <div className="mt-6 border-t border-[#d6d6d6] pt-4">
                      <p className="text-base font-medium text-[#0f1e4c]">{t.name}</p>
                      <p className="ml-body mt-0.5 text-sm">{t.role}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ---------------- Contact CTA ---------------- */}
        <section className="relative overflow-hidden bg-[#0f1e4c] px-6 py-[88px] sm:px-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #09735c, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-[720px]">
            <ScrollReveal className="mb-10 text-center text-white">
              <p className="ml-body-upper text-[#5fd6b9]">Get started</p>
              <h2 className="ml-h2 mt-3 text-white">
                Book your{" "}
                <span className="ml-italic ml-span-60 inline-block align-baseline">gentle</span>{" "}
                exam today
              </h2>
              <p className="ml-body mx-auto mt-4 max-w-md" style={{ color: "rgba(255,255,255,0.7)" }}>
                No cost, no obligation — new and returning patients welcome
                across all 10 Maryland locations.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="scale" delay={0.1} className="rounded-3xl border border-white/15 bg-white p-6 shadow-2xl sm:p-9">
              <LeadForm accentClassName="bg-[#09735c] text-white" successIconClassName="text-[#09735c]" />
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Infobar / stats ---------------- */}
        <section className="px-6 py-14 sm:px-8">
          <ScrollReveal className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 rounded-3xl border border-[#d6d6d6] bg-[#f1f7f3] p-10 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="ml-body-upper text-[#09735c]">Growing across Maryland</p>
              <h3 className="ml-h5 mt-2">Locations near you, and growing</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-baseline gap-2">
                <CountUp from={4} value={10} suffix="+" duration={1.6} className="text-[48px] font-medium leading-none text-[#09735c]" />
                <span className="ml-body-upper text-[#0f1e4c]/60">MD locations</span>
              </div>
              <div className="flex items-baseline gap-2">
                <CountUp value={250} prefix="$" duration={1.4} className="text-[48px] font-medium leading-none text-[#09735c]" />
                <span className="ml-body-upper text-[#0f1e4c]/60">value, free</span>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ---------------- Blog / Dental tips ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 max-w-[600px]">
              <p className="ml-body-upper text-[#09735c]">Dental tips</p>
              <h2 className="ml-h2 mt-3">A little patient education, free of charge</h2>
            </ScrollReveal>
            <ScrollRevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {TIPS.map((tip) => (
                <RevealItem key={tip.title}>
                  <div className="h-full rounded-2xl border border-[#d6d6d6] bg-[#f1f7f3] p-6">
                    <h3 className="ml-h6 text-base">{tip.title}</h3>
                    <p className="ml-body mt-2 text-sm">{tip.body}</p>
                  </div>
                </RevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section className="bg-[#f1f7f3] px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[760px]">
            <ScrollReveal className="mb-10 text-center">
              <p className="ml-body-upper text-[#09735c]">Questions</p>
              <h2 className="ml-h2 mt-3">Frequently asked questions</h2>
            </ScrollReveal>
            <ScrollReveal>
              <FaqAccordion
                items={FAQS}
                triggerClassName="text-[#0f1e4c] hover:text-[#09735c]"
                className="[&_[data-slot=accordion-item]]:border-[#d6d6d6]"
              />
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer className="bg-white text-[#0f1e4c]/60" />
      <StickyCtaBar className="bg-[#09735c]" />
    </div>
  );
}
