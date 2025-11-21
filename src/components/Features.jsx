import { Gauge, ShieldCheck, Leaf, Wrench } from 'lucide-react'

const features = [
  { icon: Gauge, title: 'Performance élevée', text: 'Réduction de volume jusqu\'à 90% et cycles accélérés.' },
  { icon: ShieldCheck, title: 'Hygiène & sécurité', text: 'Caisson fermé, filtration des odeurs, conformité réglementaire.' },
  { icon: Wrench, title: 'Installation & maintenance', text: 'Mise en service rapide et contrat de maintenance sur mesure.' },
  { icon: Leaf, title: 'Impact positif', text: 'Compost valorisable pour les espaces verts ou partenaires locaux.' },
]

export default function Features() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Pourquoi nous choisir</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <Icon className="w-8 h-8 text-emerald-600" />
              <h3 className="mt-4 font-semibold text-lg text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
