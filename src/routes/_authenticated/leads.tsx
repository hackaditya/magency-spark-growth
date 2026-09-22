import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { LEAD_STAGES, STAGE_LABELS, type LeadStage } from "@/lib/leads";
import { LogOut, RefreshCw, StickyNote } from "lucide-react";

export const Route = createFileRoute("/_authenticated/leads")({
  head: () => ({
    meta: [
      { title: "Lead Dashboard — Magency.in" },
      {
        name: "description",
        content: "Internal dashboard to review free-audit leads, stages, owners and follow-ups.",
      },
      { property: "og:title", content: "Lead Dashboard — Magency.in" },
      {
        property: "og:description",
        content: "Internal dashboard to review free-audit leads, stages, owners and follow-ups.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LeadsDashboard,
});

type Lead = {
  id: string;
  name: string;
  business_name: string | null;
  city: string | null;
  phone: string | null;
  email: string | null;
  service: string | null;
  goals: string | null;
  source: string;
  stage: string;
  owner_name: string | null;
  created_at: string;
};

type Note = {
  id: string;
  lead_id: string;
  body: string;
  author_name: string | null;
  created_at: string;
};

const inputClass =
  "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-bold text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring";

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function LeadsDashboard() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [stageFilter, setStageFilter] = useState<"all" | LeadStage>("all");
  const [search, setSearch] = useState("");
  const [openLeadId, setOpenLeadId] = useState<string | null>(null);
  const [me, setMe] = useState<{ email: string; name: string } | null>(null);

  useEffect(() => {
    void supabase.auth.getUser().then(({ data }) => {
      if (!data.user) return;
      const metaName = (data.user.user_metadata as { full_name?: string })?.full_name;
      setMe({ email: data.user.email ?? "", name: metaName || data.user.email || "Team" });
    });
  }, []);

  const leadsQuery = useQuery({
    queryKey: ["leads"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as Lead[];
    },
  });

  const updateLead = useMutation({
    mutationFn: async ({ id, patch }: { id: string; patch: Partial<Lead> }) => {
      const { error } = await supabase.from("leads").update(patch).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["leads"] }),
  });

  const leads = leadsQuery.data ?? [];

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return leads.filter((lead) => {
      if (stageFilter !== "all" && lead.stage !== stageFilter) return false;
      if (!term) return true;
      return [lead.name, lead.business_name, lead.city, lead.phone, lead.email, lead.service]
        .filter(Boolean)
        .some((field) => String(field).toLowerCase().includes(term));
    });
  }, [leads, stageFilter, search]);

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    leads.forEach((lead) => map.set(lead.stage, (map.get(lead.stage) ?? 0) + 1));
    return map;
  }, [leads]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    queryClient.clear();
    navigate({ to: "/auth" });
  };

  return (
    <main className="min-h-screen bg-bg-light font-sans text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-accent">Internal</p>
            <h1 className="mt-2 font-display text-4xl font-bold tracking-tight">Lead dashboard</h1>
            <p className="mt-2 text-sm font-bold text-muted-foreground">
              {me ? `Signed in as ${me.email}` : "Loading your account…"}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => leadsQuery.refetch()}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-bold transition-colors hover:bg-background"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </button>
            <button
              type="button"
              onClick={handleSignOut}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-bold transition-colors hover:bg-background"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {LEAD_STAGES.map((stage) => (
            <button
              key={stage}
              type="button"
              onClick={() => setStageFilter(stageFilter === stage ? "all" : stage)}
              className={`rounded-xl border p-4 text-left transition-colors ${
                stageFilter === stage
                  ? "border-accent bg-card"
                  : "border-border bg-card hover:border-accent/40"
              }`}
            >
              <p className="text-2xl font-bold">{counts.get(stage) ?? 0}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {STAGE_LABELS[stage]}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, business, city, phone…"
            className="max-w-sm flex-1 rounded-lg border border-input bg-card px-4 py-2.5 text-sm font-bold outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
          {stageFilter !== "all" && (
            <button
              type="button"
              onClick={() => setStageFilter("all")}
              className="text-sm font-bold text-accent hover:underline"
            >
              Clear stage filter ({STAGE_LABELS[stageFilter]})
            </button>
          )}
        </div>

        <div className="mt-6 space-y-4">
          {leadsQuery.isLoading && (
            <p className="rounded-xl border border-border bg-card p-8 text-sm font-bold text-muted-foreground">
              Loading leads…
            </p>
          )}
          {leadsQuery.isError && (
            <p className="rounded-xl border border-destructive/40 bg-card p-8 text-sm font-bold text-destructive">
              Could not load leads. Try Refresh.
            </p>
          )}
          {!leadsQuery.isLoading && filtered.length === 0 && (
            <p className="rounded-xl border border-border bg-card p-8 text-sm font-bold text-muted-foreground">
              No leads here yet. New free-audit requests from the website will appear
              automatically.
            </p>
          )}

          {filtered.map((lead) => (
            <article key={lead.id} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl font-bold">
                    {lead.business_name || lead.name}
                  </h2>
                  <p className="mt-1 text-sm font-bold text-muted-foreground">
                    {lead.name}
                    {lead.city ? ` · ${lead.city}` : ""} · {formatDate(lead.created_at)} ·{" "}
                    {lead.source}
                  </p>
                  <p className="mt-2 text-sm font-bold">
                    {lead.phone && (
                      <a href={`tel:${lead.phone}`} className="text-accent hover:underline">
                        {lead.phone}
                      </a>
                    )}
                    {lead.phone && lead.email ? " · " : ""}
                    {lead.email && (
                      <a href={`mailto:${lead.email}`} className="text-accent hover:underline">
                        {lead.email}
                      </a>
                    )}
                  </p>
                  {lead.service && (
                    <p className="mt-2 text-sm font-bold text-muted-foreground">
                      Interested in: {lead.service}
                    </p>
                  )}
                  {lead.goals && (
                    <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{lead.goals}</p>
                  )}
                  {lead.phone && (
                    <a
                      href={`https://wa.me/${lead.phone.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-bold text-accent hover:underline"
                    >
                      Message on WhatsApp
                    </a>
                  )}
                </div>

                <div className="grid w-full max-w-xs gap-3">
                  <div>
                    <label
                      htmlFor={`stage-${lead.id}`}
                      className="mb-1 block text-xs font-bold uppercase tracking-wider text-muted-foreground"
                    >
                      Stage
                    </label>
                    <select
                      id={`stage-${lead.id}`}
                      value={lead.stage}
                      onChange={(e) =>
                        updateLead.mutate({ id: lead.id, patch: { stage: e.target.value } })
                      }
                      className={inputClass}
                    >
                      {LEAD_STAGES.map((stage) => (
                        <option key={stage} value={stage}>
                          {STAGE_LABELS[stage]}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor={`owner-${lead.id}`}
                      className="mb-1 block text-xs font-bold uppercase tracking-wider text-muted-foreground"
                    >
                      Owner
                    </label>
                    <div className="flex gap-2">
                      <input
                        id={`owner-${lead.id}`}
                        defaultValue={lead.owner_name ?? ""}
                        placeholder="Unassigned"
                        onBlur={(e) => {
                          const value = e.target.value.trim();
                          if (value === (lead.owner_name ?? "")) return;
                          updateLead.mutate({
                            id: lead.id,
                            patch: { owner_name: value || null },
                          });
                        }}
                        className={inputClass}
                      />
                      {me && (
                        <button
                          type="button"
                          onClick={() =>
                            updateLead.mutate({ id: lead.id, patch: { owner_name: me.name } })
                          }
                          className="whitespace-nowrap rounded-lg border border-border px-3 py-2 text-xs font-bold transition-colors hover:bg-bg-light"
                        >
                          Take
                        </button>
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpenLeadId(openLeadId === lead.id ? null : lead.id)}
                    className="flex items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-brand-dark"
                  >
                    <StickyNote className="h-4 w-4" />
                    {openLeadId === lead.id ? "Hide follow-ups" : "Follow-up notes"}
                  </button>
                </div>
              </div>

              {openLeadId === lead.id && <LeadNotes leadId={lead.id} authorName={me?.name ?? null} />}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

function LeadNotes({ leadId, authorName }: { leadId: string; authorName: string | null }) {
  const queryClient = useQueryClient();
  const [body, setBody] = useState("");

  const notesQuery = useQuery({
    queryKey: ["lead-notes", leadId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("lead_notes")
        .select("*")
        .eq("lead_id", leadId)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as Note[];
    },
  });

  const addNote = useMutation({
    mutationFn: async (text: string) => {
      const { data: userData } = await supabase.auth.getUser();
      const { error } = await supabase.from("lead_notes").insert({
        lead_id: leadId,
        body: text,
        author_id: userData.user?.id ?? null,
        author_name: authorName,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      setBody("");
      queryClient.invalidateQueries({ queryKey: ["lead-notes", leadId] });
    },
  });

  return (
    <div className="mt-6 border-t border-border pt-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const text = body.trim();
          if (!text) return;
          addNote.mutate(text);
        }}
        className="space-y-3"
      >
        <label htmlFor={`note-${leadId}`} className="block text-sm font-bold">
          Add a follow-up note
        </label>
        <textarea
          id={`note-${leadId}`}
          rows={3}
          maxLength={2000}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Called on WhatsApp, sharing the Growth package details tomorrow…"
          className={inputClass}
        />
        <button
          type="submit"
          disabled={addNote.isPending}
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-60"
        >
          {addNote.isPending ? "Saving…" : "Save note"}
        </button>
        {addNote.isError && (
          <p role="alert" className="text-sm font-bold text-destructive">
            Could not save that note. Please try again.
          </p>
        )}
      </form>

      <div className="mt-6 space-y-3">
        {notesQuery.isLoading && (
          <p className="text-sm font-bold text-muted-foreground">Loading notes…</p>
        )}
        {notesQuery.data?.length === 0 && (
          <p className="text-sm font-bold text-muted-foreground">No follow-ups recorded yet.</p>
        )}
        {notesQuery.data?.map((note) => (
          <div key={note.id} className="rounded-xl border border-border bg-bg-light p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {note.author_name || "Team"} · {formatDate(note.created_at)}
            </p>
            <p className="mt-2 text-sm text-foreground">{note.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
