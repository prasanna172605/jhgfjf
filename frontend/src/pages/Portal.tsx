import { Link } from 'react-router-dom'
import { Play, CheckCircle2, Circle, Clock, BarChart } from 'lucide-react'

export default function Portal() {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-ivory text-ink">
      
      {/* HEADER CANVAS */}
      <section className="bg-ivory text-ink pt-48 pb-16 px-6 md:px-12 lg:px-24">
        <span className="text-[10px] uppercase tracking-[0.3em] text-ink/40 font-bold mb-8 block">Student Portal</span>
        <h1 className="text-[10vw] md:text-8xl lg:text-[100px] font-display leading-[1.15] tracking-tighter max-w-6xl scale-y-[1.25] origin-left mb-6 uppercase font-bold">
          WELCOME<br />
          BACK, <span className="text-coral">ARJUN.</span>
        </h1>
        <p className="text-ink/60 text-lg max-w-xl">
          You are currently in Week 3 of the Functional Calisthenics Mastery Track. Keep pushing your structural integrity.
        </p>
      </section>

      <section className="py-16 px-6 md:px-12 lg:px-24 border-t border-ink/5">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Main Content Area (Left) */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-coral font-black text-xs tracking-[0.2em]">ACTIVE MODULE</span>
              <span className="w-12 h-[1px] bg-gradient-to-r from-coral to-transparent"></span>
            </div>
            
            {/* Active Course Hero */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-[2rem] bg-indigo-dark overflow-hidden flex items-end p-8 md:p-12 group cursor-pointer shadow-xl mb-24">
               <img src="/images/planche-cutout.png" alt="Active Course" className="absolute right-[-10%] bottom-[-10%] w-[80%] h-[120%] object-contain object-right-bottom drop-shadow-2xl opacity-90 transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-y-0 left-0 w-[70%] bg-gradient-to-r from-indigo-dark via-indigo-dark/90 to-transparent"></div>
               
               <div className="relative z-10 flex flex-col justify-end w-full max-w-lg">
                 <span className="text-[10px] uppercase tracking-widest text-aqua mb-4 font-bold">Week 03: Core Stability</span>
                 <h2 className="text-4xl md:text-5xl font-display font-bold text-ivory leading-[0.9] tracking-tight uppercase scale-y-[1.1] origin-left mb-6">
                   Isometric<br />Holds & Tension
                 </h2>
                 <div className="flex items-center gap-6 mt-4">
                   <button className="flex items-center gap-3 bg-coral hover:bg-tangerine transition-colors text-ivory px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest">
                     <Play className="w-4 h-4" /> Resume Class
                   </button>
                   <span className="text-ivory/60 text-xs font-bold tracking-widest uppercase">45 Mins</span>
                 </div>
               </div>
            </div>

            <div className="flex items-center gap-4 mb-12">
              <span className="text-ink font-black text-xs tracking-[0.2em]">SYLLABUS PROGRESS</span>
              <span className="w-12 h-[1px] bg-gradient-to-r from-ink to-transparent"></span>
            </div>

            {/* Course List */}
            <div className="flex flex-col gap-6">
              {[
                { title: "Module 1: The Biomechanics of Breathing", status: "completed", duration: "1h 15m" },
                { title: "Module 2: Joint Articulation & Mobility", status: "completed", duration: "55m" },
                { title: "Module 3: Isometric Holds & Tension", status: "active", duration: "45m" },
                { title: "Module 4: Dynamic Force Transfer", status: "locked", duration: "1h 20m" },
                { title: "Module 5: The Muscle-Up Foundation", status: "locked", duration: "1h 05m" },
              ].map((module, i) => (
                <div key={i} className={`flex items-center justify-between p-6 rounded-2xl border ${module.status === 'active' ? 'border-coral bg-coral/5' : 'border-ink/5'} transition-all hover:border-coral/30 cursor-pointer`}>
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0">
                      {module.status === 'completed' && <CheckCircle2 className="w-6 h-6 text-coral" />}
                      {module.status === 'active' && <Play className="w-6 h-6 text-coral fill-coral" />}
                      {module.status === 'locked' && <Circle className="w-6 h-6 text-ink/20" />}
                    </div>
                    <div>
                      <h3 className={`font-bold text-sm md:text-base ${module.status === 'locked' ? 'text-ink/40' : 'text-ink'}`}>{module.title}</h3>
                      <p className="text-[10px] tracking-widest uppercase text-ink/40 font-bold mt-1">Lesson {i + 1}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-xs text-ink/40 font-bold tracking-widest uppercase">
                    <Clock className="w-4 h-4" /> {module.duration}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Sidebar / Stats (Right) */}
          <div className="lg:col-span-4 flex flex-col gap-12">
            
            <div className="bg-sand p-8 rounded-3xl border border-ink/5">
              <span className="text-[10px] uppercase tracking-widest text-ink/40 font-bold mb-6 block">Your Analytics</span>
              
              <div className="flex flex-col gap-8">
                <div>
                  <div className="flex justify-between text-xs font-bold tracking-widest uppercase mb-3">
                    <span className="text-ink">Track Progress</span>
                    <span className="text-coral">60%</span>
                  </div>
                  <div className="w-full h-1 bg-ink/10 rounded-full overflow-hidden">
                    <div className="w-[60%] h-full bg-coral"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-ivory p-6 rounded-2xl flex flex-col">
                    <span className="text-3xl font-display font-bold text-ink mb-1 scale-y-[1.1] origin-bottom">12</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-ink/40">Classes Done</span>
                  </div>
                  <div className="bg-ivory p-6 rounded-2xl flex flex-col">
                    <span className="text-3xl font-display font-bold text-ink mb-1 scale-y-[1.1] origin-bottom">04</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-ink/40">Badges Earned</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-dark text-ivory p-8 rounded-3xl relative overflow-hidden group cursor-pointer">
              <div className="absolute right-[-20%] top-[-20%] w-[80%] h-[130%] opacity-20 group-hover:opacity-40 transition-opacity">
                <img src="/images/backbend-cutout.png" alt="Yoga" className="w-full h-full object-contain" />
              </div>
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-widest text-aqua font-bold mb-6 block">Next Track Available</span>
                <h3 className="font-display font-bold text-3xl uppercase leading-[0.9] scale-y-[1.1] origin-left mb-4">
                  Yoga &<br/>Balance
                </h3>
                <p className="text-xs text-ivory/60 font-medium leading-relaxed mb-6">
                  Expand your curriculum. Enroll in the Yoga Foundation track to complement your strength training.
                </p>
                <Link to="/course" className="text-[10px] font-bold uppercase tracking-widest text-aqua hover:text-ivory transition-colors">
                  View Syllabus →
                </Link>
              </div>
            </div>

          </div>
          
        </div>
      </section>

    </div>
  )
}
