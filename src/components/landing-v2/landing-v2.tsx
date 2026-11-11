/**
 * Landing page, v2.
 *
 * Section anchor ids (#features, #workflow, #industries, #pricing, #security,
 * #demo, #download) are kept identical to the v1 page so inbound links, nav
 * targets and SEO anchors keep working.
 *
 * Palette: single blue accent, locked across every section. Radius system:
 * cards rounded-2xl, controls rounded-xl, badges rounded-full. Nothing else.
 */
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  Check,
  Clock,
  Inbox,
  KeyRound,
  Lock,
  MessagesSquare,
  Plug,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";
import { SiInstagram, SiMessenger, SiTelegram, SiWhatsapp } from "react-icons/si";
import { Brand, PlatformLogo } from "@/components/brand";
import { Reveal } from "./reveal";

const WRAP = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

/* ── Nav ─────────────────────────────────────────────────────────────── */

const navLinks = [
  ["Features", "#features"],
  ["How it works", "#workflow"],
  ["Industries", "#industries"],
  ["Pricing", "#pricing"],
  ["Security", "#security"],
] as const;

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className={`${WRAP} flex h-[68px] items-center justify-between gap-6`}>
        <a href="#top" className="flex shrink-0 items-center gap-2 font-semibold">
          <PlatformLogo alt="" className="h-7 w-7" />
          <Brand />
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} className="transition-colors hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/login"
            className="hidden rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:translate-y-[1px]"
          >
            Start free
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ── Hero: asymmetric split ──────────────────────────────────────────── */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[30rem] w-[30rem] rounded-full bg-blue-600/10 blur-3xl"
      />
      <div className={`${WRAP} grid items-center gap-12 pt-16 pb-20 lg:grid-cols-12 lg:pt-24`}>
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-600/25 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
            <Inbox className="h-3.5 w-3.5" />
            One inbox for every channel
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
            Run sales and support where your customers already are.
          </h1>
          <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
            WACRM puts WhatsApp, Instagram, Messenger and Telegram in one shared inbox, with a CRM
            and automation behind it.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/signup"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:translate-y-[1px]"
            >
              Start free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold transition-colors hover:bg-muted active:translate-y-[1px]"
            >
              See it working
            </a>
          </div>
        </div>
        <div className="lg:col-span-6">
          {/* TODO: replace with a real product screenshot of the shared inbox
              (1600x1200). Placeholder photography until then. */}
          <img
            src="https://picsum.photos/seed/wacrm-shared-inbox-team/1600/1200"
            alt="A support team working through customer conversations"
            width={1600}
            height={1200}
            className="aspect-[4/3] w-full rounded-2xl border border-border/60 object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

/* ── Channel wall: static logo row, sits under the hero, logos only ──── */

const channels = [
  ["WhatsApp", SiWhatsapp],
  ["Instagram", SiInstagram],
  ["Messenger", SiMessenger],
  ["Telegram", SiTelegram],
] as const;

function ChannelWall() {
  return (
    <section className="border-b border-border/60 py-10">
      <div className={`${WRAP} flex flex-wrap items-center justify-center gap-x-12 gap-y-6`}>
        <p className="text-sm text-muted-foreground">Connects to</p>
        {channels.map(([name, Icon]) => (
          <Icon key={name} aria-label={name} className="h-7 w-7 text-muted-foreground" />
        ))}
      </div>
    </section>
  );
}

/* ── Features: bento, 5 items -> 5 cells ─────────────────────────────── */

const bento = [
  {
    icon: Inbox,
    title: "Shared inbox",
    body: "Every conversation from every channel in one queue, with assignment and internal notes.",
    span: "lg:col-span-7",
    tinted: true,
  },
  {
    icon: Users,
    title: "CRM built in",
    body: "Contacts, companies, leads and deals, linked to the thread they came from.",
    span: "lg:col-span-5",
  },
  {
    icon: Bot,
    title: "AI replies",
    body: "Draft answers from your own knowledge base, with handoff to a human.",
    span: "lg:col-span-5",
  },
  {
    icon: Workflow,
    title: "Automation",
    body: "Route, tag and follow up without anyone touching a keyboard.",
    span: "lg:col-span-7",
    tinted: true,
  },
  {
    icon: BarChart3,
    title: "Reporting",
    body: "Response times, resolution and revenue per channel.",
    span: "lg:col-span-12",
  },
] as const;

function Features() {
  return (
    <section id="features" className="border-b border-border/60 py-20 lg:py-28">
      <div className={WRAP}>
        <span className="text-xs font-medium tracking-[0.18em] text-blue-700 uppercase dark:text-blue-300">
          The platform
        </span>
        <h2 className="mt-3 max-w-[22ch] font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Everything the conversation needs
        </h2>
        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {bento.map((cell, i) => (
            <Reveal key={cell.title} delay={i * 0.05} className={cell.span}>
              <article
                className={`flex h-full flex-col rounded-2xl border border-border/60 p-6 ${
                  cell.tinted ? "bg-blue-50/70 dark:bg-blue-500/10" : "bg-card"
                }`}
              >
                <cell.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h3 className="mt-4 font-display text-lg font-semibold">{cell.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cell.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Workflow: vertical timeline with a connector ────────────────────── */

const steps = [
  ["Connect a channel", "Scan a QR code or paste your WhatsApp Cloud API keys."],
  ["Import your contacts", "Bring a CSV or sync from your store. Threads attach themselves."],
  ["Set the rules", "Decide who gets what, when to chase, and when AI should answer."],
  ["Watch the queue empty", "Agents work one list. Reporting tells you what it cost."],
] as const;

function HowItWorks() {
  return (
    <section id="workflow" className="border-b border-border/60 py-20 lg:py-28">
      <div className={WRAP}>
        <h2 className="max-w-[24ch] font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Live in an afternoon, not a quarter
        </h2>
        <ol className="relative mt-12 max-w-3xl">
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-[15px] w-px bg-gradient-to-b from-blue-600/50 via-blue-600/25 to-transparent"
          />
          {steps.map(([title, body], i) => (
            <Reveal key={title} delay={i * 0.06}>
              <li className="relative flex gap-5 pb-10 last:pb-0">
                <span className="z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{title}</h3>
                  <p className="mt-1 max-w-[56ch] text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ── Industries: horizontal scroll-snap ──────────────────────────────── */

const industries = [
  [
    "Retail and D2C",
    "Catalogue, carts and order updates in the thread.",
    "wacrm-retail-storefront",
  ],
  [
    "Clinics",
    "Appointment booking and reminders that people actually read.",
    "wacrm-clinic-reception",
  ],
  [
    "Education",
    "Admissions enquiries answered before the student drifts.",
    "wacrm-campus-students",
  ],
  ["Real estate", "Site visits booked from the first message.", "wacrm-property-viewing"],
  ["Logistics", "Delivery windows confirmed without a phone call.", "wacrm-delivery-depot"],
] as const;

function Industries() {
  return (
    <section id="industries" className="border-b border-border/60 py-20 lg:py-28">
      <div className={WRAP}>
        <h2 className="max-w-[24ch] font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Built for the teams that live in chat
        </h2>
      </div>
      <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8 [scrollbar-width:thin]">
        {industries.map(([title, body, seed]) => (
          <article
            key={title}
            className="w-[19rem] shrink-0 snap-start overflow-hidden rounded-2xl border border-border/60 bg-card"
          >
            <img
              src={`https://picsum.photos/seed/${seed}/720/480`}
              alt=""
              width={720}
              height={480}
              className="aspect-[3/2] w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-display font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ── Pricing: asymmetric emphasis, not three equal cards ─────────────── */

const plans = [
  {
    name: "Starter",
    price: "Free",
    note: "For one person testing the water.",
    points: ["1 channel", "500 contacts", "Shared inbox"],
    featured: false,
  },
  {
    name: "Growth",
    price: "$39",
    note: "Per workspace, per month. Unlimited seats.",
    points: ["All channels", "CRM and deals", "Automation", "AI replies"],
    featured: true,
  },
  {
    name: "Scale",
    price: "Talk to us",
    note: "SSO, audit logs and a contract.",
    points: ["Everything in Growth", "SSO and SCIM", "Priority support"],
    featured: false,
  },
] as const;

function Pricing() {
  return (
    <section id="pricing" className="border-b border-border/60 py-20 lg:py-28">
      <div className={WRAP}>
        <span className="text-xs font-medium tracking-[0.18em] text-blue-700 uppercase dark:text-blue-300">
          Pricing
        </span>
        <h2 className="mt-3 max-w-[26ch] font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Priced per workspace, not per agent
        </h2>
        <p className="mt-3 max-w-[56ch] text-muted-foreground">
          Add your whole team without the bill moving.
        </p>
        <div className="mt-12 grid items-start gap-5 lg:grid-cols-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={
                plan.featured
                  ? "rounded-2xl border-2 border-blue-600 bg-card p-7 lg:col-span-6"
                  : "rounded-2xl border border-border/60 bg-card p-7 lg:col-span-3"
              }
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
                {plan.featured ? (
                  <span className="rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                    Most picked
                  </span>
                ) : null}
              </div>
              <p className="mt-4 font-display text-3xl font-semibold tracking-tight">
                {plan.price}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">{plan.note}</p>
              <ul className="mt-6 space-y-2.5">
                {plan.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                to="/signup"
                className={
                  plan.featured
                    ? "mt-7 block rounded-xl bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition-all hover:bg-blue-700 active:translate-y-[1px]"
                    : "mt-7 block rounded-xl border border-border px-4 py-2.5 text-center text-sm font-semibold transition-colors hover:bg-muted active:translate-y-[1px]"
                }
              >
                Start free
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Security: grouped spec clusters, sparse dividers ────────────────── */

const security = [
  [
    "Tenant isolation",
    [
      ["Row level security", ShieldCheck],
      ["Per workspace data", Building2],
    ],
  ],
  [
    "Access",
    [
      ["Roles and permissions", KeyRound],
      ["Audit logs", Clock],
    ],
  ],
  [
    "Integrations",
    [
      ["Signed webhooks", Lock],
      ["Bring your own keys", Plug],
    ],
  ],
] as const;

function Security() {
  return (
    <section id="security" className="border-b border-border/60 py-20 lg:py-28">
      <div className={WRAP}>
        <h2 className="max-w-[24ch] font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Multi tenant from the first table
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {security.map(([group, rows]) => (
            <div key={group}>
              <h3 className="border-b border-border/60 pb-3 text-sm font-semibold">{group}</h3>
              <ul className="mt-4 space-y-3">
                {rows.map(([label, Icon]) => (
                  <li
                    key={label}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Closing band: #demo and #download ───────────────────────────────── */

function ClosingBand() {
  return (
    <section id="demo" className="bg-blue-600 py-20 lg:py-24">
      <div
        className={`${WRAP} flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center`}
      >
        <div>
          <h2 className="max-w-[22ch] font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Put your inbox back in one place
          </h2>
          <p className="mt-3 max-w-[48ch] text-blue-50">
            Free to start. No card, no per seat maths, no sales call.
          </p>
        </div>
        <div id="download" className="flex flex-wrap items-center gap-3">
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition-transform hover:bg-blue-50 active:translate-y-[1px]"
          >
            Start free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="/docs/index.html"
            className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 active:translate-y-[1px]"
          >
            Read the docs
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12">
      <div className={`${WRAP} flex flex-col items-center justify-between gap-4 sm:flex-row`}>
        <div className="flex items-center gap-2 text-sm font-semibold">
          <PlatformLogo alt="" className="h-6 w-6" />
          <Brand />
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <Link to="/pricing" className="transition-colors hover:text-foreground">
            Pricing
          </Link>
          <Link to="/about" className="transition-colors hover:text-foreground">
            About
          </Link>
          <a href="/docs/index.html" className="transition-colors hover:text-foreground">
            Docs
          </a>
          <Link to="/login" className="transition-colors hover:text-foreground">
            Sign in
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export function LandingV2() {
  return (
    <div className="lv2 min-h-dvh overflow-x-clip bg-background">
      <Nav />
      <main>
        <Hero />
        <ChannelWall />
        <Features />
        <HowItWorks />
        <Industries />
        <Pricing />
        <Security />
        <ClosingBand />
      </main>
      <Footer />
    </div>
  );
}
