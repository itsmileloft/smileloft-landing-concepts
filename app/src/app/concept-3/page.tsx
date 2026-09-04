"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ShieldCheck, ClipboardList, Clock3, MessageCircleQuestion, Star } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { ScrollReveal, ScrollRevealGroup, RevealItem } from "@/components/ScrollReveal";
import { AnimatedGradientText } from "@/components/AnimatedGradientText";
import { ShimmerButton } from "@/components/ShimmerButton";
import { BorderBeam } from "@/components/BorderBeam";
import { SpotlightCard } from "@/components/SpotlightCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CountUp } from "@/components/CountUp";
import { HeroVideo } from "@/components/HeroVideo";
import { Parallax, useHeroParallax } from "@/components/Parallax";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { STOCK_PHOTOS, unsplashUrl } from "@/lib/stock-photos";
import { withBasePath } from "@/lib/utils";


const CARDS = [
  { icon: ShieldCheck, title: "See everything, hidden or not", body: "Digital X-rays reveal decay and bone loss long before symptoms show.", photo: STOCK_PHOTOS.xrayReview },
  { icon: ClipboardList, title: "A plan, not a pitch", body: "Leave with a personalized treatment plan and priced options — zero pressure." },
  { icon: Clock3, title: "Sixty seconds to book", body: "Reserve your visit online, any time — no phone tag required." },
  { icon: MessageCircleQuestion, title: "Answers while you're here", body: "Dedicated time for your questions — no rushing through it.", photo: STOCK_PHOTOS.handsWithModel },
];

const XRAY_POINTS = [
  { title: "Up to 80% less radiation", body: "Digital sensors need far less exposure than traditional film." },
  { title: "Instant results", body: "Images appear on screen within seconds of capture." },
  { title: "Catch issues early", body: "High-resolution imaging spots problems while they're still small." },
  { title: "We review it together", body: "You see exactly what we see, explained clearly." },
];

const STEPS = [
  { title: "01 — Arrival & welcome", body: "Check in and meet the team." },
  { title: "02 — Comprehensive exam", body: "A thorough evaluation of teeth, gums, and bite." },
  { title: "03 — X-ray review", body: "We walk through your images together, on screen." },
  { title: "04 — Your plan", body: "Clear next steps and time for any remaining questions." },
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
            initial={reduce ? undefined : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reduce ? 0 : i * 0.09, ease: [0.16, 1, 0.3, 1] }}
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

export default function Concept3() {
  const [heroRef, heroMotion] = useHeroParallax(110);
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <Header
        logoChipClassName="bg-white/10 backdrop-blur"
        ctaClassName="bg-gradient-to-r from-teal-400 to-violet-500 text-white"
        className="bg-[#0a0f1a]/80 backdrop-blur-md"
      />

      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative flex min-h-[max(832px,calc(100vh-68px))] flex-col justify-center overflow-hidden px-5 py-16 sm:px-8 lg:justify-start lg:pt-20">
          <HeroVideo
            src={withBasePath("/bannerVideo.mp4")}
            overlayClassName="bg-[#0a0f1a]/70"
          />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-[#0a0f1a]/70 to-[#0a0f1a]" />

          <motion.div style={heroMotion} className="relative z-10 mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,540px)_1fr]">
              <div>
                <ScrollReveal direction="none">
                  <p className="mb-4 text-sm font-bold uppercase tracking-wide text-teal-300">All smiles, no stress</p>
                </ScrollReveal>
                <h1 className="text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
                  <HeadlineWords text="Free Dental Exam" />{" "}
                  <AnimatedGradientText from="#2dd4bf" via="#a78bfa" to="#2dd4bf" className="whitespace-nowrap font-bold">
                    &amp; X-Ray
                  </AnimatedGradientText>
                </h1>
                <ScrollReveal direction="up" delay={0.25}>
                  <p className="mt-5 max-w-lg text-lg text-white/70">
                    A comprehensive look at your oral health — reviewed with you on screen, and explained in plain language.
                  </p>
                  <div className="mt-8">
                    <a href="#lead-form">
                      <ShimmerButton className="bg-gradient-to-r from-teal-400 to-violet-500 text-white">
                        Book My Free Exam &amp; X-Ray
                      </ShimmerButton>
                    </a>
                  </div>
                </ScrollReveal>

                <ScrollRevealGroup className="mt-14 grid max-w-lg grid-cols-3 gap-4">
                  {[
                    { value: 250, prefix: "$", label: "Value, free" },
                    { value: 10, prefix: "", label: "MD locations" },
                    { value: 60, suffix: "s", label: "To book" },
                  ].map((stat) => (
                    <RevealItem key={stat.label}>
                      <div>
                        <div className="text-3xl font-extrabold text-teal-300 sm:text-4xl">
                          <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                        </div>
                        <div className="mt-1 text-xs uppercase tracking-wide text-white/60">{stat.label}</div>
                      </div>
                    </RevealItem>
                  ))}
                </ScrollRevealGroup>
              </div>

              <ScrollReveal
                id="lead-form"
                direction="scale"
                delay={0.15}
              >
                <BorderBeam color="#2dd4bf" className="rounded-3xl">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-9">
                    <LeadForm
                      accentClassName="bg-gradient-to-r from-teal-400 to-violet-500 text-white"
                      successIconClassName="text-teal-300"
                    />
                  </div>
                </BorderBeam>
              </ScrollReveal>
            </div>
          </motion.div>
        </section>

        {/* What we're checking */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[560px]">
                <p className="mb-3 text-sm font-bold uppercase tracking-wide text-teal-300">What we&apos;re checking</p>
                <h2 className="text-3xl font-bold sm:text-4xl">A full picture, not a quick glance</h2>
                <p className="mt-3 text-white/65">
                  Your free visit covers your teeth, gums, bite, and bone structure using digital X-rays — reviewed together, in plain language.
                </p>
              </div>
              <a href="#lead-form" className="shrink-0">
                <ShimmerButton className="bg-gradient-to-r from-teal-400 to-violet-500 text-white">
                  Book My Free Exam &amp; X-Ray
                </ShimmerButton>
              </a>
            </ScrollReveal>
            <ScrollRevealGroup className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CARDS.map((c) =>
                c.photo ? (
                  <RevealItem key={c.title} direction="scale">
                    <div className="group relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-white/10">
                      <Image
                        src={unsplashUrl(c.photo.id, 700)}
                        alt={c.photo.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        style={{ objectFit: "cover" }}
                        className="brightness-[0.7] transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-[26px]">
                        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                          <c.icon className="h-5 w-5 text-teal-300" />
                        </div>
                        <h3 className="text-base font-bold">{c.title}</h3>
                        <p className="mt-2 text-sm text-white/75">{c.body}</p>
                      </div>
                    </div>
                  </RevealItem>
                ) : (
                  <RevealItem key={c.title} direction="scale">
                    <SpotlightCard
                      spotlightColor="rgba(45,212,191,0.18)"
                      className="h-full rounded-2xl border border-white/10 bg-white/5 p-6"
                    >
                      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300">
                        <c.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-bold">{c.title}</h3>
                      <p className="mt-2 text-sm text-white/60">{c.body}</p>
                    </SpotlightCard>
                  </RevealItem>
                )
              )}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* Photo break */}
        <section className="relative overflow-hidden px-6 py-[88px] sm:px-8">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-stretch gap-4 lg:grid-cols-3">
            <Parallax yRange={[-28, 28]} className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[260px]">
              <Image
                src={unsplashUrl(STOCK_PHOTOS.emptyOperatory.id, 800)}
                alt={STOCK_PHOTOS.emptyOperatory.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                style={{ objectFit: "cover" }}
                className="brightness-[0.75]"
              />
            </Parallax>
            <Parallax yRange={[28, -28]} className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[260px]">
              <Image
                src={unsplashUrl(STOCK_PHOTOS.clinicianPortrait.id, 800)}
                alt={STOCK_PHOTOS.clinicianPortrait.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                style={{ objectFit: "cover" }}
                className="brightness-[0.8]"
              />
            </Parallax>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[260px]">
              <Image
                src={unsplashUrl(STOCK_PHOTOS.procedureClose.id, 800)}
                alt={STOCK_PHOTOS.procedureClose.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                style={{ objectFit: "cover" }}
                className="brightness-[0.75]"
              />
            </div>
          </div>
        </section>

        {/* Why digital X-rays */}
        <section className="bg-white/[0.03] px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 max-w-[560px]">
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-violet-300">Why digital X-rays</p>
              <h2 className="text-3xl font-bold sm:text-4xl">Modern technology, warm transparent approach</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {XRAY_POINTS.map((p, i) => (
                <ScrollReveal key={p.title} direction={i % 2 === 0 ? "left" : "right"} className="h-full">
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="text-base font-bold">{p.title}</h3>
                    <p className="mt-2 text-sm text-white/60">{p.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Value card */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[680px]">
            <ScrollReveal direction="scale">
              <BorderBeam color="#2dd4bf" className="rounded-3xl">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-xl sm:p-12">
                  <p className="mb-2 text-sm font-bold uppercase tracking-wide text-teal-300">Today&apos;s visit</p>
                  <div className="text-4xl font-extrabold sm:text-5xl">$250 value — free</div>
                  <ul className="mx-auto mt-8 flex max-w-sm flex-col gap-3 text-left">
                    {["Comprehensive exam", "Digital HD X-rays", "Personalized treatment plan + dedicated Q&A"].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex justify-center">
                    <a href="#lead-form">
                      <ShimmerButton className="bg-gradient-to-r from-teal-400 to-violet-500 text-white">
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
        <section className="bg-white/[0.03] px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal className="mb-10 max-w-[560px]">
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-teal-300">Your first visit</p>
              <h2 className="text-3xl font-bold sm:text-4xl">What to expect</h2>
            </ScrollReveal>
            <ScrollRevealGroup className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <RevealItem key={s.title}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="text-base font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm text-white/60">{s.body}</p>
                  </div>
                </RevealItem>
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* Testimonial */}
        <section className="px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[680px]">
            <ScrollReveal direction="scale">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-xl sm:p-12">
                <div className="mb-4 flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-teal-300 text-teal-300" />
                  ))}
                </div>
                <blockquote className="text-lg italic text-white/85">
                  &quot;I have been coming to this office for many years, and always find them welcoming. The staff takes time to explain everything clearly, and I never feel rushed or like just another appointment on the schedule.&quot;
                </blockquote>
                <cite className="mt-4 block not-italic text-white/60">— Nancy Foster, patient</cite>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white/[0.03] px-6 py-[88px] sm:px-8">
          <div className="mx-auto max-w-[720px]">
            <ScrollReveal className="mb-10">
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-violet-300">Questions</p>
              <h2 className="text-3xl font-bold sm:text-4xl">Frequently asked questions</h2>
            </ScrollReveal>
            <ScrollReveal>
              <FaqAccordion items={FAQS} triggerClassName="text-white" />
            </ScrollReveal>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-[88px] pb-28 sm:px-8 md:pb-20">
          <ScrollReveal direction="scale" className="mx-auto max-w-[720px] rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready for{" "}
              <AnimatedGradientText from="#2dd4bf" via="#a78bfa" to="#2dd4bf">
                a clearer picture
              </AnimatedGradientText>{" "}
              of your smile?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/70">
              Book your free exam and X-ray today — no cost, no obligation.
            </p>
            <div className="mt-7 flex justify-center">
              <a href="#lead-form">
                <ShimmerButton className="bg-gradient-to-r from-teal-400 to-violet-500 text-white">
                  Book My Free Exam &amp; X-Ray
                </ShimmerButton>
              </a>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer className="text-white/60" />
      <StickyCtaBar className="bg-gradient-to-r from-teal-400 to-violet-500" />
    </div>
  );
}
