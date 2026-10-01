import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Course() {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-ivory text-ink">
      
      {/* HEADER CANVAS */}
      <section className="bg-ivory text-ink pt-48 pb-16 px-6 md:px-12 lg:px-24">
        <span className="text-[10px] uppercase tracking-[0.3em] text-ink/40 font-bold mb-8 block">Full Syllabus</span>
        <h1 className="text-[10vw] md:text-8xl lg:text-[120px] font-display leading-[1.15] tracking-tighter max-w-6xl scale-y-[1.25] origin-left mb-6 uppercase font-bold">
          MASTERING<br />
          <span className="text-coral">THE FORM.</span>
        </h1>
        <p className="text-ink/60 text-lg max-w-xl">
          Browse the complete curriculum. Our learning management system allows you to track progress across Yoga, Calisthenics, and Martial Arts mastery tracks.
        </p>
      </section>

      {/* 01 — YOGA CANVAS */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-ink text-ivory relative overflow-hidden border-t border-ivory/10">
        <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
          
          <div className="w-full lg:w-5/12 flex flex-col">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-coral font-black text-xs tracking-[0.2em]">01</span>
              <span className="w-12 h-[1px] bg-gradient-to-r from-coral to-transparent"></span>
              <h2 className="font-bold text-[10px] tracking-[0.2em] uppercase text-ivory/60 m-0">Yoga & Balance</h2>
            </div>
            
            <h2 className="text-6xl md:text-8xl lg:text-[100px] font-display font-bold leading-[0.85] tracking-tight mb-8 scale-y-[1.15] origin-left uppercase">
              Anatomy<br />& Breath.
            </h2>
            <p className="text-ivory/60 text-lg leading-relaxed mb-12 max-w-md">
              Understand the body behind the practice. A structured curriculum focusing on traditional asanas, joint mobility, and pranayama breathwork to correct posture and alleviate structural pressure.
            </p>
            <div className="flex gap-8 mb-16 border-l border-ivory/20 pl-6">
              <div>
                <span className="block font-display font-bold text-4xl text-coral mb-1 scale-y-[1.1] origin-bottom">60</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-ivory/40 font-bold">Min Sessions</span>
              </div>
              <div>
                <span className="block font-display font-bold text-4xl text-ivory mb-1 scale-y-[1.1] origin-bottom">ALL</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-ivory/40 font-bold">Levels</span>
              </div>
            </div>
            <Link to="/portal" className="inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.15em] uppercase text-ivory group/link hover:text-coral transition-colors">
              ENROLL IN MODULE
              <span className="text-coral transition-transform duration-300 group-hover/link:translate-x-2">
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>

          <div className="w-full lg:w-7/12 h-[50vh] md:h-[70vh] flex items-end justify-center relative bg-indigo-dark rounded-[3rem] p-12 group">
             <div className="absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity">
                <div className="w-full h-full border border-ivory/10 rounded-[3rem] m-4"></div>
             </div>
             <img src="/images/hero-cutout.png" alt="Yoga Cutout" className="w-[110%] h-[120%] object-contain object-bottom grayscale opacity-90 drop-shadow-[0_40px_60px_rgba(0,0,0,0.4)] transition-transform duration-700 group-hover:scale-105" />
          </div>

        </div>
      </section>

      {/* 02 — CALISTHENICS CANVAS */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-ivory text-ink relative overflow-hidden border-t border-ink/10">
        <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-16 relative z-10">
          
          <div className="w-full lg:w-5/12 flex flex-col">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-coral font-black text-xs tracking-[0.2em]">02</span>
              <span className="w-12 h-[1px] bg-gradient-to-r from-coral to-transparent"></span>
              <h2 className="font-bold text-[10px] tracking-[0.2em] uppercase text-ink/60 m-0">Strength & Force</h2>
            </div>
            
            <h2 className="text-6xl md:text-8xl lg:text-[100px] font-display font-bold leading-[0.85] tracking-tight mb-8 scale-y-[1.15] origin-left uppercase">
              Functional<br />Power.
            </h2>
            <p className="text-ink/60 text-lg leading-relaxed mb-12 max-w-md">
              Master your own bodyweight. Focused biomechanical progression through calisthenics, building lean athletic power and kinetic alignment without machines.
            </p>
            <div className="flex gap-8 mb-16 border-l border-ink/20 pl-6">
              <div>
                <span className="block font-display font-bold text-4xl text-coral mb-1 scale-y-[1.1] origin-bottom">45</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-ink/40 font-bold">Min Sessions</span>
              </div>
              <div>
                <span className="block font-display font-bold text-4xl text-ink mb-1 scale-y-[1.1] origin-bottom">INT</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-ink/40 font-bold">Level</span>
              </div>
            </div>
            <Link to="/portal" className="inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.15em] uppercase text-ink group/link hover:text-coral transition-colors">
              ENROLL IN MODULE
              <span className="text-coral transition-transform duration-300 group-hover/link:translate-x-2">
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>

          <div className="w-full lg:w-7/12 h-[50vh] md:h-[70vh] flex items-end justify-center relative bg-sand rounded-[3rem] p-12 group">
             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ivory/40 to-transparent z-0"></div>
             <img src="/images/fitness-cutout.png" alt="Fitness Cutout" className="w-[110%] h-[120%] object-contain object-bottom drop-shadow-[0_40px_60px_rgba(0,0,0,0.2)] relative z-10 transition-transform duration-700 group-hover:scale-105" />
          </div>

        </div>
      </section>

      {/* 03 — SILAMBAM CANVAS */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-coral text-ivory relative overflow-hidden">
        <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
          
          <div className="w-full lg:w-5/12 flex flex-col">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-ink font-black text-xs tracking-[0.2em]">03</span>
              <span className="w-12 h-[1px] bg-gradient-to-r from-ink to-transparent"></span>
              <h2 className="font-bold text-[10px] tracking-[0.2em] uppercase text-ivory/80 m-0">Mastery Track</h2>
            </div>
            
            <h2 className="text-6xl md:text-8xl lg:text-[100px] font-display font-bold leading-[0.85] tracking-tight mb-8 scale-y-[1.15] origin-left uppercase text-ink">
              Traditional<br />Silambam.
            </h2>
            <p className="text-ink/80 text-lg leading-relaxed mb-12 max-w-md font-medium">
              The ancient Tamil staff martial art. This comprehensive track teaches defensive forms, rapid stick rotation, footwork agility, and intense cardiovascular conditioning. Preserving heritage through disciplined movement.
            </p>
            <div className="flex gap-8 mb-16 border-l border-ink/30 pl-6">
              <div>
                <span className="block font-display font-bold text-4xl text-ivory mb-1 scale-y-[1.1] origin-bottom">90</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-ink/60 font-bold">Min Sessions</span>
              </div>
              <div>
                <span className="block font-display font-bold text-4xl text-ink mb-1 scale-y-[1.1] origin-bottom">PRO</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-ink/60 font-bold">Track</span>
              </div>
            </div>
            <Link to="/portal" className="inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.15em] uppercase text-ink group/link hover:text-ivory transition-colors">
              ENROLL IN MODULE
              <span className="text-ivory transition-transform duration-300 group-hover/link:translate-x-2">
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>

          <div className="w-full lg:w-7/12 h-[50vh] md:h-[70vh] flex items-end justify-center relative bg-ink rounded-[3rem] p-12 group">
             <img src="/images/silambam-cutout.png" alt="Silambam Cutout" className="w-[110%] h-[120%] object-contain object-bottom drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)] relative z-10 transition-transform duration-700 group-hover:scale-105" />
          </div>

        </div>
      </section>

    </div>
  )
}
