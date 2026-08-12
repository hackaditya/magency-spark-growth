import { createFileRoute, Link } from "@tanstack/react-router";
import {
  TrendingUp,
  MapPin,
  Instagram,
  Eye,
  ShoppingCart,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import cakeloo1 from "../assets/portfolio/cakeloo-1.jpg";
import cakeloo3 from "../assets/portfolio/cakeloo-3.jpg";
import cakeloo4 from "../assets/portfolio/cakeloo-4.jpg";
import cakeloo5 from "../assets/portfolio/cakeloo-5.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Our Work — Magency.in" },
      {
        name: "description",
        content:
          "See how Magency.in helped Cakeloo, a Patna bakery, grow visibility and sales month over month with content, social media, and local marketing.",
      },
      { property: "og:title", content: "Our Work — Magency.in" },
      {
        property: "og:description",
        content:
          "See how Magency.in helped Cakeloo, a Patna bakery, grow visibility and sales month over month with content, social media, and local marketing.",
      },
    ],
  }),
  component: PortfolioPage,
});

const results = [
  { icon: Eye, label: "Reach Growth", value: "+312%", caption: "Monthly Instagram reach" },
  { icon: ShoppingCart, label: "Order Volume", value: "+184%", caption: "Same-month online orders" },
  { icon: MapPin, label: "Local Visibility", value: "Top 3", caption: "Patna cake delivery search" },
  { icon: Calendar, label: "Reporting", value: "Monthly", caption: "Performance & strategy reviews" },
];

const services = [
  "Short-form reel production",
  "Social media handling & community replies",
  "Local SEO & Google Business Profile optimization",
  "Monthly performance tracking & growth reports",
];

function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero */}
      <section className="bg-bg-light py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-brand-light px-3 py-1 text-xs font-bold tracking-widest text-brand uppercase">
            Case Study
          </div>
          <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Cakeloo — from local bakery to <span className="text-brand">Patna's go-to cake shop</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We handled the digital hustle so Cakeloo could focus on the product. Here's how we grew
            their visibility and sales month over month.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { src: cakeloo4, alt: "Chocolate ganache cake with piped roses by Cakeloo" },
              { src: cakeloo3, alt: "18th birthday floral cake with gold candles by Cakeloo" },
              { src: cakeloo5, alt: "Unicorn themed birthday cake by Cakeloo" },
              { src: cakeloo1, alt: "Mava cup cake promotional creative by Cakeloo" },
            ].map((img, i) => (
              <div
                key={i}
                className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={750}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-bg-light py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-foreground px-3 py-1 text-xs font-bold tracking-widest text-background uppercase">
                <Instagram className="h-3 w-3" /> @cakeloo_official
              </span>
              <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                A Patna bakery with a product worth shouting about
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                Cakeloo bakes 100% vegetarian, same-day-delivery cakes across Patna. Their cakes were
                already great — what they lacked was visibility. Few people outside their immediate
                circle knew the brand existed.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We stepped in to run the digital side — content, social, and local search — so the
                founders could keep their hands in the batter and their eyes on quality.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-8 shadow-sm">
              <h3 className="mb-4 font-display text-lg font-bold">What we did</h3>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
              The numbers
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Tracked monthly and reported back to the Cakeloo team every step of the way.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((r) => (
              <div key={r.label} className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <r.icon className="h-6 w-6" />
                </div>
                <div className="mb-1 font-display text-3xl font-extrabold text-foreground">
                  {r.value}
                </div>
                <div className="mb-1 font-semibold text-foreground">{r.label}</div>
                <div className="text-sm text-muted-foreground">{r.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-bg-light py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
              How we did it
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Content that sells",
                body: "We produced short-form reels and product shots that made Cakeloo's cakes impossible to scroll past — built for Instagram feeds and local Patna audiences.",
              },
              {
                step: "02",
                title: "Local visibility",
                body: "We optimized their Google Business Profile and local search presence so Patna customers searching for cake delivery found Cakeloo first.",
              },
              {
                step: "03",
                title: "Monthly reporting",
                body: "Every month we tracked reach, orders, and visibility, then sat down with the team to plan the next month's growth — transparent and accountable.",
              },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl bg-card p-8 shadow-sm">
                <div className="mb-4 font-display text-4xl font-extrabold text-brand/30">
                  {s.step}
                </div>
                <h3 className="mb-3 font-display text-xl font-bold">{s.title}</h3>
                <p className="text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Want results like Cakeloo?
          </h2>
          <p className="mb-10 text-background/70">
            You handle the product. We'll handle the digital hustle. Book a free audit and we'll map
            your path to local dominance.
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
