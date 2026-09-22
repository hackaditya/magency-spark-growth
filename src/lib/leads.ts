import { supabase } from "@/integrations/supabase/client";

export type LeadInput = {
  name: string;
  business_name?: string | null;
  city?: string | null;
  phone?: string | null;
  email?: string | null;
  service?: string | null;
  goals?: string | null;
  source: string;
};

export const LEAD_STAGES = [
  "new",
  "contacted",
  "in_discussion",
  "proposal_sent",
  "won",
  "lost",
] as const;

export type LeadStage = (typeof LEAD_STAGES)[number];

export const STAGE_LABELS: Record<LeadStage, string> = {
  new: "New",
  contacted: "Contacted",
  in_discussion: "In discussion",
  proposal_sent: "Proposal sent",
  won: "Won",
  lost: "Lost",
};

/** Saves a lead. Never blocks the visitor: errors are logged, not thrown. */
export async function saveLead(input: LeadInput): Promise<void> {
  try {
    const { error } = await supabase.from("leads").insert(input);
    if (error) console.error("Failed to save lead", error);
  } catch (error) {
    console.error("Failed to save lead", error);
  }
}
