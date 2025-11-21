import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all ${
    scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/10' : 'bg-transparent'
  }`

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={navClasses}>
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer select-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-fuchsia-500 to-amber-400 shadow-lg shadow-blue-500/20 grid place-items-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="text-white font-semibold tracking-tight text-lg">Beta</div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <button onClick={() => scrollTo('services')} className="text-blue-100 hover:text-white transition-colors">Services</button>
          <button onClick={() => scrollTo('work')} className="text-blue-100 hover:text-white transition-colors">Work</button>
          <button onClick={() => scrollTo('contact')} className="text-blue-100 hover:text-white transition-colors">Contact</button>
          <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="px-4 py-2 rounded-full bg-white text-slate-900 font-medium hover:bg-blue-50 transition-colors">Get a Quote</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur p-4 space-y-2">
            <button onClick={() => scrollTo('services')} className="block w-full text-left text-blue-100 hover:text-white py-2">Services</button>
            <button onClick={() => scrollTo('work')} className="block w-full text-left text-blue-100 hover:text-white py-2">Work</button>
            <button onClick={() => scrollTo('contact')} className="block w-full text-left text-blue-100 hover:text-white py-2">Contact</button>
            <button onClick={() => scrollTo('contact')} className="w-full px-4 py-2 rounded-xl bg-white text-slate-900 font-medium">Get a Quote</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
