import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="flex flex-col bg-ivory text-ink font-sans">
      
      {/* HERO DESKTOP */}
      <section className="relative w-full h-[100svh] min-h-[500px] flex-col justify-between overflow-hidden bg-ivory hidden md:flex">
        
        {/* Massive Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 w-full px-4 overflow-hidden">
          <h1 className="text-ink font-display font-black tracking-tighter uppercase leading-[0.85] w-full max-w-[1600px] flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center h-full w-full relative">
              <span className="text-[min(17vw,280px)] text-center scale-y-[1.1] origin-bottom">
                VAJRA<span className="text-coral">.</span>
              </span>
            </div>
          </h1>
        </div>

        {/* The Isolated Figure */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 w-[60vw] lg:w-[45vw] xl:w-[40vw] max-w-[700px] h-[73%] min-h-[400px] lg:h-[78%] lg:min-h-[500px] pointer-events-none">
          <img 
            src="/images/home_yoga-cutout.png" 
            alt="Vajra Yoga Model" 
            className="object-contain object-bottom w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]" 
          />
        </div>

        {/* Footer of Hero */}
        <div className="relative z-50 flex items-end justify-between p-12 pb-12 pointer-events-none w-full h-full mt-auto">
          <div className="block max-w-[280px] pointer-events-auto">
            <p className="text-sm font-semibold leading-relaxed text-ink">
              Yoga, Calisthenics & Silambam Academy <br />
              <span className="text-coral font-bold">— Master Murali.</span>
            </p>
          </div>
          <div className="flex pointer-events-auto">
            <Link to="/portal" className="px-9 py-4 rounded-xl font-bold text-xs tracking-widest uppercase text-ivory bg-coral shadow-[0_8px_32px_rgba(255,36,0,0.3)] hover:bg-ink transition-colors">
              Start Learning
            </Link>
          </div>
        </div>
      </section>

      {/* HERO MOBILE */}
      <div className="flex md:hidden flex-col w-full min-h-[max(100svh,620px)] relative z-20 overflow-hidden bg-ivory pb-24">
        {/* Mobile Graphic */}
        <div className="absolute right-0 top-0 bottom-0 w-full z-20 pointer-events-none overflow-hidden mix-blend-multiply opacity-10">
          <svg viewBox="0 0 390 844" className="w-full h-full absolute right-0"><polygon points="240,385 390,198 390,278 272,425 350,523 350,603 240,465 140,590 140,510 208,425" fill="#FF2400"></polygon></svg>
        </div>
        
        <div className="absolute bottom-[10%] right-[-10vw] w-[110vw] h-[65%] z-30 pointer-events-none">
          <img 
            src="/images/home_yoga-cutout.png" 
            alt="Vajra Model" 
            className="object-contain object-right-bottom w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]" 
          />
        </div>

        <div className="absolute inset-0 z-[50] flex flex-col px-6 pb-20 pointer-events-none pt-32">
          <div className="flex flex-col mt-auto pb-[60vh]">
            <h1 className="text-[clamp(65px,18vw,90px)] leading-[0.85] font-display font-black text-ink uppercase tracking-tighter mix-blend-normal z-[5] scale-y-[1.1] origin-bottom">
              VAJRA<span className="text-coral">.</span>
            </h1>
            <div className="w-[40vw] h-[1px] bg-ink/20 mt-6 mb-6"></div>
            <p className="text-[11px] font-semibold leading-[1.6] text-ink max-w-[180px] pointer-events-auto">
              Fitness, Yoga & Silambam <br/>
              <span className="text-coral font-bold">— Master Murali.</span>
            </p>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <section className="w-full bg-sand py-6 md:py-8 overflow-hidden flex group border-y border-ink/5 relative z-30">
        <div className="flex animate-marquee whitespace-nowrap items-center group-hover:[animation-play-state:paused]">
          <div className="flex items-center">
            <span className="text-ink font-bold text-sm md:text-base lg:text-lg tracking-[0.15em] uppercase mx-8 md:mx-12">YOGA & BALANCE</span>
            <span className="w-2 h-2 rotate-45 bg-coral"></span>
          </div>
          <div className="flex items-center">
            <span className="text-ink font-bold text-sm md:text-base lg:text-lg tracking-[0.15em] uppercase mx-8 md:mx-12">CALISTHENICS</span>
            <span className="w-2 h-2 rotate-45 bg-coral"></span>
          </div>
          <div className="flex items-center">
            <span className="text-ink font-bold text-sm md:text-base lg:text-lg tracking-[0.15em] uppercase mx-8 md:mx-12">TRADITIONAL SILAMBAM</span>
            <span className="w-2 h-2 rotate-45 bg-coral"></span>
          </div>
          <div className="flex items-center">
            <span className="text-ink font-bold text-sm md:text-base lg:text-lg tracking-[0.15em] uppercase mx-8 md:mx-12">FUNCTIONAL STRENGTH</span>
            <span className="w-2 h-2 rotate-45 bg-coral"></span>
          </div>
        </div>
        <div className="flex animate-marquee whitespace-nowrap items-center group-hover:[animation-play-state:paused]" aria-hidden="true">
          <div className="flex items-center">
            <span className="text-ink font-bold text-sm md:text-base lg:text-lg tracking-[0.15em] uppercase mx-8 md:mx-12">YOGA & BALANCE</span>
            <span className="w-2 h-2 rotate-45 bg-coral"></span>
          </div>
          <div className="flex items-center">
            <span className="text-ink font-bold text-sm md:text-base lg:text-lg tracking-[0.15em] uppercase mx-8 md:mx-12">CALISTHENICS</span>
            <span className="w-2 h-2 rotate-45 bg-coral"></span>
          </div>
          <div className="flex items-center">
            <span className="text-ink font-bold text-sm md:text-base lg:text-lg tracking-[0.15em] uppercase mx-8 md:mx-12">TRADITIONAL SILAMBAM</span>
            <span className="w-2 h-2 rotate-45 bg-coral"></span>
          </div>
          <div className="flex items-center">
            <span className="text-ink font-bold text-sm md:text-base lg:text-lg tracking-[0.15em] uppercase mx-8 md:mx-12">FUNCTIONAL STRENGTH</span>
            <span className="w-2 h-2 rotate-45 bg-coral"></span>
          </div>
        </div>
      </section>

      {/* 01 ABOUT SECTION */}
      <section className="bg-ink text-ivory pt-20 md:pt-32 pb-24 md:pb-32 w-full relative">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 w-full flex flex-col items-center">
          
          <div className="w-full flex flex-col md:flex-row max-w-[1300px]">
            {/* Model Side */}
            <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[600px] flex justify-center items-end bg-ivory rounded-[3rem] overflow-hidden">
               <img src="/images/hero-cutout.png" alt="Vajra Yoga Model" className="w-full h-[120%] object-cover opacity-90 drop-shadow-2xl" />
            </div>
            
            {/* Content Side */}
            <div className="w-full md:w-1/2 pt-16 md:pt-0 md:pl-16 lg:pl-24 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-coral font-black text-xs tracking-[0.2em]">01</span>
                <span className="w-12 h-[1px] bg-gradient-to-r from-coral to-transparent"></span>
                <h2 className="font-bold text-[10px] tracking-[0.2em] uppercase text-ivory/80 m-0">The Academy</h2>
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-ivory/50 mb-10 font-bold">Kumbakonam, TN</div>
              
              <p className="text-base md:text-lg font-medium leading-[1.6] max-w-sm text-ivory/90 mb-12">
                Vajra fuses ancient movement traditions with contemporary biomechanics. We curate structured programs in Yoga, Calisthenics, and Silambam for a generation that trains with intention.
              </p>
              
              <div className="text-[clamp(3.5rem,6.5vw,6rem)] font-display font-black tracking-[-0.03em] uppercase leading-[0.85] scale-y-[1.25] origin-left mb-6 text-ivory">
                BUILT<br/>FOR<br/>FOCUS<span className="text-coral">.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 02 COLLECTIONS / PROGRAMS */}
      <section className="bg-sand text-ink pt-24 md:pt-36 pb-32 w-full overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12">
          
          <div className="flex items-center gap-4 mb-16">
            <span className="text-coral font-black text-xs tracking-[0.2em]">02</span>
            <span className="w-12 h-[1px] bg-gradient-to-r from-coral to-ink/20"></span>
            <h2 className="font-bold text-[10px] tracking-[0.2em] uppercase text-ink/80 m-0">Curriculum</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Title Block */}
            <div className="md:col-span-2 relative h-[450px] md:h-[500px] flex flex-col justify-center lg:pt-10 group z-10">
              <h2 className="font-display font-bold text-[55px] md:text-[85px] uppercase tracking-[-0.02em] leading-[0.85] text-ink scale-y-[1.25] origin-left">
                <div className="block">LEARN</div>
                <div className="flex items-end">
                  <span>THE <span className="text-coral">FORM</span></span>
                  <span className="inline-block w-[14px] h-[14px] bg-coral ml-3 mb-[12px] scale-y-[0.8]"></span>
                </div>
              </h2>
              <div className="mt-16 max-w-[280px]">
                <p className="text-[13px] md:text-[15px] font-medium text-ink/90 mb-8 leading-relaxed">
                  Timeless disciplines. Modern biomechanics.<br/>Explore our curriculum.
                </p>
                <Link to="/course" className="inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.15em] uppercase text-ink group/link">
                  VIEW FULL SYLLABUS
                  <span className="text-coral transition-transform duration-300 group-hover/link:translate-x-2">
                    <svg width="24" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12h16"/><path d="m13 5 7 7-7 7"/></svg>
                  </span>
                </Link>
              </div>
            </div>

            {/* Fitness/Calisthenics Block */}
            <Link to="/course" className="block rounded-[18px] bg-ivory border border-ink/5 group transition-all duration-500 hover:shadow-xl relative h-[450px] md:h-[500px] overflow-hidden lg:col-span-2">
              <div className="absolute inset-0 pointer-events-none z-0 bg-indigo-dark/5">
                <img src="/images/home_calisthenics-cutout.png" alt="Fitness" className="absolute transition-transform duration-700 ease-out group-hover:scale-[1.03] w-full h-[110%] object-contain object-right-bottom bottom-0 right-[-10%] opacity-90 drop-shadow-xl" />
              </div>
              <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-ivory via-ivory/80 to-transparent w-[70%] z-[5]"></div>
              
              <div className="relative z-10 p-8 flex flex-col h-full items-start text-left">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-coral font-display text-2xl font-bold tracking-wide">01</span>
                  <div className="h-[1px] w-10 bg-ink/30"></div>
                </div>
                <h3 className="font-display font-bold text-[55px] lg:text-[65px] uppercase leading-[0.85] tracking-[-0.02em] mb-3 group-hover:scale-[1.01] transition-transform duration-500 origin-left scale-y-[1.25] text-ink">
                  CALISTHENICS
                </h3>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase mt-4 text-ink/70">
                  STRENGTH • ATHLETIC • FUNCTIONAL
                </p>
                <div className="mt-auto">
                  <div className="inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.15em] uppercase text-ink group/link">
                    ENROLL IN MODULE
                    <span className="text-coral transition-transform duration-300 group-hover/link:translate-x-2">
                      <svg width="24" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12h16"/><path d="m13 5 7 7-7 7"/></svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

    </div>
  )
}
