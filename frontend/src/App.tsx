import { BrowserRouter, Routes, Route, Outlet, Link, useLocation } from 'react-router-dom'
import { Home as HomeIcon, Grid3x3, MessageCircle, Info, Phone } from 'lucide-react'

import Home from './pages/Home'
import About from './pages/About'
import Course from './pages/Course'
import Gallery from './pages/Gallery'
import Portal from './pages/Portal'
import Contact from './pages/Contact'
import { useEffect } from 'react'

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="absolute top-0 left-0 w-full z-[100] flex items-center justify-between px-6 md:px-12 pointer-events-auto transition-all duration-300 bg-transparent py-6 lg:py-8">
        <Link to="/" className="hidden lg:flex items-center gap-3 group flex-shrink-0">
          <div className="flex flex-col">
            <span className="font-display font-black text-3xl uppercase tracking-tighter text-ink leading-none">VAJRA</span>
            <span className="font-sans text-[9px] uppercase tracking-[0.25em] font-bold text-coral">Learning</span>
          </div>
        </Link>
        
        <div className="hidden lg:flex gap-12 2xl:gap-16 text-[13px] font-bold tracking-widest uppercase whitespace-nowrap flex-shrink-0 text-ink">
          <Link to="/" className="hover:text-coral transition-colors relative group py-1">
            Home
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-coral transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"></span>
          </Link>
          <Link to="/course" className="hover:text-coral transition-colors relative group py-1">
            Curriculum
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-coral transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"></span>
          </Link>
          <Link to="/portal" className="hover:text-coral transition-colors relative group py-1">
            Student Portal
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-coral transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"></span>
          </Link>
          <Link to="/about" className="hover:text-coral transition-colors relative group py-1">
            Instructors
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-coral transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"></span>
          </Link>
        </div>

        <div className="hidden lg:block flex-shrink-0">
          <Link to="/portal" className="inline-block whitespace-nowrap px-8 py-3 rounded-xl font-bold text-[13px] tracking-widest uppercase text-ivory bg-ink hover:bg-coral transition-colors shadow-lg">
            Sign In
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation Header */}
      <nav className="lg:hidden absolute top-0 left-0 w-full z-[110] flex items-center justify-between px-6 py-6 bg-transparent">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display font-black text-2xl uppercase tracking-tighter text-ink leading-[0.8]">VAJRA</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/portal" className="text-[10px] font-bold uppercase tracking-widest text-ink">Sign In</Link>
        </div>
      </nav>

      {/* Mobile Bottom Pill Navigation */}
      <div className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[120] w-[90%] max-w-[360px] bg-ink/95 backdrop-blur-xl rounded-full px-6 py-4 flex items-center justify-between shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-ivory/10">
        <Link to="/" className="flex flex-col items-center gap-1 text-ivory/60 hover:text-coral transition-colors">
          <HomeIcon className="w-5 h-5" strokeWidth={2.5} />
          <span className="text-[8px] uppercase tracking-widest font-bold">Home</span>
        </Link>
        <Link to="/course" className="flex flex-col items-center gap-1 text-ivory/60 hover:text-coral transition-colors">
          <Grid3x3 className="w-5 h-5" strokeWidth={2.5} />
          <span className="text-[8px] uppercase tracking-widest font-bold">Learn</span>
        </Link>
        <Link to="/portal" className="flex flex-col items-center gap-1 text-ivory/60 hover:text-coral transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>
          <span className="text-[8px] uppercase tracking-widest font-bold">Portal</span>
        </Link>
        <Link to="/about" className="flex flex-col items-center gap-1 text-ivory/60 hover:text-coral transition-colors">
          <Info className="w-5 h-5" strokeWidth={2.5} />
          <span className="text-[8px] uppercase tracking-widest font-bold">About</span>
        </Link>
      </div>
    </>
  )
}

const Footer = () => (
  <footer className="bg-ink text-ivory pt-20 md:pt-32 pb-32 lg:pb-12 px-6 md:px-12 lg:px-24 w-full">
    <div className="max-w-[1500px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-ivory/10 pb-16">
        <div className="max-w-md">
          <h2 className="font-display font-bold text-5xl md:text-7xl uppercase leading-[0.85] tracking-tight mb-8">BUILD<br/><span className="text-coral">YOUR CORE.</span></h2>
          <a href="tel:+919047743533" className="inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.15em] uppercase text-coral hover:text-ivory transition-colors group">
            CONTACT ACADEMY 
            <svg width="24" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M4 12h16"/><path d="m13 5 7 7-7 7"/></svg>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-12 lg:gap-24 text-sm font-medium">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-coral mb-2">Platform</span>
            <Link to="/course" className="text-ivory/60 hover:text-ivory transition-colors">Programs</Link>
            <Link to="/about" className="text-ivory/60 hover:text-ivory transition-colors">Methodology</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-coral mb-2">Connect</span>
            <Link to="/contact" className="text-ivory/60 hover:text-ivory transition-colors">Contact</Link>
            <a href="#" className="text-ivory/60 hover:text-ivory transition-colors">Instagram</a>
            <a href="#" className="text-ivory/60 hover:text-ivory transition-colors">YouTube</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-ivory/40 mt-12 font-medium">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <span className="font-display font-bold text-xl uppercase tracking-wider text-ivory">VAJRA</span>
          <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-ivory transition-colors">Privacy</a>
          <a href="#" className="hover:text-ivory transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
)

const Layout = () => (
  <div className="min-h-screen flex flex-col bg-ivory">
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="course" element={<Course />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="portal" element={<Portal />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
