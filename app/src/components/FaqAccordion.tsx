"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export type FaqItem = { question: string; answer: string };

export function FaqAccordion({
  items,
  className,
  triggerClassName,
}: {
  items: FaqItem[];
  className?: string;
  triggerClassName?: string;
}) {
  return (
    <Accordion
      defaultValue={[items[0]?.question ?? ""]}
      className={cn("w-full", className)}
    >
      {items.map((item) => (
        <AccordionItem key={item.question} value={item.question} className="border-b py-1">
          <AccordionTrigger
            className={cn("py-5 text-lg font-semibold no-underline hover:no-underline", triggerClassName)}
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-base opacity-80">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
