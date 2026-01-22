import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, MapPin, Heart, Building2, GraduationCap, Users, Target, Lightbulb, MessageSquare, Rocket, Menu, X } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import { AISummaryModal } from "@/components/ai-summary-modal";

const navLinks = [
  { href: "#principles", label: "HOW I OPERATE" },
  { href: "#experience", label: "WHERE I'VE BUILT" },
  { href: "#projects", label: "WHAT I'VE DELIVERED" },
  { href: "#skills", label: "CAPABILITIES" },
];

const milestones = [
  { icon: Heart, title: "Husband & Father", description: "Grounded leadership starts at home. I value long-term thinking, responsibility, and building systems that last." },
  { icon: Building2, title: "Category Creation at Scale", description: "Helped scale ServiceNow from an early IT ticketing product into a global ITSM and Enterprise Service Management leader, contributing to a $1B+ category." },
  { icon: Lightbulb, title: "Product Incubation & 0→1 Leadership", description: "Led incubation initiatives (NowX) launching multiple new products, frameworks, and AI capabilities—bridging early experimentation with enterprise-grade execution." },
  { icon: Users, title: "Bridging Product, GTM & Enterprise Reality", description: "Consistently translate deep technical capability into executive-level value stories, adoption playbooks, and trusted deployment patterns." },
  { icon: Target, title: "AI & Agentic Systems Leadership", description: "Advanced enterprise-safe AI and agentic workflow strategies with a focus on governance, risk, and real-world adoption—not demos in isolation." },
  { icon: GraduationCap, title: "Advisor & Operator", description: "Partner with founders and leadership teams to operationalize innovation, sharpen positioning, and accelerate GTM execution through Cogent West." },
];

const principles = [
  { title: "Assume Positive Intent", description: "I default to trust and curiosity. Most friction disappears when people feel heard, respected, and understood.", icon: Heart },
  { title: "Depth Creates Leverage", description: "Understanding systems at the implementation level leads to better decisions, stronger credibility, and faster execution.", icon: Lightbulb },
  { title: "Outcomes Over Titles", description: "Leadership is measured by the success of teams and customers—not hierarchy. My focus is enablement, alignment, and accountability.", icon: Users },
  { title: "Consistency Compounds", description: "Sustained effort and learning through setbacks outperform raw talent. Small gains, repeated, create real advantage.", icon: Target },
  { title: "Shorten the Loop", description: "Candid feedback applied quickly accelerates growth—for individuals, teams, and products.", icon: MessageSquare },
  { title: "Bias Toward Action", description: "Clear strategy matters, but progress requires motion. Focused teams that execute quickly—especially with AI-native leverage—win.", icon: Rocket },
];

const experiences = [
  {
    title: "VP — Sales Engineering & Post-Sales",
    company: "Standard Template Labs (Copy.ai)",
    companyShort: "Copy.ai",
    slug: "copyai",
    period: "2025 - Present",
    icon: Rocket,
    responsibilities: [
      "Own the full customer lifecycle across enterprise sales, implementation, and post-sales adoption for an AI-native platform.",
      "Drive value-based sales motions and executive-level POVs that connect agentic workflows to measurable business outcomes.",
      "Partner closely with Product and Engineering to influence roadmap based on real enterprise adoption signals.",
      "Establish scalable post-sales playbooks that balance speed, trust, and governance for enterprise customers.",
    ],
  },
  {
    title: "VP of Product Management & AI Agent Safety (NowX)",
    company: "ServiceNow",
    companyShort: "ServiceNow",
    slug: "servicenow",
    period: "2006 - 2025",
    icon: Building2,
    responsibilities: [
      "Helped scale ServiceNow from early ITSM roots into a global enterprise platform exceeding $1B in revenue.",
      "Led NowX incubation efforts launching 14 products across new workflows, AI, and platform capabilities.",
      "Advanced enterprise AI strategy, including early work on agentic systems, governance, and safety.",
      "Partnered cross-functionally across product, GTM, and exec leadership to create category-defining outcomes.",
    ],
  },
  {
    title: "Advisor / Operator",
    company: "Cogent West",
    companyShort: "Cogent West",
    slug: "cogentwest",
    period: "2025 - Present",
    icon: Lightbulb,
    responsibilities: [
      "Advise founders and leadership teams on enterprise AI strategy, GTM positioning, and operating models.",
      "Build enterprise narratives, demos, and adoption frameworks that accelerate trust and buying confidence.",
      "Support early-stage and growth-stage teams in turning innovation into durable market traction.",
    ],
  },
];

const skills = [
  {
    category: "Enterprise GTM & Leadership",
    items: ["Value-Based Selling & Executive POVs", "Enterprise Sales Engineering", "Customer Adoption & Expansion", "Stakeholder Alignment & Exec Communication", "Team Leadership & Coaching"],
  },
  {
    category: "AI & Platform Strategy",
    items: ["Agentic Workflow Design", "Enterprise AI Governance & Safety", "LLM Strategy & Integration", "AI-Native Product Design"],
  },
  {
    category: "Product & Systems Thinking",
    items: ["Product Incubation (0→1 → Scale)", "Platform Strategy & Architecture", "Change Management & Adoption Models", "Cross-Functional Operating Systems"],
  },
];

const projects = [
  { title: "Enterprise Vibe — GTM Narrative & Demo System", tags: ["GTM Strategy", "AI Workflows", "Enterprise Positioning"], description: "Developed a narrative and demo framework showing how vibe-coding plus reusable templates can outperform legacy enterprise stacks with faster time-to-value." },
  { title: "AI-Native ITSM & Workflow Prototypes", tags: ["Agentic Systems", "Governance", "Change Management"], description: "Designed enterprise-grade agentic workflows aligned to real change control, risk, and compliance needs." },
  { title: "Workflow & Agent Builder Experiments", tags: ["Internal Tools", "AI Automation", "Rapid Prototyping"], description: "Built multiple prototypes across IT, marketing, and reporting to explore repeatable agent-driven workflows." },
  { title: "Enterprise POVs & Executive Demos", tags: ["Sales Enablement", "Strategic Storytelling"], description: "Created executive-ready demos and POVs that translate complex platforms into clear business impact narratives." },
];

const companyLogos = [
  "Netflix", "Apple", "NVIDIA", "Disney", "Intel", "American Express", "Boeing", "Microsoft", "Amazon", "Google"
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);

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
        className={`fixed top-1 left-0 right-0 z-[9999] transition-all duration-300 border-b border-white/10 ${
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
              <a href="#contact">LET'S WORK TOGETHER</a>
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
                LET'S WORK TOGETHER
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
                The technical barrier to building enterprise software is collapsing.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl animate-fade-in-up opacity-0 animation-delay-300">
                I operate at the intersection of <strong className="text-foreground">product, engineering, and go-to-market</strong>, bringing a builder's mindset to enterprise GTM leadership. I help organizations translate emerging technologies—especially AI and agentic systems—into <strong className="text-foreground">trusted, scalable, revenue-driving solutions</strong>. With 25+ years building, scaling, and selling enterprise platforms, I specialize in turning complex systems into clear narratives, repeatable motions, and measurable outcomes—from early incubation to $1B+ categories.
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
                <Button size="sm" className="w-full rounded-lg" onClick={() => setShowSummaryModal(true)} data-testid="button-summary">
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
              Key moments that reflect both professional growth and personal values.
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
              How I Operate
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

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative" data-testid={`card-experience-${index}`}>
                {index > 0 && (
                  <div className="absolute left-1/2 -top-4 w-3 h-3 bg-primary rounded-full" style={{ transform: 'translateX(-50%)' }} />
                )}
                <Card className="overflow-hidden">
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
              </div>
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
              What I've Delivered
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
              Let's Work Together
            </h2>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to explore how AI-native systems, strong GTM execution, and trusted adoption frameworks can drive real enterprise outcomes? Let's connect.
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
              <span>Based in San Diego, CA</span>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Eric Schroeder. All rights reserved.</p>
        </div>
      </footer>

      <AISummaryModal isOpen={showSummaryModal} onClose={() => setShowSummaryModal(false)} />
    </div>
  );
}
