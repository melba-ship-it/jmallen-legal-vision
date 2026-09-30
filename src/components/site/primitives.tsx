import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  tone = "paper",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "paper" | "muted" | "ink";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28",
        tone === "muted" && "bg-secondary",
        tone === "ink" && "bg-ink text-[color:var(--paper)]",
        className,
      )}
    >
      <div className="container-editorial">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="border-b border-border">
      <div className="container-editorial grid gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="fade-up">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="display-lg mt-6 max-w-3xl text-balance">{title}</h1>
          {lede && <p className="lede mt-7 max-w-2xl">{lede}</p>}
        </div>
        {image && (
          <img
            src={image}
            alt={imageAlt ?? ""}
            loading="eager"
            decoding="async"
            className="aspect-4/3 w-full object-cover lg:aspect-3/2"
          />
        )}
      </div>
    </section>
  );
}

export function CtaBand({
  title,
  body,
  label = "Agende una conversación inicial",
  to = "/contacto",
}: {
  title: string;
  body?: string;
  label?: string;
  to?: string;
}) {
  return (
    <section className="bg-ink text-[color:var(--paper)]">
      <div className="container-editorial flex flex-col gap-8 py-20 md:flex-row md:items-end md:justify-between md:py-24">
        <div className="max-w-2xl">
          <h2 className="display-md text-balance">{title}</h2>
          {body && (
            <p className="mt-5 text-base leading-relaxed text-[color:var(--paper)]">
              {body}
            </p>
          )}
        </div>
        <Link
          to={to}
          className="shrink-0 border border-[color:var(--paper)] px-8 py-4 text-[0.72rem] uppercase tracking-[0.18em] transition-colors hover:bg-[color:var(--paper)] hover:text-ink"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}

export function NumberedList({
  items,
}: {
  items: { number: string; title: string; body: string }[];
}) {
  return (
    <ol className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.number} className="bg-background p-8 md:p-10">
          <span className="font-display text-3xl text-[color:var(--sand)]">{item.number}</span>
          <h3 className="display-md mt-5 text-xl leading-snug">{item.title}</h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}
