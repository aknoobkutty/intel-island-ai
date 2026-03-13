import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative max-w-xl w-full mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search AI agents by name, category, or tag..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-12 h-13 rounded-xl glass text-base border-border/50 focus:border-primary/50 focus:glow-primary transition-shadow"
      />
    </div>
  );
};

export default SearchBar;
