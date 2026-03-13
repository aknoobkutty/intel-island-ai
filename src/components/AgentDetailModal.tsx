import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, ExternalLink, Github, Calendar } from "lucide-react";
import type { Agent } from "@/lib/agents-data";

interface AgentDetailModalProps {
  agent: Agent | null;
  open: boolean;
  onClose: () => void;
}

const pricingColors: Record<string, string> = {
  free: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  freemium: "bg-primary/20 text-primary border-primary/30",
  paid: "bg-accent/20 text-accent border-accent/30",
};

const AgentDetailModal = ({ agent, open, onClose }: AgentDetailModalProps) => {
  if (!agent) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="glass max-w-lg border-border/50">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-display font-bold text-xl">
              {agent.name.charAt(0)}
            </div>
            <div>
              <DialogTitle className="font-display text-xl">{agent.name}</DialogTitle>
              <p className="text-sm text-muted-foreground">{agent.creator}</p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-5 mt-2">
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5 text-amber-400">
              <Star className="w-4 h-4 fill-current" />
              {agent.rating} rating
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Users className="w-4 h-4" />
              {agent.users_count.toLocaleString()} users
            </span>
            <Badge variant="outline" className={pricingColors[agent.pricing]}>
              {agent.pricing}
            </Badge>
          </div>

          <p className="text-sm text-secondary-foreground leading-relaxed">
            {agent.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {agent.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3.5 h-3.5" />
            Listed {new Date(agent.created_at).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </div>

          <div className="flex gap-3 pt-2">
            <Button variant="glow" className="flex-1">
              <ExternalLink className="w-4 h-4" />
              Try Agent
            </Button>
            <Button variant="outline">
              <Github className="w-4 h-4" />
              Source
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgentDetailModal;
