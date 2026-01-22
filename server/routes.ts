import type { Express, Request, Response } from "express";
import type { Server } from "http";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const portfolioContext = `You are Eric Schroeder's AI assistant on his portfolio website. Eric is a Technical GTM Leader at the Forefront of AI. Here's information about him:

CURRENT ROLES:
- VP — Sales Engineering & Post-Sales at Standard Template Labs (Copy.ai) (2025 - Present)
  * Full customer lifecycle across enterprise sales, implementation, and post-sales adoption for AI-native platform
  * Value-based sales motions and executive-level POVs connecting agentic workflows to measurable business outcomes
  * Partner with Product and Engineering to influence roadmap based on enterprise adoption signals
  * Establish scalable post-sales playbooks balancing speed, trust, and governance

- Advisor / Operator at Cogent West (2025 - Present)
  * Advise founders and leadership teams on enterprise AI strategy, GTM positioning, and operating models
  * Build enterprise narratives, demos, and adoption frameworks accelerating trust and buying confidence

PREVIOUS EXPERIENCE:
- VP of Product Management & AI Agent Safety (NowX) at ServiceNow (2006 - 2025)
  * Helped scale ServiceNow from early ITSM roots into a global enterprise platform exceeding $1B in revenue
  * Led NowX incubation efforts launching 14 products across new workflows, AI, and platform capabilities
  * Advanced enterprise AI strategy, including early work on agentic systems, governance, and safety

CAREER MILESTONES:
- Category Creation at Scale: Helped scale ServiceNow to $1B+ category
- Product Incubation & 0→1 Leadership: Led NowX incubation initiatives
- AI & Agentic Systems Leadership: Advanced enterprise-safe AI and agentic workflow strategies

OPERATING BELIEFS:
- Assume Positive Intent: I default to trust and curiosity. Most friction disappears when people feel heard, respected, and understood
- Depth Creates Leverage: Understanding systems at the implementation level leads to better decisions, stronger credibility, and faster execution
- Outcomes Over Titles: Leadership is measured by the success of teams and customers—not hierarchy. Focus on enablement, alignment, and accountability
- Consistency Compounds: Sustained effort and learning through setbacks outperform raw talent. Small gains, repeated, create real advantage
- Shorten the Loop: Candid feedback applied quickly accelerates growth—for individuals, teams, and products
- Bias Toward Action: Clear strategy matters, but progress requires motion. Focused teams that execute quickly—especially with AI-native leverage—win

SKILLS:
- Enterprise GTM & Leadership: Value-Based Selling, Executive POVs, Sales Engineering, Team Leadership
- AI & Platform Strategy: Agentic Workflow Design, Enterprise AI Governance & Safety, LLM Strategy
- Product & Systems Thinking: Product Incubation (0→1 → Scale), Platform Strategy, Change Management

PERSONAL:
- Husband & Father - Grounded leadership starts at home
- Based in San Diego, CA
- Contact: ericschrdr@gmail.com
- LinkedIn: linkedin.com/in/ericschroeder

Answer questions about Eric in a helpful, professional manner. Keep responses concise but informative.`;

const executiveSummary = `Eric Schroeder is a Technical GTM Leader at the Forefront of AI, with 25+ years of experience building, scaling, and selling enterprise platforms. Currently serving as VP of Sales Engineering & Post-Sales at Standard Template Labs (Copy.ai), Eric operates at the intersection of product, engineering, and go-to-market, bringing a builder's mindset to enterprise GTM leadership. He helps organizations translate emerging technologies—especially AI and agentic systems—into trusted, scalable, revenue-driving solutions. Eric's career includes nearly two decades at ServiceNow, where he helped scale the company from early ITSM roots into a global enterprise platform exceeding $1B in revenue, leading NowX incubation efforts that launched 14 products across new workflows, AI, and platform capabilities. He also advises founders and leadership teams through Cogent West on enterprise AI strategy, GTM positioning, and operating models. His expertise spans enterprise sales engineering, agentic workflow design, AI governance & safety, and product incubation from 0→1 to scale. Based in San Diego, CA, Eric specializes in turning complex systems into clear narratives, repeatable motions, and measurable outcomes.`;

export async function registerRoutes(server: Server, app: Express): Promise<void> {
  app.get("/api/summary", (req: Request, res: Response) => {
    res.json({ summary: executiveSummary });
  });

  app.post("/api/chat", async (req: Request, res: Response) => {
    try {
      const { message, history = [] } = req.body;

      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const messages = [
        { role: "system" as const, content: portfolioContext },
        ...history.map((m: { role: string; content: string }) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
        { role: "user" as const, content: message },
      ];

      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");

      const stream = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages,
        stream: true,
        max_tokens: 1024,
      });

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || "";
        if (content) {
          res.write(`data: ${JSON.stringify({ content })}\n\n`);
        }
      }

      res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
      res.end();
    } catch (error) {
      console.error("Error in chat:", error);
      if (res.headersSent) {
        res.write(`data: ${JSON.stringify({ error: "Failed to process message" })}\n\n`);
        res.end();
      } else {
        res.status(500).json({ error: "Failed to process message" });
      }
    }
  });
}
