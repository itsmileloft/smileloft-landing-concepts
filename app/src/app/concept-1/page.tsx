"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Sparkles as SparklesIcon, Clock3, MessageCircleQuestion, Eye } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { LeadForm } from "@/components/LeadForm";
import { ScrollReveal, ScrollRevealGroup, RevealItem } from "@/components/ScrollReveal";
import { AnimatedGradientText } from "@/components/AnimatedGradientText";
import { ShimmerButton } from "@/components/ShimmerButton";
import { BorderBeam } from "@/components/BorderBeam";
import { SpotlightCard } from "@/components/SpotlightCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { HeroMedia } from "@/components/HeroMedia";
import { Parallax, useHeroParallax } from "@/components/Parallax";
import { STOCK_PHOTOS, unsplashUrl } from "@/lib/stock-photos";

const HERO_PHOTOS = [STOCK_PHOTOS.xrayReview, STOCK_PHOTOS.modernSuite, STOCK_PHOTOS.emptyOperatory];

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "See everything, hidden or not",
    body: "Digital X-rays reveal decay, bone loss, and issues between teeth long before they'd otherwise be noticeable.",
    photo: STOCK_PHOTOS.xrayReview,
  },
  {
    icon: Eye,
    title: "A plan, not a pitch",
    body: "You leave with a personalized treatment plan and priced options — no pressure to decide on the spot.",
  },
  {
    icon: Clock3,
    title: "Sixty seconds to book",
    body: "No phone tag required — reserve your visit online in under a minute, any time of day.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Answers while you're here",
    body: "Dedicated time for your questions — about your results, your options, or anything dental-related.",
    photo: STOCK_PHOTOS.handsWithModel,
  },
];

const XRAY_POINTS = [
  { title: "Up to 80% less radiation", body: "Digital sensors capture clear images with a fraction of the exposure of old-style film X-rays." },
  { title: "Instant results", body: "No waiting for film to develop — your images appear on screen within seconds of capture." },
  { title: "Catch issues early", body: "High-resolution imaging spots cavities and bone changes while they're still small and simple to treat." },
  { title: "We review it together", body: "Your dentist walks through the actual images with you on screen — you see exactly what they see." },
];

const STEPS = [
  { num: "01", title: "Arrival & welcome", body: "Check in, meet the team, and settle in — most first visits start right on time." },
  { num: "02", title: "Comprehensive exam", body: "A thorough evaluation of your teeth, gums, and bite from a licensed dentist." },
  { num: "03", title: "X-rays, reviewed together", body: "We capture digital HD X-rays and walk through them with you on screen." },
  { num: "04", title: "Your personalized plan", body: "Leave with clear next steps, pricing, and time for any remaining questions." },
];

const FAQS = [
  { question: "Is this really free?", answer: "Yes — the comprehensive exam, digital X-rays, and treatment plan are all complimentary with no obligation to schedule further treatment." },
  { question: "Do you accept my insurance?", answer: "We work with most major dental insurance plans. Bring your insurance card to your visit and our team will help verify your benefits." },
  { question: "What should I bring?", answer: "A photo ID and insurance card if you have one. If you've had recent X-rays elsewhere, prior records are helpful but not required." },
  { question: "How long does the visit take?", answer: "Most first visits take about 45–60 minutes, including your exam, X-rays, and time to review your personalized plan together." },
  { question: "Is this only for new patients?", answer: "Not at all — this offer is available for new patients as well as returning patients who are due for routine care." },
];

function AuroraMesh() {
  const reduce = useReducedMotion();
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className={`absolute -left-[10%] -top-[15%] h-[60vw] w-[60vw] max-w-[720px] max-h-[720px] rounded-full opacity-50 blur-[90px] ${!reduce ? "animate-aurora" : ""}`}
        style={{ background: "radial-gradient(circle, #5eead4, #a78bfa 55%, transparent 75%)" }}
      />
      <div
        className={`absolute -right-[10%] top-[20%] h-[50vw] w-[50vw] max-w-[600px] max-h-[600px] rounded-full opacity-40 blur-[90px] ${!reduce ? "animate-blob" : ""}`}
        style={{ background: "radial-gradient(circle, #7c3aed, #2dd4bf 55%, transparent 75%)" }}
      />
    </div>
  );
}

function AuroraOrbs() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/30 backdrop-blur-sm"
          style={{
            width: 60 + i * 30,
            height: 60 + i * 30,
            left: `${15 + i * 30}%`,
            top: `${10 + i * 20}%`,
          }}
          animate={{ y: [0, -20, 0], x: [0, 12, 0] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function HeadlineWords({ text, className }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block whitespace-pre">
          <motion.span
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reduce ? 0 : i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

export default function Concept1() {
  const [heroRef, heroMotion] = useHeroParallax(100);
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-teal-50 via-white to-violet-50 text-[#14213d]">
      <Header
        className="bg-white/70 backdrop-blur-md"
        logoChipClassName="bg-[#0f2e33]"
        ctaClassName="bg-gradient-to-r from-teal-500 to-violet-500 text-white"
      />

      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative flex min-h-[calc(100vh-68px)] flex-col justify-center overflow-hidden px-5 py-10 sm:px-8">
          <HeroMedia
            photos={HERO_PHOTOS}
            overlayClassName="bg-gradient-to-b from-white/80 via-white/55 to-teal-50/90"
          />
          <AuroraMesh />
          <AuroraOrbs />
          <motion.div
            style={heroMotion}
            className="mx-auto grid w-full max-w-[1200px] items-center gap-8 lg:grid-cols-[minmax(0,500px)_1fr]"
          >
            <div>
              <ScrollReveal direction="none">
                <p className="mb-4 inline-block text-sm font-bold uppercase tracking-wide text-teal-700">
                  All smiles, no stress
                </p>
              </ScrollReveal>
              <h1 className="text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
                <HeadlineWords text="Free Dental Exam" />{" "}
                <AnimatedGradientText from="#0d9488" via="#7c3aed" to="#0d9488" className="font-bold">
                  &amp; X-Ray
                </AnimatedGradientText>
              </h1>
              <ScrollReveal direction="up" delay={0.3}>
                <p className="mt-5 max-w-lg text-lg opacity-80">
                  A comprehensive look at your oral health — reviewed with you on screen, and explained in plain language.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {["$250 value, free", "No obligation", "~60 seconds to book"].map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-teal-700/20 bg-white/60 px-4 py-2 text-sm font-semibold backdrop-blur-sm"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <a href="#lead-form">
                    <ShimmerButton className="bg-gradient-to-r from-teal-500 to-violet-500 text-white">
                      Book My Free Exam &amp; X-Ray
                    </ShimmerButton>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="scale" delay={0.15} className="relative aspect-[16/13] overflow-hidden rounded-[28px] shadow-2xl lg:aspect-[4/3] lg:min-h-[480px]">
              <Image
                src={unsplashUrl(STOCK_PHOTOS.xrayReview.id, 1200)}
                alt={STOCK_PHOTOS.xrayReview.alt}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                style={{ objectFit: "cover" }}
              />
            </ScrollReveal>
          </motion.div>
        </section>

        {/* Lead form */}
        <section className="px-6 py-[88px] sm:px-8">
          <ScrollReveal direction="up" className="mx-auto max-w-[1200px]" id="lead-form">
            <BorderBeam color="#0d9488" className="rounded-[28px]">
              <div className="grid gap-0 overflow-hidden rounded-[28px] border border-white/40 bg-white/60 shadow-xl backdrop-blur-xl lg:grid-cols-[1fr_minmax(0,460px)]">
                <div className="relative hidden min-h-[280px] lg:block">
                  <Image
                    src={unsplashUrl(STOCK_PHOTOS.modernSuite.id, 700)}
                    alt={STOCK_PHOTOS.modernSuite.alt}
                    fill
                    sizes="45vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6 sm:p-9">
                  <LeadForm
                    accentClassName="bg-gradient-to-r from-teal-500 to-violet-500 text-white"
                    successIconClassName="text-teal-600"
                  />
                </div>
              </div>
            </BorderBeam>
          </ScrollReveal>
        </section>

        {/* What we're checking */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[560px]">
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-teal-700">What we&apos;re checking</p>
                <h2 className="text-3xl font-bold sm:text-4xl">What are we checking here?</h2>
                <p className="mt-3 text-lg opacity-75">
                  Your free visit covers a full clinical picture of your oral health — not just a quick look, walked through together before recommending anything.
                </p>
              </div>
              <a href="#lead-form" className="shrink-0">
                <ShimmerButton className="bg-gradient-to-r from-teal-500 to-violet-500 text-white">
                  Book My Free Exam &amp; X-Ray
                </ShimmerButton>
              </a>
            </ScrollReveal>

            <ScrollRevealGroup className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2">
              {BENEFITS.map((b) =>
                b.photo ? (
                  <RevealItem key={b.title}>
                    <div className="group relative h-full min-h-[260px] overflow-hidden rounded-[24px] shadow-lg">
                      <Image
                        src={unsplashUrl(b.photo.id, 800)}
                        alt={b.photo.alt}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f2e33]/85 via-[#0f2e33]/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-[26px] text-white">
                        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                          <b.icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-bold">{b.title}</h3>
                        <p className="mt-2 text-sm text-white/85">{b.body}</p>
                      </div>
                    </div>
                  </RevealItem>
                ) : (
                  <RevealItem key={b.title}>
                    <SpotlightCard className="h-full rounded-[24px] border border-white/40 bg-white/55 p-7 shadow-lg backdrop-blur-xl">
                      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600/10 text-teal-700">
                        <b.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold">{b.title}</h3>
                      <p className="mt-2 text-sm opacity-75">{b.body}</p>
                    </SpotlightCard>
                  </RevealItem>
                )
              )}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* Why digital X-rays */}
        <section className="bg-white/40 px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 max-w-[560px]">
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-teal-700">Why digital X-rays</p>
              <h2 className="text-3xl font-bold sm:text-4xl">Modern technology, warm transparent approach</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
              <Parallax
                yRange={[40, -40]}
                className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-xl lg:aspect-auto"
              >
                <Image
                  src={unsplashUrl(STOCK_PHOTOS.emptyOperatory.id, 900)}
                  alt={STOCK_PHOTOS.emptyOperatory.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </Parallax>
              <ScrollRevealGroup className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2">
                {XRAY_POINTS.map((p) => (
                  <RevealItem key={p.title}>
                    <div className="h-full rounded-[24px] border border-white/40 bg-white/55 p-7 shadow-lg backdrop-blur-xl">
                      <h3 className="text-lg font-bold">{p.title}</h3>
                      <p className="mt-2 text-sm opacity-75">{p.body}</p>
                    </div>
                  </RevealItem>
                ))}
              </ScrollRevealGroup>
            </div>
          </div>
        </section>

        {/* Value card */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[720px]">
            <ScrollReveal>
              <BorderBeam color="#7c3aed" className="rounded-[28px]">
                <div className="rounded-[28px] border border-white/40 bg-white/60 p-8 text-center shadow-xl backdrop-blur-xl sm:p-12">
                  <p className="mb-2 text-sm font-bold uppercase tracking-wide text-teal-700">Today&apos;s visit</p>
                  <div className="text-4xl font-extrabold sm:text-5xl">$250 value — free</div>
                  <ul className="mx-auto mt-8 flex max-w-md flex-col gap-4 text-left">
                    {[
                      ["Comprehensive exam", "a full evaluation of your teeth, gums, and bite."],
                      ["Digital HD X-rays", "low-radiation imaging reviewed with you on screen."],
                      ["Personalized treatment plan", "plus dedicated time for your questions."],
                    ].map(([title, body]) => (
                      <li key={title} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                        <span>
                          <strong>{title}</strong> — {body}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex justify-center">
                    <a href="#lead-form">
                      <ShimmerButton className="bg-gradient-to-r from-teal-500 to-violet-500 text-white">
                        Book My Free Exam &amp; X-Ray
                      </ShimmerButton>
                    </a>
                  </div>
                </div>
              </BorderBeam>
            </ScrollReveal>
          </div>
        </section>

        {/* Steps */}
        <section className="bg-white/40 px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 max-w-[560px]">
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-teal-700">Your first visit</p>
              <h2 className="text-3xl font-bold sm:text-4xl">What to expect</h2>
            </ScrollReveal>
            <ScrollRevealGroup className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <RevealItem key={s.num}>
                  <div className="h-full rounded-[24px] border border-white/40 bg-white/55 p-7 shadow-lg backdrop-blur-xl">
                    <div className="mb-2 text-3xl font-extrabold text-teal-600/40">{s.num}</div>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm opacity-75">{s.body}</p>
                  </div>
                </RevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* Testimonial */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[720px]">
            <ScrollReveal>
              <div className="rounded-[28px] border border-white/40 bg-white/60 p-8 text-center shadow-xl backdrop-blur-xl sm:p-12">
                <div className="relative mx-auto mb-4 h-16 w-16 overflow-hidden rounded-full border-2 border-white shadow-md">
                  <Image
                    src={unsplashUrl(STOCK_PHOTOS.brightSmile.id, 200)}
                    alt=""
                    fill
                    sizes="64px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="mb-4 flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <SparklesIcon key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-lg italic opacity-90">
                  &quot;I have been coming to this office for many years, and always find them welcoming. The staff takes time to explain everything clearly, and I never feel rushed or like just another appointment on the schedule.&quot;
                </blockquote>
                <cite className="mt-4 block not-italic opacity-70">— Nancy Foster, patient</cite>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white/40 px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[720px]">
            <ScrollReveal className="mb-10">
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-teal-700">Questions</p>
              <h2 className="text-3xl font-bold sm:text-4xl">Frequently asked questions</h2>
            </ScrollReveal>
            <ScrollReveal>
              <FaqAccordion items={FAQS} />
            </ScrollReveal>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[720px]">
            <ScrollReveal>
              <div className="rounded-[28px] border border-white/40 bg-white/60 p-10 text-center shadow-xl backdrop-blur-xl">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Ready for{" "}
                  <AnimatedGradientText from="#0d9488" via="#7c3aed" to="#0d9488">
                    a clearer picture
                  </AnimatedGradientText>{" "}
                  of your smile?
                </h2>
                <p className="mx-auto mt-3 max-w-md opacity-80">
                  Book your free exam and X-ray today — no cost, no obligation.
                </p>
                <div className="mt-7 flex justify-center">
                  <a href="#lead-form">
                    <ShimmerButton className="bg-gradient-to-r from-teal-500 to-violet-500 text-white">
                      Book My Free Exam &amp; X-Ray
                    </ShimmerButton>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCtaBar className="bg-gradient-to-r from-teal-500 to-violet-500" />
    </div>
  );
}
