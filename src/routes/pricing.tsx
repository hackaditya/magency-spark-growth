import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { BookingForm } from "../components/BookingForm";

const packages = [
  {
    name: "Starter",
    price: "₹7,999",
    period: "/month",
    tagline: "For new local businesses building their first digital presence.",
    features: [
      "12 social media posts per month",
      "Instagram + Facebook page handling",
      "Google Business Profile setup & optimization",
      "Basic monthly performance report",
      "WhatsApp support Mon–Sat",
    ],
  },
  {
    name: "Growth",
    price: "₹15,999",
    period: "/month",
    tagline: "Our most popular plan for shops, cafés and clinics scaling up.",
    featured: true,
    features: [
      "20 posts + 8 reels per month",
      "Meta ads management (ad spend separate)",
      "1 photo/video shoot day per month",
      "Local SEO & GMB ranking work",
      "2 influencer collaborations per month",
      "Detailed growth report with next steps",
    ],
  },
  {
    name: "Scale",
    price: "₹29,999",
    period: "/month",
    tagline: "Full-service marketing for established multi-outlet brands.",
    features: [
      "Unlimited content calendar",
      "Meta + Google ads management",
      "2 shoot days, short & long-form video",
      "Website design and upkeep included",
      "Influencer campaigns & event coverage",
      "Dedicated strategist and weekly review call",
    ],
  },
];

const addOns = [
  { name: "Website design", price: "from ₹14,999 one-time" },
  { name: "Product shoot day", price: "₹6,999 per day" },
  { name: "Event coverage", price: "from ₹9,999 per event" },
  { name: "Logo & branding kit", price: "from ₹8,999" },
];

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Packages — Magency.in Patna" },
      {
        name: "description",
        content:
          "Transparent monthly marketing packages for Patna businesses: social media, Meta ads, SEO, GMB, video and websites. Book a slot in minutes.",
      },
      { property: "og:title", content: "Pricing & Packages — Magency.in Patna" },
      {
        property: "og:description",
        content:
          "Starter, Growth and Scale marketing packages for small and medium businesses in Patna, plus add-ons and a quick booking form.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://magency.in/pricing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://magency.in/pricing" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Magency.in marketing packages",
          itemListElement: packages.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: `${p.name} marketing package`,
              areaServed: "Patna, Bihar",
              provider: { "@type": "LocalBusiness", name: "Magency.in", url: "https://magency.in/" },
              offers: {
                "@type": "Offer",
                price: p.price.replace(/[^\d]/g, ""),
                priceCurrency: "INR",
                url: "https://magency.in/pricing",
              },
            },
          })),
        }),
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <main className="bg-background">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Pricing</p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Simple packages built for Patna businesses.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg font-medium text-muted-foreground">
          No lock-in contracts, no hidden fees. Pick a package, book a slot, and we start with a free
          audit of your current presence.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-3xl border p-8 transition-shadow hover:shadow-lg ${
                p.featured
                  ? "border-accent bg-card shadow-lg shadow-accent/10"
                  : "border-border bg-card"
              }`}
            >
              {p.featured && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                  Most popular
                </span>
              )}
              <h2 className="text-2xl font-bold text-foreground">{p.name}</h2>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{p.tagline}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">{p.price}</span>
                <span className="text-sm font-medium text-muted-foreground">{p.period}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm font-medium text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                  p.featured
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                Book {p.name}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-card p-8">
          <h2 className="text-xl font-bold text-foreground">Add-ons</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {addOns.map((a) => (
              <div key={a.name} className="rounded-2xl border border-border p-5">
                <p className="text-sm font-bold text-foreground">{a.name}</p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{a.price}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm font-medium text-muted-foreground">
            Need something different?{" "}
            <Link to="/services" className="inline-flex items-center gap-1 font-semibold text-accent">
              See all services <ArrowRight className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      <section id="book" className="border-t border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Book your package
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-base font-medium text-muted-foreground">
            Fill this in and we'll continue on WhatsApp with a free audit of your business.
          </p>
          <div className="mt-10">
            <BookingForm packages={packages.map((p) => p.name)} defaultPackage="Growth" />
          </div>
        </div>
      </section>
    </main>
  );
}
