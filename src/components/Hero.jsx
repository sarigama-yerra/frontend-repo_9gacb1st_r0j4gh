import { Leaf, Phone, Building2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.15),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Leaf className="w-4 h-4" />
              Solutions locales pour vos biodéchets
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Machines de compostage pour professionnels
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Nous aidons les EHPAD, GMS, restaurations collectives et entreprises à traiter leurs biodéchets sur place, réduire les coûts et valoriser la matière organique.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition">
                <Phone className="w-5 h-5" /> Demander une démo
              </a>
              <a href="#solutions" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-emerald-700 font-semibold border border-emerald-200 hover:bg-emerald-50 transition">
                <Building2 className="w-5 h-5" /> Nos solutions
              </a>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1200&auto=format&fit=crop" alt="Compost machine" className="rounded-2xl shadow-2xl border border-slate-200" />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow p-4 border border-slate-100">
              <p className="text-sm text-slate-500">Jusqu'à</p>
              <p className="text-2xl font-bold text-slate-900">90% de réduction</p>
              <p className="text-sm text-slate-500">du volume des biodéchets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
