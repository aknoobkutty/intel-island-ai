import { Bot } from "lucide-react";
import AuthButton from "@/components/AuthButton";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg text-foreground">
            Agent Bazzer
          </span>
        </div>
        <AuthButton />
      </div>
    </nav>
  );
};

export default Navbar;
