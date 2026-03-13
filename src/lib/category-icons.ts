import { Bot, Code, Pen, BarChart3, Headphones, Megaphone, Palette, BookOpen, Zap } from "lucide-react";

export const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  All: Zap,
  Productivity: Bot,
  "Code Assistant": Code,
  Writing: Pen,
  "Data Analysis": BarChart3,
  "Customer Support": Headphones,
  Marketing: Megaphone,
  Design: Palette,
  Research: BookOpen,
};
