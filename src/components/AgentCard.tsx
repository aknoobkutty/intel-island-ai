import { motion } from "framer-motion";
import { Star, Users, ExternalLink } from "lucide-react";
import type { Agent } from "@/lib/agents-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AgentCardProps {
  agent: Agent;
  onClick: (agent: Agent) => void;
  index: number;
}

const pricingColors: Record<string, string> = {
  free: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  freemium: "bg-primary/20 text-primary border-primary/30",
  paid: "bg-accent/20 text-accent border-accent/30",
};

const avatarColors = [
  "from-primary to-accent",
  "from-emerald-400 to-primary",
  "from-accent to-pink-500",
  "from-amber-400 to-orange-500",
  "from-primary to-emerald-400",
  "from-pink-500 to-accent",
  "from-orange-400 to-primary",
  "from-accent to-emerald-400",
];

const AgentCard = ({ agent, onClick, index }: AgentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      onClick={() => onClick(agent)}
      className="glass rounded-xl p-5 cursor-pointer group hover:border-primary/30 transition-all duration-300 hover:glow-primary"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-primary-foreground font-display font-bold text-lg shrink-0`}>
          {agent.name.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-display font-semibold text-foreground truncate group-hover:text-primary transition-colors">
            {agent.name}
          </h3>
          <p className="text-sm text-muted-foreground">{agent.creator}</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {agent.short_description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {agent.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-sm">
          <span className="flex items-center gap-1 text-amber-400">
            <Star className="w-3.5 h-3.5 fill-current" />
            {agent.rating}
          </span>
          <span className="flex items-center gap-1 text-muted-foreground">
            <Users className="w-3.5 h-3.5" />
            {agent.users_count >= 1000 ? `${(agent.users_count / 1000).toFixed(1)}k` : agent.users_count}
          </span>
        </div>
        <Badge variant="outline" className={pricingColors[agent.pricing]}>
          {agent.pricing}
        </Badge>
      </div>
    </motion.div>
  );
};

export default AgentCard;
