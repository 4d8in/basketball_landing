/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Menu, 
  X, 
  Star, 
  CheckCircle2, 
  Trophy, 
  Target, 
  Brain, 
  ShieldCheck,
  Quote,
  Dumbbell,
  Eye,
  Award,
  Users,
  Calendar,
  ChevronDown,
  BookOpen,
  GraduationCap,
  History,
  ChevronLeft,
  ChevronRight,
  Play,
  TrendingUp,
  Crown,
  Scale
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-12 py-8 flex items-center justify-between ${isScrolled ? 'bg-ivory/98 backdrop-blur-lg border-b border-border-subtle shadow-sm' : 'bg-transparent border-b border-white/5'}`}
    >
      <div className="flex items-center gap-6">
        <div className="text-gold-muted scale-110">
          <ShieldCheck size={36} strokeWidth={1} />
        </div>
        <div className="flex flex-col">
          <h2 className="text-navy-deep text-[16px] font-bold tracking-[0.2em] uppercase leading-none font-sans">Elite Academy</h2>
          <span className="text-[10px] text-gold-muted font-semibold uppercase tracking-[0.1em] mt-2">Institutional Authority</span>
        </div>
      </div>
      
      <div className="hidden lg:flex items-center gap-16">
        {['Methodology', 'Pathways', 'Outcomes', 'Protocol'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-bold uppercase tracking-[0.25em] text-charcoal/50 hover:text-gold-muted transition-colors duration-500 relative group">
            {item}
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-gold-muted transition-all duration-500 group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-10">
        <button className="text-charcoal/30 hover:text-gold-muted transition-colors hidden sm:block">
          <Search size={20} strokeWidth={1.5} />
        </button>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-charcoal/80 hover:text-gold-muted transition-colors lg:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <button className="hidden lg:block px-10 py-4 bg-crimson-muted text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-crimson-muted/90 transition-all duration-500 shadow-lg active:scale-95">
          Apply for Admission
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-ivory border-b border-border-subtle p-12 flex flex-col gap-10 lg:hidden shadow-2xl"
          >
            {['Methodology', 'Pathways', 'Outcomes', 'Protocol', 'Apply'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-charcoal/80 hover:text-crimson-muted transition-colors">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-56 pb-40 px-10 overflow-hidden bg-ivory">
      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#f2f0e9_0%,transparent_70%)]" />
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.4
              }
            }
          }}
          className="lg:col-span-7 flex flex-col gap-12"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
              }
            }}
            className="flex items-center gap-5"
          >
            <div className="gold-divider w-12" />
            <p className="text-[12px] font-semibold tracking-[0.3em] uppercase text-gold-muted">Established 2012 • Chicago</p>
          </motion.div>
          
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 1.5, ease: [0.33, 1, 0.68, 1] }
              }
            }}
            className="text-6xl md:text-8xl font-serif font-medium tracking-tight text-navy-deep leading-[1.15]"
          >
            Cultivating <br/>
            <span className="italic font-light text-gold-muted">Disciplined</span> Scholar <br/>
            Athletes.
          </motion.h1>
          
          <motion.div 
            variants={{
              hidden: { scaleX: 0 },
              visible: { 
                scaleX: 1,
                transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
              }
            }}
            className="w-32 h-[1px] bg-crimson-muted/20 origin-left" 
          />
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
              }
            }}
            className="text-charcoal/70 text-xl font-light leading-relaxed max-w-2xl"
          >
            A premier preparatory academy where academic rigor meets elite athletic development, fostering character and excellence on and off the court.
          </motion.p>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
              }
            }}
            className="flex flex-col gap-4 pt-6"
          >
            <div className="flex flex-col sm:flex-row gap-8">
              <button className="px-12 py-6 bg-crimson-muted text-white text-[12px] font-bold uppercase tracking-[0.25em] shadow-md hover:shadow-lg transition-all duration-500 active:scale-[0.98] hover:-translate-y-1">
                Request Prospectus
              </button>
              <button className="px-12 py-6 bg-transparent border border-crimson-muted/30 text-crimson-muted text-[12px] font-bold uppercase tracking-[0.25em] hover:bg-crimson-muted/5 transition-all duration-500 active:scale-[0.98] hover:-translate-y-1">
                Schedule Campus Visit
              </button>
            </div>
            <p className="text-[10px] text-charcoal/40 uppercase tracking-[0.15em] font-medium">
              Limited spots available for 2024 intake • Next evaluation: March 15th
            </p>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
              }
            }}
            className="flex flex-wrap items-center gap-12 pt-12 border-t border-border-subtle"
          >
            {[
              { icon: <GraduationCap className="text-gold-muted" size={24} strokeWidth={1.5} />, label: "Academic", value: "Accountability" },
              { icon: <ShieldCheck className="text-gold-muted" size={24} strokeWidth={1.5} />, label: "Selective", value: "Enrollment" },
              { icon: <Award className="text-gold-muted" size={24} strokeWidth={1.5} />, label: "Certified", value: "Coaching Staff" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -15 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
                className="flex items-center gap-4"
              >
                {item.icon}
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-charcoal/40">{item.label}</span>
                  <span className="text-lg font-serif text-charcoal">{item.value}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-none overflow-hidden border border-border-subtle institutional-shadow image-warm-filter">
            <img 
              src="https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?q=80&w=2071&auto=format&fit=crop" 
              alt="Coach Mentoring Athlete" 
              className="w-full h-full object-cover grayscale-[0.1] contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-navy-deep/10 mix-blend-multiply" />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-ivory p-10 border border-border-subtle institutional-shadow hidden md:block">
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-serif text-gold-muted">85+</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/40">D1 Collegiate Placements</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5 opacity-20">
        <span className="text-[10px] uppercase tracking-[0.6em] text-charcoal font-medium">Explore</span>
        <ChevronDown size={18} />
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Years of Legacy", value: "12", suffix: "" },
    { label: "Collegiate Placements", value: "85", suffix: "+" },
    { label: "Professional Alumni", value: "500", suffix: "+" },
    { label: "NBA Draft Selections", value: "14", suffix: "" }
  ];

  return (
    <section className="bg-beige-light border-y border-border-subtle">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: i * 0.15, 
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1]
            }}
            className={`flex flex-col gap-4 p-20 ${i !== stats.length - 1 ? 'lg:border-r border-border-subtle' : ''} ${i % 2 === 0 ? 'border-r lg:border-r-0' : ''}`}
          >
            <div className="flex items-baseline gap-1.5">
              <span className="text-navy-deep text-6xl font-serif">{stat.value}</span>
              <span className="text-gold-muted text-3xl font-serif">{stat.suffix}</span>
            </div>
            <p className="text-charcoal/50 text-[11px] font-bold uppercase tracking-[0.25em] leading-tight">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Methodology = () => {
  const methods = [
    {
      id: "01",
      title: "Technical Precision",
      desc: "Systematic mechanical refinement through high-repetition protocols and biomechanical analysis.",
      icon: <Target className="text-gold-muted" size={32} strokeWidth={1} />
    },
    {
      id: "02",
      title: "Cognitive Immersion",
      desc: "Developing elite court vision and situational intelligence through tactical simulation.",
      icon: <Brain className="text-gold-muted" size={32} strokeWidth={1} />
    },
    {
      id: "03",
      title: "Performance Science",
      desc: "Basketball-specific power, explosive movement, and comprehensive injury mitigation.",
      icon: <Dumbbell className="text-gold-muted" size={32} strokeWidth={1} />
    },
    {
      id: "04",
      title: "Strategic Theory",
      desc: "Advanced film analysis and situational game theory to outthink the competition.",
      icon: <Eye className="text-gold-muted" size={32} strokeWidth={1} />
    }
  ];

  return (
    <section id="methodology" className="py-48 px-10 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20 mb-32 items-end">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex items-center gap-5">
              <div className="gold-divider w-12" />
              <span className="text-gold-muted text-[12px] font-bold uppercase tracking-[0.4em]">Our Philosophy</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-serif font-medium text-navy-deep leading-tight">The Standard for <br/><span className="italic text-gold-muted">Preparatory</span> Excellence</h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-charcoal/60 text-xl font-light leading-relaxed border-l border-gold-muted/20 pl-10">
              Our methodology bridges the gap between raw potential and professional standards through a rigorous, data-driven approach centered on discipline and character.
            </p>
          </div>
        </div>
        
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {methods.map((method) => (
            <motion.div 
              key={method.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 1.2, 
                    ease: [0.22, 1, 0.36, 1] 
                  }
                }
              }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
              }}
              className="p-12 border border-border-subtle bg-beige-light/30 rounded-none hover:bg-beige-light/50 transition-colors duration-500 group institutional-shadow cursor-default"
            >
              <div className="flex justify-between items-start mb-14">
                <span className="text-gold-muted font-serif text-3xl">{method.id}</span>
                <div className="p-4 bg-ivory rounded-full border border-border-subtle group-hover:border-gold-muted transition-colors duration-500">
                  {method.icon}
                </div>
              </div>
              <h4 className="text-2xl font-serif font-medium text-navy-deep mb-5">{method.title}</h4>
              <p className="text-charcoal/50 text-base font-light leading-relaxed">{method.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Tiers = () => {
  return (
    <section id="pathways" className="py-48 px-10 bg-beige-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-28">
          <span className="inline-block px-8 py-2 mb-8 text-[11px] font-bold uppercase tracking-[0.4em] text-gold-muted border border-gold-muted/20 rounded-full">
            Academy Tiers
          </span>
          <h2 className="text-5xl md:text-8xl font-serif font-medium text-navy-deep uppercase tracking-tight">
            Elite <span className="italic text-gold-muted">Pathways</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Tier 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col bg-ivory p-14 border border-border-subtle institutional-shadow relative group hover:-translate-y-3 transition-transform duration-700 ease-[0.16,1,0.3,1]"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="text-[11px] font-bold tracking-[0.25em] text-charcoal/40 uppercase">Evaluation Phase</span>
              <span className="text-[12px] font-bold text-gold-muted">01</span>
            </div>
            <div className="mb-14">
              <h3 className="text-3xl font-serif font-medium text-navy-deep tracking-tight italic">Foundation</h3>
              <div className="mt-4 flex items-center gap-4">
                <div className="h-[1px] w-8 bg-gold-muted/30" />
                <p className="text-[11px] text-charcoal/40 uppercase tracking-[0.25em] font-bold">Standard Metric</p>
              </div>
            </div>
            <div className="space-y-7 mb-20">
              <div className="flex items-center gap-5">
                <CheckCircle2 size={22} className="text-gold-muted/30" strokeWidth={1} />
                <span className="text-[12px] text-charcoal/60 uppercase tracking-widest">Skill Benchmark Clinic</span>
              </div>
              <div className="flex items-center gap-5">
                <CheckCircle2 size={22} className="text-gold-muted/30" strokeWidth={1} />
                <span className="text-[12px] text-charcoal/60 uppercase tracking-widest">Core Movement Lab</span>
              </div>
            </div>
            <div className="mt-auto">
              <button className="w-full py-6 border border-charcoal/10 text-charcoal text-[11px] font-bold uppercase tracking-[0.35em] hover:bg-charcoal/5 transition-all duration-300">
                Book Evaluation
              </button>
              <p className="text-[9px] text-charcoal/30 uppercase tracking-[0.1em] text-center mt-4 font-medium">Next session: March 15th</p>
            </div>
          </motion.div>

          {/* Tier 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col bg-ivory p-14 border-t-4 border-t-crimson-muted border-x border-b border-border-subtle institutional-shadow relative lg:scale-105 z-10 hover:-translate-y-3 transition-transform duration-700 ease-[0.16,1,0.3,1]"
          >
            <div className="absolute top-0 right-0 p-6">
              <Award size={28} className="text-crimson-muted/10" strokeWidth={1.5} />
            </div>
            <div className="flex items-center justify-between mb-12">
              <span className="text-[11px] font-bold tracking-[0.25em] text-crimson-muted uppercase">Invitation Track</span>
              <span className="text-[12px] font-bold text-crimson-muted">02</span>
            </div>
            <div className="mb-14">
              <h3 className="text-3xl font-serif font-medium text-navy-deep tracking-tight italic uppercase">Performance</h3>
              <div className="mt-4 flex items-center gap-4">
                <div className="h-[1px] w-8 bg-crimson-muted" />
                <p className="text-[11px] text-gold-muted uppercase tracking-[0.25em] font-bold">Gold Standard Metric</p>
              </div>
            </div>
            <div className="space-y-7 mb-20">
              <div className="flex items-center gap-5">
                <CheckCircle2 size={22} className="text-crimson-muted" strokeWidth={1.5} />
                <span className="text-[12px] text-navy-deep uppercase tracking-widest font-semibold">Daily Elite Protocol</span>
              </div>
              <div className="flex items-center gap-5">
                <CheckCircle2 size={22} className="text-crimson-muted" strokeWidth={1.5} />
                <span className="text-[12px] text-navy-deep uppercase tracking-widest font-semibold">Advanced Film Lab</span>
              </div>
            </div>
            <div className="mt-auto">
              <button className="w-full py-6 bg-crimson-muted text-white text-[11px] font-bold uppercase tracking-[0.35em] shadow-lg hover:bg-crimson-muted/90 transition-all duration-300">
                Request Intake
              </button>
              <p className="text-[9px] text-crimson-muted/60 uppercase tracking-[0.1em] text-center mt-4 font-medium">Selective enrollment only</p>
            </div>
          </motion.div>

          {/* Tier 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col bg-ivory p-14 border border-border-subtle institutional-shadow relative group hover:-translate-y-3 transition-transform duration-700 ease-[0.16,1,0.3,1]"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="text-[11px] font-bold tracking-[0.25em] text-charcoal/40 uppercase">Collegiate Prep</span>
              <span className="text-[12px] font-bold text-gold-muted">03</span>
            </div>
            <div className="mb-14">
              <h3 className="text-3xl font-serif font-medium text-navy-deep tracking-tight italic uppercase">Elite Track</h3>
              <div className="mt-4 flex items-center gap-4">
                <div className="h-[1px] w-8 bg-gold-muted" />
                <p className="text-[11px] text-charcoal/40 uppercase tracking-[0.25em] font-bold">Grade 85+ Scouting</p>
              </div>
            </div>
            <div className="space-y-7 mb-20">
              <div className="flex items-center gap-5">
                <Star size={22} className="text-gold-muted" strokeWidth={1.5} />
                <span className="text-[12px] text-charcoal/60 uppercase tracking-widest">Coach Network Access</span>
              </div>
              <div className="flex items-center gap-5">
                <Star size={22} className="text-gold-muted" strokeWidth={1.5} />
                <span className="text-[12px] text-charcoal/60 uppercase tracking-widest">Individual Roadmap</span>
              </div>
            </div>
            <div className="mt-auto">
              <button className="w-full py-6 bg-navy-deep text-white text-[11px] font-bold uppercase tracking-[0.35em] hover:bg-navy-deep/90 transition-all duration-300">
                Apply for Access
              </button>
              <p className="text-[9px] text-charcoal/30 uppercase tracking-[0.1em] text-center mt-4 font-medium">Direct scout review required</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const VideoModal = ({ isOpen, onClose, videoUrl }: { isOpen: boolean, onClose: () => void, videoUrl: string }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-deep/90 backdrop-blur-lg"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gold-muted transition-colors flex items-center gap-2 uppercase text-[10px] tracking-[0.2em] font-bold"
        >
          Close <X size={20} />
        </button>
        <iframe 
          src={videoUrl} 
          className="w-full h-full"
          allow="autoplay; fullscreen"
          title="Academy Testimonial"
        />
      </motion.div>
    </motion.div>
  );
};

const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote: "The methodology here transcends standard training. They build athletes with an elite psychological edge and a professional work ethic.",
      name: "David Sterling",
      role: "NCAA Recruitment Director",
      achievement: "Ivy League Scout",
      marker: "Verified Professional",
      icon: <ShieldCheck size={8} />,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      quote: "Elite Academy provided the structure and discipline my son needed to balance his academic goals with his dream of playing collegiate basketball.",
      name: "Sarah Jenkins",
      role: "Parent of Alumnus",
      achievement: "Stanford '23 Parent",
      marker: "Alumni Network",
      icon: <GraduationCap size={8} />,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      quote: "The focus on character development and academic accountability prepared me for the rigors of a top-tier university program.",
      name: "Marcus Thorne",
      role: "Former Student-Athlete, Duke University",
      achievement: "Duke '22 Captain",
      marker: "Elite Alumnus",
      icon: <Trophy size={8} />,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white p-16 border border-border-subtle institutional-shadow relative min-h-[480px] flex flex-col justify-between"
        >
          <Quote className="absolute top-12 right-12 text-gold-muted/5" size={100} strokeWidth={0.5} />
          
          <div>
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-muted">Alumni Outcome</span>
              <div className="gold-divider w-12" />
            </div>
            <p className="text-2xl md:text-3xl font-serif italic text-charcoal/90 leading-relaxed mb-14">
              "{testimonials[currentIndex].quote}"
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-10">
            <div className="flex items-center gap-5">
              <div className="relative group cursor-pointer" onClick={() => setIsVideoModalOpen(true)}>
                <div className="p-0.5 border border-gold-muted/20">
                  <img 
                    alt={testimonials[currentIndex].name} 
                    className="w-16 h-16 rounded-none grayscale border border-border-subtle object-cover transition-all duration-700 group-hover:grayscale-0" 
                    src={testimonials[currentIndex].image} 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-navy-deep/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play size={20} className="text-white fill-white" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-[13px] uppercase tracking-widest font-bold text-navy-deep">
                  {testimonials[currentIndex].name}
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] uppercase tracking-widest text-charcoal/40 font-medium">
                  <span>{testimonials[currentIndex].role}</span>
                  <span className="text-gold-muted/40">•</span>
                  <span className="text-gold-muted font-semibold">{testimonials[currentIndex].achievement}</span>
                </div>
                <div className="flex items-center gap-3 mt-1">
                  {testimonials[currentIndex].videoUrl && (
                    <button 
                      onClick={() => setIsVideoModalOpen(true)}
                      className="text-gold-muted hover:text-crimson-muted transition-colors flex items-center gap-1.5 text-[9px] tracking-[0.15em] font-bold uppercase"
                    >
                      <Play size={10} className="fill-current" /> Watch Testimonial
                    </button>
                  )}
                  <div className="h-3 w-[1px] bg-border-subtle" />
                  <div className="text-[7px] uppercase tracking-widest text-crimson-muted font-bold opacity-60 flex items-center gap-1">
                    <CheckCircle2 size={7} /> {testimonials[currentIndex].marker}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={prev}
                className="p-3.5 border border-border-subtle text-charcoal/40 hover:text-gold-muted hover:border-gold-muted transition-all duration-500"
              >
                <ChevronLeft size={18} strokeWidth={1.5} />
              </button>
              <button 
                onClick={next}
                className="p-3.5 border border-border-subtle text-charcoal/40 hover:text-gold-muted hover:border-gold-muted transition-all duration-500"
              >
                <ChevronRight size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 transition-all duration-500 ${i === currentIndex ? 'w-8 bg-gold-muted' : 'w-2 bg-gold-muted/20'}`}
          />
        ))}
      </div>

      <AnimatePresence>
        {isVideoModalOpen && (
          <VideoModal 
            isOpen={isVideoModalOpen} 
            onClose={() => setIsVideoModalOpen(false)} 
            videoUrl={testimonials[currentIndex].videoUrl} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const Outcomes = () => {
  return (
    <section id="outcomes" className="py-48 px-10 bg-ivory border-y border-border-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-5 mb-10">
              <div className="gold-divider w-12" />
              <span className="text-[12px] uppercase tracking-[0.5em] text-gold-muted font-bold">Institutional Success</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif font-medium text-navy-deep leading-none mb-20">Proven <br/>Outcomes.</h2>
            
            <div className="grid grid-cols-2 gap-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="bg-beige-light p-12 border-l-4 border-gold-muted flex flex-col justify-between h-72 institutional-shadow"
              >
                <div className="text-6xl font-serif text-navy-deep tracking-tighter">+24%</div>
                <div>
                  <div className="text-[13px] uppercase tracking-widest text-gold-muted mb-3 font-bold">Shooting</div>
                  <div className="text-[11px] text-charcoal/50 uppercase leading-tight font-semibold">Precision Growth</div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="bg-beige-light p-12 border-l-4 border-gold-muted flex flex-col justify-between h-72 institutional-shadow"
              >
                <div className="text-6xl font-serif text-navy-deep tracking-tighter">+18lb</div>
                <div>
                  <div className="text-[13px] uppercase tracking-widest text-gold-muted mb-3 font-bold">Strength</div>
                  <div className="text-[11px] text-charcoal/50 uppercase leading-tight font-semibold">Functional Mass</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <div className="space-y-16">
            <div className="mb-20">
              <h3 className="text-[12px] uppercase tracking-[0.4em] text-charcoal/40 mb-8">Internal Endorsements</h3>
              <div className="w-full h-[1px] bg-border-subtle" />
            </div>
            
            <TestimonialCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

const Protocol = () => {
  const phases = [
    {
      id: "01",
      title: "Institutional Review",
      desc: "Submit comprehensive athletic profile and academic transcripts for initial vetting by our recruitment board."
    },
    {
      id: "02",
      title: "Biometric Audit",
      desc: "On-site physiological testing, mobility screening, and high-intensity technical assessment."
    },
    {
      id: "03",
      title: "Deployment",
      desc: "Final admission decision followed by custom training architecture design and official boarding."
    }
  ];

  return (
    <section id="protocol" className="py-48 px-10 bg-beige-light">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-5xl font-serif font-medium text-navy-deep mb-6 uppercase tracking-tight">Protocol</h2>
          <p className="text-gold-muted text-[12px] tracking-[0.5em] uppercase font-bold">Strategic Selection Process</p>
        </motion.div>
        
        <div className="relative">
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-0 bottom-0 w-px bg-border-subtle origin-top" 
          />
          <div className="space-y-32">
            {phases.map((phase, i) => (
              <motion.div 
                key={phase.id} 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-20"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.3 + 0.8, type: "spring", stiffness: 100, damping: 15 }}
                  className="absolute left-[-5.5px] top-2.5 w-2.5 h-2.5 bg-crimson-muted rounded-full ring-4 ring-beige-light" 
                />
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-crimson-muted uppercase tracking-[0.4em] mb-6">Phase {phase.id}</span>
                  <h4 className="text-4xl font-serif font-medium text-navy-deep mb-8">{phase.title}</h4>
                  <p className="text-charcoal/60 text-xl leading-relaxed font-light max-w-3xl">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="apply" className="relative py-56 px-10 text-center overflow-hidden bg-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f2f0e9_0%,#faf9f6_100%)] -z-10" />
      
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block px-10 py-3 border border-gold-muted/30 rounded-full mb-16"
        >
          <span className="text-[12px] uppercase tracking-[0.6em] text-gold-muted font-bold">Strictly Limited Capacity</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-9xl font-serif italic text-navy-deep mb-16 leading-tight"
        >
          Elevate Your Presence <br/>on the Global Stage.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-charcoal/60 text-2xl leading-relaxed mb-24 max-w-3xl mx-auto font-light"
        >
          We only accept the most committed athletes. Start your professional trajectory today.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col items-center gap-12">
            <button className="w-full max-w-lg py-10 bg-crimson-muted text-white font-bold rounded-none shadow-xl hover:shadow-2xl transition-all duration-200 text-[14px] uppercase tracking-[0.5em] active:scale-[0.98] hover:-translate-y-1 hover:bg-crimson-deep">
              Apply for Admission
            </button>
            <a href="#" className="text-charcoal/40 text-[11px] uppercase tracking-[0.6em] hover:text-charcoal transition-colors border-b border-border-subtle pb-3">
              Download Academy Prospectus
            </a>
          </div>
          <p className="text-[10px] text-charcoal/30 uppercase tracking-[0.15em] font-medium mt-4">
            Next evaluation window: March 15th - 20th • Limited to 20 athletes per age group
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-32 px-10 border-t border-border-subtle bg-ivory">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex justify-center gap-24 mb-20">
          {[
            { icon: <ShieldCheck size={40} strokeWidth={1} />, label: "Discipline" },
            { icon: <Trophy size={40} strokeWidth={1} />, label: "Excellence" },
            { icon: <TrendingUp size={40} strokeWidth={1} />, label: "Development" },
            { icon: <Crown size={40} strokeWidth={1} />, label: "Leadership" },
            { icon: <Scale size={40} strokeWidth={1} />, label: "Integrity" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-4 opacity-10 grayscale transition-all duration-700 cursor-default"
              whileHover={{ 
                scale: 1.12, 
                opacity: 0.35,
                filter: "grayscale(1) brightness(2.2)",
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
              }}
            >
              <div className="text-navy-deep">
                {item.icon}
              </div>
              <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-charcoal/60">{item.label}</span>
            </motion.div>
          ))}
        </div>
        <p className="text-[11px] uppercase tracking-[0.7em] text-charcoal/30 font-medium text-center">
          © 2024 Institutional Basketball Authority • Global Operations
        </p>
      </div>
    </footer>
  );
};

// --- Main App ---

const SelectivitySignals = () => {
  return (
    <section className="py-32 px-10 bg-ivory border-y border-gold-muted/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 max-w-md"
        >
          <h3 className="text-3xl font-serif text-navy-deep leading-tight">Institutional <br/><span className="italic text-gold-muted">Selectivity</span></h3>
          <p className="text-charcoal/50 text-[13px] leading-relaxed font-light">We maintain strict enrollment standards to ensure a focused, high-performance environment for all scholar-athletes.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 flex-1">
          {[
            { label: "Selective Enrollment", desc: "Top 5% Admission Rate", icon: <ShieldCheck size={24} /> },
            { label: "Capped Cohorts", desc: "12 Athletes Per Class", icon: <Users size={24} /> },
            { label: "Evaluation Required", desc: "Mandatory Entrance Audit", icon: <Target size={24} /> }
          ].map((signal, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.15, 
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
              className="flex flex-col gap-6 p-8 border border-gold-muted/5 bg-beige-light/20 institutional-shadow"
            >
              <div className="text-gold-muted">{signal.icon}</div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-navy-deep mb-2">{signal.label}</div>
                <div className="text-[10px] uppercase tracking-wider text-charcoal/40 font-medium">{signal.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-ivory selection:bg-crimson-muted/10">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <div className="gold-divider w-full" />
        <SelectivitySignals />
        <div className="gold-divider w-full" />
        <Methodology />
        <div className="gold-divider w-full" />
        <Tiers />
        <div className="gold-divider w-full" />
        <Outcomes />
        <div className="gold-divider w-full" />
        <Protocol />
        <div className="gold-divider w-full" />
        <CTA />
      </main>
      <Footer />
      
      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-10 bg-ivory/95 backdrop-blur-md z-40 border-t border-border-subtle lg:hidden">
        <button className="w-full py-7 bg-crimson-muted text-white text-[12px] font-bold uppercase tracking-[0.4em] shadow-2xl active:scale-95 transition-all">
          Begin Entrance Assessment
        </button>
      </div>
    </div>
  );
}
