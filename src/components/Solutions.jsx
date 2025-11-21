import { Recycling, Factory, Building2, UtensilsCrossed } from 'lucide-react'

const cards = [
  {
    icon: Recycling,
    title: "GMS & Supermarchés",
    text: "Réduisez les coûts de collecte et traitez les invendus alimentaires sur place.",
  },
  {
    icon: Building2,
    title: "EHPAD & Santé",
    text: "Améliorez l'hygiène et la gestion des déchets organiques avec une solution simple et sûre.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restauration collective",
    text: "Valorisez les restes alimentaires et diminuez la fréquence des enlèvements.",
  },
  {
    icon: Factory,
    title: "Industries & Sites tertiaires",
    text: "Traitez les volumes importants avec des équipements robustes et modulaires.",
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Des solutions adaptées à votre activité</h2>
        <p className="mt-3 text-slate-600 text-center max-w-3xl mx-auto">Nos machines de compostage transforment vos biodéchets en compost stabilisé, directement sur votre site.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
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
