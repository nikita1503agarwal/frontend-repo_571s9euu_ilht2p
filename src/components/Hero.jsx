import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="py-16">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-blue-200/80 bg-white/5 border border-white/10 rounded-full px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Digital Marketing Agency
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Grow your brand with vibrant, social-first campaigns
          </h1>
          <p className="mt-6 text-blue-100/90 text-lg max-w-xl">
            We create playful, high-converting content and paid strategies that make your product impossible to ignore.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-blue-50 transition-colors">Get a free audit</a>
            <a href="#work" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors">See our work</a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 text-left">
            <div>
              <p className="text-3xl font-bold text-white">120M+</p>
              <p className="text-blue-200/80 text-sm">Monthly impressions</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">350%</p>
              <p className="text-blue-200/80 text-sm">Avg ROAS on paid</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">80+</p>
              <p className="text-blue-200/80 text-sm">Brands scaled</p>
            </div>
          </div>
        </motion.div>
        <div className="hidden lg:block" />
      </div>
    </section>
  )
}

export default Hero
