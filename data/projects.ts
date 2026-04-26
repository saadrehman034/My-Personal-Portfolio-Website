export interface Project {
  slug: string;
  title: string;
  category: "ai-agents" | "automation" | "full-stack" | "saas";
  categoryLabel: string;
  result: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  techStack: string[];
  featured: boolean;
  gradient: string;
}

export const projects: Project[] = [
  {
    slug: "ai-lead-qualification-agent",
    title: "AI Lead Qualification Agent",
    category: "ai-agents",
    categoryLabel: "AI Agents",
    result: "Reduced manual review by 80%",
    description:
      "Built an autonomous AI agent that scores, qualifies, and routes incoming leads based on ICP criteria — fully eliminating manual triage.",
    problem:
      "A B2B SaaS company was spending 15+ hours per week manually reviewing and scoring leads from multiple channels. The process was inconsistent and slow, causing high-value leads to go cold.",
    solution:
      "Designed a LangChain-powered agent that integrates with HubSpot, enriches leads via Clearbit, applies a custom scoring model, and routes qualified leads directly into the sales pipeline with a personalized outreach draft.",
    outcome:
      "Reduced manual review time by 80%, increased lead response speed from 48hrs to under 2hrs, and improved conversion rate by 23% in the first quarter.",
    techStack: ["LangChain", "OpenAI", "HubSpot API", "Python", "FastAPI", "PostgreSQL"],
    featured: true,
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    slug: "ecommerce-automation-suite",
    title: "E-commerce Automation Suite",
    category: "automation",
    categoryLabel: "Automation",
    result: "Saved 20hrs/week of manual work",
    description:
      "End-to-end automation pipeline connecting Shopify, inventory management, email marketing, and accounting — zero manual data entry.",
    problem:
      "An e-commerce brand with $2M+ ARR was drowning in repetitive manual tasks: syncing orders, updating inventory, sending follow-ups, and reconciling financials across five disconnected tools.",
    solution:
      "Built a comprehensive n8n automation suite that handles order processing, inventory sync, abandoned cart sequences, review requests, and monthly financial exports — all triggered automatically.",
    outcome:
      "Eliminated 20 hours per week of manual work, reduced human error by 95%, and freed the founder to focus on growth rather than operations.",
    techStack: ["n8n", "Shopify API", "Klaviyo", "QuickBooks API", "Airtable", "Webhooks"],
    featured: true,
    gradient: "from-emerald-500/20 to-blue-500/20",
  },
  {
    slug: "saas-analytics-dashboard",
    title: "SaaS Analytics Dashboard",
    category: "full-stack",
    categoryLabel: "Full Stack",
    result: "Full-stack product for a B2B client",
    description:
      "A real-time analytics dashboard for a B2B SaaS company — custom metrics, role-based access, and white-label support.",
    problem:
      "A B2B startup needed a custom analytics product to offer their enterprise clients, but off-the-shelf solutions couldn't match their specific metrics and couldn't be white-labeled.",
    solution:
      "Built a full-stack Next.js dashboard with Supabase as the backend, real-time data streaming, custom chart components, CSV export, role-based access control, and white-label theming.",
    outcome:
      "Delivered in 6 weeks. The client launched it as a core premium feature, contributing to a 40% increase in enterprise plan upgrades.",
    techStack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Recharts", "Tailwind CSS"],
    featured: true,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    slug: "custom-gpt-customer-support",
    title: "Custom GPT Support Bot",
    category: "ai-agents",
    categoryLabel: "AI Agents",
    result: "Deployed for a 50k-user customer base",
    description:
      "A context-aware AI support agent trained on product documentation, capable of handling 85% of tier-1 support tickets autonomously.",
    problem:
      "A SaaS company's support team was overwhelmed with repetitive tier-1 tickets. Response times had climbed to 3+ days, leading to churn.",
    solution:
      "Built a RAG-powered chatbot using OpenAI + Pinecone, trained on the company's docs, help articles, and past resolved tickets. Integrated with Intercom for seamless human handoff.",
    outcome:
      "Deflected 85% of tier-1 tickets, reduced average response time from 3 days to under 5 minutes, and saved ~$8k/month in support costs.",
    techStack: ["OpenAI", "Pinecone", "LangChain", "FastAPI", "Intercom API", "Python"],
    featured: false,
    gradient: "from-orange-500/20 to-red-500/20",
  },
];
