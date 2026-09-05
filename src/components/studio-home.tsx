import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const platformTypes = [
  {
    title: "Assessment platforms",
    context: "Structured evaluation",
    description:
      "Administer assessments, collect responses, and coordinate reviewers in one place. Candidates move through your selection process on your rules, not a vendor's.",
    facts: [
      "Custom workflows",
      "Reviewer access",
      "Secure records",
    ],
  },
  {
    title: "Interview platforms",
    context: "Candidate interviews",
    description:
      "Record and review asynchronous candidate responses under your own branding. No third-party interview vendor between you and your applicants.",
    facts: ["Video responses", "Review tools", "Program branding"],
  },
  {
    title: "Competition management platforms",
    context: "Educational programs",
    description:
      "Run the program from registration through results. Keep teams, events, judging, scorecards, and program resources in one place.",
    facts: [
      "Teams and events",
      "Judging and scoring",
      "Program operations",
    ],
  },
  {
    title: "Workflow automation",
    context: "Operational automation",
    description:
      "Staff should not spend every cycle assembling files or copying data between systems. Automate reports, correspondence, and the repeatable steps a coordinator currently does by hand.",
    facts: ["Manual processes", "Data handling", "Staff time"],
  },
];

const engagementOptions = [
  {
    label: "Build — from $18,000",
    description:
      "A platform designed around your workflow, branded to your program, launched in weeks. Final scope depends on complexity, integrations, and how much of the cycle the platform covers.",
  },
  {
    label: "Annual — from $9,000",
    description:
      "Hosting, support with a response commitment, security and dependency maintenance, per-cycle configuration changes, and continued development. Scales with platform size and support needs.",
  },
  {
    label: "All-in — from $13,000/year",
    description:
      "No upfront build cost, three-year minimum. Everything above, on an operating budget instead of a capital request.",
  },
  {
    label: "Pilot — from $5,000",
    description:
      "One workflow for one cycle, often an automation that removes manual work your team does every year.",
  },
];

const clients = [
  {
    name: "Morehead-Cain",
    href: "https://www.moreheadcain.org/",
    src: "/client-logos/morehead-cain.svg",
    width: 250,
    height: 26,
    linkClass:
      "flex h-14 w-56 shrink-0 items-center justify-center bg-[#7BAFD4] px-5 transition hover:bg-[#6aa3cc] sm:w-64",
    imageClass: "h-auto w-full",
  },
  {
    name: "National High School Ethics Bowl",
    href: "https://nhseb.org/",
    src: "/client-logos/national-high-school-ethics-bowl.png",
    width: 512,
    height: 512,
    linkClass: "shrink-0 opacity-85 transition hover:opacity-100",
    imageClass: "size-20 object-contain",
  },
  {
    name: "UNC College of Arts and Sciences Parr Center for Ethics",
    href: "https://parrcenter.unc.edu/",
    src: "/client-logos/unc-parr-center-for-ethics.png",
    width: 1015,
    height: 122,
    linkClass:
      "w-64 shrink-0 opacity-85 transition hover:opacity-100 sm:w-72",
    imageClass: "h-auto w-full",
  },
];

function ClientLogoGroup() {
  return (
    <div className="flex min-w-0 flex-wrap items-center justify-center gap-6 sm:gap-12">
      {clients.map((client) => (
        <a
          key={client.name}
          href={client.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${client.name}`}
          className={client.linkClass}
        >
          <Image
            src={client.src}
            alt={client.name}
            width={client.width}
            height={client.height}
            className={client.imageClass}
          />
        </a>
      ))}
    </div>
  );
}

export function StudioHome() {
  return (
    <main className="site-shell min-h-screen overflow-hidden bg-[#eef0eb] text-[#162820]">
      <div
        aria-hidden="true"
        className="ambient-background pointer-events-none fixed inset-0"
      >
        <span className="ambient-blob ambient-blob-one" />
        <span className="ambient-blob ambient-blob-two" />
        <span className="ambient-blob ambient-blob-three" />
      </div>

      <header className="border-b border-[#c5c9bf] px-5 py-4 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 sm:gap-5">
          <a href="#top" className="leading-none" aria-label="Home">
            <span className="block font-mono text-xs font-semibold uppercase tracking-[0.28em]">
              CHAPEL PINES
            </span>
            <span className="mt-1 block font-mono text-[0.62rem] uppercase tracking-[0.34em] text-[#687066]">
              STUDIO LLC
            </span>
          </a>
          <nav className="hidden items-center gap-8 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[#5b665d] md:flex">
            <a className="transition hover:text-[#162820]" href="#platforms">
              Platforms
            </a>
            <a className="transition hover:text-[#162820]" href="#pricing">
              Pricing
            </a>
            <a className="transition hover:text-[#162820]" href="#contact">
              Contact
            </a>
          </nav>
          <Button
            asChild
            className="rounded-none bg-[#162820] px-3 font-mono text-[0.64rem] uppercase tracking-[0.08em] text-white hover:bg-[#263c33] sm:px-4 sm:text-[0.72rem] sm:tracking-[0.12em]"
            size="sm"
          >
            <a
              href="https://calendly.com/brendonjcarroll/30min"
              target="_blank"
              rel="noreferrer"
            >
              Discuss Your Program
            </a>
          </Button>
        </div>
      </header>

      <section
        aria-labelledby="serving-heading"
        className="mt-6 px-5 sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-4 border-y border-[#c5c9bf] bg-[#f8f7f1] py-5 lg:grid-cols-[9rem_minmax(0,1fr)]">
          <p
            id="serving-heading"
            className="text-center font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#9a6b2f] lg:text-left lg:pl-5"
          >
            Proudly serving
          </p>

          <div className="flex min-w-0 justify-center overflow-hidden">
            <ClientLogoGroup />
          </div>
        </div>
      </section>

      <section
        id="top"
        className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.65fr)] lg:items-end lg:px-10 lg:py-20"
      >
        <div className="min-w-0">
          <h1 className="mb-7 max-w-4xl font-mono text-3xl font-semibold uppercase leading-tight tracking-[0.06em] text-[#5b665d] sm:text-4xl lg:text-5xl">
            Bespoke software for scholarship and educational programs
          </h1>
          <p className="max-w-5xl text-balance text-4xl font-semibold tracking-[-0.055em] sm:text-5xl lg:text-[4.5rem] lg:leading-[0.94]">
            Control the software your program depends on.
          </p>
        </div>

        <div className="min-w-0 border-t border-[#9ea69b] pt-6">
          <p className="font-serif text-xl leading-9 text-[#405047]">
            Skip six-month vendor timelines, enterprise markups, and
            four-figure invoices for small changes. Get a platform built for
            your program, in your branding, with hosting, support, and ongoing
            improvements included. You work directly with the person who builds
            and maintains it.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-7 h-11 rounded-none bg-[#162820] px-5 font-mono text-xs uppercase tracking-[0.14em] text-white hover:bg-[#263c33]"
          >
            <a
              href="https://calendly.com/brendonjcarroll/30min"
              target="_blank"
              rel="noreferrer"
            >
              Discuss Your Program <ArrowRight />
            </a>
          </Button>
          <a
            href="#platforms"
            className="mt-5 block w-fit font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#5b665d] underline decoration-[#9ea69b] underline-offset-4 transition hover:text-[#162820]"
          >
            Explore platform types
          </a>
        </div>
      </section>

      <section
        id="platforms"
        className="technical-grid-section border-y border-[#c5c9bf] px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-8 lg:grid-cols-[0.68fr_1.32fr]">
            <div className="min-w-0">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#9a6b2f]">
                What Chapel Pines Builds
              </p>
              <h2 className="mt-4 max-w-lg text-4xl font-semibold tracking-tighter sm:text-5xl">
                Software shaped around how your program operates.
              </h2>
              <p className="mt-5 max-w-md font-serif text-lg leading-8 text-[#405047]">
                Your workflow, your brand, and the features your team needs in
                one dedicated platform. Selection software has to reflect the
                rules, timing, handoffs, and review responsibilities of your
                program. Most engagements combine more than one of these.
              </p>
            </div>

            <div className="min-w-0 border-t border-[#9ea69b]">
              {platformTypes.map((platform, index) => (
                <article
                  key={platform.title}
                  className="grid gap-5 border-b border-[#c5c9bf] py-7 lg:grid-cols-[4.5rem_1fr]"
                >
                  <p className="font-mono text-xs font-semibold text-[#687066]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
                      <div>
                        <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#9a6b2f]">
                          {platform.context}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em]">
                          {platform.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:justify-end">
                        {platform.facts.map((fact) => (
                          <span
                            key={fact}
                            className="border border-[#c5c9bf] px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[#5b665d]"
                          >
                            {fact}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="mt-5 max-w-3xl font-serif text-lg leading-8 text-[#405047]">
                      {platform.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10"
      >
        <div className="min-w-0">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#9a6b2f]">
            Engagement
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-tighter sm:text-5xl">
            What a platform costs, and what it replaces.
          </h2>
          <p className="mt-5 max-w-xl font-serif text-lg leading-8 text-[#405047]">
            Every program is different, so scope drives the number. Some start
            with a full platform. Others start with one workflow that&apos;s
            causing the most pain and expand from there. These are starting
            points. The exact figures come out of a scoping conversation, not a
            form.
          </p>
          <p className="mt-8 max-w-xl border-t border-[#9ea69b] pt-6 font-serif text-lg leading-8 text-[#405047]">
            A vendor charging $12,000 a year costs $60,000 over five years,
            before extra feature work. Chapel Pines puts that budget toward a
            platform built for one program.
          </p>
        </div>

        <div className="min-w-0">
          <div className="grid gap-px border border-[#c5c9bf] bg-[#c5c9bf] md:grid-cols-2">
            {engagementOptions.map((option) => (
              <div
                key={option.label}
                className="flex flex-col gap-4 bg-[#eef0eb] p-6"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em]">
                  {option.label}
                </h3>
                <p className="font-serif text-lg leading-8 text-[#405047]">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl border border-[#162820] bg-[#162820] text-white">
          <div className="grid gap-px bg-[#415248] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="bg-[#162820] p-6 sm:p-10 lg:p-12">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#d2a05d]">
                Work With Chapel Pines Studio
              </p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">
                Launch is the beginning, not the handoff.
              </h2>
            </div>
            <div className="bg-[#162820] p-6 sm:p-10 lg:p-12">
              <p className="font-serif text-xl leading-9 text-white/78">
                The platform carries your branding, follows your process, and
                your data stays yours. You email the person who wrote the code.
                No ticket queue, no account manager.
              </p>
              <p className="mt-5 font-serif text-sm leading-7 text-white/65">
                Most programs begin with a build and continue on an annual
                partnership. Pricing is scoped to your program. Share how your
                cycle runs, and you&apos;ll get a real number.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 h-11 w-full rounded-none bg-[#f8f7f1] px-5 font-mono text-xs uppercase tracking-[0.14em] text-[#162820] hover:bg-[#e4dfd3] sm:w-auto"
              >
                <a
                  href="https://calendly.com/brendonjcarroll/30min"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CalendarDays />
                  Schedule a Conversation
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#c5c9bf] px-5 py-8 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#687066] sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-[#162820]">Chapel Pines Studio LLC</p>
          <p>Bespoke software for scholarship and educational programs.</p>
        </div>
      </footer>
    </main>
  );
}
