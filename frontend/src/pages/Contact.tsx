import { useState } from 'react'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', course: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="min-h-screen font-sans flex flex-col bg-ivory text-ink">
      
      <section className="bg-ivory text-ink pt-48 pb-24 px-6 md:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 max-w-[1600px] mx-auto">
          
          {/* Left Column: Form & Info */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-coral font-black text-xs tracking-[0.2em]">01</span>
              <span className="w-12 h-[1px] bg-gradient-to-r from-coral to-ink/20"></span>
              <h2 className="font-bold text-[10px] tracking-[0.2em] uppercase text-ink/80 m-0">Connect</h2>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display leading-[1.15] tracking-tighter scale-y-[1.25] origin-left mb-12 uppercase font-bold text-ink">
              START<br/>YOUR<br/><span className="text-coral">TRAINING.</span>
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-md">
              <div className="relative border-b border-ink/20 focus-within:border-coral transition-colors pb-2">
                <input 
                  type="text" 
                  placeholder="FULL NAME" 
                  className="w-full bg-transparent outline-none text-sm font-bold uppercase tracking-widest placeholder:text-ink/30"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="relative border-b border-ink/20 focus-within:border-coral transition-colors pb-2">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-transparent outline-none text-sm font-bold uppercase tracking-widest placeholder:text-ink/30"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="relative border-b border-ink/20 focus-within:border-coral transition-colors pb-2">
                <select 
                  className="w-full bg-transparent outline-none text-sm font-bold uppercase tracking-widest text-ink/80"
                  value={formData.course}
                  onChange={e => setFormData({...formData, course: e.target.value})}
                  required
                >
                  <option value="" disabled>SELECT MODULE</option>
                  <option value="yoga">Yoga Foundation</option>
                  <option value="calisthenics">Functional Calisthenics</option>
                  <option value="silambam">Silambam Mastery</option>
                </select>
              </div>
              
              <button type="submit" className="mt-8 flex items-center justify-center gap-4 bg-ink text-ivory py-5 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-coral transition-colors">
                SUBMIT APPLICATION <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-16 flex flex-col gap-6 pt-16 border-t border-ink/10">
              <div className="flex items-center gap-6 text-sm font-bold tracking-widest uppercase text-ink/70">
                <Mail className="w-5 h-5 text-coral" /> admissions@vajrafitness.com
              </div>
              <div className="flex items-center gap-6 text-sm font-bold tracking-widest uppercase text-ink/70">
                <Phone className="w-5 h-5 text-coral" /> +91 90477 43533
              </div>
            </div>
          </div>

          {/* Right Column: Imagery */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative w-full h-[600px] md:h-[800px] bg-sand rounded-[3rem] overflow-hidden flex items-center justify-center">
              {/* Marquee Background */}
              <div className="absolute inset-0 flex flex-col justify-center gap-12 opacity-5 pointer-events-none -rotate-12 scale-150">
                <div className="font-display text-[150px] font-black uppercase whitespace-nowrap">DISCIPLINE FOCUS MASTERY</div>
                <div className="font-display text-[150px] font-black uppercase whitespace-nowrap -ml-48">DISCIPLINE FOCUS MASTERY</div>
              </div>

              {/* The new meditation cutout */}
              <img 
                src="/images/meditation-cutout.png" 
                alt="Meditation" 
                className="w-[110%] h-[110%] object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)] relative z-10 scale-110" 
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
