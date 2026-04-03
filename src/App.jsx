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
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-xl text-purple-900 tracking-tight">
          S<span className="text-purple-600">.</span>Benford
        </span>
        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l}>
              <button onClick={() => scrollTo(l)}
                className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors">
                {l}
              </button>
            </li>
          ))}
        </ul>
        {/* Mobile */}
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-6 h-0.5 bg-purple-900 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}/>
          <span className={`block w-6 h-0.5 bg-purple-900 ${menuOpen ? "opacity-0" : ""}`}/>
          <span className={`block w-6 h-0.5 bg-purple-900 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 shadow-xl">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="text-left font-medium text-purple-900">{l}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 bg-purple-50">
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-20 blur-3xl"
        style={{background:"radial-gradient(circle, #7c3aed, #2563eb)"}} />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-20 blur-3xl"
        style={{background:"radial-gradient(circle, #3b82f6, #6d28d9)"}} />

      <div className="max-w-6xl mx-auto w-full pt-20 relative z-10">
        <p className="font-mono text-purple-600 text-sm mb-4 tracking-widest uppercase">
          Computer Science • AI • HCI
        </p>
        <h1 className="font-bold text-6xl md:text-8xl text-slate-900 leading-tight mb-6">
          Sabrina<br/>
          <span className="italic text-purple-600">Benford</span>
        </h1>
        <p className="text-slate-600 text-lg md:text-xl max-w-xl leading-relaxed mb-10 border-l-4 border-blue-500 pl-6">
          Undergraduate CS student at UNL with a passion for building intelligent systems. 
          Dean's List · CMU Security Alumna · Educator.
        </p>
        <div className="flex flex-wrap gap-4">
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}
            className="px-8 py-3 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-all hover:-translate-y-1 shadow-lg shadow-purple-200">
            Get in touch
          </button>
          <a href="https://www.linkedin.com/in/sabrina-benford-48a8b5329/" target="_blank" rel="noreferrer"
            className="px-8 py-3 border border-purple-200 text-purple-700 font-medium rounded-full hover:bg-purple-50 transition-all">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}

// ── ABOUT ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-blue-100" />
          <div className="relative rounded-2xl bg-purple-900 p-8 text-white shadow-xl">
            <p className="font-mono text-purple-300 text-xs tracking-widest uppercase mb-6">Quick Facts</p>
            {[
              ["🎓", "University of Nebraska-Lincoln"],
              ["📊", "GPA 3.875 — Dean's List"],
              ["🏫", "CMU IT Lab: Summer Security Intensive"],
              ["📍", "Lincoln, NE"],
              ["💡", "Interests: AI, HCI, Security"],
            ].map(([icon, text]) => (
              <div key={text} className="flex items-center gap-3 mb-4 last:mb-0">
                <span className="text-xl">{icon}</span>
                <span className="text-purple-100 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-blue-600 text-xs tracking-widest uppercase mb-4">About Me</p>
          <h2 className="font-bold text-4xl md:text-5xl text-slate-900 mb-6 leading-tight">
            Building smarter, <em className="text-purple-600 not-italic">more human</em> technology.
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            I'm a Computer Science undergraduate at UNL, minoring in Mathematics, focusing on AI and HCI. 
            Beyond coursework, I mentor TAs and lead the Learning Assistant Program.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── SKILLS ───────────────────────────────────────────────────────────────────
const techSkills = [
  { name: "Python", level: 90, color: "#7c3aed" },
  { name: "JavaScript / React", level: 80, color: "#2563eb" },
  { name: "C", level: 75, color: "#6d28d9" },
  { name: "Linux & Bash", level: 70, color: "#3b82f6" },
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-purple-400 text-xs tracking-widest uppercase mb-4">What I know</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {techSkills.map(s => (
            <div key={s.name} className="mb-4">
              <div className="flex justify-between mb-2">
                <span>{s.name}</span>
                <span className="opacity-50">{s.level}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${s.level}%`, backgroundColor: s.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── EXPERIENCE ───────────────────────────────────────────────────────────────
const jobs = [
  {
    title: "Senior Leader — LA Program",
    org: "University of Nebraska-Lincoln",
    period: "2022 – 2025",
    color: "#7c3aed",
    bullets: ["Managed undergraduate TAs", "Designed training programs", "Improved student outcomes"],
  },
  {
    title: "Teaching Assistant — CSCE 231/428",
    org: "University of Nebraska-Lincoln",
    period: "2024 – Present",
    color: "#2563eb",
    bullets: ["Led weekly lab sections", "Assessed student code", "Held office hours"],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {jobs.map(job => (
            <div key={job.title} className="p-8 rounded-2xl border border-purple-100 bg-purple-50/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <span className="text-xs font-mono font-bold uppercase" style={{color: job.color}}>{job.period}</span>
              <h3 className="text-xl font-bold mt-2">{job.title}</h3>
              <p className="text-slate-500 mb-4">{job.org}</p>
              <ul className="space-y-2 text-sm text-slate-600">
                {job.bullets.map(b => <li key={b}>• {b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── EDUCATION ────────────────────────────────────────────────────────────────
function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-purple-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/20 transition-all hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-2">UNL</h3>
            <p className="text-purple-300 mb-4 font-mono text-sm font-bold tracking-widest uppercase">GPA 3.875</p>
            <p className="opacity-80">B.S. Computer Science · Minor: Mathematics</p>
          </div>
          <div className="p-8 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/20 transition-all hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-2">CMU IT Lab</h3>
            <p className="text-blue-400 mb-4 font-mono text-sm font-bold tracking-widest uppercase">Summer 2025</p>
            <p className="opacity-80">Summer Security Intensive Program scholar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CONTACT ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-slate-600 mb-10">Email: sabrinaeb286@gmail.com</p>
        <div className="flex justify-center gap-6">
          <a href="https://www.linkedin.com/in/sabrina-benford-48a8b5329/" target="_blank" className="text-purple-600 font-bold hover:underline">LinkedIn</a>
          <span className="text-slate-300">|</span>
          <span className="text-slate-500 font-mono text-sm">+1 (402) 480-3358</span>
        </div>
        <p className="mt-20 text-xs text-slate-400 uppercase tracking-widest">© 2026 Sabrina Benford</p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
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
