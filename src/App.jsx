import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Features from './components/Features'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-extrabold text-slate-900">
            <img src="/flame-icon.svg" alt="logo" className="w-8 h-8" /> CompostPro
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#solutions" className="hover:text-emerald-700">Solutions</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">Demander une démo</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Solutions />
        <Features />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} CompostPro — Traitement local des biodéchets
      </footer>
    </div>
  )
}

export default App
