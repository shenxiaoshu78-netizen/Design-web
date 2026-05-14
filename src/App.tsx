/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Menu, X, Globe, ArrowUpRight, Github, 
  Linkedin, Twitter, Code2, Paintbrush, 
  Cpu, Layers, ExternalLink 
} from 'lucide-react';
import { cn } from './lib/utils';
import './i18n';

// --- Data ---

const PROJECTS = [
  {
    id: 1,
    title: 'Process Tutorial',
    category: '3D / Visualization',
    image: 'input_file_0.png',
    link: '#'
  },
  {
    id: 2,
    title: 'Kinetica OS',
    category: 'System Design',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 3,
    title: 'Neural Lens',
    category: 'AI / Graphics',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2940&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 4,
    title: 'Prism Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2942&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 5,
    title: 'Lumina VR',
    category: 'Spatial Design',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2940&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 6,
    title: 'Vertex Core',
    category: 'Web Experience',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    link: '#'
  }
];

const SKILLS = [
  { icon: Paintbrush, title: 'Visual Identity', desc: 'Crafting unique brands and design systems.' },
  { icon: Code2, title: 'Web Experience', desc: 'Building high-performance interactive apps.' },
  { icon: Cpu, title: 'AI Integration', desc: 'Leveraging intelligence for smart interfaces.' },
  { icon: Layers, title: 'Spatial Design', desc: 'Designing for immersive and 3D environments.' },
];

// --- Components ---

function NavBar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLng = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(nextLng);
  };

  const navItems = ['work', 'services', 'about', 'contact'];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-0 flex items-center h-20 border-b border-gray-200",
      scrolled ? "bg-white/90 backdrop-blur-md px-12" : "bg-transparent px-12"
    )}>
      <div className="w-full flex justify-between items-center">
        <motion.div 
          className="font-bold tracking-tighter text-2xl uppercase flex items-center space-x-2"
        >
          <span>Aetheria Studio</span>
          <span className="text-gray-300 hidden sm:inline">// 设计</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:text-black transition-colors"
            >
              {t(`nav.${item}`)}
            </a>
          ))}
          <div className="flex items-center space-x-4 pl-4 border-l border-gray-200">
            <button 
              onClick={toggleLanguage}
              className={cn("font-mono px-2 py-1 rounded transition-colors", i18n.language === 'zh' ? "bg-black text-white" : "hover:text-black")}
            >
              ZH
            </button>
            <button 
              onClick={toggleLanguage}
              className={cn("font-mono px-2 py-1 rounded transition-colors", i18n.language === 'en' ? "bg-black text-white" : "hover:text-black")}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-ink" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-white border-b border-gray-200 p-8 flex flex-col gap-6 lg:hidden"
          >
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest">
                {t(`nav.${item}`)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  const { t } = useTranslation();
  
  return (
    <section id="hero" className="relative pt-32 pb-12 px-12 max-w-screen-2xl mx-auto overflow-hidden">
      <div className="w-full">
        <div className="flex justify-between items-end mb-4">
          <span className="mono-label">Independent Creative Technologist</span>
          <span className="mono-label">Est. 2026</span>
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] sm:text-[140px] leading-[0.85] font-black tracking-tighter uppercase"
        >
          <div className="flex justify-between flex-wrap">
            <span>Design</span>
            <span className="text-gray-200">Future</span>
          </div>
          <div className="flex items-center flex-wrap">
            <span className="inline-block w-[15vw] sm:w-32 h-[10vw] sm:h-24 bg-black mr-4 overflow-hidden rounded-sm">
              <div className="w-full h-full bg-gradient-to-tr from-brand to-blue-500 opacity-80" />
            </span>
            <span>Studio</span>
          </div>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 border-t border-gray-200 pt-12">
          <div className="space-y-4">
            <h3 className="mono-label">01 / Introduction</h3>
            <p className="text-sm leading-relaxed max-w-[280px] text-muted">
              {t('hero.subtitle')}
            </p>
            <button className="text-[11px] font-bold uppercase border-b border-black pb-1 hover:text-brand hover:border-brand transition-all">
              {t('hero.cta')}
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="mono-label">02 / Mission</h3>
            <p className="text-sm leading-relaxed max-w-[280px] text-muted">
              Blending cutting-edge technology with high-fidelity aesthetics. Delivering experiences that matter.
            </p>
          </div>

          <div className="flex flex-col justify-between items-end">
            <div className="text-right">
              <h3 className="mono-label">Location</h3>
              <p className="text-lg font-medium">Digital Nomadic</p>
              <p className="text-[11px] text-gray-500 font-mono">52.5200° N, 13.4050° E</p>
            </div>
            
            <div className="flex items-center space-x-6 mt-8">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-muted hover:text-brand transition-colors">
                  <Icon size={20} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectSection() {
  const { t } = useTranslation();

  return (
    <section id="work" className="py-24 px-12 max-w-screen-2xl mx-auto border-t border-gray-200 mt-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="relative">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            className="absolute -top-6 left-0 h-px bg-brand"
          />
          <span className="mono-label text-brand mb-2 block">{t('sections.curated')}</span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-2">
            {t('sections.featured')}
          </h2>
          <div className="flex items-center gap-4 mt-4">
            <div className="h-px w-12 bg-black" />
            <span className="mono-label text-muted">{t('sections.highlights')}</span>
          </div>
        </div>
        <div className="text-right hidden md:block">
          <span className="mono-label">Archive / 2024 — 2026</span>
          <p className="text-[10px] font-mono mt-2 text-muted">A SELECTION OF RECENT PIECES EXPLORING BRANDING AND INTERACTIVE TECH.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            className="group space-y-4"
          >
            <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden rounded-sm">
              <img 
                src={project.image} 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                 <p className="text-[10px] font-mono text-white/70 uppercase">0{i+1} / {project.category}</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase">{project.title}</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[10px] font-mono text-muted">2026 // Production</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-12 max-w-screen-2xl mx-auto border-t border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <div className="absolute inset-0 bg-brand/10 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
          <div className="aspect-square bg-gray-100 overflow-hidden rounded-sm border border-gray-200">
            <img 
              src="/src/assets/images/regenerated_image_1778787826690.jpg" 
              alt="Personal Photo" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute bottom-10 -right-10 hidden md:block">
            <div className="p-8 bg-black text-white max-w-xs">
              <span className="mono-label text-brand mb-2 block">Design Philosophy</span>
              <p className="text-xs leading-relaxed opacity-70">
                Architecture is a visual art, and the buildings speak for themselves. In the same way, digital products should be self-evident.
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-12">
          <div>
            <span className="mono-label text-brand mb-4 block underline underline-offset-8 decoration-2">{t('sections.aboutMe')}</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
              {t('about.title')}
            </h2>
            <div className="space-y-6 text-lg text-muted font-light leading-relaxed max-w-xl">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="mono-label text-black font-bold mb-2">Philosophy</p>
              <p className="text-xs text-muted uppercase tracking-widest">Less but better</p>
            </div>
            <div>
              <p className="mono-label text-black font-bold mb-2">Focus</p>
              <p className="text-xs text-muted uppercase tracking-widest">High-Fidelity Interaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-32 px-12 border-t border-gray-200 bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-5xl font-black uppercase tracking-tighter sticky top-32">{t('sections.expertise')}</h2>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {SKILLS.map((skill, i) => (
              <div key={i} className="p-12 bg-white space-y-6 hover:bg-surface transition-colors">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded">
                  <skill.icon size={24} />
                </div>
                <h3 className="text-xl font-bold uppercase">{skill.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{skill.desc}</p>
                <div className="pt-4">
                  <div className="inline-block px-3 py-1 bg-brand text-[10px] font-bold uppercase rounded">Highly Specialized</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer id="contact" className="pb-12 border-t border-gray-200 bg-white">
      <div className="px-12 py-24 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="max-w-2xl">
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-12">
              BUILD <span className="text-gray-200">TOMORROW</span>
            </h2>
            <div className="group cursor-pointer flex items-center space-x-6 text-2xl font-black uppercase italic tracking-tighter">
              <span className="group-hover:mr-4 transition-all hover:text-brand">Get In Touch</span>
              <div className="w-16 h-16 rounded-full border border-black flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all">
                <ArrowUpRight size={32} />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-8 text-right font-mono uppercase text-[10px] tracking-widest text-muted">
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              <div>
                <p className="mb-2 text-black font-bold">Inquiries</p>
                <a href="#" className="hover:text-black">contact@aetheria.studio</a>
              </div>
              <div>
                <p className="mb-2 text-black font-bold">Socials</p>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-black">TW</a>
                  <a href="#" className="hover:text-black">IN</a>
                  <a href="#" className="hover:text-black">DR</a>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-2 text-black font-bold">Local Time</p>
              <p>20:09:42 CET</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-12 border-t border-gray-200 px-12 flex items-center justify-between text-[9px] font-mono text-gray-400 uppercase tracking-widest bg-white">
        <div>Copyright © 2026 Aetheria Design Studio</div>
        <div className="flex space-x-8">
           <span className="flex items-center gap-2">
             <span className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
             Systems Operational
           </span>
        </div>
        <div>Last Updated: 14.MAY.26</div>
      </div>
    </footer>
  );
}

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-brand origin-left z-[60]"
      style={{ scaleX }}
    />
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand selection:text-white relative bg-surface">
      <ScrollProgress />
      <NavBar />
      
      <main>
        <Hero />
        
        <div className="py-20 flex justify-center opacity-20 overflow-hidden">
          <div className="flex gap-16 animate-marquee whitespace-nowrap font-display font-black text-8xl tracking-tighter uppercase grayscale">
            {Array(4).fill(null).map((_, i) => (
              <span key={i}>Visionary Design • Technical Precision • Minimalist Aesthetic • </span>
            ))}
          </div>
        </div>

        <ProjectSection />
        <AboutSection />
        <ServicesSection />
        
        {/* Quote Section */}
        <section className="py-32 bg-surface text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-6"
          >
            <p className="text-3xl md:text-5xl font-display font-light leading-snug italic tracking-tight text-ink/70">
              "Great design is not just what it looks like and feels like. Design is how it <span className="text-brand font-bold">works</span>."
            </p>
            <div className="mt-10 h-px w-20 bg-brand mx-auto" />
          </motion.div>
        </section>

        <Footer />
      </main>

      {/* Global Marquee Fade Effect */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
