import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, MapPin, Phone, ShieldCheck, Store } from "lucide-react";

const WHATSAPP_NUMBER = "919199990766";
const DISPLAY_NUMBER = "+91 91999 90766";
const PAGE_URL = "https://magency-spark-growth.lovable.app/whatsapp";

const TITLE = "WhatsApp Magency.in — Chat With Our Patna Team";
const DESCRIPTION =
  "Message Magency.in on WhatsApp Business for marketing help in Patna. Verified profile, catalogue of services, replies within 12 hours.";

export const Route = createFileRoute("/whatsapp")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
  }),
  component: WhatsAppPage,
});

const topics = [
  {
    label: "Influencer Marketing",
    message: "Hi Magency.in! I want to run an influencer campaign for my business.",
  },
  {
    label: "Meta Ads Management",
    message: "Hi Magency.in! I want to run Meta ads (Instagram/Facebook) for my business.",
  },
  {
    label: "Video Production",
    message: "Hi Magency.in! I need short and long-form videos for my business.",
  },
  {
    label: "SEO & GMB",
    message: "Hi Magency.in! I want to rank higher on Google and Maps in Patna.",
  },
  {
    label: "Website Design",
    message: "Hi Magency.in! I need a website for my business.",
  },
  {
    label: "Social Media Handling",
    message: "Hi Magency.in! I want you to handle my social media accounts.",
  },
];

const profile = [
  { icon: Store, label: "Business name", value: "Magency.in" },
  { icon: Phone, label: "WhatsApp Business", value: DISPLAY_NUMBER },
  { icon: MapPin, label: "Service area", value: "Patna, Bihar & across India" },
  { icon: Clock, label: "Hours", value: "Mon–Sat, 10:00 – 19:00 IST" },
];

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function WhatsAppPage() {
  const [business, setBusiness] = useState("");
  const [city, setCity] = useState("Patna");
  const [goal, setGoal] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Hi Magency.in! I'd like to start a conversation on WhatsApp.\n\n` +
      `Business: ${business || "—"}\n` +
      `City: ${city || "—"}\n` +
      `Goal: ${goal || "—"}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Magency.in",
      telephone: "+919199990766",
      email: "teammagency19@gmail.com",
      areaServed: "Patna, Bihar, India",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Patna",
        addressRegion: "Bihar",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+919199990766",
        availableLanguage: ["en", "hi"],
        url: `https://wa.me/${WHATSAPP_NUMBER}`,
      },
    },
  };

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-bg-light py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Official WhatsApp Business
          </p>
          <h1 className="mb-6 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Chat with Magency.in on WhatsApp.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            One number, real humans, replies within 12 hours. Send us your business name and goal —
            we'll come back with a free marketing audit.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={waLink("Hi Magency.in! I'd like a free marketing audit for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-4 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
              style={{ backgroundColor: "#25D366" }}
            >
              Open WhatsApp chat
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="text-sm font-bold text-accent transition-colors hover:text-foreground"
            >
              Or call {DISPLAY_NUMBER}
            </a>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 font-display text-2xl font-bold">Our WhatsApp Business profile</h2>
              <p className="font-bold text-muted-foreground">
                Verified details so you always know you're talking to the real Magency.in team.
              </p>
            </div>
            <div className="space-y-4">
              {profile.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-lg font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <p className="text-sm font-bold text-muted-foreground">
                We never ask for payments or OTPs over chat from any other number. Only{" "}
                {DISPLAY_NUMBER} is official.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="mb-6 font-display text-2xl font-bold">Start the chat</h2>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="wa-business" className="mb-2 block text-sm font-bold">
                    Business name
                  </label>
                  <input
                    id="wa-business"
                    required
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    placeholder="e.g. Cakeloo"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-bold outline-none transition-all focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="wa-city" className="mb-2 block text-sm font-bold">
                    City
                  </label>
                  <input
                    id="wa-city"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-bold outline-none transition-all focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="wa-goal" className="mb-2 block text-sm font-bold">
                    What do you want to grow?
                  </label>
                  <textarea
                    id="wa-goal"
                    rows={3}
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    placeholder="More walk-ins, more orders, more followers..."
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-bold outline-none transition-all focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#25D366" }}
                >
                  Send on WhatsApp
                </button>
              </form>
            </div>

            <div>
              <h2 className="mb-4 font-display text-2xl font-bold">Quick topics</h2>
              <div className="flex flex-wrap gap-3">
                {topics.map((topic) => (
                  <a
                    key={topic.label}
                    href={waLink(topic.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm font-bold transition-colors hover:border-accent hover:text-accent"
                  >
                    {topic.label}
                  </a>
                ))}
              </div>
              <p className="mt-6 text-sm font-bold text-muted-foreground">
                Prefer email or a form?{" "}
                <Link to="/contact" className="text-accent hover:underline">
                  Use the contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
