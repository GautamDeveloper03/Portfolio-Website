import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? 'bg-surface/90 shadow-sm backdrop-blur border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <button onClick={() => goTo('home')} className="focus-ring flex items-center gap-2 rounded-md">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-frontend font-display text-sm font-bold text-white shadow-md">
            GB
          </span>
          <span className="font-display text-base font-semibold text-ink">Gautam B</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => goTo(l.id)}
              className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-accentSoft hover:text-accent"
            >
              {l.label}
            </button>
          ))}
          <a
            href="mailto:simyon987@gmail.com"
            className="focus-ring ml-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
          >
            Let's talk
          </a>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="focus-ring rounded-md p-2 text-ink md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-surface px-5 py-3 md:hidden">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => goTo(l.id)}
              className="focus-ring block w-full rounded-md px-2 py-2.5 text-left text-sm font-medium text-ink hover:bg-accentSoft hover:text-accent"
            >
              {l.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
