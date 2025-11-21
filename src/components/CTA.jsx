function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(147,197,253,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 lg:p-16 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white">Let’s make something people love</h3>
              <p className="mt-3 text-blue-200/80">Tell us about your goals and we’ll share a custom growth plan within 48 hours.</p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <input placeholder="Your name" className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input placeholder="Email" type="email" className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input placeholder="Company" className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-full" />
                <textarea placeholder="What do you want to achieve?" rows={4} className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-full" />
                <button className="col-span-full inline-flex justify-center px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-blue-50 transition-colors">Request Proposal</button>
              </div>
              <p className="mt-4 text-xs text-blue-200/70">We’ll never share your info. By submitting, you agree to our privacy policy.</p>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
