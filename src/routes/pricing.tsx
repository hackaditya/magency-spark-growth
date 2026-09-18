import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Minus, ArrowRight, Info } from "lucide-react";
import { BookingForm } from "../components/BookingForm";

const packages = [
  { name: "Starter", price: "₹7,999", period: "/month", tagline: "For a new local business building a consistent digital presence.", features: ["12 social media posts per month", "Instagram + Facebook page handling", "Google Business Profile setup & optimization", "Basic monthly performance report", "WhatsApp support Mon–Sat"] },
  { name: "Growth", price: "₹14,999", period: "/month", tagline: "Best for a growing local business that needs consistent content and paid marketing.", featured: true, features: ["20 posts + 8 reels per month", "Meta ads management (ad spend separate)", "1 photo/video shoot day per month", "Local SEO & GMB ranking work", "2 influencer collaborations per month", "Detailed growth report with next steps"] },
  { name: "Scale", price: "₹24,999", period: "/month", tagline: "For an established or multi-outlet business needing broader support.", features: ["Unlimited content calendar", "Meta + Google ads management (ad spend separate)", "2 shoot days, short & long-form video", "Website design and upkeep included", "Influencer campaigns & event coverage", "Dedicated strategist and weekly review call"] },
];

const comparison = [
  { feature: "Social media", values: ["12 posts", "20 posts", "Full calendar"] },
  { feature: "Reels", values: [null, "8/month", "Short + long-form"] },
  { feature: "Ads management", values: [null, "Meta", "Meta + Google"] },
  { feature: "Shoot days", values: [null, "1/month", "2/month"] },
  { feature: "SEO / GMB", values: ["GMB setup", "Local SEO + GMB", "Included"] },
  { feature: "Website", values: [null, null, "Design + upkeep"] },
  { feature: "Dedicated strategist", values: [null, null, "Included"] },
];

const addOns = [
  { name: "Website design", price: "from ₹14,999 one-time", note: "Final price depends on page count, features and integrations." },
  { name: "Product shoot day", price: "₹6,999 per day", note: "Scope depends on products, locations and production requirements." },
  { name: "Event coverage", price: "from ₹9,999 per event", note: "Final price depends on event duration, crew and deliverables." },
  { name: "Logo & branding kit", price: "from ₹8,999", note: "Final price depends on the number of concepts and brand assets required." },
];

const faqs = [
  ["What is included in each package?", "The cards and comparison table show the included monthly deliverables. We confirm the exact working scope before starting."],
  ["Is advertising spend included?", "No. The listed price is MAGENCY's agency management fee. Your advertising budget is paid separately to Meta or Google."],
  ["Is there a long-term contract?", "No. Monthly packages have no long-term lock-in."],
  ["Can I cancel anytime?", "Yes. You can cancel a monthly package with 15 days' notice."],
  ["How long before I see results?", "Timelines depend on your starting point, offer, market and chosen channels. The audit sets realistic priorities before work begins."],
  ["Do you work outside Patna?", "Patna is our main market, and suitable remote projects elsewhere in India can be discussed."],
  ["Who manages my account?", "Your point of contact coordinates the agreed work and reporting. Scale includes a dedicated strategist and weekly review call."],
  ["How does onboarding work?", "We begin with an audit, agree the scope, collect access and brand material, then set the first delivery plan."],
  ["What do you need from me?", "We usually need your business goals, existing account access, brand assets, offer details and timely approvals."],
];

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [
    { title: "Marketing Packages & Pricing in Patna | Magency.in" },
    { name: "description", content: "Compare transparent MAGENCY monthly marketing packages from ₹7,999. See deliverables, ad-spend policy, cancellation terms and add-on scope." },
    { property: "og:title", content: "Marketing Packages & Pricing in Patna | Magency.in" },
    { property: "og:description", content: "Compare Starter, Growth and Scale packages, what is included, and what is paid separately." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "https://magency.in/pricing" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "https://magency.in/pricing" }] }),
  component: PricingPage,
});

function PricingPage() {
  return <main className="bg-background text-foreground">
    <section className="mx-auto max-w-7xl px-6 pb-14 pt-20 text-center"><p className="text-sm font-bold uppercase text-accent">Transparent pricing</p><h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold md:text-6xl">Choose the level of support your business needs.</h1><p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">Clear monthly management fees, clear deliverables and no long-term lock-in. Every engagement starts with a free audit.</p></section>

    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-8 flex items-start gap-3 rounded-lg border border-border bg-bg-light p-5 text-sm"><Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><p><strong>Agency fee vs advertising budget:</strong> package prices cover MAGENCY's management services. Any Meta or Google ad spend is paid separately to the advertising platform. Monthly packages can be cancelled with 15 days' notice.</p></div>
      <div className="grid gap-7 lg:grid-cols-3">{packages.map((p) => <article key={p.name} className={`relative flex flex-col rounded-lg border p-8 ${p.featured ? "border-accent bg-card shadow-lg" : "border-border bg-card"}`}>{p.featured && <span className="mb-4 w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-accent-foreground">Most popular</span>}<h2 className="text-2xl font-bold">{p.name}</h2><p className="mt-2 min-h-16 text-sm text-muted-foreground">{p.tagline}</p><p className="mt-5"><span className="text-4xl font-bold">{p.price}</span><span className="text-sm text-muted-foreground">{p.period}</span></p><ul className="mt-6 flex-1 space-y-3">{p.features.map((f) => <li key={f} className="flex gap-3 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{f}</li>)}</ul><a href="#book" className={`mt-8 inline-flex justify-center rounded-full px-6 py-3 font-bold ${p.featured ? "bg-accent text-accent-foreground" : "border border-border"}`}>Book {p.name}</a></article>)}</div>

      <div className="mt-20"><div className="max-w-2xl"><p className="text-sm font-bold uppercase text-accent">Compare packages</p><h2 className="mt-3 text-3xl font-bold">See the differences at a glance.</h2></div><div className="mt-8 overflow-x-auto rounded-lg border border-border"><table className="w-full min-w-[720px] border-collapse text-left"><thead className="bg-bg-light"><tr><th className="p-4">Feature</th>{packages.map(p => <th key={p.name} className={p.featured ? "p-4 text-accent" : "p-4"}>{p.name}</th>)}</tr></thead><tbody>{comparison.map(row => <tr key={row.feature} className="border-t border-border"><th className="p-4 text-sm">{row.feature}</th>{row.values.map((value, i) => <td key={`${row.feature}-${packages[i].name}`} className="p-4 text-sm text-muted-foreground">{value ? <span className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />{value}</span> : <Minus className="h-4 w-4" />}</td>)}</tr>)}</tbody></table></div></div>

      <div className="mt-20"><h2 className="text-3xl font-bold">Optional add-ons</h2><p className="mt-3 text-muted-foreground">“From” prices are starting points. We confirm a fixed quote after understanding the scope.</p><div className="mt-7 grid gap-5 sm:grid-cols-2">{addOns.map(a => <article key={a.name} className="rounded-lg border border-border bg-card p-6"><h3 className="font-bold">{a.name}</h3><p className="mt-1 text-lg font-bold text-accent">{a.price}</p><p className="mt-3 text-sm text-muted-foreground">{a.note}</p></article>)}</div></div>
    </section>

    <section className="bg-bg-light py-20"><div className="mx-auto max-w-5xl px-6"><div className="text-center"><p className="text-sm font-bold uppercase text-accent">Pricing FAQ</p><h2 className="mt-3 text-4xl font-bold">Answers before you book.</h2></div><div className="mt-10 divide-y divide-border border-y border-border">{faqs.map(([q,a]) => <details key={q} className="py-5"><summary className="cursor-pointer list-none text-lg font-bold">{q}</summary><p className="mt-3 max-w-3xl text-muted-foreground">{a}</p></details>)}</div></div></section>

    <section id="book" className="border-t border-border py-20"><div className="mx-auto max-w-3xl px-6"><h2 className="text-center text-3xl font-bold">Book a package discussion</h2><p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">Choose a package and tell us about your business. We will continue on WhatsApp and start by checking whether the package fits your needs.</p><div className="mt-10"><BookingForm packages={packages.map(p => p.name)} defaultPackage="Growth" /></div><p className="mt-6 text-center text-sm text-muted-foreground">Not ready to choose? <Link to="/contact" className="font-bold text-accent">Book a Free Audit <ArrowRight className="inline h-4 w-4" /></Link></p></div></section>
  </main>;
}
