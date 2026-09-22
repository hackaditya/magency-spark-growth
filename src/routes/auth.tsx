import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";

export const Route = createFileRoute("/auth")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Team Login — Magency.in" },
      {
        name: "description",
        content: "Sign in to the Magency.in team area to review and manage free-audit leads.",
      },
      { property: "og:title", content: "Team Login — Magency.in" },
      {
        property: "og:description",
        content: "Sign in to the Magency.in team area to review and manage free-audit leads.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

const inputClass =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-bold text-foreground outline-none transition-all focus-visible:ring-2 focus-visible:ring-ring";

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setInfo(null);

    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setBusy(false);
      if (error) {
        setError(error.message);
        return;
      }
      navigate({ to: "/leads" });
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/leads`,
        data: { full_name: fullName },
      },
    });
    setBusy(false);
    if (error) {
      setError(error.message);
      return;
    }
    if (data.session) {
      navigate({ to: "/leads" });
      return;
    }
    setInfo("Check your inbox and confirm your email address, then sign in.");
  };

  const handleGoogle = async () => {
    setError(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setError("Google sign-in did not work. Please try again.");
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/leads" });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-bg-light px-6 py-24 font-sans text-foreground">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm">
        <h1 className="font-display text-3xl font-bold tracking-tight">
          {mode === "signin" ? "Team login" : "Create your team account"}
        </h1>
        <p className="mt-2 text-sm font-bold text-muted-foreground">
          Internal area for the Magency.in team to review free-audit requests.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          {mode === "signup" && (
            <div>
              <label htmlFor="auth-name" className="mb-2 block text-sm font-bold">
                Your name
              </label>
              <input
                id="auth-name"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={inputClass}
                placeholder="Aditya Gaurav"
              />
            </div>
          )}
          <div>
            <label htmlFor="auth-email" className="mb-2 block text-sm font-bold">
              Email
            </label>
            <input
              id="auth-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              placeholder="you@magency.in"
            />
          </div>
          <div>
            <label htmlFor="auth-password" className="mb-2 block text-sm font-bold">
              Password
            </label>
            <input
              id="auth-password"
              type="password"
              required
              minLength={6}
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p role="alert" className="text-sm font-bold text-destructive">
              {error}
            </p>
          )}
          {info && <p className="text-sm font-bold text-accent">{info}</p>}

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-lg bg-brand px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-brand-dark disabled:opacity-60"
          >
            {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          <span className="h-px flex-1 bg-border" />
          or
          <span className="h-px flex-1 bg-border" />
        </div>

        <button
          type="button"
          onClick={handleGoogle}
          className="w-full rounded-lg border border-border bg-background px-8 py-4 text-sm font-bold transition-colors hover:bg-bg-light"
        >
          Continue with Google
        </button>

        <button
          type="button"
          onClick={() => {
            setMode(mode === "signin" ? "signup" : "signin");
            setError(null);
            setInfo(null);
          }}
          className="mt-6 w-full text-sm font-bold text-accent hover:underline"
        >
          {mode === "signin"
            ? "Need an account? Create one"
            : "Already have an account? Sign in"}
        </button>
      </div>
    </main>
  );
}
