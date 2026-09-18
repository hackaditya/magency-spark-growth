import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, CheckCircle2, Instagram, MapPin, Search, Target } from "lucide-react";
import cakeloo1 from "../assets/portfolio/cakeloo-1.jpg";
import cakeloo3 from "../assets/portfolio/cakeloo-3.jpg";
import cakeloo4 from "../assets/portfolio/cakeloo-4.jpg";
import cakeloo5 from "../assets/portfolio/cakeloo-5.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({ meta: [
    { title: "Cakeloo Marketing Case Study | Magency.in" },
    { name: "description", content: "See how Magency supported Cakeloo's content, social media and local visibility in Patna, with clearly presented reported results." },
    { property: "og:title", content: "Cakeloo Marketing Case Study | Magency.in" },
    { property: "og:description", content: "Challenge, strategy, execution and reported results from MAGENCY's work with Cakeloo in Patna." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "https://magency.in/portfolio" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "https://magency.in/portfolio" }] }),
  component: PortfolioPage,
});

const results = [
  { value: "+312%", label: "Instagram reach", note: "Reported project growth; approved timeframe pending" },
  { value: "+184%", label: "Order volume", note: "Reported project growth; baseline period pending" },
  { value: "Top 3", label: "Local visibility", note: "Reported Patna cake-delivery search position" },
];
const execution = ["Short-form reel production", "Social media handling and community replies", "Google Business Profile and local-search support", "Performance tracking and recommendations"];

function PortfolioPage() {
  return <main className="min-h-screen bg-background text-foreground">
    <section className="bg-bg-light py-20"><div className="mx-auto max-w-7xl px-6"><p className="text-sm font-bold uppercase text-accent">Our work</p><h1 className="mt-4 max-w-4xl text-5xl font-bold md:text-6xl">Client work, shown with the problem, the work and the reported outcome.</h1><p className="mt-6 max-w-2xl text-lg text-muted-foreground">We publish only approved client work. Our current featured case study is Cakeloo, a Patna bakery supported across content, social media and local visibility.</p></div></section>

    <section className="py-20"><div className="mx-auto max-w-7xl px-6"><div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"><div className="grid grid-cols-2 gap-3"><div className="aspect-[4/5] overflow-hidden rounded-lg"><img src={cakeloo4} alt="Chocolate cake photographed for Cakeloo" className="h-full w-full object-cover" /></div><div className="mt-8 aspect-[4/5] overflow-hidden rounded-lg"><img src={cakeloo3} alt="Floral celebration cake from Cakeloo" className="h-full w-full object-cover" /></div></div><div><span className="inline-flex items-center gap-2 text-sm font-bold text-accent"><Instagram className="h-4 w-4" /> @cakeloo_official</span><h2 className="mt-4 text-4xl font-bold">Cakeloo</h2><p className="mt-2 text-lg font-bold text-muted-foreground">Social media, content and local marketing · Patna</p><p className="mt-6 text-lg leading-relaxed text-muted-foreground">Cakeloo had a product worth discovering. The assignment was to strengthen digital visibility and provide ongoing performance guidance while the founders focused on product and operations.</p><a href="#cakeloo-case-study" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-bold text-accent-foreground">Read the case study <ArrowRight className="h-4 w-4" /></a></div></div></div></section>

    <section id="cakeloo-case-study" className="bg-bg-light py-24"><div className="mx-auto max-w-7xl px-6"><div className="mb-14 max-w-3xl"><p className="text-sm font-bold uppercase text-accent">Case study · Cakeloo</p><h2 className="mt-3 text-4xl font-bold">From limited discovery to a stronger local presence.</h2></div><div className="grid gap-8 lg:grid-cols-3"><article className="rounded-lg border border-border bg-card p-7"><Target className="h-6 w-6 text-accent" /><h3 className="mt-5 text-xl font-bold">Challenge</h3><p className="mt-3 text-muted-foreground">Increase awareness beyond the bakery's immediate circle and make it easier for customers in Patna to discover the brand.</p></article><article className="rounded-lg border border-border bg-card p-7"><Search className="h-6 w-6 text-accent" /><h3 className="mt-5 text-xl font-bold">Strategy</h3><p className="mt-3 text-muted-foreground">Combine product-led content, active social handling and local-search work, then use reporting to guide the next priorities.</p></article><article className="rounded-lg border border-border bg-card p-7"><BarChart3 className="h-6 w-6 text-accent" /><h3 className="mt-5 text-xl font-bold">Business objective</h3><p className="mt-3 text-muted-foreground">Build sustained visibility and support order growth while allowing the founders to stay focused on product quality.</p></article></div>
      <div className="mt-12 grid gap-12 lg:grid-cols-2"><div><h3 className="text-2xl font-bold">Execution</h3><ul className="mt-6 space-y-4">{execution.map(item => <li key={item} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />{item}</li>)}</ul></div><div><h3 className="text-2xl font-bold">Reported results</h3><div className="mt-6 space-y-5">{results.map(r => <div key={r.label} className="border-l-2 border-accent pl-5"><p className="text-3xl font-bold">{r.value}</p><p className="font-bold">{r.label}</p><p className="mt-1 text-sm text-muted-foreground">{r.note}</p></div>)}</div></div></div>
      <div className="mt-10 rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground"><strong className="text-foreground">Transparency note:</strong> These figures reflect the existing project record. Time periods, baselines and analytics screenshots will be added when client-approved supporting material is available.</div>
    </div></section>

    <section className="py-20"><div className="mx-auto max-w-7xl px-6"><h2 className="text-3xl font-bold">Selected creative work</h2><div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">{[{src:cakeloo4,alt:"Chocolate cake creative"},{src:cakeloo3,alt:"Floral birthday cake creative"},{src:cakeloo5,alt:"Unicorn cake creative"},{src:cakeloo1,alt:"Mava cup cake promotional creative"}].map(img => <div key={img.src} className="aspect-[4/5] overflow-hidden rounded-lg bg-muted"><img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" /></div>)}</div></div></section>

    <section className="border-y border-border bg-bg-light py-14"><div className="mx-auto max-w-7xl px-6"><div className="flex items-start gap-4"><MapPin className="mt-1 h-6 w-6 shrink-0 text-accent" /><div><h2 className="text-2xl font-bold">More approved work will be added here.</h2><p className="mt-2 max-w-2xl text-muted-foreground">Future projects will follow the same challenge, strategy, execution and results structure once client names, visuals and proof are approved for publication.</p></div></div></div></section>

    <section className="bg-foreground py-20 text-background"><div className="mx-auto max-w-4xl px-6 text-center"><h2 className="text-4xl font-bold">Want us to review your current digital presence?</h2><p className="mx-auto mt-5 max-w-2xl text-background/70">Book a free audit and get a practical view of your strongest opportunities.</p><Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-9 py-4 font-bold text-accent-foreground">Book a Free Audit <ArrowRight className="h-5 w-5" /></Link></div></section>
  </main>;
}
