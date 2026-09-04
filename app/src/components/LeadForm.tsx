"use client";

import { useId, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { LOCATIONS } from "@/lib/locations";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  location: string;
};

type Errors = Partial<Record<keyof FormValues, string>>;

const EMPTY: FormValues = { name: "", phone: "", email: "", location: "" };

function validate(values: FormValues): Errors {
  const errors: Errors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }
  const phoneDigits = values.phone.replace(/\D/g, "");
  if (phoneDigits.length < 10) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.location) {
    errors.location = "Please select a location.";
  }
  return errors;
}

export function LeadForm({
  id = "lead-form",
  className,
  accentClassName = "bg-primary text-primary-foreground",
  submitLabel = "Book My Free Exam & X-Ray",
  title = "Book My Free Exam & X-Ray",
  lead = "For new patients and those returning to routine care. Takes about 60 seconds.",
  successIconClassName = "text-primary",
}: {
  id?: string;
  className?: string;
  accentClassName?: string;
  submitLabel?: string;
  title?: string;
  lead?: string;
  successIconClassName?: string;
}) {
  const uid = useId();
  const reduce = useReducedMotion();
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  }

  return (
    <div id={id} className={cn("relative", className)}>
      <AnimatePresence mode="wait" initial={false}>
        {!submitted ? (
          <motion.div
            key="form"
            initial={reduce ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>
            <p className="mt-2 text-sm opacity-80 sm:text-base">{lead}</p>

            <form noValidate onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Full name" htmlFor={`${uid}-name`} error={errors.name}>
                  <input
                    id={`${uid}-name`}
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={fieldInputClass(!!errors.name)}
                  />
                </Field>
                <Field label="Phone number" htmlFor={`${uid}-phone`} error={errors.phone}>
                  <input
                    id={`${uid}-phone`}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={fieldInputClass(!!errors.phone)}
                  />
                </Field>
              </div>

              <Field label="Email" htmlFor={`${uid}-email`} error={errors.email}>
                <input
                  id={`${uid}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={fieldInputClass(!!errors.email)}
                />
              </Field>

              <Field label="Preferred location" htmlFor={`${uid}-location`} error={errors.location}>
                <Select
                  value={values.location}
                  onValueChange={(v) => update("location", v ?? "")}
                >
                  <SelectTrigger
                    id={`${uid}-location`}
                    className={cn(
                      "!h-[48px] w-full rounded-[10px] border-[1.5px] px-4 text-base",
                      errors.location ? "border-red-500" : "border-black/15"
                    )}
                  >
                    <SelectValue placeholder="Select a location" />
                  </SelectTrigger>
                  <SelectContent>
                    {LOCATIONS.map((loc) => (
                      <SelectItem key={loc} value={loc}>
                        {loc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>

              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                className={cn(
                  "relative mt-1 inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold shadow-lg transition-opacity disabled:opacity-70",
                  accentClassName
                )}
              >
                <span className="relative z-10">
                  {submitting ? "Booking…" : submitLabel}
                </span>
                {!reduce && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-[-60%] w-[40%] -skew-x-[20deg] bg-gradient-to-r from-transparent via-white/45 to-transparent animate-[shimmer-sweep_3.2s_ease-in-out_infinite]"
                  />
                )}
              </motion.button>
              <p className="text-center text-xs opacity-70">
                By submitting, you agree to be contacted about your appointment. No spam, ever.
              </p>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            role="status"
            initial={reduce ? undefined : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="py-8 text-center"
          >
            <CheckCircle2 className={cn("mx-auto mb-4 h-14 w-14", successIconClassName)} />
            <h3 className="text-xl font-bold sm:text-2xl">
              You&apos;re all set{values.name ? `, ${values.name.split(" ")[0]}` : ""}!
            </h3>
            <p className="mt-2 text-sm opacity-80 sm:text-base">
              A member of our team will reach out shortly to confirm your appointment time.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function fieldInputClass(hasError: boolean) {
  return cn(
    "min-h-[48px] w-full rounded-[10px] border-[1.5px] bg-white px-4 py-3 text-base text-neutral-900 transition-colors focus:outline-none focus:ring-4",
    hasError
      ? "border-red-500 focus:ring-red-500/15"
      : "border-black/15 focus:border-current focus:ring-current/15"
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5 text-left">
      <Label htmlFor={htmlFor} className="text-sm font-semibold">
        {label}
      </Label>
      {children}
      <span className="min-h-[1em] text-xs text-red-600">{error}</span>
    </div>
  );
}
