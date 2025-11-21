import { motion } from 'framer-motion'

const items = [
  { title: 'DTC Beauty', stat: '4.2x ROAS', color: 'from-pink-500/20 to-fuchsia-500/20' },
  { title: 'Fintech App', stat: '2.9x ROAS', color: 'from-cyan-500/20 to-blue-500/20' },
  { title: 'Gaming Launch', stat: '7.1M views', color: 'from-amber-500/20 to-orange-500/20' },
  { title: 'Wellness Brand', stat: '+182% CAC eff.', color: 'from-emerald-500/20 to-teal-500/20' },
  { title: 'SaaS Growth', stat: '3.4x pipeline', color: 'from-indigo-500/20 to-violet-500/20' },
  { title: 'Food & Bev', stat: '18% CTR', color: 'from-rose-500/20 to-orange-500/20' },
]

function Case({ title, stat, color, i }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`rounded-2xl border border-white/10 bg-gradient-to-br ${color} p-6`}> 
      <div className="flex items-center justify-between">
        <h3 className="text-white font-semibold">{title}</h3>
        <span className="text-xs text-blue-100/80">Case Study</span>
      </div>
      <p className="mt-10 text-3xl font-bold text-white">{stat}</p>
    </motion.div>
  )
}

function Work() {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Results we deliver</h2>
          <p className="text-blue-200/80 mt-3">Every engagement is measured against growth. Here are a few headline numbers from recent programs.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Case key={i} i={i} {...it} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
