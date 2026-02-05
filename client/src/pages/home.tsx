import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, MapPin, Heart, Building2, GraduationCap, Users, Target, Lightbulb, MessageSquare, Rocket, Menu, X, Music } from "lucide-react";
import { SiNetflix, SiApple, SiNvidia, SiIntel, SiAmericanexpress, SiBoeing, SiAmazon, SiGoogle, SiTarget, SiExpedia } from "react-icons/si";
import profilePhoto from "@assets/1701242518815_1769191726722.jpg";
import { AISummaryModal } from "@/components/ai-summary-modal";
import { MusicPortfolioModal } from "@/components/music-portfolio-modal";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const navLinks = [
  { href: "#principles", label: "HOW I OPERATE" },
  { href: "#experience", label: "WHERE I'VE BUILT" },
  { href: "#projects", label: "WHAT I'VE DELIVERED" },
  { href: "#skills", label: "CAPABILITIES" },
];

const milestones = [
  { icon: Heart, title: "Husband & Father", description: "I'm grounded in long-term thinking, responsibility, and building systems that last—at home and in business." },
  { icon: Building2, title: "Enterprise Category Creation at Scale", description: "Helped scale ServiceNow from early IT ticketing into a global ITSM and Enterprise Service Management leader—contributing to a $1B+ category." },
  { icon: Lightbulb, title: "Product Incubation & 0→1 Leadership", description: "Founded and led incubation initiatives (NowX), launching 20+ net-new products and AI capabilities—bridging experimentation with enterprise-grade execution." },
  { icon: Users, title: "Bridging Product, GTM & Enterprise Reality", description: "Known for translating deep technical capability into executive-ready narratives, adoption playbooks, and scalable deployment patterns." },
  { icon: Target, title: "AI & Agentic Systems Leadership", description: "Advanced enterprise-safe AI and agentic workflow strategies focused on governance, risk, and real-world adoption—not demos in isolation." },
  { icon: GraduationCap, title: "Advisor & Operator", description: "Through Cogent West, partner with founders and leadership teams to operationalize innovation, sharpen positioning, and accelerate GTM execution." },
];

const principles = [
  { title: "Assume Positive Intent", description: "I default to trust and curiosity. Customers move faster when teams feel heard, respected, and aligned.", icon: Heart },
  { title: "Depth Creates Leverage", description: "I go deep enough to earn credibility with engineering and implementation teams—then translate that into clear decisions and direction.", icon: Lightbulb },
  { title: "Outcomes Over Titles", description: "I optimize for results and customer impact. Alignment, enablement, and accountability beat hierarchy every time.", icon: Users },
  { title: "Consistency Compounds", description: "Big outcomes come from small, sustained gains—repeated learning cycles, steady execution, and operational discipline.", icon: Target },
  { title: "Shorten the Loop", description: "Fast feedback and fast iteration accelerate product quality, sales confidence, and customer adoption.", icon: MessageSquare },
  { title: "Bias Toward Action", description: "Strategy matters, but outcomes require motion. Focused teams executing with AI-native leverage win.", icon: Rocket },
];

const experiences = [
  {
    title: "Founder & Principal — Cogent West",
    company: "Advisory & Product Refactoring Studio",
    companyShort: "Cogent West",
    slug: "cogentwest",
    period: "2023 - Present",
    icon: Lightbulb,
    responsibilities: [
      "Partner with founders and enterprise leadership teams to turn AI ambition into production-ready platforms that customers trust, adopt, and expand.",
      "Refactor legacy workflows and systems into modern, AI-native applications—bridging strategy, architecture, and hands-on execution.",
      "Design enterprise-ready AI and agentic operating models with governance, risk controls, and adoption patterns built in from day one.",
      "Build executive narratives, value-based demos, and adoption playbooks that shorten sales cycles and increase customer confidence.",
      "Work across product, engineering, and GTM to translate real customer workflows into scalable platform capabilities and repeatable motions.",
    ],
  },
  {
    title: "VP, Platform (Sales Engineering & Customer Engagement)",
    company: "Copy.ai",
    companyShort: "Copy.ai",
    slug: "copyai",
    period: "2025 - 2026",
    icon: Rocket,
    responsibilities: [
      "Led platform strategy and execution for an AI-native go-to-market platform that infuses AI across the GTM engine—unifying data, codifying best practices, and reducing point-solution sprawl.",
      "Built and led customer-facing technical teams to ensure platform design stayed grounded in enterprise buying, security expectations, and real GTM workflows.",
      "Partnered with Sales and SE to enable value-based selling, executive POVs, and architectures that connect agentic workflows to measurable revenue outcomes.",
      "Maintained tight feedback loops with enterprise customers—translating adoption friction into roadmap priorities and platform capabilities.",
      "Established scalable platform and post-sales playbooks balancing speed, trust, governance, and expansion as customers operationalized AI.",
    ],
  },
  {
    title: "VP of Product Management & AI Agent Safety (NowX)",
    company: "ServiceNow",
    companyShort: "ServiceNow",
    slug: "servicenow",
    period: "2014 - 2025",
    icon: Building2,
    responsibilities: [
      "Helped scale ServiceNow from ITSM into a global multi-workflow enterprise platform, expanding into employee, risk, finance, and operational domains.",
      "Founded and led NowX, ServiceNow's product incubation engine—launching 20+ net-new products across enterprise workflows, platform services, and AI-driven capabilities.",
      "Advanced enterprise AI and agentic strategies, including early governance, safety frameworks, and trust controls required for regulated adoption.",
      "Operated at the intersection of Product, Sales Engineering, GTM, and Executive Leadership—ensuring innovation translated into customer value, adoption velocity, and revenue impact.",
      "Built repeatable incubation and launch models aligning product, enablement, and customer success—accelerating time-to-value for new platform capabilities.",
    ],
  },
  {
    title: "Director, Solution Consulting — West",
    company: "ServiceNow",
    companyShort: "ServiceNow",
    slug: "servicenow-director",
    period: "2012 - 2014",
    icon: Building2,
    responsibilities: [
      "Built and scaled the Western Solution Consulting organization, establishing foundational enterprise pre-sales and customer engagement motions during rapid growth.",
      "Recruited and developed high-performing teams supporting and exceeding annual enterprise sales targets.",
      "Defined value-based selling strategies, including tailored demos, proof-of-value engagements, and executive narratives tied to customer outcomes.",
      "Partnered with Sales, Product, and Exec Leadership to shape deal strategy, influence roadmap priorities, and accelerate enterprise adoption.",
      "Helped land and expand strategic enterprise accounts—positioning ServiceNow as a platform partner, not a point-solution vendor.",
    ],
  },
  {
    title: "Solution Architect & Senior Roles",
    company: "ServiceNow",
    companyShort: "ServiceNow",
    slug: "servicenow-architect",
    period: "2006 - 2012",
    icon: Building2,
    responsibilities: [
      "Partnered with enterprise customers to translate complex requirements into scalable platform solutions during ServiceNow's hyper-growth phase.",
      "Closed 250+ enterprise logos and $250M+ in contract value across industries and global accounts.",
      "Led strategic wins with companies including Disney, Apple, Microsoft, Amazon, GE, and Intel—positioning ServiceNow as a long-term platform partner.",
      "Improved strategic win rates by 35% through custom demos, proof-of-concept engagements, and value-driven solution design.",
      "Mentored and developed 50+ solution consultants—helping scale the organization during rapid growth.",
      "Established solution design standards that reduced time-to-value by 40% and improved implementation consistency.",
    ],
  },
];

const skills = [
  {
    category: "Enterprise Consulting & GTM Execution",
    items: ["Enterprise GTM Strategy", "Value-Based Selling", "Executive POVs", "Enterprise Sales Engineering", "Customer Adoption & Expansion", "Stakeholder Alignment", "Team Leadership & Coaching"],
  },
  {
    category: "AI & Agentic Systems",
    items: ["Agentic Workflow Design", "Enterprise AI Governance & Safety", "LLM Strategy & Integration", "AI-Native Product Design", "Trust, Risk & Controls"],
  },
  {
    category: "Product, Platform & Operating Systems",
    items: ["Product Incubation (0→1 → Scale)", "Platform Strategy & Architecture", "Change Management", "Adoption Models", "Cross-Functional Operating Systems"],
  },
];

const projects = [
  { title: "Enterprise Vibe — GTM Narrative & Demo System", tags: ["GTM Strategy", "AI Workflows", "Enterprise Positioning"], description: "Built a narrative + demo framework showing how reusable templates and AI-native workflows can outperform legacy stacks with dramatically faster time-to-value." },
  { title: "AI-Native ITSM & Workflow Prototypes", tags: ["Agentic Systems", "Governance", "Change Management"], description: "Designed enterprise-grade agentic workflows aligned to real change control, risk, and compliance requirements—built to be deployed, not just demonstrated." },
  { title: "Workflow & Agent Builder Experiments", tags: ["Internal Tools", "AI Automation", "Rapid Prototyping"], description: "Built multiple prototypes across IT, marketing, and reporting to validate repeatable, agent-driven workflow patterns." },
  { title: "Enterprise POVs & Executive Demos", tags: ["Sales Enablement", "Strategic Storytelling"], description: "Created executive-ready demos and POVs translating complex platforms into clear business outcomes—accelerating confidence and shortening sales cycles." },
];

const companyLogos = [
  { name: "Netflix", icon: SiNetflix },
  { name: "Apple", icon: SiApple },
  { name: "NVIDIA", icon: SiNvidia },
  { name: "Disney", icon: Building2 },
  { name: "Intel", icon: SiIntel },
  { name: "American Express", icon: SiAmericanexpress },
  { name: "Boeing", icon: SiBoeing },
  { name: "Microsoft", icon: Building2 },
  { name: "Amazon", icon: SiAmazon },
  { name: "Google", icon: SiGoogle },
  { name: "Costco", icon: Building2 },
  { name: "Target", icon: SiTarget },
  { name: "Morgan Stanley", icon: Building2 },
  { name: "AIG", icon: Building2 },
  { name: "TD Bank", icon: Building2 },
  { name: "Expedia", icon: SiExpedia },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [showMusicModal, setShowMusicModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const animatedElements = document.querySelectorAll(
      ".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale"
    );
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 right-0 h-1 bg-red-700 z-[10000]" />
      <header
        className={`fixed top-1 left-0 right-0 z-[9999] transition-all duration-300 border-b border-red-700/50 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
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
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setShowMusicModal(true)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="button-header-music"
                >
                  <Music className="h-5 w-5" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>My Music Portfolio</p>
              </TooltipContent>
            </Tooltip>
            <a
              href="https://www.linkedin.com/in/eschroeder/"
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
              <a href="#contact">LET'S CONNECT</a>
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
              <button
                onClick={() => {
                  setShowMusicModal(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="button-mobile-music"
              >
                <Music className="h-4 w-4" />
                Music Portfolio
              </button>
              <a
                href="#contact"
                className="block text-sm font-medium text-primary"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-nav-contact"
              >
                LET'S CONNECT
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
                Technical GTM Consultant for{" "}
                <span className="text-primary">Enterprise AI That Ships, Sells, and Scales</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground mb-6 font-semibold animate-fade-in-up opacity-0 animation-delay-200">
                Enterprise teams are under pressure to "do AI."
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl animate-fade-in-up opacity-0 animation-delay-300">
                But most efforts stall in pilots, disconnected demos, or features customers don't trust or adopt. I work with founders and enterprise leaders to turn emerging tech—especially <strong className="text-foreground">AI and agentic systems</strong>—into <strong className="text-foreground">revenue-driving, production-ready platforms</strong>. I operate across <strong className="text-foreground">product, engineering, and go-to-market</strong> with a builder's mindset: diagnosing what's blocking adoption, aligning teams, and delivering clear narratives and repeatable execution. With <strong className="text-foreground">25+ years</strong> building, scaling, and selling enterprise software, I specialize in helping organizations translate complex systems into <strong className="text-foreground">clear value stories</strong>, design <strong className="text-foreground">trusted AI workflows</strong> with governance baked in, build <strong className="text-foreground">repeatable GTM motions</strong>, and accelerate adoption from first deployment to durable expansion.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 animation-delay-400">
                <Button asChild size="lg" className="rounded-full px-8 border border-red-700" data-testid="link-linkedin">
                  <a href="https://www.linkedin.com/in/eschroeder/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn Profile
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-red-700" data-testid="link-email">
                  <a href="mailto:ericschrdr@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Me
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end animate-scale-in">
              <Card className="mb-4 p-4 bg-card/80 backdrop-blur-sm border-red-700/50 rounded-xl">
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
                <Button size="sm" className="w-full rounded-lg border border-red-700" onClick={() => setShowSummaryModal(true)} data-testid="button-summary">
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
                  className="relative w-64 h-64 md:w-80 md:h-80 object-cover object-top rounded-full shadow-2xl border-2 border-red-700/70"
                  data-testid="img-profile"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/50" id="milestones">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-milestones-title">
              Career & Personal Milestones
            </h2>
            <p className="text-muted-foreground text-lg">
              Key moments that reflect both professional growth and how I show up for customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className={`p-6 hover-elevate transition-all duration-300 border-red-700/50 scroll-animate scroll-delay-${(index % 3 + 1) * 100}`} data-testid={`card-milestone-${index}`}>
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
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-principles-title">
              How I Operate
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              What clients can expect when we work together.
            </p>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" style={{ transform: 'translateX(-50%)' }} />
            
            <div className="space-y-12 md:space-y-24">
              {principles.map((principle, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={index} className="relative">
                    <div className={`absolute left-1/2 top-8 w-2.5 h-2.5 bg-red-700 border border-muted-foreground/50 rounded-full hidden md:block animate-glow-pulse-delay-${index % 5}`} style={{ transform: 'translateX(-50%)' }} />
                    
                    <div className={`md:w-[45%] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <Card className={`p-6 hover-elevate transition-all duration-300 border-red-700/50 ${isLeft ? 'scroll-animate-left' : 'scroll-animate-right'}`} data-testid={`card-principle-${index}`}>
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
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-experience-title">
              Professional Experience
            </h2>
          </div>

          <div className="mb-16">
            <h3 className="text-xl font-semibold text-foreground text-center mb-8">Trusted by Leading Enterprise Organizations</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {companyLogos.map((logo, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2.5 bg-card rounded-md border border-red-700/50 hover-elevate transition-all duration-200" data-testid={`logo-company-${index}`}>
                  <logo.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground font-medium text-sm">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isLast = index === experiences.length - 1;
              
              return (
                <div 
                  key={index} 
                  className={`relative mb-12 md:mb-16 ${isEven ? 'md:pr-[15%]' : 'md:pl-[15%]'} ${isEven ? 'scroll-animate-left' : 'scroll-animate-right'}`}
                  data-testid={`card-experience-${index}`}
                >
                  {index > 0 && (
                    <div className="absolute left-1/2 -top-8 flex flex-col items-center" style={{ transform: 'translateX(-50%)' }}>
                      <div className="w-0.5 h-4 bg-primary/50" />
                      <div className={`w-2.5 h-2.5 bg-red-700 border border-muted-foreground/50 rounded-full animate-glow-pulse-delay-${(index * 2) % 5}`} />
                    </div>
                  )}
                  
                  <Card className="overflow-hidden relative border-red-700/50">
                    <div className="bg-card border-b border-border px-4 py-2.5 flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <span className="font-mono text-xs text-primary ml-4">
                        root@eric:~/experience/{exp.slug} $ _
                      </span>
                    </div>
                    
                    <div className="p-6 md:p-8">
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">{exp.title}</h3>
                        <div className="p-2.5 bg-primary/10 rounded-lg flex-shrink-0">
                          <exp.icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 bg-muted rounded-md flex items-center justify-center flex-shrink-0">
                          <Building2 className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{exp.companyShort}</p>
                          <p className="text-sm text-muted-foreground">{exp.period}</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-primary font-mono mt-0.5 flex-shrink-0">{">"}</span>
                            <span className="text-muted-foreground text-sm leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                  
                  {!isLast && (
                    <div className="absolute left-1/2 -bottom-8 flex flex-col items-center" style={{ transform: 'translateX(-50%)' }}>
                      <div className={`w-2.5 h-2.5 bg-red-700 border border-muted-foreground/50 rounded-full animate-glow-pulse-delay-${(index * 3 + 1) % 5}`} />
                      <div className="w-0.5 h-4 bg-primary/50" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" id="skills">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-skills-title">
              Skills & Expertise
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className={`p-6 border-red-700/50 scroll-animate scroll-delay-${(index + 1) * 100}`} data-testid={`card-skill-${index}`}>
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
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-projects-title">
              What I've Delivered
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className={`p-6 hover-elevate transition-all duration-300 group flex flex-col border-red-700/50 scroll-animate-scale scroll-delay-${(index % 3 + 1) * 100}`} data-testid={`card-project-${index}`}>
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
          <Card className="p-6 md:p-10 text-center bg-gradient-to-br from-card via-card to-primary/5 border-red-700/50 scroll-animate-scale">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4" data-testid="text-contact-title">
              Looking Forward to a Conversation
            </h2>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              If you're serious about moving AI from pilots to production—and aligning product, engineering, and GTM so it ships, sells, and scales—let's connect. I typically start with a working session to understand your goals, friction points, and path to measurable outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="border border-red-700" data-testid="button-contact-email">
                <a href="mailto:ericschrdr@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  ericschrdr@gmail.com
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-red-700" data-testid="button-contact-linkedin">
                <a href="https://www.linkedin.com/in/eschroeder/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  linkedin.com/in/eric-schroeder
                </a>
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Based in San Diego, CA</span>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-red-700/50">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Eric Schroeder. All rights reserved.</p>
        </div>
      </footer>

      <AISummaryModal isOpen={showSummaryModal} onClose={() => setShowSummaryModal(false)} />
      <MusicPortfolioModal isOpen={showMusicModal} onClose={() => setShowMusicModal(false)} />
    </div>
  );
}
