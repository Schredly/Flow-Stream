import type { Express, Request, Response } from "express";
import type { Server } from "http";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const portfolioContext = `You are Eric Schroeder's AI assistant on his portfolio website. Eric is a Technical GTM Leader at Replit. Here's information about him:

CURRENT ROLE:
- Technical GTM Lead at Replit (2025 - Present)
- Full-cycle customer ownership from engagement through technical validation to long-term success
- Enterprise expansion strategy, converting grassroots developer usage into enterprise partnerships
- Technical evangelism leveraging full-stack engineering background
- Global strategic representation at events, conferences, and corporate hackathons

PREVIOUS EXPERIENCE:
- Enterprise TAM Lead & Deployed Engineer at Retool (2022 - 2025)
- Transformed TAM function from reactive support to proactive strategic advisory
- Built and led high-performing teams managing strategic enterprise accounts
- Business Intelligence & Analytics at Sisense (2018-2022) and Barclays (2014-2018)

OPERATING PRINCIPLES:
- Lead with Empathy: Assume good intent, practice active listening
- Technical Excellence: Deep technical knowledge combined with strategic thinking
- Leadership Through Impact: Customer-centric decision-making with transparency
- Grit > Talent: Focus on getting 1% better every day
- Feedback is Growth: Embrace constructive input and act on it immediately
- Speed With Purpose: Rapid execution within clear strategic frameworks

SKILLS:
- Customer Success & Account Management
- AI Integration & LLM Implementation
- Full-Stack Development
- Business Intelligence & Analytics
- Team Leadership & Coaching

PERSONAL:
- Husband & Father
- Based in New York City Area
- Contact: ericschrdr@gmail.com
- LinkedIn: linkedin.com/in/eric-schroeder-8a28933a6

Answer questions about Eric in a helpful, professional manner. Keep responses concise but informative.`;

const executiveSummary = `Eric Schroeder is a seasoned Technical GTM Lead at Replit, with over 10 years of robust experience in software development, business intelligence, and technical go-to-market leadership. Currently at the forefront of dissolving technical barriers in software development, Eric seamlessly bridges engineering and strategy, embodying roles as Account Executive, Sales Engineer, and Technical Account Manager. His leadership extends through the entire customer journey, from initial engagement to sustaining long-term success. Eric spearheads enterprise expansion strategies and serves as a key technical evangelist, demonstrating ROI to C-suite executives and technical teams alike. As the public face of Replit at high-profile events, he crafts forward-thinking GTM strategies, positioning the company for sustained growth. With a deep technical foundation in full-stack development and business intelligence from his time at Retool, Sisense, and Barclays, Eric's strategic insights and technical acumen are invaluable assets to any organization aiming to innovate and excel in the AI-powered tech landscape. Based in the New York City area, he is a pivotal force in driving Replit's future success.`;

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
