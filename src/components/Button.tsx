"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-sightline-blue text-white hover:bg-sightline-blue/90 focus-visible:ring-sightline-mint",
  secondary:
    "bg-slate-900 text-slate-100 border border-slate-700 hover:bg-slate-800",
  ghost: "bg-transparent text-slate-100 hover:bg-slate-900/80",
};

export function Button({ href, variant = "primary", className, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sightline-blue/40",
    variantStyles[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as any)}>
        {props.children}
      </Link>
    );
  }

  return <button className={classes} {...props} />;
}
