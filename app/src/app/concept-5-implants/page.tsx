"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Star, CheckCircle2, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { ScrollReveal, ScrollRevealGroup, RevealItem } from "@/components/ScrollReveal";
import { HeroVideo } from "@/components/HeroVideo";
import { Parallax } from "@/components/Parallax";
import { ShimmerButton } from "@/components/ShimmerButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Marquee } from "@/components/Marquee";
import { DoctorExpandCards } from "@/components/DoctorExpandCard";
import { LocationFlipCards } from "@/components/LocationFlipCards";
import type { ServiceAccordionItem } from "@/components/ServiceAccordion";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { STOCK_PHOTOS, unsplashUrl } from "@/lib/stock-photos";
import { LOCATIONS, LOCATION_DETAILS } from "@/lib/locations";
import { withBasePath } from "@/lib/utils";

const SERVICE_ACCORDION_ITEMS: ServiceAccordionItem[] = [
  {
    serviceTitle: "Personalized implant evaluation",
    price: "Free",
    shortDescription: "A close look at your teeth, gums, and bone support.",
  },
  {
    serviceTitle: "Dental imaging when needed",
    price: "Free",
    shortDescription: "Clinically appropriate imaging to support your evaluation.",
  },
  {
    serviceTitle: "Transparent cost conversation",
    price: "Free",
    shortDescription: "Individual cost considerations, explained clearly — not a generic number.",
  },
  {
    serviceTitle: "Time for all your questions",
    price: "Free",
    shortDescription: "No rush, no sales pitch. Ask everything before deciding anything.",
  },
];

const SERVICE_CARDS = [
  {
    title: "Missing one tooth",
    body: "Whether it's one tooth or several, we'll walk through every option worth considering for your situation.",
    photo: STOCK_PHOTOS.clinicianPortrait,
  },
  {
    title: "Re-evaluating options",
    body: "Explored implants before and weren't sure? A fresh, honest evaluation with no guaranteed-candidacy claims.",
    photo: STOCK_PHOTOS.procedureClose,
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

const PROCESS_STEPS = [
  { title: "Quick check-in", body: "A friendly welcome — you don't need to know your treatment yet." },
  { title: "Talk about your goals", body: "Comfort, timing, appearance, function, and cost — whatever matters to you." },
  { title: "Review images if needed", body: "Imaging when clinically appropriate to evaluate bone support and structure." },
  { title: "Review your options", body: "The team talks through possible next steps based on the findings." },
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

const TESTIMONIALS = [
  {
    name: "Marcus T.",
    quote: "Honest, no-pressure conversation — they explained everything about implants in plain language before I decided anything.",
    photo: STOCK_PHOTOS.clinicianPortrait,
  },
  {
    name: "Daniel Ruiz",
    quote:
      "The consultation was easy to book and the whole team walked me through everything on screen. No pressure, no surprise costs — just a clear plan.",
    photo: STOCK_PHOTOS.procedureClose,
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
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

export default function Concept5Implants() {
  return (
    <div className="silenus min-h-screen">
      <Header
        className="relative z-20 bg-transparent"
        logoChipClassName="bg-white"
        ctaClassName="bg-[#bb9d81] text-[#141414]"
        ctaLabel="Book Free Consult"
        ctaShimmer
      />

      <main className="-mt-[68px]">
        {/* ---------------- Hero ---------------- */}
        <section className="relative flex h-[calc(100vh)] min-h-[640px] flex-col justify-end overflow-hidden px-5 pb-10 pt-[100px] sm:px-8 sm:pb-10 sm:pt-[140px] lg:px-10">
          <HeroVideo
            src={withBasePath("/bannerVideo.mp4")}
            focus="75% center"
            overlayClassName="bg-[#141414]/35 bg-gradient-to-b from-transparent via-transparent to-[#141414]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[320px] bg-gradient-to-b from-[#141414] to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[65%] bg-gradient-to-b from-transparent via-[#141414]/80 to-[#141414] sm:h-[320px]"
          />

          <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-col items-end gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="w-full max-w-[560px] lg:max-w-[460px]">
              <h1 className="sl-h72">
                <HeadlineWords text="Are Implants an Option for Me?" />
              </h1>
            </div>

            <ScrollReveal once={false} direction="up" delay={0.25} className="w-full max-w-[560px] text-right lg:max-w-[60%]">
              <p className="sl-p28">
                It starts with an individual evaluation — your oral health, bone support, and
                goals. Not a generic recommendation.
              </p>
              <div className="mt-6 flex justify-end">
                <a href="#lead-form">
                  <ShimmerButton className="bg-[#bb9d81] text-[#141414]">
                    Book My Free Consultation
                  </ShimmerButton>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Marquee ---------------- */}
        <div className="border-y border-[#bb9d81]/15 bg-white/[0.03] py-5">
          <Marquee
            items={[...LOCATIONS]}
            itemClassName="font-sans text-sm font-semibold text-[#dedede]"
            renderItem={(item) => (
              <>
                <MapPin className="h-4 w-4 text-[#bb9d81]" />
                {item}
              </>
            )}
          />
        </div>

        {/* ---------------- What changes for you ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <ScrollReveal once={false} direction="left">
                <p className="sl-h18 mb-4 uppercase tracking-[0.1em]">What changes for you</p>
                <h2 className="sl-h24 !text-left text-[28px] sm:text-[34px]">
                  An honest answer, not a guess
                </h2>
                <p className="sl-p18 mt-5 max-w-lg text-white">
                  No guaranteed candidacy claims — a real evaluation of your teeth, bone
                  support, and health history. We&apos;ll discuss cost considerations openly,
                  before you decide anything.
                </p>
                <p className="sl-p18 mt-4 max-w-lg text-white">
                  Whether it&apos;s one tooth or several, understand every option worth
                  considering. There&apos;s no pressure, ever — every question gets an honest
                  answer.
                </p>
              </ScrollReveal>
              <ScrollReveal once={false} direction="scale" delay={0.1} className="relative aspect-[5/4] overflow-hidden rounded-2xl">
                <Parallax yRange={[-20, 20]} className="absolute inset-0">
                  <Image
                    src={unsplashUrl(STOCK_PHOTOS.clinicianPortrait.id, 900)}
                    alt={STOCK_PHOTOS.clinicianPortrait.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </Parallax>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ---------------- Services (static grid) ---------------- */}
        <section id="services" className="bg-white/[0.02] px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal once={false} className="mb-10 text-center">
              <p className="sl-h18 mb-3 uppercase tracking-[0.1em]">What&apos;s included — a $150 value, free</p>
              <h2 className="sl-h64">Your consultation, in detail</h2>
            </ScrollReveal>
            <ScrollRevealGroup once={false} className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2">
              {SERVICE_ACCORDION_ITEMS.map((item) => (
                <RevealItem key={item.serviceTitle}>
                  <div className="h-full rounded-2xl border border-[#bb9d81]/20 bg-white/5 p-6">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                      <h3 className="font-sans text-lg font-bold text-[#bb9d81]">{item.serviceTitle}</h3>
                      <span className="shrink-0 text-sm font-semibold text-[#bb9d81]">{item.price}</span>
                    </div>
                    <p className="mt-2 text-sm opacity-70">{item.shortDescription}</p>
                  </div>
                </RevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ---------------- Who it's for ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal once={false} className="mb-10 max-w-[600px]">
              <p className="sl-h18 mb-3 uppercase tracking-[0.1em]">Who it&apos;s for</p>
              <h2 className="sl-h24 !text-left text-[28px] sm:text-[34px]">
                You don&apos;t need to arrive already knowing if you&apos;re a candidate
              </h2>
            </ScrollReveal>
            <ScrollRevealGroup once={false} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

        {/* ---------------- Process ---------------- */}
        <section className="bg-white/[0.02] px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal once={false} className="mb-10 text-center">
              <p className="sl-h18 mb-3 uppercase tracking-[0.1em]">The process</p>
              <h2 className="sl-h64">Your consultation, in four simple steps</h2>
            </ScrollReveal>
            <ScrollRevealGroup once={false} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((step, i) => (
                <RevealItem key={step.title}>
                  <div className="h-full rounded-2xl border border-[#bb9d81]/20 bg-white/5 p-6">
                    <span className="sl-h18 text-2xl">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 font-sans text-lg font-bold text-[#bb9d81]">{step.title}</h3>
                    <p className="mt-2 text-sm opacity-70">{step.body}</p>
                  </div>
                </RevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ---------------- Doctors ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal once={false} className="mb-10 text-center">
              <p className="sl-h18 mb-3 uppercase tracking-[0.1em]">Meet the doctors</p>
              <h2 className="sl-h64">The people behind your care</h2>
            </ScrollReveal>
            <ScrollReveal once={false} delay={0.1}>
              <DoctorExpandCards doctors={DOCTORS} />
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Locations ---------------- */}
        <section className="bg-white/[0.02] px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1320px]">
            <ScrollReveal once={false} className="mb-10 text-center">
              <p className="sl-h18 mb-3 uppercase tracking-[0.1em]">10 Maryland locations</p>
              <h2 className="sl-h64">Find a Smile Loft near you</h2>
              <p className="sl-p18 mx-auto mt-4 max-w-lg text-white">
                Tap a card to see the address, then scroll to see them all.
              </p>
            </ScrollReveal>
            <ScrollReveal once={false} delay={0.1}>
              <LocationFlipCards
                locations={LOCATION_DETAILS}
                cardBgClassName="bg-white/5 border border-[#bb9d81]/20"
                frontTextClassName="text-white"
                backBgClassName="bg-[#bb9d81]"
                backTextClassName="text-[#141414]"
                accentClassName="text-[#bb9d81]"
                progressBarClassName="bg-[#bb9d81]"
                ctaClassName="bg-[#141414] text-white"
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

        {/* ---------------- Testimonials ---------------- */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal once={false} className="mb-10 text-center">
              <p className="sl-h18 mb-3 uppercase tracking-[0.1em]">Patient stories</p>
              <h2 className="sl-h64">What patients tell us</h2>
            </ScrollReveal>
            <ScrollRevealGroup once={false} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                      <p className="sl-p18 flex-1 text-white">&ldquo;{t.quote}&rdquo;</p>
                      <p className="mt-4 font-sans text-base font-bold text-[#bb9d81]">{t.name}</p>
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
            <ScrollReveal once={false} className="mb-10 text-center">
              <p className="sl-h18 mb-3 uppercase tracking-[0.1em]">Questions</p>
              <h2 className="sl-h64">Common questions</h2>
            </ScrollReveal>
            <ScrollReveal once={false}>
              <FaqAccordion
                items={FAQS}
                triggerClassName="text-[#dedede] hover:text-[#bb9d81]"
                className="[&_[data-slot=accordion-item]]:border-[#bb9d81]/15"
              />
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Contact / CTA ---------------- */}
        <section id="lead-form" className="relative overflow-hidden px-6 pt-[88px] pb-10 sm:px-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #bb9d81, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-[720px]">
            <ScrollReveal once={false} className="mb-10 text-center">
              <p className="sl-h18 mb-3 uppercase tracking-[0.1em]">Get started</p>
              <h2 className="sl-h64">Book My Free Consultation</h2>
              <p className="sl-p18 mx-auto mt-4 max-w-md text-white">
                No cost, no obligation — available for new patients and anyone re-evaluating
                treatment options, across all 10 Maryland locations.
              </p>
            </ScrollReveal>
            <ScrollReveal once={false} direction="scale" delay={0.1} className="rounded-3xl border border-[#bb9d81]/20 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-9">
              <LeadForm
                accentClassName="bg-[#bb9d81] text-[#141414]"
                successIconClassName="text-[#bb9d81]"
                titleClassName="text-[#bb9d81]"
                title="Book My Free Consultation"
                submitLabel="Book My Free Consultation"
                lead="Takes about 60 seconds. No payment, no obligation."
                concept="Concept 5"
                campaign="Implants Consult"
              />
            </ScrollReveal>
          </div>
        </section>

        {/* ---------------- Trust strip ---------------- */}
        <section className="px-6 pb-[88px] sm:px-8">
          <ScrollReveal once={false} className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-sm font-semibold text-[#bb9d81]">
            {["Careful, individual evaluation", "Plain-language answers", "Convenient MD locations", "No-pressure consultation"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#bb9d81]" />
                {t}
              </span>
            ))}
          </ScrollReveal>
        </section>
      </main>

      <Footer className="text-[#dedede]/50" />
      <StickyCtaBar className="bg-[#bb9d81] text-[#141414]" label="Book My Free Consultation" />
    </div>
  );
}
