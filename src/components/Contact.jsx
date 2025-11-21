import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Envoi...')

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Erreur serveur')
      const data = await res.json()
      setStatus(data.success ? 'Merci, nous vous contactons rapidement.' : 'Une erreur est survenue.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus("Impossible d'envoyer le formulaire. Réessayez.")
    }
  }

  return (
    <section id="contact" className="py-20 bg-emerald-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Demander une démonstration</h2>
        <p className="mt-3 text-slate-600 text-center">Dites-nous en plus sur votre besoin. Nous revenons vers vous sous 24h.</p>

        <form onSubmit={handleSubmit} className="mt-10 bg-white rounded-xl border border-slate-200 p-6 shadow-sm grid md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Raison sociale</label>
            <input name="company_name" required className="mt-1 w-full rounded-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Contact</label>
            <input name="contact_name" required className="mt-1 w-full rounded-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" name="email" required className="mt-1 w-full rounded-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Téléphone</label>
            <input name="phone" className="mt-1 w-full rounded-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Ville</label>
            <input name="city" className="mt-1 w-full rounded-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Secteur</label>
            <select name="sector" className="mt-1 w-full rounded-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500">
              <option value="">—</option>
              <option>EHPAD</option>
              <option>GMS</option>
              <option>Restauration collective</option>
              <option>Collectivités</option>
              <option>Autre</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Volume de biodéchets (kg/semaine)</label>
            <input name="waste_volume" className="mt-1 w-full rounded-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea name="message" rows="4" className="mt-1 w-full rounded-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500"></textarea>
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition">
              Envoyer ma demande
            </button>
          </div>
          {status && (
            <p className="md:col-span-2 text-center text-sm text-slate-600">{status}</p>
          )}
        </form>
      </div>
    </section>
  )
}
