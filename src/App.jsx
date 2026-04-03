import { useState, useEffect, useRef } from "react";

// ── NAV ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["About","Skills","Experience","Education","Contact"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-cream/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`} style={{backgroundColor: scrolled ? "rgba(245,240,232,0.92)" : "transparent"}}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-display font-bold text-xl text-ink tracking-tight">
          S<span className="text-coral">.</span>Benford
        </span>
        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l}>
              <button onClick={() => scrollTo(l)}
                className="font-body text-sm font-medium text-ink/70 hover:text-coral transition-colors duration-200">
                {l}
              </button>
            </li>
          ))}
        </ul>
        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-6 h-0.5 bg-ink transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}/>
          <span className={`block w-6 h-0.5 bg-ink transition-all ${menuOpen ? "opacity-0" : ""}`}/>
          <span className={`block w-6 h-0.5 bg-ink transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-ink/10 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              className="text-left font-body text-base font-medium text-ink hover:text-coral transition-colors">
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{background:"radial-gradient(circle, #E8664A, #C9A84C)"}} />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-10 blur-3xl"
        style={{background:"radial-gradient(circle, #2D3561, #7A9E7E)"}} />

      {/* Large decorative letter */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block">
        <span className="font-display font-black text-[28vw] leading-none text-ink/[0.03]">S</span>
      </div>

      <div className="max-w-6xl mx-auto w-full pt-20">
        <p className="font-mono text-coral text-sm mb-4 tracking-widest uppercase animate-fade-up" style={{animationDelay:"0.1s",opacity:0,animationFillMode:"forwards"}}>
          Computer Science • AI • HCI
        </p>
        <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-ink leading-tight mb-6 animate-fade-up"
          style={{animationDelay:"0.2s",opacity:0,animationFillMode:"forwards"}}>
          Sabrina<br/>
          <span className="italic text-slate">Benford</span>
        </h1>
        <p className="font-body text-ink/60 text-lg md:text-xl max-w-xl leading-relaxed mb-10 animate-fade-up"
          style={{animationDelay:"0.35s",opacity:0,animationFillMode:"forwards"}}>
          Undergraduate CS student at UNL with a passion for building intelligent systems 
          and making computing more human. Dean's List · CMU Security Alumna · Educator.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-up" style={{animationDelay:"0.5s",opacity:0,animationFillMode:"forwards"}}>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}
            className="px-8 py-3 bg-ink text-cream font-body font-medium rounded-full hover:bg-slate transition-colors duration-200 hover:-translate-y-0.5 transform">
            Get in touch
          </button>
          <a href="https://www.linkedin.com/in/sabrina-benford-48a8b5329/" target="_blank" rel="noreferrer"
            className="px-8 py-3 border border-ink/30 text-ink font-body font-medium rounded-full hover:border-coral hover:text-coral transition-all duration-200 hover:-translate-y-0.5 transform">
            LinkedIn ↗
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-ink/30 text-xs font-mono tracking-widest uppercase">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-ink/30 to-transparent" />
      </div>
    </section>
  );
}

// ── ABOUT ────────────────────────────────────────────────────────────────────
function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) setVisible(true); }, {threshold:0.2});
    if(ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left – decorative card */}
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-coral/20" />
            <div className="relative rounded-2xl bg-slate p-8 text-cream">
              <p className="font-mono text-coral text-xs tracking-widest uppercase mb-6">Quick Facts</p>
              {[
                ["🎓", "University of Nebraska-Lincoln"],
                ["📊", "GPA 3.875 — Dean's List"],
                ["🏫", "CMU IT Lab: Summer Security Intensive"],
                ["📍", "Lincoln, NE"],
                ["💡", "Interests: AI, HCI, Security"],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-3 mb-4 last:mb-0">
                  <span className="text-xl">{icon}</span>
                  <span className="font-body text-cream/80 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right – bio text */}
        <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
          <p className="font-mono text-coral text-xs tracking-widest uppercase mb-4">About Me</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ink mb-6 leading-tight">
            Building smarter, <em>more human</em> technology.
          </h2>
          <p className="font-body text-ink/60 leading-relaxed mb-4">
            I'm a Computer Science undergraduate at the University of Nebraska-Lincoln, minoring in Mathematics, 
            with a focus on Artificial Intelligence and Human-Computer Interaction. My academic journey has been 
            driven by a single question: how can technology genuinely serve people?
          </p>
          <p className="font-body text-ink/60 leading-relaxed mb-4">
            Beyond coursework, I've spent years as both a Teaching Assistant and Senior Leader of the Learning 
            Assistant Program — mentoring TAs, running lab sections, and helping students genuinely understand 
            the craft of programming.
          </p>
          <p className="font-body text-ink/60 leading-relaxed">
            This past summer I was selected for the highly competitive CMU IT Lab: Summer Security Intensive, 
            where I deepened my expertise in cybersecurity principles and practices.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── SKILLS ───────────────────────────────────────────────────────────────────
const techSkills = [
  { name: "Python", level: 90, color: "#E8664A" },
  { name: "JavaScript / React", level: 80, color: "#C9A84C" },
  { name: "C", level: 75, color: "#2D3561" },
  { name: "HTML & CSS", level: 85, color: "#7A9E7E" },
  { name: "Linux & Bash", level: 70, color: "#E8664A" },
  { name: "LaTeX", level: 65, color: "#C9A84C" },
  { name: "OpenCV", level: 60, color: "#2D3561" },
  { name: "PyQt6", level: 65, color: "#7A9E7E" },
];

const softwareSkills = [
  "Programming large-scale software","Requirements engineering",
  "Object-oriented design","Software Architecture","Software testing (black/white box)",
  "Continuous integration","Code Smells & Refactoring","Static code analysis",
  "Structured analysis & design","System maintenance techniques",
];

function SkillBar({ name, level, color, animate }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="font-body text-sm font-medium text-ink">{name}</span>
        <span className="font-mono text-xs text-ink/40">{level}%</span>
      </div>
      <div className="h-1.5 bg-ink/10 rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: animate ? `${level}%` : "0%", backgroundColor: color }} />
      </div>
    </div>
  );
}

function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) setVisible(true); }, {threshold:0.15});
    if(ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-24 px-6 bg-ink">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-coral text-xs tracking-widest uppercase mb-4">What I know</p>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-cream mb-16">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-body font-semibold text-cream/60 text-sm uppercase tracking-wide mb-8">Technical Proficiency</h3>
            {techSkills.map(s => <SkillBar key={s.name} {...s} animate={visible} />)}
          </div>

          <div>
            <h3 className="font-body font-semibold text-cream/60 text-sm uppercase tracking-wide mb-8">Software Engineering</h3>
            <div className="flex flex-wrap gap-2">
              {softwareSkills.map(skill => (
                <span key={skill}
                  className="px-3 py-1.5 border border-cream/10 text-cream/70 text-xs font-body rounded-full hover:border-coral hover:text-coral transition-all duration-200 cursor-default">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-xl border border-cream/10">
              <p className="font-mono text-coral text-xs tracking-widest uppercase mb-3">Also familiar with</p>
              <div className="flex flex-wrap gap-3">
                {["GitHub","PowerPoint","Slack","OpenCV","PyQt6","LaTeX"].map(t => (
                  <span key={t} className="font-mono text-cream/50 text-xs">#{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── EXPERIENCE ───────────────────────────────────────────────────────────────
const jobs = [
  {
    title: "Senior Leader — Learning Assistant Program",
    org: "University of Nebraska-Lincoln",
    period: "Jan 2022 – Dec 2025",
    color: "coral",
    bullets: [
      "Managed and mentored a team of undergraduate Teaching Assistants for beginner CS courses.",
      "Designed training programs and workflows to improve TA effectiveness and student outcomes.",
      "Coordinated scheduling, grading standards, and pedagogical best practices across the program.",
    ],
  },
  {
    title: "Teaching Assistant — CSCE 231 & CSCE 428",
    org: "University of Nebraska-Lincoln",
    period: "Aug 2024 – Present",
    color: "gold",
    bullets: [
      "Lead weekly lab and recitation sections for undergraduate computer science courses.",
      "Assess and provide detailed feedback on student assignments and projects.",
      "Hold office hours and guide students through complex programming and algorithmic concepts.",
    ],
  },
];

function ExperienceCard({ job, index, visible }) {
  const colorMap = { coral: "#E8664A", gold: "#C9A84C" };
  return (
    <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}>
      <div className="group relative p-8 rounded-2xl bg-cream border border-ink/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-default">
        <div className="absolute top-8 right-8 w-2 h-2 rounded-full" style={{ backgroundColor: colorMap[job.color] }} />
        <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: colorMap[job.color] }}>{job.period}</p>
        <h3 className="font-display font-bold text-xl text-ink mb-1">{job.title}</h3>
        <p className="font-body text-ink/50 text-sm mb-5">{job.org}</p>
        <ul className="space-y-2">
          {job.bullets.map(b => (
            <li key={b} className="flex items-start gap-2 text-sm text-ink/60 font-body">
              <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: colorMap[job.color] }} />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) setVisible(true); }, {threshold:0.1});
    if(ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-coral text-xs tracking-widest uppercase mb-4">Where I've worked</p>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-ink mb-16">Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {jobs.map((job, i) => <ExperienceCard key={job.title} job={job} index={i} visible={visible} />)}
        </div>
      </div>
    </section>
  );
}

// ── EDUCATION ────────────────────────────────────────────────────────────────
function Education() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) setVisible(true); }, {threshold:0.1});
    if(ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="education" ref={ref} className="py-24 px-6 bg-slate">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-coral text-xs tracking-widest uppercase mb-4">Academic background</p>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-cream mb-16">Education</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* UNL Card */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="group p-8 rounded-2xl bg-cream/10 border border-cream/10 hover:-translate-y-2 hover:bg-cream/15 transition-all duration-300 cursor-default h-full">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-coral/20 flex items-center justify-center text-2xl">🎓</div>
                <span className="font-mono text-xs text-cream/40">2022 – 2025</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-cream mb-2">University of Nebraska-Lincoln</h3>
              <p className="font-body text-cream/60 mb-1">B.S. Computer Science</p>
              <p className="font-body text-cream/40 text-sm mb-6">Minor: Mathematics · Lincoln, NE</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-coral/20 text-coral text-xs font-mono rounded-full">GPA 3.875</span>
                <span className="px-3 py-1 bg-gold/20 text-yellow-300 text-xs font-mono rounded-full">Dean's List</span>
              </div>
              <div className="mt-6 pt-6 border-t border-cream/10">
                <p className="font-body text-cream/40 text-xs uppercase tracking-wide mb-3">Relevant Areas</p>
                <p className="font-body text-cream/60 text-sm leading-relaxed">
                  Artificial Intelligence · Human-Computer Interaction · Algorithms · 
                  Software Engineering · Computer Security · Systems Programming
                </p>
              </div>
            </div>
          </div>

          {/* CMU Card */}
          <div className={`transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="group p-8 rounded-2xl bg-cream/10 border border-cream/10 hover:-translate-y-2 hover:bg-cream/15 transition-all duration-300 cursor-default h-full">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-2xl">🛡️</div>
                <span className="font-mono text-xs text-cream/40">Summer 2025</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-cream mb-2">CMU IT Lab</h3>
              <p className="font-body text-cream/60 mb-1">Summer Security Intensive Program</p>
              <p className="font-body text-cream/40 text-sm mb-6">Carnegie Mellon University</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-sage/30 text-green-300 text-xs font-mono rounded-full">Competitive Selection</span>
              </div>
              <div className="mt-6 pt-6 border-t border-cream/10">
                <p className="font-body text-cream/40 text-xs uppercase tracking-wide mb-3">Focus Areas</p>
                <p className="font-body text-cream/60 text-sm leading-relaxed">
                  Cybersecurity Fundamentals · Threat Modeling · Network Security · 
                  Security Analysis · Hands-on Intensive Labs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CONTACT ──────────────────────────────────────────────────────────────────
function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText("sabrinaeb286@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-coral text-xs tracking-widest uppercase mb-4">Say hello</p>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-ink mb-6">Let's Connect</h2>
        <p className="font-body text-ink/60 text-lg max-w-xl mb-14 leading-relaxed">
          Whether you're interested in research collaboration, job opportunities, or just want to talk 
          about AI and technology — my inbox is open.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            { icon: "✉️", label: "Email", value: "sabrinaeb286@gmail.com", action: copy, actionLabel: copied ? "Copied!" : "Copy" },
            { icon: "💼", label: "LinkedIn", value: "sabrina-benford", action: () => window.open("https://www.linkedin.com/in/sabrina-benford-48a8b5329/","_blank"), actionLabel: "Visit ↗" },
            { icon: "📍", label: "Location", value: "Lincoln, NE 68506", action: null, actionLabel: null },
          ].map(item => (
            <div key={item.label}
              className="group p-6 rounded-2xl border border-ink/10 bg-cream hover:border-coral hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="text-2xl mb-3">{item.icon}</div>
              <p className="font-mono text-xs text-ink/40 uppercase tracking-wide mb-1">{item.label}</p>
              <p className="font-body text-sm text-ink font-medium mb-4 break-all">{item.value}</p>
              {item.action && (
                <button onClick={item.action}
                  className="text-xs font-mono text-coral hover:text-ink transition-colors">
                  {item.actionLabel}
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-ink/40 text-sm">
            © 2025 Sabrina E. Benford · Built with React & Tailwind CSS
          </p>
          <p className="font-mono text-xs text-ink/30">+1 (402) 480-3358</p>
        </div>
      </div>
    </section>
  );
}

// ── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen" style={{backgroundColor:"#F5F0E8"}}>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}
