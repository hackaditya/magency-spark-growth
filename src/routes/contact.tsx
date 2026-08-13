import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919199990766";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Magency.in" },
      {
        name: "description",
        content:
          "Get in touch with Magency.in. Book a free marketing audit for your small business in Patna.",
      },
      { property: "og:title", content: "Contact — Magency.in" },
      {
        property: "og:description",
        content:
          "Get in touch with Magency.in. Book a free marketing audit for your small business in Patna.",
      },
      { property: "og:url", content: "https://magency-spark-growth.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://magency-spark-growth.lovable.app/contact" }],
  }),
  component: ContactPage,
});

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "teammagency19@gmail.com",
    href: "mailto:teammagency19@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 91999 90766",
    href: "tel:+919199990766",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Patna, Bihar",
    href: "#",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 12 hours",
    href: "#",
  },
];

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("General inquiry");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Hi Magency.in! I'd like to book a free audit.\n\n` +
      `Name: ${name || "—"}\n` +
      `Email: ${email || "—"}\n` +
      `Service: ${service}\n` +
      `Message: ${message || "—"}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <section className="bg-bg-light py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Let's put your business on the map.
          </h1>
          <p className="text-lg text-muted-foreground">
            Book a free 15-minute audit. We'll review your current marketing and show you exactly
            where you can win more customers.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="mb-6 font-display text-2xl font-bold">Send us a message</h2>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-bold text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-bold text-foreground outline-none ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-bold text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@business.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-bold text-foreground outline-none ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-bold text-foreground">
                    Service you're interested in
                  </label>
                  <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-bold text-foreground outline-none ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option>General inquiry</option>
                    <option>Influencer Marketing</option>
                    <option>Meta Ads Management</option>
                    <option>Video Production</option>
                    <option>SEO Strategy</option>
                    <option>GMB Optimization</option>
                    <option>Website Making</option>
                    <option>Social Media Handling</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-bold text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your business and goals..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-bold text-foreground outline-none ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-brand-dark"
                >
                  <MessageCircle className="h-4 w-4" />
                  Book My Free Audit on WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 font-display text-2xl font-bold">Contact details</h2>
                <p className="font-bold text-muted-foreground">
                  Prefer to reach out directly? Here's how you can find us.
                </p>
              </div>

              <div className="space-y-6">
                {contactDetails.map((detail) => (
                  <a
                    key={detail.label}
                    href={detail.href}
                    className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-brand/30"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand">
                      <detail.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {detail.label}
                      </p>
                      <p className="text-lg font-bold text-foreground">{detail.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-4 text-sm font-bold text-background transition-colors hover:bg-foreground/90"
              >
                <MessageCircle className="h-5 w-5" />
                Chat with us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
