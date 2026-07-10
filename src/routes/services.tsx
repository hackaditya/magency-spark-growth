import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Megaphone,
  Search,
  MapPin,
  Globe,
  Share2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Magency.in" },
      {
        name: "description",
        content:
          "Explore Magency.in services: influencer collaborations, SEO, GMB optimization, website making, and social media handling for small businesses.",
      },
      { property: "og:title", content: "Services — Magency.in" },
      {
        property: "og:description",
        content:
          "Explore Magency.in services: influencer collaborations, SEO, GMB optimization, website making, and social media handling for small businesses.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Megaphone,
    title: "Influencer Collaborations",
    description:
      "We partner your brand with local micro-influencers who already speak to your ideal customers. Authentic endorsements that drive real foot traffic and online buzz.",
    features: [
      "Micro-influencer sourcing",
      "Campaign brief creation",
      "Content rights management",
      "Performance analytics",
    ],
    color: "bg-brand-light text-brand",
  },
  {
    icon: Search,
    title: "SEO Strategy",
    description:
      "Get found when it matters. We optimize your site structure, content, and authority signals so you rank for the searches that bring paying customers.",
    features: [
      "Keyword research",
      "On-page optimization",
      "Technical SEO audits",
      "Monthly ranking reports",
    ],
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: MapPin,
    title: "GMB Optimization",
    description:
      "Own the local map pack. We build and optimize your Google Business Profile so nearby customers see you first—and choose you over competitors.",
    features: [
      "Profile setup & verification",
      "Local keyword targeting",
      "Review generation strategy",
      "Weekly local posts",
    ],
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Globe,
    title: "Website Making",
    description:
      "Fast, beautiful, conversion-focused websites built for small business budgets. From landing pages to full sites, we make every click count.",
    features: [
      "Custom responsive design",
      "Conversion rate optimization",
      "Speed & Core Web Vitals",
      "Ongoing maintenance",
    ],
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: Share2,
    title: "Social Media Handling",
    description:
      "We run your social presence end-to-end: strategy, content creation, scheduling, community management, and paid ads that actually convert.",
    features: [
      "Platform-specific content",
      "Daily community management",
      "Paid social campaigns",
      "Growth analytics dashboard",
    ],
    color: "bg-rose-100 text-rose-600",
  },
];

function ServicesPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero */}
      <section className="bg-bg-light py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Services built for <span className="text-brand">small business growth</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need to attract, engage, and convert local customers—without the agency
            price tag.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${service.color}`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <h2 className="mb-4 font-display text-2xl font-bold">{service.title}</h2>
                <p className="mb-6 text-muted-foreground">{service.description}</p>
                <ul className="mb-8 space-y-3 text-sm text-muted-foreground">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  Get started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Not sure which service fits you?
          </h2>
          <p className="mb-10 text-background/70">
            Book a free 15-minute audit. We'll look at your current presence and recommend the right
            mix of services for your goals.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-brand px-10 py-4 text-lg font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            Book a Free Audit
          </Link>
        </div>
      </section>
    </main>
  );
}
