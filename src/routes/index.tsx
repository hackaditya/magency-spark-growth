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
  Handshake,
  Wallet,
  FileBarChart,
} from "lucide-react";

import heroStudio from "../assets/hero-studio.jpg";

import clientCafe from "../assets/client-cafe.jpg";
import clientCosmetics from "../assets/client-cosmetics.jpg";
import cakelooCake from "../assets/portfolio/cakeloo-4.jpg";
import cakelooFloral from "../assets/portfolio/cakeloo-3.jpg";
import { Instagram, TrendingUp, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digital Marketing Agency in Patna | Magency.in" },
      {
        name: "description",
        content:
          "Patna digital marketing agency for small businesses: influencer marketing, Meta ads, video, SEO, GMB and social media management.",
      },
      {
        property: "og:title",
        content: "Digital Marketing Agency in Patna | Magency.in",
      },
      {
        property: "og:description",
        content:
          "Grow your Patna business with influencer marketing, Meta ads, video, SEO, GMB and social media handled end-to-end.",
      },
      { property: "og:url", content: "https://magency-spark-growth.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://magency-spark-growth.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Magency.in",
          description:
            "Digital marketing agency in Patna for small and medium businesses.",
          url: "https://magency-spark-growth.lovable.app/",
          telephone: "+91-91999-90766",
          email: "teammagency19@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Patna",
            addressRegion: "Bihar",
            addressCountry: "IN",
          },
          areaServed: "Patna, Bihar",
          sameAs: ["https://instagram.com/magency.in"],
        }),
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

const whyMagency = [
  {
    icon: Handshake,
    title: "You make, we market",
    description:
      "You focus on the product. We own the digital hustle — content, ads, social, and local visibility.",
  },
  {
    icon: MapPin,
    title: "Local-first",
    description:
      "We know Patna. Our campaigns are tuned to local audiences, search behavior, and delivery zones.",
  },
  {
    icon: FileBarChart,
    title: "Transparent reporting",
    description:
      "Monthly reports on reach, orders, and visibility. No black boxes — just clear numbers and next steps.",
  },
  {
    icon: Wallet,
    title: "Small-business budgets",
    description:
      "Agency-grade work priced for small and medium businesses. Flexible packages, no lock-in.",
  },
];

const testimonials = [
  {
    quote:
      "Magency took over our social and local search and our orders kept climbing every month. We finally had the space to focus on baking.",
    name: "Cakeloo",
    role: "Patna bakery — @cakeloo_official",
    initial: "C",
  },
  {
    quote:
      "They turned our reels into real footfall. The monthly reports showed exactly what was working and what to fix next.",
    name: "Patna Café Owner",
    role: "F&B, Patna",
    initial: "P",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-tight text-accent">
                Growth Agency for Patna SMBs
              </p>
              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl">
                Scale your business with <span className="text-accent">Magency</span> precision.
              </h1>
              <p className="max-w-lg text-xl leading-relaxed text-muted-foreground">
                High-impact digital marketing strategies designed specifically for Patna&rsquo;s
                emerging and established businesses.
              </p>
            </div>

            {/* Service Highlights — scannable */}
            <div className="flex flex-wrap gap-2">
              {[
                "Influencer Marketing",
                "Meta Ads",
                "Video Production",
                "SEO & GMB",
                "Website Design",
                "Social Media",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground"
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Primary + Secondary CTA */}
            <div className="flex flex-col items-start gap-5 pt-2 sm:flex-row sm:items-center sm:gap-6">
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-colors hover:bg-accent/90"
              >
                View Services
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-1 text-lg font-semibold text-accent transition-opacity hover:opacity-80"
              >
                Start Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <p className="text-sm italic text-muted-foreground">
              Trusted by local businesses across Bihar
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted shadow-2xl">
              <img
                src={heroStudio}
                alt="Magency.in creative team collaborating in a modern studio in Patna"
                width={1200}
                height={1500}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>

            {/* Stats Card Overlay */}
            <div className="absolute -bottom-6 -left-6 max-w-[240px] rounded-2xl border border-white/40 bg-card/80 p-6 shadow-2xl backdrop-blur-xl md:-left-12">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <span className="font-display text-2xl font-bold text-foreground">+312%</span>
              </div>
              <p className="text-sm leading-tight text-muted-foreground">
                Average campaign reach growth for our Patna retail partners.
              </p>
            </div>

            {/* Floating Badge */}
            <div className="absolute -right-4 top-12 hidden rounded-xl bg-foreground p-4 text-background shadow-lg sm:block">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-xs font-medium tracking-wide">Live Campaign Tracking</span>
              </div>
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

      {/* Portfolio / Case Study Section */}
      <section className="bg-bg-light py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-brand-light px-3 py-1 text-xs font-bold tracking-widest text-brand uppercase">
              Featured Work
            </div>
            <h2 className="mb-4 font-display text-4xl font-bold tracking-tight text-foreground">
              Real growth for real businesses
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              We helped Cakeloo, a Patna bakery, turn great cakes into city-wide demand.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted shadow-sm">
                <img
                  src={cakelooCake}
                  alt="Chocolate ganache cake created for Cakeloo, Patna"
                  width={600}
                  height={750}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-8 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted shadow-sm">
                <img
                  src={cakelooFloral}
                  alt="Floral birthday cake created for Cakeloo, Patna"
                  width={600}
                  height={750}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-foreground px-3 py-1 text-xs font-bold tracking-widest text-background uppercase">
                <Instagram className="h-3 w-3" /> @cakeloo_official
              </span>
              <h3 className="mb-6 font-display text-3xl font-bold tracking-tight text-foreground">
                Cakeloo — Patna's go-to cake shop
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                We took over Cakeloo's digital side — content, social, and local visibility — so the
                founders could focus on the product. The result: steady, month-over-month growth in
                reach and orders.
              </p>
              <div className="mb-10 grid grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-1 font-display text-2xl font-extrabold text-brand">
                    <TrendingUp className="h-5 w-5" /> +312%
                  </div>
                  <p className="text-sm text-muted-foreground">Reach growth</p>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-brand">+184%</div>
                  <p className="text-sm text-muted-foreground">Order volume</p>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-brand">Top 3</div>
                  <p className="text-sm text-muted-foreground">Patna search</p>
                </div>
              </div>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3 font-bold text-background transition-colors hover:bg-foreground/90"
              >
                Read the case study <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Magency */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-4 font-display text-4xl font-bold tracking-tight text-foreground">
              Why local brands choose Magency.in
            </h2>
            <p className="text-muted-foreground">
              You make great products. We make sure Patna knows about them. Here's what sets us apart.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyMagency.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-bg-light py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold tracking-tight text-foreground">
              What our partners say
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Results we're proud of — and the people behind them.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <blockquote className="mb-6 text-lg leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light font-display text-lg font-bold text-brand">
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
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
