import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Heart, TrendingUp, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Magency.in" },
      {
        name: "description",
        content:
          "Learn about Magency.in, the marketing agency helping small businesses grow through influencer marketing, SEO, GMB, websites, and social media.",
      },
      { property: "og:title", content: "About — Magency.in" },
      {
        property: "og:description",
        content:
          "Learn about Magency.in, the marketing agency helping small businesses grow through influencer marketing, SEO, GMB, websites, and social media.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Target,
    title: "Local First",
    description: "We believe the best growth happens in your own neighborhood.",
  },
  {
    icon: Heart,
    title: "Small Business DNA",
    description: "We design every package around real small business budgets and timelines.",
  },
  {
    icon: TrendingUp,
    title: "Results Obsessed",
    description: "Likes are nice. Revenue is better. We optimize for what moves the needle.",
  },
  {
    icon: Users,
    title: "Human Partnership",
    description: "You get a dedicated strategist, not a black-box dashboard.",
  },
];

function AboutPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <section className="bg-bg-light py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Built for the businesses that make cities feel like home.
          </h1>
          <p className="text-lg text-muted-foreground">
            Magency.in is a digital marketing agency built exclusively for small businesses. We
            started because we saw local owners with great products get buried by bigger brands with
            bigger budgets. Our mission is simple: give small businesses the modern marketing muscle
            they deserve.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold tracking-tight">Our values</h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              The principles that guide every campaign we run.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl bg-card p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground py-20 text-background">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Ready to grow together?
          </h2>
          <p className="mb-10 text-background/70">
            Let's talk about where your business is today and where you want it to be tomorrow.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-brand px-10 py-4 text-lg font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
