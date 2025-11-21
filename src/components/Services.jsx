import { Rocket, MousePointerClick, BarChart3, Share2, Video, Megaphone } from 'lucide-react'

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-fuchsia-500/20 grid place-items-center mb-4">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <p className="text-blue-200/80 text-sm mt-2">{desc}</p>
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="text-blue-200/80 mt-3">Full-funnel growth for social brands. We blend creative, media, and analytics into one seamless motion.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard icon={Megaphone} title="Paid Social & Search" desc="High-ROAS campaigns across Meta, TikTok, YouTube, and Google." />
          <ServiceCard icon={Video} title="Content & UGC" desc="Scroll-stopping short-form content and creator partnerships." />
          <ServiceCard icon={Share2} title="Social Strategy" desc="Editorial calendars, community, and brand voice that resonates." />
          <ServiceCard icon={MousePointerClick} title="Conversion Design" desc="Landing pages and CRO experiments built for performance." />
          <ServiceCard icon={BarChart3} title="Analytics & LTV" desc="Attribution, cohorts, and dashboards that tell the full story." />
          <ServiceCard icon={Rocket} title="Launch Programs" desc="From zero to one with positioning, messaging, and GTM sprints." />
        </div>
      </div>
    </section>
  )
}

export default Services
