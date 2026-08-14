import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Globe,
  Gauge,
  Smartphone,
  Search,
  Palette,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  ShoppingCart,
  MapPin,
} from "lucide-react";
import { ServiceInquiryForm } from "../components/ServiceInquiryForm";
import cakelooCake from "../assets/portfolio/cakeloo-4.jpg";
import cakelooFloral from "../assets/portfolio/cakeloo-3.jpg";

export const Route = createFileRoute("/services/website-design-patna")({
  head: () => ({
    meta: [
      { title: "Website Design in Patna | Affordable Business Websites — Magency.in" },
      {
        name: "description",
        content:
          "Affordable, high-converting website design in Patna for small and medium businesses. Fast, mobile-ready, SEO-friendly sites built to turn visitors into customers.",
      },
      {
        property: "og:title",
        content: "Website Design in Patna | Affordable Business Websites — Magency.in",
      },
      {
        property: "og:description",
        content:
          "Fast, mobile-ready, SEO-friendly website design in Patna for small businesses. Built to convert visitors into customers.",
      },
      {
        property: "og:url",
        content:
          "https://magency-spark-growth.lovable.app/services/website-design-patna",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://magency-spark-growth.lovable.app/services/website-design-patna",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Website Design in Patna",
          serviceType: "Website Design",
          description:
            "Affordable, high-converting website design in Patna for small and medium businesses. Fast, mobile-ready, SEO-friendly.",
          areaServed: "Patna, Bihar",
          url: "https://magency-spark-growth.lovable.app/services/website-design-patna",
          provider: {
            "@type": "LocalBusiness",
            name: "Magency.in",
            url: "https://magency-spark-growth.lovable.app/",
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

  component: WebsiteDesignPatnaPage,
});

const features = [
  {
    icon: Gauge,
    title: "Fast & Core Web Vitals ready",
    body: "Your site loads in under two seconds. We obsess over speed because slow pages lose Patna customers on mobile data.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first design",
    body: "Most of your customers will find you on their phone. Every page is built for thumbs, taps, and small screens first.",
  },
  {
    icon: Search,
    title: "SEO-friendly structure",
    body: "Clean markup, proper headings, and local keywords built in so Google understands exactly what you offer and where.",
  },
  {
    icon: Palette,
    title: "Designed to convert",
    body: "Clear calls to action, trust signals, and layout choices that turn curious visitors into calls, DMs, and orders.",
  },
  {
    icon: ShoppingBag,
    title: "Built for local commerce",
    body: "Menu pages, order forms, WhatsApp buttons, delivery zone maps — whatever your Patna business needs to sell online.",
  },
  {
    icon: Globe,
    title: "Ongoing maintenance",
    body: "We don't disappear after launch. Updates, edits, and performance checks keep your site healthy month after month.",
  },
];

const packages = [
  {
    name: "Starter Site",
    best: "Best for new businesses",
    items: [
      "3–5 page custom website",
      "Mobile-first responsive design",
      "WhatsApp & contact buttons",
      "Basic on-page SEO setup",
      "Delivery in 5–7 days",
    ],
  },
  {
    name: "Growth Site",
    best: "Best for growing brands",
    highlight: true,
    items: [
      "Up to 10 custom pages",
      "Conversion-focused design",
      "Local SEO + Google Business sync",
      "Order / inquiry forms",
      "Speed & Core Web Vitals tuning",
      "1 month of free edits",
    ],
  },
  {
    name: "Commerce Site",
    best: "Best for online selling",
    items: [
      "Full product catalog",
      "Cart, checkout & payment links",
      "Delivery zone & pickup logic",
      "Inventory-friendly structure",
      "Advanced local SEO",
      "Ongoing maintenance",
    ],
  },
];

function WebsiteDesignPatnaPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero */}
      <section className="bg-bg-light py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-brand-light px-3 py-1 text-xs font-bold tracking-widest text-brand uppercase">
            Website Design in Patna
          </div>
          <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Websites that turn Patna visitors into <span className="text-brand">paying customers</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Affordable, fast, mobile-ready websites built for small and medium businesses in Patna.
            Designed to rank locally and convert locally — not just look pretty.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-brand px-8 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:bg-brand-dark hover:shadow-lg"
            >
              Get a free quote
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-8 py-3 text-sm font-bold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              See the Cakeloo case study <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why a website matters */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-4 font-display text-4xl font-bold tracking-tight text-foreground">
              Why your Patna business needs a real website
            </h2>
            <p className="text-lg text-muted-foreground">
              A Facebook or Instagram page isn't enough anymore. When a customer searches your name
              or "best [your service] in Patna," a proper website is what shows up on Google, builds
              trust, and lets you take orders even while you sleep.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold">{f.title}</h3>
                <p className="text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cakeloo case study link */}
      <section className="bg-bg-light py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted shadow-sm">
                <img
                  src={cakelooCake}
                  alt="Chocolate ganache cake created for Cakeloo, a Patna bakery"
                  width={600}
                  height={750}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-8 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted shadow-sm">
                <img
                  src={cakelooFloral}
                  alt="Floral birthday cake created for Cakeloo, a Patna bakery"
                  width={600}
                  height={750}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <div className="mb-4 inline-flex items-center rounded-full bg-brand-light px-3 py-1 text-xs font-bold tracking-widest text-brand uppercase">
                Real results
              </div>
              <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Cakeloo grew with a digital presence built by Magency.in
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                We didn't just build Cakeloo a website — we handled their entire digital side:
                content, social, local SEO, and performance tracking. While they focused on baking,
                we focused on visibility. The numbers speak for themselves.
              </p>
              <div className="mb-10 grid grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-1 font-display text-2xl font-extrabold text-brand">
                    <TrendingUp className="h-5 w-5" /> +312%
                  </div>
                  <p className="text-sm text-muted-foreground">Reach growth</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 font-display text-2xl font-extrabold text-brand">
                    <ShoppingCart className="h-5 w-5" /> +184%
                  </div>
                  <p className="text-sm text-muted-foreground">Order volume</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 font-display text-2xl font-extrabold text-brand">
                    <MapPin className="h-5 w-5" /> Top 3
                  </div>
                  <p className="text-sm text-muted-foreground">Patna search</p>
                </div>
              </div>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3 font-bold text-background transition-colors hover:bg-foreground/90"
              >
                Read the full Cakeloo case study <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold tracking-tight text-foreground">
              Website packages for every budget
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Transparent, small-business-friendly pricing. Pick the package that fits where you are
              today — upgrade anytime as you grow.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-xl ${
                  pkg.highlight ? "border-brand ring-2 ring-brand" : "border-border"
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-8 rounded-full bg-brand px-3 py-1 text-xs font-bold text-primary-foreground uppercase tracking-wider">
                    Most popular
                  </span>
                )}
                <h3 className="mb-1 font-display text-2xl font-bold">{pkg.name}</h3>
                <p className="mb-6 text-sm font-bold text-muted-foreground">{pkg.best}</p>
                <ul className="mb-8 space-y-3 text-sm text-muted-foreground">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link
                    to="/contact"
                    className="block rounded-lg bg-foreground px-6 py-3 text-center text-sm font-bold text-background transition-colors hover:bg-foreground/90"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <section className="bg-bg-light py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="mb-4 font-display text-4xl font-bold tracking-tight text-foreground">
                Ready for a website that actually grows your business?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Tell us about your business and what you want your website to do. We'll come back
                with a plan and a quote that fits a Patna small-business budget — no jargon, no
                pressure.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-brand" /> Free, no-obligation quote
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-brand" /> Launch in as little as 5 days
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-brand" /> Local SEO built in from day one
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <ServiceInquiryForm service="Website Design in Patna" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Not sure which package fits you?
          </h2>
          <p className="mb-10 text-background/70">
            Book a free 15-minute audit. We'll look at your current presence and recommend the
            right website approach for your goals and budget.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-lg font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            Book a Free Audit <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
