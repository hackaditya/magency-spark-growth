import { useState } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919199990766";

const LIMITS = { name: 100, business: 100, phone: 20, goals: 800 };

export function BookingForm({
  packages,
  defaultPackage,
}: {
  packages: string[];
  defaultPackage?: string;
}) {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");
  const [pkg, setPkg] = useState(defaultPackage ?? packages[0]);
  const [date, setDate] = useState("");
  const [goals, setGoals] = useState("");
  const [error, setError] = useState<string | null>(null);

  const inputClass =
    "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm font-bold text-foreground outline-none ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-ring";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const n = name.trim();
    const b = business.trim();
    const p = phone.trim();
    const g = goals.trim();
    if (!n || !b || !p) {
      setError("Name, business name and phone number are required.");
      return;
    }
    if (
      n.length > LIMITS.name ||
      b.length > LIMITS.business ||
      p.length > LIMITS.phone ||
      g.length > LIMITS.goals
    ) {
      setError("Please shorten your answers a little.");
      return;
    }
    setError(null);
    const text =
      `Hi Magency.in! I'd like to book the ${pkg} package.\n\n` +
      `Name: ${n}\n` +
      `Business: ${b}\n` +
      `Phone: ${p}\n` +
      (date ? `Preferred call date: ${date}\n` : "") +
      (g ? `Goals: ${g}` : "");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl border border-border bg-card p-8 shadow-sm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="booking-name" className="mb-1 block text-xs font-bold text-muted-foreground">
            Your name
          </label>
          <input
            id="booking-name"
            type="text"
            required
            maxLength={LIMITS.name}
            placeholder="Aditya Kumar"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="booking-business"
            className="mb-1 block text-xs font-bold text-muted-foreground"
          >
            Business name
          </label>
          <input
            id="booking-business"
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
          <label htmlFor="booking-phone" className="mb-1 block text-xs font-bold text-muted-foreground">
            Phone / WhatsApp
          </label>
          <input
            id="booking-phone"
            type="tel"
            required
            maxLength={LIMITS.phone}
            placeholder="+91 90000 00000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="booking-package"
            className="mb-1 block text-xs font-bold text-muted-foreground"
          >
            Package
          </label>
          <select
            id="booking-package"
            value={pkg}
            onChange={(e) => setPkg(e.target.value)}
            className={inputClass}
          >
            {packages.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="booking-date" className="mb-1 block text-xs font-bold text-muted-foreground">
            Preferred call date (optional)
          </label>
          <input
            id="booking-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="booking-goals" className="mb-1 block text-xs font-bold text-muted-foreground">
          What do you want to achieve? (optional)
        </label>
        <textarea
          id="booking-goals"
          rows={4}
          maxLength={LIMITS.goals}
          placeholder="More footfall, online orders, better Google ranking…"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
          className={inputClass}
        />
      </div>
      {error && (
        <p role="alert" className="text-sm font-bold text-destructive">
          {error}
        </p>
      )}
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition-colors hover:bg-accent/90"
      >
        <MessageCircle className="h-5 w-5" />
        Book my slot on WhatsApp
      </button>
      <p className="text-center text-xs font-medium text-muted-foreground">
        We reply within a few hours, Mon–Sat 10am–7pm.
      </p>
    </form>
  );
}
