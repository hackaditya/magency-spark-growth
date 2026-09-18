import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileSearch,
  Globe,
  MapPin,
  Megaphone,
  MessageCircle,
  Search,
  Target,
  Video,
} from "lucide-react";
import heroStudio from "../assets/hero-studio.jpg";
import cakelooCake from "../assets/portfolio/cakeloo-4.jpg";
import founderPhoto from "../assets/aditya-gaurav-founder.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digital Marketing for Patna Businesses | Magency.in" },
      { name: "description", content: "Magency.in helps Patna businesses gain measurable visibility, inquiries and customers through content, ads, SEO, Google Maps and websites." },
      { property: "og:title", content: "Digital Marketing for Patna Businesses | Magency.in" },
      { property: "og:description", content: "Local marketing focused on measurable visibility, inquiries and customers for businesses in Patna." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://magency.in/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://magency.in/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "LocalBusiness", name: "Magency.in",
        description: "Digital marketing agency for businesses in Patna.", url: "https://magency.in/",
        telephone: "+91-91999-90766", email: "teammagency19@gmail.com",
        address: { "@type": "PostalAddress", addressLocality: "Patna", addressRegion: "Bihar", addressCountry: "IN" },
        areaServed: "Patna, Bihar", sameAs: ["https://instagram.com/magency.in"],
      }),
    }],
  }),
  component: HomePage,
});

const services = [
  { icon: MessageCircle, title: "Social Media", outcome: "Build a consistent presence that earns attention, trust and customer conversations." },
  { icon: Target, title: "Performance Marketing", outcome: "Turn advertising budgets into focused campaigns built around qualified leads and sales." },
  { icon: Search, title: "SEO", outcome: "Help customers discover your business when they are actively searching for what you offer." },
  { icon: MapPin, title: "Google Business Profile", outcome: "Improve local discovery so nearby customers can find, call and visit your business." },
  { icon: Megaphone, title: "Influencer Marketing", outcome: "Reach relevant audiences through creator partnerships planned around business goals." },
  { icon: Video, title: "Video Production", outcome: "Create short and long-form videos that explain, demonstrate and sell your offer." },
  { icon: Globe, title: "Website Development", outcome: "Give prospects a fast, credible place to understand your business and take action." },
];

const process = [
  { step: "01", title: "Free audit", text: "We review your current digital presence and identify the biggest gaps and opportunities." },
  { step: "02", title: "Focused strategy", text: "We recommend the channels, priorities and package that make sense for your goals and budget." },
  { step: "03", title: "Execution", text: "We deliver the agreed content, campaigns, local search work or website improvements." },
  { step: "04", title: "Reporting & optimization", text: "We review performance, explain what changed and improve the next cycle." },
];

const faqs = [
  { q: "Is advertising spend included?", a: "No. Package prices cover MAGENCY's management work. Ad spend is paid separately to Meta or Google." },
  { q: "Do I need a long contract?", a: "No. Monthly services have no long-term lock-in and can be cancelled with 15 days' notice." },
  { q: "Do you only work in Patna?", a: "Patna is our core market. We can also discuss suitable remote projects elsewhere in India." },
  { q: "What happens after I book an audit?", a: "We review your current presence, discuss your goals, and share practical priorities and next steps." },
];

function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div>
            <p className="mb-5 text-sm font-bold uppercase text-accent">Digital marketing for Patna businesses</p>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.03] text-foreground md:text-7xl">
              Turn local visibility into <span className="text-accent">real business growth.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">
              MAGENCY helps emerging and established businesses attract more attention, inquiries and customers through content, ads, search and websites.
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-bold text-accent-foreground transition-opacity hover:opacity-90">
                Book a Free Audit <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 px-2 py-3 text-lg font-bold text-foreground hover:text-accent">
                View Our Work <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Packages from ₹7,999/month</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> No long-term lock-in</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Monthly reporting</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-muted shadow-xl">
              <img src={heroStudio} alt="Magency creative team planning a marketing campaign" width={1200} height={1500} className="h-full w-full object-cover" loading="eager" />
            </div>
            <div className="absolute -bottom-5 left-4 right-4 rounded-lg border border-border bg-card/95 p-5 shadow-xl backdrop-blur md:left-[-2rem] md:right-auto md:max-w-xs">
              <p className="text-xs font-bold uppercase text-accent">Our focus</p>
              <p className="mt-1 text-lg font-bold">Clear work. Clear reporting. Better decisions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-bg-light py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 md:flex-row md:items-center md:justify-between">
          <div><p className="text-sm font-bold uppercase text-accent">Featured client work</p><p className="mt-1 text-2xl font-bold">Cakeloo, Patna</p></div>
          <p className="max-w-xl text-muted-foreground">Content, social media and local visibility support designed to help the bakery focus on its products while MAGENCY handled its digital presence.</p>
          <Link to="/portfolio" className="inline-flex items-center gap-2 font-bold text-accent">See the case study <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl"><p className="text-sm font-bold uppercase text-accent">Services</p><h2 className="mt-3 text-4xl font-bold md:text-5xl">Marketing built around business outcomes.</h2><p className="mt-5 text-lg text-muted-foreground">Choose the support you need to become easier to find, more credible online and more effective at turning attention into inquiries.</p></div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => <article key={service.title} className="bg-card p-7"><service.icon className="h-6 w-6 text-accent" /><h3 className="mt-5 text-xl font-bold">{service.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{service.outcome}</p></article>)}
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-6"><Link to="/services" className="inline-flex items-center gap-2 font-bold text-accent">Explore all services <ArrowRight className="h-4 w-4" /></Link><Link to="/pricing" className="inline-flex items-center gap-2 font-bold text-foreground">View pricing <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section className="bg-bg-light py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted"><img src={cakelooCake} alt="Cakeloo cake featured in Magency's client work" width={900} height={675} className="h-full w-full object-cover" loading="lazy" /></div>
          <div><p className="text-sm font-bold uppercase text-accent">Available proof</p><h2 className="mt-3 text-4xl font-bold">Helping Cakeloo strengthen its digital visibility in Patna.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">MAGENCY supported Cakeloo with content, social media and local marketing while tracking performance and sharing regular recommendations.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3"><div className="border-l-2 border-accent pl-4"><p className="text-2xl font-bold">+312%</p><p className="text-sm text-muted-foreground">Reported reach growth</p></div><div className="border-l-2 border-accent pl-4"><p className="text-2xl font-bold">+184%</p><p className="text-sm text-muted-foreground">Reported order growth</p></div><div className="border-l-2 border-accent pl-4"><p className="text-2xl font-bold">Top 3</p><p className="text-sm text-muted-foreground">Reported local search position</p></div></div>
            <p className="mt-5 text-sm text-muted-foreground">Figures are from the existing Cakeloo project record. Supporting time periods and analytics will be added when approved.</p>
            <Link to="/portfolio" className="mt-8 inline-flex items-center gap-2 font-bold text-accent">Read the full case study <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="py-24"><div className="mx-auto max-w-7xl px-6"><div className="max-w-2xl"><p className="text-sm font-bold uppercase text-accent">How it works</p><h2 className="mt-3 text-4xl font-bold">A clear path from audit to improvement.</h2></div><div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">{process.map((item) => <article key={item.step} className="border-t border-border pt-6"><span className="text-sm font-bold text-accent">{item.step}</span><h3 className="mt-4 text-xl font-bold">{item.title}</h3><p className="mt-3 text-muted-foreground">{item.text}</p></article>)}</div></div></section>

      <section className="bg-bg-light py-24"><div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"><div className="mx-auto h-56 w-56 overflow-hidden rounded-full border border-border bg-card"><img src={founderPhoto.url} alt="Aditya Gaurav, founder of Magency.in" width={448} height={448} className="h-full w-full object-cover" loading="lazy" /></div><div><p className="text-sm font-bold uppercase text-accent">Who is behind MAGENCY</p><h2 className="mt-3 text-4xl font-bold">Aditya Gaurav <span className="block text-2xl text-muted-foreground">Founder</span></h2><p className="mt-6 text-lg leading-relaxed text-muted-foreground">MAGENCY was started to make practical digital marketing more accessible to local businesses. The approach is simple: understand the business, choose the right channels, execute clearly and report what is happening.</p><div className="mt-7 flex flex-wrap gap-5 text-sm font-bold"><span>Patna, Bihar</span><a href="tel:+919199990766" className="text-accent">+91 91999 90766</a><a href="mailto:teammagency19@gmail.com" className="text-accent">teammagency19@gmail.com</a></div></div></div></section>

      <section className="py-24"><div className="mx-auto max-w-5xl px-6"><div className="text-center"><p className="text-sm font-bold uppercase text-accent">Common questions</p><h2 className="mt-3 text-4xl font-bold">Know what to expect before we talk.</h2></div><div className="mt-12 divide-y divide-border border-y border-border">{faqs.map((item) => <details key={item.q} className="group py-5"><summary className="cursor-pointer list-none pr-8 text-lg font-bold">{item.q}</summary><p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{item.a}</p></details>)}</div><div className="mt-8 text-center"><Link to="/pricing" className="inline-flex items-center gap-2 font-bold text-accent">See packages and all pricing FAQs <ArrowRight className="h-4 w-4" /></Link></div></div></section>

      <section className="bg-foreground py-20 text-background"><div className="mx-auto max-w-4xl px-6 text-center"><FileSearch className="mx-auto h-8 w-8" /><h2 className="mt-5 text-4xl font-bold md:text-5xl">Not sure what your business actually needs?</h2><p className="mx-auto mt-5 max-w-2xl text-lg text-background/70">Book a free audit and we'll show you the biggest opportunities we see in your current digital presence.</p><Link to="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-9 py-4 text-lg font-bold text-accent-foreground">Book a Free Audit <ArrowRight className="h-5 w-5" /></Link></div></section>
    </main>
  );
}
