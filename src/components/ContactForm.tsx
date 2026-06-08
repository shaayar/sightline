"use client";

import { useState } from "react";
import { Button } from "./Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  return (
    <form
      className="section-card max-w-3xl mx-auto space-y-5"
      onSubmit={async (event) => {
        event.preventDefault();
        setStatus("loading");
        setTimeout(() => setStatus("success"), 500);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm text-slate-300">
          Name
          <input name="name" required className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white" />
        </label>
        <label className="block text-sm text-slate-300">
          Email
          <input type="email" name="email" required className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white" />
        </label>
      </div>
      <label className="block text-sm text-slate-300">
        Subject
        <input name="subject" required className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white" />
      </label>
      <label className="block text-sm text-slate-300">
        Message
        <textarea name="message" required rows={6} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-white" />
      </label>
      <Button type="submit" variant="primary" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send message"}
      </Button>
      {status === "success" ? <p className="text-sm text-sightline-mint">Message sent successfully.</p> : null}
      {status === "error" ? <p className="text-sm text-rose-500">Something went wrong. Try again.</p> : null}
    </form>
  );
}
