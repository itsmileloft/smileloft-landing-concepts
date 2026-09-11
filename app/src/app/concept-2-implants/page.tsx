"use client";

import Image from "next/image";
import {
  MapPin,
  CheckCircle2,
  Sparkles,
  Layers,
  DollarSign,
  ScanLine,
  MessageCircleQuestion,
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
import { TestimonialGrid } from "@/components/TestimonialGrid";
import { ServicesTabs } from "@/components/ServicesTabs";
import { DoctorExpandCards } from "@/components/DoctorExpandCard";
import { LocationFlipCards } from "@/components/LocationFlipCards";
import { LOCATIONS, LOCATION_DETAILS } from "@/lib/locations";
import { HeroVideo } from "@/components/HeroVideo";
import { Parallax, useHeroParallax } from "@/components/Parallax";
import { motion } from "framer-motion";
import { STOCK_PHOTOS, unsplashUrl } from "@/lib/stock-photos";
import { withBasePath } from "@/lib/utils";

const HERO_SERVICES = [
  "Personalized implant evaluation",
  "Dental imaging when needed",
  "Transparent cost conversation",
  "Time for all your questions",
];

const DOCTORS = [
  {
    name: "Dr. Laxmi Reddy",
    jobTitle: "DDS, New York University Dental School",
    photo: withBasePath("/doctors/dr-reddy.webp"),
    bio: "One of the youngest graduates in NYU Dental School's history, Dr. Reddy completed her residency at Staten Island University Hospital. She specializes in Invisalign and Botox therapy for TMJ — a talented and compassionate dental professional, deeply committed to helping others.",
  },
  {
    name: "Dr. Vaibhav Rai",
    jobTitle: "DDS, Howard University",
    photo: withBasePath("/doctors/dr-rai.webp"),
    bio: "With advanced clinical training at a Transplant Institute and a residency at the VA Hospital in Washington, D.C., Dr. Rai excels in implant dentistry and endodontics — a highly skilled and compassionate clinician who mentors other dental professionals.",
  },
];

const LOCATION_PHOTOS = [
  STOCK_PHOTOS.emptyOperatory,
  STOCK_PHOTOS.modernSuite,
  STOCK_PHOTOS.galleryConsult,
  STOCK_PHOTOS.galleryEquipment,
  STOCK_PHOTOS.receptionWelcome,
  STOCK_PHOTOS.galleryDetail,
];

const FLIP_CARDS = [
  {
    step: "01",
    icon: ScanLine,
    problemTitle: "Not sure if I'm a candidate",
    problemBody: "No photo or online quiz can tell you whether implants are right for your mouth.",
    solutionTitle: "An honest answer, not a guess",
    solutionBody: "A real evaluation of your teeth, bone support, and health history — no guaranteed candidacy claims.",
    photoId: STOCK_PHOTOS.clinicianPortrait.id,
    photoAlt: STOCK_PHOTOS.clinicianPortrait.alt,
  },
  {
    step: "02",
    icon: DollarSign,
    problemTitle: "Worried about the cost",
    problemBody: "A generic number online rarely reflects your individual treatment plan.",
    solutionTitle: "Understand the real cost",
    solutionBody: "Cost considerations for your individual plan, discussed openly — not a generic number online.",
    photoId: STOCK_PHOTOS.procedureClose.id,
    photoAlt: STOCK_PHOTOS.procedureClose.alt,
  },
  {
    step: "03",
    icon: Layers,
    problemTitle: "One tooth, or several?",
    problemBody: "Every situation is different — replacing one tooth isn't the same as broader tooth loss.",
    solutionTitle: "See the whole picture",
    solutionBody: "Whether it's one tooth or several, understand every option worth considering.",
    photoId: STOCK_PHOTOS.teamReviewing.id,
    photoAlt: STOCK_PHOTOS.teamReviewing.alt,
  },
  {
    step: "04",
    icon: MessageCircleQuestion,
    problemTitle: "Afraid of a sales pitch",
    problemBody: "Worried you'll be pushed into treatment before you're ready to decide.",
    solutionTitle: "No pressure, ever",
    solutionBody: "Ask every question you have. There's no expectation you decide today.",
    photoId: STOCK_PHOTOS.friendlyCheckup.id,
    photoAlt: STOCK_PHOTOS.friendlyCheckup.alt,
  },
];

const SERVICE_TABS = [
  { num: "01", title: "Implant evaluation", body: "A close look at your teeth, gums, and bone support — free, and specific to your situation, not a generic recommendation." },
  { num: "02", title: "Dental imaging", body: "An exam and imaging may be recommended when clinically appropriate, giving a closer look at bone support and structure." },
  { num: "03", title: "Cost conversation", body: "Individual cost considerations, explained clearly — not a generic number online." },
  { num: "04", title: "Options review", body: "Whether it's one tooth or several, understand every option worth considering." },
  { num: "05", title: "Dedicated Q&A", body: "Time for all your questions — no rush, no sales pitch." },
];

const TESTIMONIALS = [
  {
    name: "Marcus T.",
    role: "Implants patient",
    quote: "Honest, no-pressure conversation — they explained everything about implants in plain language before I decided anything.",
  },
  {
    name: "Daniel Ruiz",
    role: "Patient",
    quote:
      "The consultation was easy to book and the whole team walked me through everything on screen. No pressure, no surprise costs — just a clear plan.",
  },
  {
    name: "Priya Nair",
    role: "Returning patient",
    quote:
      "I switched locations when I moved and it felt like the same practice — same friendly explanations, same careful attention. Booking online took less than a minute.",
  },
];

const FAQS = [
  {
    question: "How do I know if I'm a candidate for implants?",
    answer:
      "Candidacy depends on an individual evaluation — your oral health, bone support, and goals. That's exactly what the consultation is for, not something a photo or online quiz can answer.",
  },
  {
    question: "What might dental implants cost?",
    answer:
      "It depends on your individual plan — the number of teeth being replaced, bone support, and restoration type. We'll walk through cost considerations openly during your consultation, not a generic number.",
  },
  {
    question: "Will I need dental imaging?",
    answer:
      "An exam and dental imaging may be recommended when clinically appropriate, to get a closer look at your teeth, gums, and bone support before discussing options.",
  },
  {
    question: "Will I be pressured to decide at this visit?",
    answer:
      "No. There's no expectation you commit to treatment during the consultation — the goal is to help you understand your options first.",
  },
  {
    question: "What if I'm replacing more than one tooth?",
    answer:
      "We'll talk through options for a single tooth, several teeth, or broader tooth loss — whatever applies to your individual situation.",
  },
];

const BENTO_GRID = [
  { photo: STOCK_PHOTOS.clinicianPortrait, title: "A careful, individual evaluation", body: "Not a generic recommendation — real answers for your situation.", span: "sm:col-span-2 sm:row-span-2" },
  { photo: STOCK_PHOTOS.procedureClose, title: "Explained clearly", body: "See exactly what your dentist sees, on screen.", span: "" },
  { photo: STOCK_PHOTOS.receptionWelcome, title: "Warm welcome", body: "A friendly front desk from the moment you arrive.", span: "" },
  { photo: STOCK_PHOTOS.teamReviewing, title: "No-pressure visits", body: "Time for your questions at every step.", span: "sm:col-span-2" },
  { photo: STOCK_PHOTOS.warmPortrait, title: "Plain-language guidance", body: "Clear explanations, not jargon.", span: "" },
  { photo: STOCK_PHOTOS.clinicianPortrait, title: "Licensed clinicians", body: "Experienced dentists across every office.", span: "" },
];

export default function Concept2Implants() {
  const [heroRef, heroMotion] = useHeroParallax(70);

  return (
    <div className="salonix min-h-screen">
      <Header
        className="bg-[#f6efe5]/90 backdrop-blur-sm"
        logoChipClassName="bg-[#48120e]"
        ctaClassName="bg-[#8a7a63] text-white"
        ctaLabel="Book Free Consult"
      />

      <main>
        {/* ---------------- Hero ---------------- */}
        <section
          ref={heroRef}
          className="relative flex min-h-[calc(100vh-68px)] flex-col justify-center overflow-hidden px-6 py-14 sm:px-8"
        >
          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 lg:flex-row lg:items-stretch lg:justify-between lg:gap-8">
            <motion.div
              style={heroMotion}
              className="flex max-w-[500px] flex-col justify-between gap-10 lg:py-6"
            >
              <ScrollReveal once={false} className="flex flex-col gap-[22px]">
                <p className="sx-eyebrow text-left">Free offer · Smile Loft Dental</p>
                <h1 className="sx-h1">
                  Are Implants
                  <br />
                  an Option for Me?
                </h1>
                <p className="sx-body max-w-[420px] text-[#48120e]/75">
                  It starts with an individual evaluation — your oral health, bone support, and
                  goals. Not a generic recommendation.
                </p>
                <div>
                  <ShimmerButton
                    onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
                    className="bg-[#8a7a63] text-white"
                  >
                    Book My Free Consultation
                  </ShimmerButton>
                </div>
              </ScrollReveal>

              <ScrollReveal once={false} delay={0.15} className="max-w-[350px] rounded-2xl border border-[#48120e]/10 bg-white p-6 shadow-sm">
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
              <Parallax yRange={[-18, 18]} className="relative hidden min-h-[420px] overflow-hidden rounded-3xl shadow-lg lg:block">
                <Image
                  src={unsplashUrl(STOCK_PHOTOS.clinicianPortrait.id, 900)}
                  alt={STOCK_PHOTOS.clinicianPortrait.alt}
                  fill
                  sizes="45vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#48120e]/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <p className="sx-label text-white/80">10 Maryland locations</p>
                  <p className="mt-2 max-w-sm text-lg font-bold">
                    Honest guidance, not a one-size-fits-all answer — pick whichever office is closest to you.
                  </p>
                </div>
              </Parallax>
              <ScrollReveal once={false} id="lead-form" className="rounded-3xl border border-[#48120e]/10 bg-white p-6 shadow-lg sm:p-9">
                <LeadForm
                  accentClassName="bg-[#8a7a63] text-white"
                  successIconClassName="text-[#8a7a63]"
                  title="Book My Free Consultation"
                  submitLabel="Book My Free Consultation"
                  lead="Takes about 60 seconds. No payment, no obligation."
                  concept="Concept 2"
                  campaign="Implants Consult"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ---------------- Problem + Solution flip cards ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal once={false} className="mb-12 text-center">
              <p className="sx-eyebrow">Common concerns</p>
              <h2 className="sx-h5 mx-auto mt-3 max-w-[640px]">Tap a card to see how we handle it</h2>
            </ScrollReveal>
            <ScrollRevealGroup once={false} className="flex flex-wrap justify-center gap-5">
              {FLIP_CARDS.map((card) => (
                <RevealItem key={card.step} className="flex justify-center">
                  <FlipRevealCard {...card} />
                </RevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ---------------- Doctors ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal once={false} className="mb-10 text-center">
              <p className="sx-eyebrow">Meet the doctors</p>
              <h2 className="sx-h5">The people behind your care</h2>
            </ScrollReveal>
            <ScrollReveal once={false} delay={0.1}>
              <DoctorExpandCards
                doctors={DOCTORS}
                cardBgClassName="bg-white"
                overlayGradientClassName="bg-gradient-to-t from-[#48120e]/85 via-[#48120e]/15 to-transparent"
                nameClassName="text-white"
                jobTitleClassName="text-white/85"
                bioClassName="text-white/85"
              />
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Locations ---------------- */}
        <section className="bg-white/60 px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1320px]">
            <ScrollReveal once={false} className="mb-10 text-center">
              <p className="sx-eyebrow">10 Maryland locations</p>
              <h2 className="sx-h5">Find a Smile Loft near you</h2>
              <p className="sx-body mx-auto mt-4 max-w-lg text-[#48120e]/75">
                Tap a card to see the address, then scroll to see them all.
              </p>
            </ScrollReveal>
            <ScrollReveal once={false} delay={0.1}>
              <LocationFlipCards
                locations={LOCATION_DETAILS}
                cardBgClassName="bg-white border border-[#48120e]/10"
                frontTextClassName="text-[#48120e]"
                backBgClassName="bg-[#48120e]"
                backTextClassName="text-white"
                accentClassName="text-[#8a7a63]"
                progressBarClassName="bg-[#8a7a63]"
                ctaClassName="bg-white text-[#48120e]"
                renderPhoto={(loc, i) => (
                  <Image
                    src={unsplashUrl(LOCATION_PHOTOS[i % LOCATION_PHOTOS.length].id, 500)}
                    alt={LOCATION_PHOTOS[i % LOCATION_PHOTOS.length].alt}
                    fill
                    sizes="300px"
                    style={{ objectFit: "cover" }}
                  />
                )}
              />
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Bento image grid ("why choose us") ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <ScrollReveal once={false} className="max-w-[550px]">
                <p className="sx-eyebrow">Why Smile Loft</p>
                <h2 className="sx-h5 text-left">A closer look at your care</h2>
              </ScrollReveal>
              <ScrollReveal once={false} delay={0.1}>
                <a
                  href="#lead-form"
                  className="inline-flex shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#8a7a63] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#8a7a63] transition-colors hover:bg-[#8a7a63] hover:text-white"
                >
                  Book Free Consult
                </a>
              </ScrollReveal>
            </div>
            <ScrollRevealGroup once={false} className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[220px] lg:min-h-[915px]">
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
            <ScrollReveal once={false} className="mb-10 max-w-[550px]">
              <p className="sx-eyebrow">Your consultation, in detail</p>
              <h2 className="sx-h5 text-left">What&apos;s included — a $150 value, free</h2>
            </ScrollReveal>
            <ScrollReveal once={false} delay={0.1}>
              <ServicesTabs items={SERVICE_TABS} />
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Count-up stat ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal once={false}>
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
            <ScrollReveal once={false} className="mb-10 text-center">
              <p className="sx-eyebrow">Patient stories</p>
              <h2 className="sx-h5 mx-auto mt-3 max-w-[640px]">What patients tell us</h2>
            </ScrollReveal>
            <TestimonialGrid items={TESTIMONIALS} />
          </div>
        </section>

        {/* ---------------- Value card ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[680px]">
            <ScrollReveal once={false}>
              <div className="rounded-3xl border border-[#48120e]/10 bg-white p-8 text-center shadow-lg sm:p-12">
                <p className="sx-eyebrow">Today&apos;s consultation</p>
                <div className="mt-3 text-4xl font-bold uppercase tracking-tight sm:text-5xl">
                  $150 value — free
                </div>
                <ul className="mx-auto mt-8 flex max-w-sm flex-col gap-3 text-left">
                  {["Personalized implant evaluation", "Dental imaging when needed", "Transparent cost conversation"].map((item) => (
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
                    Book My Free Consultation
                  </ShimmerButton>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Trust strip ---------------- */}
        <section className="px-6 py-14 sm:px-8">
          <ScrollReveal once={false} className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-sm font-semibold text-[#48120e]/80">
            {["Careful, individual evaluation", "Plain-language answers", "Convenient MD locations", "No-pressure consultation"].map((t) => (
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
            <ScrollReveal once={false} className="mb-10 text-center">
              <p className="sx-eyebrow">Questions</p>
              <h2 className="sx-h5 mx-auto mt-3">Common questions</h2>
            </ScrollReveal>
            <ScrollReveal once={false}>
              <FaqAccordion items={FAQS} triggerClassName="text-[#48120e]" />
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Final CTA ---------------- */}
        <section className="px-6 pb-24 sm:px-8">
          <ScrollReveal once={false} className="mx-auto max-w-[720px] rounded-3xl bg-[#48120e] p-10 text-center text-[#f6efe5]">
            <ScanLine className="mx-auto mb-4 h-8 w-8 opacity-80" />
            <h2 className="sx-h5 text-[#f6efe5]">Let&apos;s look at your options.</h2>
            <p className="sx-body mx-auto mt-3 max-w-md text-[#f6efe5]/80">
              Book your Free Dental Implants Consultation today — no cost, no obligation.
            </p>
            <div className="mt-7 flex justify-center">
              <ShimmerButton
                className="bg-[#f6efe5] text-[#48120e]"
                onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book My Free Consultation
              </ShimmerButton>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
      <StickyCtaBar className="bg-[#8a7a63]" label="Book My Free Consultation" />
    </div>
  );
}
