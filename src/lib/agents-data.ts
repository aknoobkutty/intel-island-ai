export interface Agent {
  id: string;
  name: string;
  description: string;
  short_description: string;
  category: string;
  creator: string;
  avatar_url: string;
  rating: number;
  users_count: number;
  tags: string[];
  pricing: "free" | "freemium" | "paid";
  created_at: string;
  demo_url?: string;
  github_url?: string;
}

export const CATEGORIES = [
  "All",
  "Productivity",
  "Code Assistant",
  "Writing",
  "Data Analysis",
  "Customer Support",
  "Marketing",
  "Design",
  "Research",
] as const;

export const MOCK_AGENTS: Agent[] = [
  {
    id: "1",
    name: "CodePilot",
    description: "An advanced AI coding assistant that helps you write, debug, and refactor code across 50+ programming languages. Features include intelligent code completion, automated testing suggestions, and architecture recommendations.",
    short_description: "AI-powered code assistant for 50+ languages",
    category: "Code Assistant",
    creator: "DevTools Inc.",
    avatar_url: "",
    rating: 4.8,
    users_count: 12500,
    tags: ["coding", "debugging", "refactoring"],
    pricing: "freemium",
    created_at: "2025-12-01",
  },
  {
    id: "2",
    name: "WriteFlow",
    description: "Professional AI writing assistant that adapts to your tone and style. Perfect for blog posts, marketing copy, technical docs, and creative writing. Supports 30+ languages with real-time grammar and style suggestions.",
    short_description: "Adaptive AI writing assistant for any content",
    category: "Writing",
    creator: "ContentAI Labs",
    avatar_url: "",
    rating: 4.6,
    users_count: 8200,
    tags: ["writing", "content", "marketing"],
    pricing: "free",
    created_at: "2025-11-15",
  },
  {
    id: "3",
    name: "DataSense",
    description: "Transform raw data into actionable insights with natural language queries. Connects to databases, spreadsheets, and APIs to generate visualizations, reports, and predictive analytics without writing code.",
    short_description: "Natural language data analysis & visualization",
    category: "Data Analysis",
    creator: "AnalyticsPro",
    avatar_url: "",
    rating: 4.9,
    users_count: 5400,
    tags: ["data", "analytics", "visualization"],
    pricing: "paid",
    created_at: "2026-01-10",
  },
  {
    id: "4",
    name: "SupportBot Pro",
    description: "Intelligent customer support agent that learns from your knowledge base and handles tickets autonomously. Integrates with Zendesk, Intercom, and Slack. Reduces response time by 80%.",
    short_description: "Autonomous customer support with KB learning",
    category: "Customer Support",
    creator: "ServiceAI",
    avatar_url: "",
    rating: 4.5,
    users_count: 3100,
    tags: ["support", "automation", "tickets"],
    pricing: "paid",
    created_at: "2026-02-05",
  },
  {
    id: "5",
    name: "TaskMaster",
    description: "Your personal productivity agent that manages tasks, schedules meetings, sends follow-ups, and automates repetitive workflows. Integrates with Google Calendar, Notion, and Slack.",
    short_description: "AI productivity agent for task & workflow automation",
    category: "Productivity",
    creator: "FlowState",
    avatar_url: "",
    rating: 4.7,
    users_count: 15000,
    tags: ["productivity", "automation", "scheduling"],
    pricing: "freemium",
    created_at: "2025-10-20",
  },
  {
    id: "6",
    name: "DesignMuse",
    description: "AI design companion that generates UI mockups, color palettes, and design systems from natural language descriptions. Exports to Figma and supports responsive layout generation.",
    short_description: "Generate UI designs from text descriptions",
    category: "Design",
    creator: "PixelAI Studio",
    avatar_url: "",
    rating: 4.4,
    users_count: 6700,
    tags: ["design", "UI", "figma"],
    pricing: "freemium",
    created_at: "2026-01-25",
  },
  {
    id: "7",
    name: "MarketGenius",
    description: "AI marketing strategist that creates campaigns, analyzes competitors, generates ad copy, and optimizes conversion funnels. Powered by real-time market data and trend analysis.",
    short_description: "AI-driven marketing strategy & campaign builder",
    category: "Marketing",
    creator: "GrowthLab AI",
    avatar_url: "",
    rating: 4.3,
    users_count: 4200,
    tags: ["marketing", "ads", "strategy"],
    pricing: "paid",
    created_at: "2026-02-18",
  },
  {
    id: "8",
    name: "ResearchBot",
    description: "Academic and market research assistant that scans papers, articles, and reports. Summarizes findings, identifies trends, and generates literature reviews with proper citations.",
    short_description: "AI research assistant with citation support",
    category: "Research",
    creator: "ScholarAI",
    avatar_url: "",
    rating: 4.7,
    users_count: 9800,
    tags: ["research", "papers", "summarization"],
    pricing: "free",
    created_at: "2025-09-30",
  },
];
