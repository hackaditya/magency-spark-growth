import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Megaphone,
  Search,
  MapPin,
  Globe,
  Share2,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Target,
  Video,
} from "lucide-react";

import heroStudio from "../assets/hero-studio.jpg";
import clientCafe from "../assets/client-cafe.jpg";
import clientCosmetics from "../assets/client-cosmetics.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Magency.in — Digital Marketing for Small Businesses" },
      {
        name: "description",
        content:
          "Full-stack marketing for small businesses: influencer collaborations, SEO, GMB optimization, website design, and social media handling.",
      },
      {
        property: "og:title",
        content: "Magency.in — Digital Marketing for Small Businesses",
      },
      {
        property: "og:description",
        content:
          "Full-stack marketing for small businesses: influencer collaborations, SEO, GMB optimization, website design, and social media handling.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Megaphone,
    title: "Influencer Marketing",
    description:
      "We build end-to-end influencer marketing campaigns with creators whose audience matches your buyer — from sourcing to content to ROI tracking.",
    features: ["Creator Sourcing", "Campaign Management", "ROI Tracking"],
    color: "bg-brand-light text-brand",
  },
  {
    icon: Target,
    title: "Meta Ads Management",
    description:
      "We run and optimize your Meta ads across Facebook, Instagram, and WhatsApp — set your budget and we'll turn your videos into scroll-stopping ads that drive real visibility.",
    features: ["Budget-Based Ad Setup", "Creative & Copy", "Daily Optimization"],
    color: "bg-sky-100 text-sky-600",
  },
  {
    icon: Video,
    title: "Video Production",
    description:
      "Short-form reels and long-form storytelling videos crafted for small and medium businesses — built to convert on social feeds and ad placements.",
    features: ["Short-Form Reels", "Long-Form Videos", "Ad-Ready Edits"],
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Search,
    title: "SEO Strategy",
    description:
      "Rank higher on Google with targeted keywords, technical fixes, and content that answers what your customers are searching for.",
    features: ["Keyword Research", "On-Page SEO", "Monthly Reporting"],
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: MapPin,
    title: "GMB Optimization",
    description:
      "Rank #1 on Google Maps. We optimize your business profile so nearby customers find you before the competition.",
    features: ["Map Pack Optimization", "Review Strategy", "Local Posts"],
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Globe,
    title: "Website Making",
    description:
      "We build high-converting websites that turn curious visitors into loyal paying customers.",
    features: ["Responsive Design", "Conversion Audits", "Fast Hosting"],
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: Share2,
    title: "Social Media Handling",
    description:
      "Daily content, community management, and growth strategy across Instagram, Facebook, and more.",
    features: ["Content Calendars", "Community Replies", "Paid Ads"],
    color: "bg-rose-100 text-rose-600",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center">
          <div className="lg:w-1/2">
            <div className="mb-6 inline-flex items-center rounded-full bg-brand-light px-3 py-1 text-xs font-bold tracking-widest text-brand uppercase">
              Growth Engine for Local Brands
            </div>
            <h1 className="mb-8 font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground lg:text-7xl">
              We turn small businesses into <span className="text-brand">local giants.</span>
            </h1>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Full-stack marketing for the next generation of small businesses. From influencer
              buzz to SEO dominance, we handle the digital so you can handle the demand.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link
                to="/services"
                className="rounded-lg bg-foreground px-8 py-4 text-center font-bold text-background transition-all hover:bg-foreground/90"
              >
                View Services
              </Link>
              <div className="flex items-center space-x-3 px-4 py-4">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-muted ring-2 ring-background" />
                  <div className="h-8 w-8 rounded-full bg-muted-foreground ring-2 ring-background" />
                  <div className="h-8 w-8 rounded-full bg-border ring-2 ring-background" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  Trusted by 120+ local owners
                </span>
              </div>
            </div>
          </div>
          <div className="mt-16 lg:mt-0 lg:w-1/2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted shadow-2xl">
              <img
                src={heroStudio}
                alt="Magency.in creative team collaborating in a modern studio"
                width={1200}
                height={1400}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-bg-light py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col justify-between md:flex-row md:items-end">
            <div className="max-w-xl">
              <h2 className="mb-4 font-display text-4xl font-bold tracking-tight text-foreground">
                Everything you need to dominate your city
              </h2>
              <p className="text-muted-foreground">
                Modern problems require modern solutions. We've built a suite of services designed
                specifically for small business budgets and local market dynamics.
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl bg-card p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${service.color}`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 font-display text-xl font-bold">{service.title}</h3>
                <p className="mb-6 text-muted-foreground">{service.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media / Process Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-muted shadow-sm">
                  <img
                    src={clientCafe}
                    alt="Modern cafe interior designed for local marketing success"
                    width={800}
                    height={1000}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-8 aspect-[4/5] w-full overflow-hidden rounded-xl bg-muted shadow-sm">
                  <img
                    src={clientCosmetics}
                    alt="Premium cosmetics product photography for social media"
                    width={800}
                    height={1000}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground">
                Social media that drives revenue
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Your social media shouldn't just look good—it should drive revenue. We manage your
                presence across Instagram, TikTok, and Facebook with a focus on local engagement and
                viral hooks.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand/20">
                    <Calendar className="h-3 w-3 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Content Calendars</h4>
                    <p className="text-muted-foreground">
                      Strategically timed posts to maximize your daily reach.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand/20">
                    <MessageCircle className="h-3 w-3 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Community Management</h4>
                    <p className="text-muted-foreground">
                      We reply to every DM and comment so you don't have to.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                to="/services"
                className="mt-10 inline-block rounded-lg border-2 border-foreground px-8 py-3 font-bold text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                See Our Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-8 font-display text-4xl font-bold tracking-tight lg:text-5xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-background/70">
            Join Magency.in today and let's put your business on the map. We offer flexible packages
            tailored for the needs of local entrepreneurs.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-brand px-10 py-4 text-lg font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            Book a Free Audit
          </Link>
          <div className="mt-20 border-t border-background/10 pt-10 text-sm text-background/50">
            © {new Date().getFullYear()} Magency.in — Digital Excellence for Local Brands
          </div>
        </div>
      </section>
    </main>
  );
}
