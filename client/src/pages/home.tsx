import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, MapPin, Heart, Building2, GraduationCap, Users, Target, Lightbulb, MessageSquare, Rocket, Menu, X } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const navLinks = [
  { href: "#principles", label: "VALUES" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#projects", label: "PORTFOLIO" },
  { href: "#skills", label: "SKILLS" },
];

const milestones = [
  { icon: Heart, title: "Husband & Father" },
  { icon: Building2, title: "Enterprise TAM Scaler", description: "Building and scaling Enterprise TAM functions, transforming from reactive service to strategic, revenue-driving teams" },
  { icon: Lightbulb, title: "Bridging Tech & Business", description: "Leveraging deep background in full-stack development and DevOps to bridge complex technology and strategic business value" },
  { icon: Users, title: "Leadership & Mentorship", description: "Leading and mentoring high-performing technical teams, focusing on professional growth and high customer satisfaction" },
  { icon: Target, title: "Executive Partnership", description: "Partnering directly with executive leadership to solve critical adoption bottlenecks and develop scalable frameworks" },
  { icon: GraduationCap, title: "Data-Driven Foundations", description: "Strong educational foundation in data analysis, engineering, and strategic business operations" },
];

const principles = [
  { title: "Lead with Empathy", description: "Always try to assume good intent. Practice active listening to truly understand and empower people around you.", icon: Heart },
  { title: "Technical Excellence", description: "Deep technical knowledge combined with strategic thinking creates the most effective leaders. Understanding implementation details enables better decision-making.", icon: Lightbulb },
  { title: "Leadership Through Impact", description: "Committed to developing others through structured coaching. Customer-centric decision-making with transparency, alignment, and accountability.", icon: Users },
  { title: "Grit > Talent", description: "Consistent effort, perseverance through challenges, and learning from failures create lasting impact. Focus on getting 1% better every day.", icon: Target },
  { title: "Feedback is Growth", description: "I believe in the importance of receiving and giving candid feedback, then applying it quickly. Growth happens fastest when we embrace constructive input.", icon: MessageSquare },
  { title: "Speed With Purpose", description: "Strategy guides direction, but speed drives results. I believe in rapid execution within clear strategic frameworks. AI-native approaches accelerate impact exponentially.", icon: Rocket },
];

const experiences = [
  {
    title: "Technical GTM Lead",
    company: "Replit",
    period: "2025 - Present",
    responsibilities: [
      "Full-Cycle Ownership: Managing complete customer journey from initial engagement through technical validation to long-term success",
      "Enterprise Expansion Strategy: Leading complex sales motions to convert grassroots developer usage into enterprise partnerships",
      "Technical Evangelism: Leveraging full-stack engineering background to build competitive demos and prove technical ROI",
      "Global Strategic Representation: Serving as public face at events, conferences, and large-scale corporate hackathons",
      "GTM Strategy: Architecting the strategy for future GTM motion and systems",
    ],
  },
  {
    title: "Enterprise TAM Lead & Deployed Engineer",
    company: "Retool",
    period: "2022 - 2025",
    responsibilities: [
      "Transformed and repositioned TAM function from reactive technical support to proactive strategic customer advisory",
      "Built and led high-performing teams managing most strategic enterprise accounts with high retention and expansion",
      "Delivered tailored technical solutions using full-stack development and DevOps skills",
      "Enabled global enterprises to leverage platform effectively for AI-driven innovation",
    ],
  },
  {
    title: "Business Intelligence & Analytics",
    company: "Sisense & Barclays",
    period: "2014 - 2022",
    responsibilities: [
      "Led strategic BI implementation projects for enterprise clients across Retail, Financial, and Healthcare sectors",
      "Managed team of consultants working on complex data visualization solutions",
      "Developed sophisticated BI solutions supporting millions of daily financial transactions",
      "Optimized SQL performance and created efficient data migration tools",
    ],
  },
];

const skills = [
  {
    category: "Customer Success & Account Management",
    items: ["Enterprise Technical Account Management", "Strategic Customer Success", "Revenue Growth & Retention", "Executive Stakeholder Management", "Cross-functional Collaboration", "Team Leadership & Coaching"],
  },
  {
    category: "AI & Development Technologies",
    items: ["AI Integration & Automation", "LLM Implementation & Strategy", "Full-Stack Development", "API Development & Integration", "Custom Application Development", "Workflow Automation Design"],
  },
  {
    category: "Data & Analytics",
    items: ["Business Intelligence & Analytics", "Data Visualization & Dashboards", "ETL Process Design", "SQL & Database Optimization", "Predictive Analytics & Forecasting", "Customer Data Analysis"],
  },
];

const projects = [
  { title: "AI-Powered Customer 360 Dashboards", tags: ["AI Integration", "Data Visualization", "Customer Insights"], description: "Built centralized dashboards combining multiple data sources with AI summarization and key insight surfacing for fragmented customer data." },
  { title: "Human-in-the-Loop AI Workflows", tags: ["LLM Integration", "Workflow Automation", "Risk Management"], description: "Integrated platforms with LLMs to pre-process and suggest actions, routed to humans for final decisions in high-risk business processes." },
  { title: "Automated Case Triage with Summarization", tags: ["AI Summarization", "Process Automation", "Efficiency"], description: "Used automation tools to present auto-summarized case info and AI-prioritized flags in triage view for time-consuming case reviews." },
  { title: "Custom CRM & Internal Management Tools", tags: ["Custom CRM", "Internal Tools", "Process Optimization"], description: "Designed fully custom CRM interfaces tailored to internal processes, including note-taking, task assignment, and ticket triage." },
  { title: "Self-Service Admin Portals with Guardrails", tags: ["Self-Service", "Admin Tools", "Engineering Efficiency"], description: "Delivered modular internal tools with permissioned access and business logic guardrails for engineering teams." },
  { title: "Sales Forecasting Insights with LLMs", tags: ["LLM Integration", "Sales Intelligence", "Executive Insights"], description: "Built forecasting tool with embedded LLMs to generate natural-language summaries and risk indicators for executives." },
];

const companyLogos = [
  "Netflix", "Apple", "NVIDIA", "NBCUniversal", "Stripe", "American Express", "Boeing", "OpenAI"
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[10000]" />
      <header
        className={`fixed top-1 left-0 right-0 z-[9999] transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
          <a href="#" className="font-semibold text-xl text-foreground tracking-tight" data-testid="link-logo">
            Eric Schroeder
          </a>
          
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide"
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/eric-schroeder-8a28933a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-header-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:ericschrdr@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-header-email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <Button asChild size="sm" className="ml-2 rounded-full px-5" data-testid="button-header-contact">
              <a href="#contact">GET IN TOUCH</a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block text-sm font-medium text-primary"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-nav-contact"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="relative min-h-screen flex items-center px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-[1.1] animate-fade-in-up opacity-0 animation-delay-100" data-testid="text-hero-title">
                Technical GTM Leader at the{" "}
                <span className="text-primary">Forefront of AI</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground mb-6 font-semibold animate-fade-in-up opacity-0 animation-delay-200">
                The technical barrier to building software has vanished.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl animate-fade-in-up opacity-0 animation-delay-300">
                I sit at the intersection of engineering and strategy, bringing a software engineer's perspective to GTM leadership. I help knowledge workers and domain experts build complex, innovative applications using only natural language—empowering organizations to build the future with AI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 animation-delay-400">
                <Button asChild size="lg" className="rounded-full px-8" data-testid="link-linkedin">
                  <a href="https://www.linkedin.com/in/eric-schroeder-8a28933a6/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn Profile
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8" data-testid="link-email">
                  <a href="mailto:ericschrdr@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Me
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end animate-scale-in">
              <Card className="mb-4 p-4 bg-card/80 backdrop-blur-sm border-primary/20 rounded-xl">
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span>~7 min read (230 wpm)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                      <path d="M10 9H8" />
                    </svg>
                    <span>1,350 words</span>
                  </div>
                </div>
                <Button size="sm" className="w-full rounded-lg" data-testid="button-summary">
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                  Get 60-Sec Summary
                </Button>
              </Card>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full" />
                <img
                  src={profilePhoto}
                  alt="Eric Schroeder"
                  className="relative w-64 h-64 md:w-80 md:h-80 object-cover object-top rounded-full shadow-2xl border-2 border-primary/20"
                  data-testid="img-profile"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/50" id="milestones">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-milestones-title">
              Career & Personal Milestones
            </h2>
            <p className="text-muted-foreground text-lg">
              Key achievements that showcase professional growth and personal values.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="p-6 hover-elevate transition-all duration-300" data-testid={`card-milestone-${index}`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-md flex-shrink-0">
                    <milestone.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">{milestone.title}</h3>
                    {milestone.description && (
                      <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" id="principles">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-principles-title">
              My Operating System
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" style={{ transform: 'translateX(-50%)' }} />
            
            <div className="space-y-12 md:space-y-24">
              {principles.map((principle, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={index} className="relative">
                    <div className="absolute left-1/2 top-8 w-3 h-3 bg-background border-2 border-muted-foreground/30 rounded-full hidden md:block" style={{ transform: 'translateX(-50%)' }} />
                    
                    <div className={`md:w-[45%] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <Card className="p-6 hover-elevate transition-all duration-300 border-primary/20" data-testid={`card-principle-${index}`}>
                        <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit border border-primary/20">
                          <principle.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground text-xl mb-3">{principle.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/50" id="experience">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-experience-title">
              Professional Experience
            </h2>
          </div>

          <div className="mb-16">
            <h3 className="text-xl font-semibold text-foreground text-center mb-8">Trusted by Leading Enterprise Organizations</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {companyLogos.map((logo, index) => (
                <div key={index} className="px-5 py-2.5 bg-card rounded-md border border-border/50 hover-elevate transition-all duration-200" data-testid={`logo-company-${index}`}>
                  <span className="text-muted-foreground font-medium text-sm">{logo}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 md:p-8" data-testid={`card-experience-${index}`}>
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="font-mono text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-md inline-block">
                      root@portfolio:~/exp $
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="secondary" className="w-fit">{exp.period}</Badge>
                    </div>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-primary font-mono mt-0.5 flex-shrink-0">{">"}</span>
                          <span className="text-muted-foreground text-sm leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" id="skills">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-skills-title">
              Skills & Expertise
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="p-6" data-testid={`card-skill-${index}`}>
                <h3 className="font-semibold text-foreground text-base mb-4 pb-3 border-b border-border">
                  {skill.category}
                </h3>
                <ul className="space-y-2.5">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/50" id="projects">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-projects-title">
              Portfolio & Projects
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 hover-elevate transition-all duration-300 group flex flex-col" data-testid={`card-project-${index}`}>
                <h3 className="font-semibold text-foreground text-base mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs px-2 py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" id="contact">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-10 text-center bg-gradient-to-br from-card via-card to-primary/5">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4" data-testid="text-contact-title">
              Get In Touch
            </h2>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to discuss how we can drive transformative business outcomes? Let's connect and explore opportunities for strategic partnership, AI-driven innovation, and enterprise growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" data-testid="button-contact-email">
                <a href="mailto:ericschrdr@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  ericschrdr@gmail.com
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" data-testid="button-contact-linkedin">
                <a href="https://www.linkedin.com/in/eric-schroeder-8a28933a6/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  linkedin.com/in/eric-schroeder
                </a>
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Based in New York City Area</span>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Eric Schroeder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
