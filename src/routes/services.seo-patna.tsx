import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search,
  MapPin,
  FileText,
  BarChart3,
  PenTool,
  Link2,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/services/seo-patna")({
  head: () => ({
    meta: [
      {
        title: "SEO Company in Patna — Local SEO Services for Small Businesses | Magency.in",
      },
      {
        name: "description",
        content:
          "Magency.in is an SEO company in Patna. We help small businesses rank on Google with local SEO, Google Business Profile optimization, content and clear monthly reporting.",
      },
      {
        property: "og:title",
        content: "SEO Company in Patna — Local SEO Services | Magency.in",
      },
      {
        property: "og:description",
        content:
          "Local SEO services in Patna: keyword research, on-page SEO, Google Business Profile, content and monthly ranking reports for small businesses.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://magency.in/services/seo-patna" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://magency.in/services/seo-patna" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "SEO Services in Patna",
          serviceType: "Search Engine Optimization",
          description:
            "Local SEO services in Patna for small businesses: keyword research, on-page optimization, Google Business Profile, content and reporting.",
          areaServed: "Patna, Bihar",
          url: "https://magency.in/services/seo-patna",
          provider: {
            "@type": "LocalBusiness",
            name: "Magency.in",
            url: "https://magency.in/",
            telephone: "+91-91999-90766",
            email: "teammagency19@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Patna",
              addressRegion: "Bihar",
              addressCountry: "IN",
            },
          },
        }),
      },
    ],
  }),

  component: SeoPatnaPage,
});

const deliverables = [
  {
    icon: Search,
    title: "Keyword research for Patna buyers",
    body: "We find the exact phrases customers in Patna type when they are ready to buy — not vanity keywords that never convert.",
  },
  {
    icon: FileText,
    title: "On-page optimization",
    body: "Titles, headings, page structure and content rewritten so Google clearly understands what you offer and where you offer it.",
  },
  {
    icon: MapPin,
    title: "Local SEO & Google Business Profile",
    body: "Category, service and area setup, local keywords, review strategy and regular posts so you show up in the local map pack.",
  },
  {
    icon: PenTool,
    title: "Content that answers real questions",
    body: "Service pages and articles built around what your customers actually ask, written to earn rankings and trust together.",
  },
  {
    icon: Link2,
    title: "Technical & speed fixes",
    body: "Mobile experience, page speed, indexing and sitemap health — the quiet technical work that decides whether rankings stick.",
  },
  {
    icon: BarChart3,
    title: "Monthly ranking reports",
    body: "A plain-language report every month: what moved, why it moved and what we are doing next. No jargon, no hiding.",
  },
];

const process = [
  {
    step: "01",
    title: "Free SEO audit",
    text: "We check your website, Google Business Profile and current rankings, then show you the biggest gaps in plain language.",
  },
  {
    step: "02",
    title: "Local keyword map",
    text: "We agree the searches worth winning for your business in Patna and map each one to a page or action.",
  },
  {
    step: "03",
    title: "Execution",
    text: "On-page fixes, content, profile work and technical cleanup — delivered month by month against the plan.",
  },
  {
    step: "04",
    title: "Review & adjust",
    text: "Monthly reporting shows what changed in rankings, calls and inquiries, and the plan is adjusted from real data.",
  },
];

const faqs = [
  {
    q: "How long does SEO take to show results?",
    a: "Local SEO in Patna usually shows first movement in 4–8 weeks, with stronger results building over 3–6 months. We set expectations after the free audit based on your starting point.",
  },
  {
    q: "Do you only do SEO for Patna businesses?",
    a: "Patna is our core market, which is an advantage — we know how local customers search. Suitable remote projects elsewhere in India can also be discussed.",
  },
  {
    q: "Is SEO included in the monthly packages?",
    a: "Google Business Profile setup is in the Starter package, local SEO and GMB ranking work is in Growth, and broader SEO is included in Scale. Standalone SEO projects can also be scoped.",
  },
  {
    q: "What do you need from me to start?",
    a: "Access to your website and Google Business Profile, your business goals, and approvals on the keyword map. We handle the rest.",
  },
];

function SeoPatnaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="bg-bg-light py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
            SEO services in Patna
          </div>
          <h1 className="mx-auto mb-6 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-6xl">
            SEO services in Patna that bring customers <span className="text-accent">from Google</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Magency.in is an SEO company in Patna built for small businesses. We make your business
            easier to find when nearby customers search for what you sell — and we report exactly
            what changed every month.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-accent px-8 py-4 text-lg font-bold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Book a Free Audit <ArrowRight className="ml-1 inline h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-2 py-3 text-lg font-bold text-foreground hover:text-accent"
            >
              View packages <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-accent">What's included</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Everything a local business needs to rank in Patna.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Ranking on Google in Patna is won with a handful of focused signals done consistently:
              the right keywords, clean pages, an optimized Google Business Profile and content that
              answers real customer questions.
            </p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <article key={item.title} className="bg-card p-7">
                <item.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-accent">Why local SEO</p>
              <h2 className="mt-3 text-4xl font-bold">
                Your next customer is searching right now.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                When someone in Patna searches "best cake shop near me" or "digital marketing
                company in Patna", Google shows a short list — the local map pack and the top few
                results. If your business isn't in that list, the customer calls your competitor.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Local competition in Patna is still beatable. Most businesses haven't done the
                basics properly, which makes steady, well-executed SEO one of the highest-return
                investments a small business here can make.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-2xl font-bold">How we keep it honest</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "No guaranteed #1 claims — anyone who promises that is guessing or bending the rules.",
                  "You keep full ownership of your website, profiles and data.",
                  "Monthly reports explain what moved and why, in plain language.",
                  "No long-term lock-in — monthly work can be cancelled with 15 days' notice.",
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-accent">How it works</p>
            <h2 className="mt-3 text-4xl font-bold">From audit to rankings, step by step.</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <article key={item.step} className="border-t border-border pt-6">
                <span className="text-sm font-bold text-accent">{item.step}</span>
                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase text-accent">Common questions</p>
            <h2 className="mt-3 text-4xl font-bold">Before you book, know what to expect.</h2>
          </div>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="cursor-pointer list-none pr-8 text-lg font-bold">{item.q}</summary>
                <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <TrendingUp className="mx-auto h-8 w-8" />
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            See exactly where your business stands on Google today.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-background/70">
            Book a free audit and we'll show you your current Patna rankings, what your competitors
            are doing and the fastest wins available to you.
          </p>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-9 py-4 text-lg font-bold text-accent-foreground"
          >
            Book a Free Audit <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
