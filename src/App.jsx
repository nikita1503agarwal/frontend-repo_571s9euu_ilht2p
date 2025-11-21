import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <CTA />
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-blue-200/70">© 2025 Beta Digital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
