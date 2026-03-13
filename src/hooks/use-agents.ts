import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Agent } from "@/lib/agents-data";

export const useAgents = () => {
  return useQuery({
    queryKey: ["agents"],
    queryFn: async (): Promise<Agent[]> => {
      const { data, error } = await supabase
        .from("agents")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      return (data ?? []).map((row: any) => ({
        id: row.id,
        name: row.name,
        description: row.description,
        short_description: row.short_description,
        category: row.category,
        creator: row.creator,
        avatar_url: row.avatar_url ?? "",
        rating: Number(row.rating),
        users_count: row.users_count,
        tags: row.tags ?? [],
        pricing: row.pricing as Agent["pricing"],
        created_at: row.created_at,
        demo_url: row.demo_url ?? undefined,
        github_url: row.github_url ?? undefined,
      }));
    },
  });
};
