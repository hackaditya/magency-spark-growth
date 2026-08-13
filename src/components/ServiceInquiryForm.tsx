import { useState } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919199990766";

const LIMITS = { business: 100, city: 60, name: 100, goals: 800 };

export function ServiceInquiryForm({ service }: { service: string }) {
  const [business, setBusiness] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [goals, setGoals] = useState("");
  const [error, setError] = useState<string | null>(null);

  const inputClass =
    "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm font-bold text-foreground outline-none ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-ring";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const b = business.trim();
    const c = city.trim();
    const g = goals.trim();
    if (!b || !c || !g) {
      setError("Business name, city, and goals are required.");
      return;
    }
    if (
      b.length > LIMITS.business ||
      c.length > LIMITS.city ||
      g.length > LIMITS.goals ||
      name.trim().length > LIMITS.name
    ) {
      setError("Please shorten your answers a little.");
      return;
    }
    setError(null);
    const text =
      `Hi Magency.in! I'd like to inquire about ${service}.\n\n` +
      `Business: ${b}\n` +
      `City: ${c}\n` +
      (name.trim() ? `Contact person: ${name.trim()}\n` : "") +
      `Goals: ${g}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const id = service.toLowerCase().replace(/[^a-z]+/g, "-");

  return (
    <form className="space-y-3 border-t border-border pt-6" onSubmit={handleSubmit}>
      <p className="text-sm font-bold text-foreground">Inquire about {service}</p>
      <div>
        <label htmlFor={`${id}-business`} className="mb-1 block text-xs font-bold text-muted-foreground">
          Business name
        </label>
        <input
          id={`${id}-business`}
          type="text"
          required
          maxLength={LIMITS.business}
          placeholder="e.g. Cakeloo"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor={`${id}-city`} className="mb-1 block text-xs font-bold text-muted-foreground">
          City
        </label>
        <input
          id={`${id}-city`}
          type="text"
          required
          maxLength={LIMITS.city}
          placeholder="e.g. Patna"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor={`${id}-name`} className="mb-1 block text-xs font-bold text-muted-foreground">
          Your name (optional)
        </label>
        <input
          id={`${id}-name`}
          type="text"
          maxLength={LIMITS.name}
          placeholder="Contact person"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor={`${id}-goals`} className="mb-1 block text-xs font-bold text-muted-foreground">
          Your goals
        </label>
        <textarea
          id={`${id}-goals`}
          rows={3}
          required
          maxLength={LIMITS.goals}
          placeholder="What do you want to achieve?"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
          className={inputClass}
        />
      </div>
      {error && (
        <p role="alert" className="text-xs font-bold text-destructive">
          {error}
        </p>
      )}
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-brand-dark"
      >
        <MessageCircle className="h-4 w-4" />
        Send inquiry
      </button>
    </form>
  );
}
