import { cn } from "@/lib/utils";
import { CATEGORIES } from "@/lib/agents-data";
import { categoryIcons } from "@/lib/category-icons";

interface CategoryFilterProps {
  selected: string;
  onChange: (category: string) => void;
}

const CategoryFilter = ({ selected, onChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {CATEGORIES.map((cat) => {
        const Icon = categoryIcons[cat];
        const isActive = selected === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              isActive
                ? "bg-primary text-primary-foreground glow-primary"
                : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            )}
          >
            {Icon && <Icon className="w-4 h-4" />}
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
