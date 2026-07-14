import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Magency.in" },
      {
        name: "description",
        content:
          "Get in touch with Magency.in. Book a free marketing audit for your small business.",
      },
      { property: "og:title", content: "Contact — Magency.in" },
      {
        property: "og:description",
        content:
          "Get in touch with Magency.in. Book a free marketing audit for your small business.",
      },
    ],
  }),
  component: ContactPage,
});

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@magency.in",
    href: "mailto:hello@magency.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 96606 90765",
    href: "tel:+919660690765",
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
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@business.com"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-foreground">
                    Service you're interested in
                  </label>
                  <select
                    id="service"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option>General inquiry</option>
                    <option>Influencer Collaborations</option>
                    <option>SEO Strategy</option>
                    <option>GMB Optimization</option>
                    <option>Website Making</option>
                    <option>Social Media Handling</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your business and goals..."
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-brand px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-brand-dark"
                >
                  Book My Free Audit
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 font-display text-2xl font-bold">Contact details</h2>
                <p className="text-muted-foreground">
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
