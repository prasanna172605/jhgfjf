import { Link } from 'react-router-dom'
import { ArrowRight, User } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-ivory text-ink">
      
      {/* 01 - FACULTY HERO */}
      <section className="bg-ivory text-ink pt-48 pb-16 px-6 md:px-12 lg:px-24">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-coral font-black text-xs tracking-[0.2em]">01</span>
          <span className="w-12 h-[1px] bg-gradient-to-r from-coral to-ink/20"></span>
          <h2 className="font-bold text-[10px] tracking-[0.2em] uppercase text-ink/80 m-0">The Faculty</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative">
             <h1 className="text-[12vw] md:text-8xl lg:text-[110px] font-display leading-[1.15] tracking-tighter scale-y-[1.25] origin-left mb-8 uppercase font-bold text-ink">
               MASTER<br/>
               <span className="text-coral">MURALI.</span>
             </h1>
             <p className="text-ink/60 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-medium">
               A lineage of discipline. Master Murali brings over two decades of martial arts, calisthenics, and yogic science into a unified, biomechanically perfect curriculum.
             </p>
             <Link to="/portal" className="inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.15em] uppercase text-ink group/link">
                LEARN FROM THE MASTER
                <span className="text-coral transition-transform duration-300 group-hover/link:translate-x-2">
                  <ArrowRight className="w-5 h-5" />
                </span>
             </Link>
          </div>
          
          <div className="relative w-full h-[500px] md:h-[700px] bg-ink rounded-[3rem] overflow-hidden flex items-end justify-center px-12 pt-12 group">
             {/* The new instructor cutout */}
             <img src="/images/instructor-cutout.png" alt="Master Murali" className="w-[120%] h-[115%] object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-transform duration-1000 group-hover:scale-[1.03]" />
             
             {/* Gradient overlay for depth */}
             <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink via-ink/80 to-transparent"></div>
             
             <div className="absolute bottom-10 left-10 text-ivory">
               <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-coral mb-2 block">Head Instructor</span>
               <span className="font-display font-bold text-3xl tracking-tight uppercase scale-y-[1.1] origin-bottom block">Murali</span>
             </div>
          </div>
        </div>
      </section>

      {/* 02 - PHILOSOPHY */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-ink text-ivory border-t border-ivory/10">
        <div className="flex items-center gap-4 mb-24">
          <span className="text-coral font-black text-xs tracking-[0.2em]">02</span>
          <span className="w-12 h-[1px] bg-gradient-to-r from-coral to-ivory/20"></span>
          <h2 className="font-bold text-[10px] tracking-[0.2em] uppercase text-ivory/60 m-0">The Philosophy</h2>
        </div>

        <div className="max-w-[1400px] mx-auto">
           <h3 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold uppercase leading-[0.9] tracking-tighter scale-y-[1.15] origin-left text-ivory mb-16 max-w-5xl">
             WE DON'T JUST BUILD <span className="text-coral text-opacity-80">MUSCLE.</span> WE ENGINEER <span className="text-coral text-opacity-80">MOVEMENT.</span>
           </h3>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
              {[
                { num: "01.", title: "Structural Integrity", desc: "Before force can be applied, the structure must be sound. We prioritize joint preparation, tendon strength, and perfect alignment." },
                { num: "02.", title: "Fluid Dynamics", desc: "Strength without mobility is rigid. We integrate ancient yogic flexibility with modern calisthenics to ensure fluid, unrestricted motion." },
                { num: "03.", title: "Mental Fortitude", desc: "The mind quits before the body. Our curriculum is designed to harden the mind, forging discipline that translates to all aspects of life." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col border-t border-ivory/10 pt-8">
                  <span className="font-display text-4xl text-coral mb-4">{item.num}</span>
                  <h4 className="text-lg font-bold uppercase tracking-widest mb-4">{item.title}</h4>
                  <p className="text-ivory/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

    </div>
  )
}
