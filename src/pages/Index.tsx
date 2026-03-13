import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
//import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import AgentCard from "@/components/AgentCard";
import AgentDetailModal from "@/components/AgentDetailModal";
import { MOCK_AGENTS, type Agent } from "@/lib/agents-data";
import { Sparkles } from "lucide-react";

const Index = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  const filtered = useMemo(() => {
    return MOCK_AGENTS.filter((a) => {
      const matchesCategory = category === "All" || a.category === category;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        a.name.toLowerCase().includes(q) ||
        a.short_description.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q)) ||
        a.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-background bg-grid">
      <div className="fixed inset-0 bg-radial-glow pointer-events-none" />
      <Navbar />

      <main className="relative pt-24 pb-16 px-4">
        {/* Hero */}
        <section className="container mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Discover the future of AI agents
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Find the Perfect{" "}
              <span className="text-gradient">AI Agent</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Explore a curated marketplace of AI agents built by developers worldwide. 
              Search, discover, and deploy agents that supercharge your workflow.
            </p>
            {/* <SearchBar value={search} onChange={setSearch} /> */}
          </motion.div>
        </section>

        {/* Filters */}
        <section className="container mx-auto mb-10">
          <CategoryFilter selected={category} onChange={setCategory} />
        </section>

        {/* Results */}
        <section className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              {filtered.length} agent{filtered.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No agents found matching your criteria.</p>
              <p className="text-sm text-muted-foreground mt-2">Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((agent, i) => (
                <AgentCard key={agent.id} agent={agent} onClick={setSelectedAgent} index={i} />
              ))}
            </div>
          )}
        </section>
      </main>

      <AgentDetailModal
        agent={selectedAgent}
        open={!!selectedAgent}
        onClose={() => setSelectedAgent(null)}
      />
    </div>
  );
};

export default Index;
