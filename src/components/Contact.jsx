import { useState } from "react";
import { EMAIL, SOCIALS } from "../data/site";
import { IconCheck, IconCopy, IconExternal, IconGitHub, IconLinkedIn } from "./Icons";

const DETAILS = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    copy: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/murtazahumayun",
    href: SOCIALS.linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/muzzz2308",
    href: SOCIALS.github,
    icon: "github",
  },
  {
    label: "Location",
    value: "Lahore, Pakistan",
  },
  {
    label: "Availability",
    value: "Freelance — open to new work",
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="reveal gold-hairline mb-16 h-px w-full" />

      <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="reveal">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-gold">
            Contact
          </p>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Open to freelance
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            A project worth building?
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            I take on a limited number of websites at a time — agency pages,
            storefronts, and product UI. Share a brief and I&apos;ll reply
            within a day.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent("Project inquiry")}`}
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-gold to-gold-soft px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Write an email
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              <IconLinkedIn />
              LinkedIn
            </a>
          </div>
        </div>

        <dl className="reveal divide-y divide-border border-y border-border">
          {DETAILS.map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <dt className="shrink-0 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                {row.label}
              </dt>
              <dd className="flex min-w-0 items-center justify-between gap-3 sm:justify-end">
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="truncate text-sm text-foreground transition-colors hover:text-gold sm:text-base"
                  >
                    {row.value}
                  </a>
                ) : (
                  <span className="text-sm text-foreground sm:text-base">
                    {row.value}
                  </span>
                )}

                {row.copy ? (
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                    aria-label={copied ? "Email copied" : "Copy email"}
                  >
                    {copied ? <IconCheck className="h-3.5 w-3.5" /> : <IconCopy className="h-3.5 w-3.5" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                ) : row.href?.startsWith("http") ? (
                  <a
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-muted-foreground transition-colors hover:text-gold"
                    aria-label={`Open ${row.label}`}
                  >
                    {row.icon === "github" ? (
                      <IconGitHub className="h-4 w-4" />
                    ) : (
                      <IconExternal className="h-4 w-4" />
                    )}
                  </a>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
