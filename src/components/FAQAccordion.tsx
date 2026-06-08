"use client";

import { useState } from "react";
import { Column, Heading, Text } from "@once-ui-system/core";

type FAQAccordionProps = {
  question: string;
  answer: string;
};

export function FAQAccordion({ question, answer }: FAQAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <Column className="section-card" gap="s">
      <button
        type="button"
        className="flex w-full items-center justify-between text-left text-base font-semibold text-white"
        onClick={() => setOpen(!open)}
      >
        {question}
        <span className="text-lg">{open ? "−" : "+"}</span>
      </button>
      {open ? <Text className="text-slate-300">{answer}</Text> : null}
    </Column>
  );
}
